/* eslint-disable no-unused-vars */
import Users from "../models/Users.js";
import Roles from "../models/Roles.js";
import argon2 from "argon2";
import path from "path";
import fs from "fs";
import moment from "moment";
export const getAllUser = async (req, res) => {
  await Users.findAll({
    include: [
      {
        model: Roles,
        attributes: ["nama"],
      },
    ],
  })
    .then((data) => {
      return res
        .status(200)
        .json({ userData: data, repsonse: 200, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
export const getUserById = async (req, res) => {
  await Users.findOne({
    where: {
      uuid: req.params.nis,
    },
    include: [
      {
        model: Roles,
        attributes: ["nama"],
      },
    ],
  })
    .then((data) => {
      if (data === null || data === undefined) {
        return res
          .status(404)
          .json({ userData: data, repsonse: 404, message: "data not found" });
      }
      return res
        .status(200)
        .json({ userData: data, repsonse: 200, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
export const createUser = async (req, res) => {
  const emailUser = await Users.findOne({
    where: {
      email: req.body.email,
    },
  });

  const roleUser =
    req.body.roleId !== undefined
      ? await Roles.findOne({
          where: {
            id: req.body.roleId,
          },
        })
      : await Roles.findOne({
          where: {
            nama: "siswa",
          },
        });
  if (emailUser)
    return res
      .status(400)
      .json({ response: 400, message: "Email telah sudah terdaftar" });

  if (req.body.password !== req.body.confirmPassword)
    return res.status(400).json({
      response: 400,
      message: "Password dan confirm password tidak sama!",
    });
  const hashPassword = await argon2.hash(req.body.password);
  await Users.create({
    nama: req.body.name,
    email: req.body.email,
    password: hashPassword,
    roleId: roleUser.dataValues.id,
  })
    .then((data) => {
      res
        .status(201)
        .json({ response: 201, data, message: "User baru ditambahkan" });
    })
    .catch((err) => {
      res.status(500).json({ response: 500, message: err });
    });
};
export const updateUser = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.nis,
    },
    include: [
      {
        model: Roles,
      },
    ],
  });
  if (user === null || user === undefined)
    return res
      .status(404)
      .json({ userData: user, repsonse: 404, message: "data not found" });
  const emailUser = req.body.email
    ? await Users.findOne({
        where: {
          email: req.body.email,
        },
      })
    : null;
  const username = req.body.username
    ? await Users.findOne({
        where: {
          username: req.body.username,
        },
      })
    : null;
  const noHp = req.body.noHp
    ? await Users.findOne({
        where: {
          no_hp: req.body.noHp,
        },
      })
    : null;
  if (username && user.dataValues.uuid !== req.params.nis)
    return res
      .status(400)
      .json({ response: 400, message: "Username sudah digunakan" });
  if (noHp && user.dataValues.uuid !== req.params.nis)
    return res
      .status(400)
      .json({ response: 400, message: "No hp sudah digunakan" });
  if (emailUser && user.dataValues.uuid !== req.params.nis)
    return res
      .status(400)
      .json({ response: 400, message: "Email telah sudah terdaftar" });

  let hashPassword;
  if (req.body.password === null || !req.body.password) {
    hashPassword = req.body.password;
  } else {
    if (req.body.password !== req.body.confirmPassword)
      return res.status(400).json({
        response: 400,
        message: "Password dan confirm password tidak sama!",
      });
    hashPassword = await argon2.hash(req.body.password, 10);
  }
  // Global variable
  let photoProfile = null;
  let sertifikatKonsultan = null;

  if (req.files) {
    photoProfile = req.files.photoProfile ? req.files.photoProfile : null;
    sertifikatKonsultan = req.files.sertifikatKonsultan
      ? req.files.sertifikatKonsultan
      : null;
  }
  let sertifikatKonsultanFile = null;
  let urlSertifikatKonsultan = null;
  const allowedType = [".jpeg", ".jpg", ".png"];
  // Konsultan file
  if (sertifikatKonsultan !== null) {
    if (user.role.nama === "konsultan") {
      const fileSizeKonsul = req.files.sertifikatKonsultan.data.length;
      const extKonsul = path.extname(req.files.sertifikatKonsultan.name);
      if (!allowedType.includes(extKonsul.toLowerCase()))
        return res.status(400).json({
          response: 400,
          message: "Tipe file sertifikat konsultan tidak sesuai",
        });
      if (fileSizeKonsul > 100000000)
        return res.status(400).json({
          response: 400,
          message: "Ukuran file sertifikat konsultan terlalu besar",
        });
      const name =
        user.username === null || !user.username ? user.nama : user.username;
      sertifikatKonsultanFile =
        name.replace(/ /g, "_") +
        "-" +
        req.files.sertifikatKonsultan.md5 +
        extKonsul;
      urlSertifikatKonsultan = `${req.protocol}://${req.get(
        "host"
      )}/images/serti_konsultan/${sertifikatKonsultanFile}`;
      if (
        fs.existsSync(`./public/images/serti_konsultan/${user.serti_konsultan}`)
      )
        fs.unlinkSync(
          `./public/images/serti_konsultan/${user.serti_konsultan}`
        );
      sertifikatKonsultan.mv(
        `./public/images/serti_konsultan/${sertifikatKonsultanFile}`,
        async (err) => {
          if (err)
            return res
              .status(500)
              .json({ response: 500, message: err.message });
        }
      );
    }
  }

  let fileSize;
  let ext;
  let photoProfileFile;
  let urlProfile;

  if (photoProfile !== null) {
    fileSize = photoProfile.data.length;
    ext = path.extname(photoProfile.name);
    const name =
      user.username === null || !user.username ? user.nama : user.username;
    photoProfileFile = name.replace(/ /g, "_") + "-" + photoProfile.md5 + ext;
    urlProfile = `${req.protocol}://${req.get(
      "host"
    )}/images/photo_profile/${photoProfileFile}`;
    if (!allowedType.includes(ext.toLowerCase()))
      return res
        .status(400)
        .json({ response: 400, message: "Tipe file tidak sesuai" });
    if (fileSize > 10000000)
      return res
        .status(400)
        .json({ response: 400, message: "Ukuran file terlalu besar" });

    if (fs.existsSync(`./public/images/photo_profile/${user.photo_profile}`))
      fs.unlinkSync(`./public/images/photo_profile/${user.photo_profile}`);

    photoProfile.mv(
      `./public/images/photo_profile/${photoProfileFile}`,
      async (err) => {
        if (err)
          return res.status(500).json({ response: 500, message: err.message });
      }
    );
  }

  await Users.update(
    {
      nama: req.body.name,
      email: req.body.email,
      materiId: req.body.materiId,
      no_hp: req.body.noHp,
      username: req.body.username,
      tempat_lahir: req.body.tempatLahir,
      tanggal_lahir: req.body.tglLahir ? moment(req.body.tglLahir) : null,
      jenis_kelamin: req.body.jenisKelamin,
      domisili_sekarang: req.body.domisiliSekarang,
      pendidikan_terakhir: req.body.pendidikanTerakhir,
      pekerjaan:
        req.body.pekerjaan === null || !req.body.pekerjaan
          ? "pelajar"
          : req.body.pekerjaan,
      perusahaan_bekerja: req.body.perusahaanBekerja,
      url_serti_konsultan: urlSertifikatKonsultan,
      serti_konsultan: sertifikatKonsultanFile,
      url_photo_profile: urlProfile,
      photo_profile: photoProfileFile,
      password: hashPassword,
    },
    {
      where: {
        uuid: user.uuid,
      },
    }
  )
    .then(() => {
      return res.status(200).json({ response: 200, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ response: 500, message: err.message });
    });
};
export const deleteUser = async (req, res) => {
  const user = await Users.findOne({
    where: {
      uuid: req.params.nis,
    },
    include: [
      {
        model: Roles,
      },
    ],
  });
  if (!user)
    return res
      .status(404)
      .json({ response: 404, message: "Data tidak ditemukan" });

  if (user.role.nama === "konsultan") {
    fs.unlinkSync(`./public/images/serti_konsultan/${user.serti_konsultan}`);
  }
  fs.unlinkSync(`./public/images/photo_profile/${user.photo_profile}`);
  await Users.destroy({
    where: {
      uuid: user.uuid,
    },
  })
    .then(() => {
      return res
        .status(200)
        .json({ response: 200, message: "Data deleted successfully" });
    })
    .catch((err) => {
      return res.status(500).json({ response: 500, message: err.message });
    });
};

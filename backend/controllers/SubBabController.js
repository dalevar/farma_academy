/* eslint-disable no-unused-vars */
import SubBab from "../models/SubBab.js";
import BabModule from "../models/BabModule.js";
import Module from "../models/Module.js";
import fs from "fs";
import path from "path";
export const getAllSubBab = async (req, res) => {
  await SubBab.findAll({
    include: {
      model: BabModule,
      include: {
        model: Module,
      },
    },
  })
    .then((subbab) => {
      res.status(200).json({ status: 200, data: subbab, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
export const getSubBabById = async (req, res) => {
  await SubBab.findByPk(req.params.id, {
    include: {
      model: BabModule,
      include: {
        model: Module,
      },
    },
  })
    .then((subbab) => {
      res.status(200).json({ status: 200, data: subbab, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
export const createSubBab = async (req, res) => {
  if (req.files === null || !req.files)
    return res
      .status(400)
      .json({ response: 400, message: "Gambar tidak ditemukan" });

  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const subBabFoto =
    req.body.namaSubbab.replace(/ /g, "_") + "-" + file.md5 + ext;
  const urlSubBab = `${req.protocol}://${req.get(
    "host"
  )}/images/gambar_subbab/${subBabFoto}`;
  const allowedType = [".jpeg", ".jpg", ".png"];
  if (fileSize > 10000000)
    return res
      .status(400)
      .json({ response: 400, message: "Ukuran foto terlalu besar" });
  if (!allowedType.includes(ext.toLowerCase()))
    return res
      .status(400)
      .json({ response: 400, message: "Tipe file tidak sesuai" });

  file.mv(`./public/images/gambar_subbab/${subBabFoto}`, async (err) => {
    if (err) return res.status(500).json({ response: 500, message: err });
    await SubBab.create({
      babId: req.body.babId,
      nama_subbab: req.body.namaSubbab,
      is_gratis:
        req.body.isGratis === null || !req.body.isGratis ? false : true,
      foto_url: urlSubBab,
      foto: subBabFoto,
    })
      .then((data) => {
        res
          .status(201)
          .json({ response: 201, data, message: "Subbab baru ditambahkan" });
      })
      .catch((err) => {
        res.status(500).json({ response: 500, message: err.message });
      });
  });
};
export const updateSubBab = async (req, res) => {
  const subBab = await SubBab.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: BabModule,
    },
  });
  if (subBab === null || !subBab)
    return res
      .status(404)
      .json({ response: 404, message: "Subbab tidak ditemukan" });
  let file;
  let subBabFoto;
  let urlSubBab;
  if (req.files) {
    file = req.files.foto;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    const subBabFoto =
      req.body.namaSubbab.replace(/ /g, "_") + "-" + file.md5 + ext;
    urlSubBab = `${req.protocol}://${req.get(
      "host"
    )}/images/gambar_subbab/${subBabFoto}`;
    const allowedType = [".jpeg", ".jpg", ".png"];
    if (fileSize > 10000000)
      return res
        .status(400)
        .json({ response: 400, message: "Ukuran foto terlalu besar" });
    if (!allowedType.includes(ext.toLowerCase()))
      return res
        .status(400)
        .json({ response: 400, message: "Tipe file tidak sesuai" });
    fs.unlinkSync(`./public/images/gambar_subbab/${subBab.foto}`);
    file.mv(`./public/images/gambar_subbab/${subBabFoto}`, async (err) => {
      if (err) return res.status(500).json({ response: 500, message: err });
    });
  } else {
    file = subBab.foto;
    subBabFoto = subBab.foto;
    urlSubBab = subBab.url;
  }

  await SubBab.update(
    {
      babId: req.body.babId,
      nama_subbab: req.body.namaSubbab,
      is_gratis:
        req.body.isGratis === null || !req.body.isGratis ? false : true,
      foto_url: urlSubBab,
      foto: subBabFoto,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({ response: 200, message: "Subbab diperbarui" });
    })
    .catch((err) => {
      res.status(500).json({ response: 500, message: err.message });
    });
};
export const deleteSubBab = async (req, res) => {
  const subBab = await SubBab.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (subBab === null || !subBab)
    return res
      .status(404)
      .json({ response: 404, message: "Subbab tidak ditemukan" });
  fs.unlinkSync(`./public/images/gambar_subbab/${subBab.foto}`);
  await SubBab.destroy({
    where: {
      id: req.params.id,
    },
  });
};

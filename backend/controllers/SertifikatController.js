import SertifikatUser from "../models/SertifikatUser.js";
import Users from "../models/Users.js";
import Module from "../models/Module.js";
import fs from "fs";
import path from "path";
export const getAllSertifikat = async (req, res) => {
  await SertifikatUser.findAll({
    include: [
      {
        model: Users,
      },
      {
        model: Module,
      },
    ],
  })
    .then((data) => {
      res.status(200).json({ status: 200, data: data, message: "Success" });
    })
    .catch((data) => {
      res.status(500).json({ status: 500, message: data.message });
    });
};
export const getSertifikatById = async (req, res) => {
  await SertifikatUser.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Users,
      },
      {
        model: Module,
      },
    ],
  })
    .then((data) => {
      if (!data || data === null)
        return res.status(404).json({ status: 404, message: "data not found" });
      res.status(200).json({ status: 200, data: data, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.message });
    });
};
export const createSertifikat = async (req, res) => {
  if (!req.files || !req.files === null)
    return res.status(400).json({ status: 400, message: "file not found" });

  const user = await Users.findOne({
    where: {
      id: req.body.userId,
    },
  });

  let file = req.files.gamabarSerti;
  const ext = path.extname(file.name);
  const fileData = user.email.replace(/ /g, "_") + "-" + file.md5 + ext;
  const urlGambar = `${req.protocol}://${req.get(
    "host"
  )}/images/sertifikat_user/${fileData}`;
  const allowedType = [".exe", ".c", ".js", ""];

  if (allowedType.includes(ext.toLowerCase()))
    return res
      .status(400)
      .json({ status: 400, message: "Tipe file tidak sesuai" });

  file.mv(`./public/images/sertifikat_user/${fileData}`, async (err) => {
    if (err) return res.status(500).json({ status: 500, message: err.message });

    await SertifikatUser.create({
      userId: req.body.userId,
      moduleId: req.body.moduleId,
      gamabar_serti: fileData,
      url_gambar: urlGambar,
    });
  });
};
export const deleteSertifikat = async (req, res) => {
  await SertifikatUser.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(async (data) => {
      if (!data || data === null)
        return res.status(404).json({ status: 404, message: "data not found" });

      fs.unlinkSync(`./public/images/sertifikat_user/${data.gamabar_serti}`);
      await SertifikatUser.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then(() => {
          res
            .status(200)
            .json({ status: 200, message: "data success deleted" });
        })
        .catch((err) => {
          res.status(500).json({ status: 500, message: err.message });
        });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.message });
    });
};

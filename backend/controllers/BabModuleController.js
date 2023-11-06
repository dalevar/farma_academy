/* eslint-disable no-unused-vars */
import Module from "../models/Module.js";
import BabModule from "../models/BabModule.js";
import path from "path";
import fs from "fs";

export const getAllBabModule = async (req, res) => {
  await BabModule.findAll({
    include: Module,
  })
    .then((bab) => {
      res.status(200).json({ status: 200, data: bab, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
export const getBabModuleById = async (req, res) => {
  await BabModule.findByPk(req.params.id, { include: Module })
    .then((bab) => {
      res.status(200).json({ status: 200, data: bab, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
export const createBabModule = async (req, res) => {
  if (req.files === null || !req.files)
    return res
      .status(400)
      .json({ response: 400, message: "Gambar tidak ditemukan" });

  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const babModuleFoto =
    req.body.nomorBab.replace(/ /g, "_") + "-" + file.md5 + ext;
  const urlBab = `${req.protocol}://${req.get(
    "host"
  )}/images/gambar_babModule/${babModuleFoto}`;
  const allowedType = [".jpeg", ".jpg", ".png"];
  if (fileSize > 10000000)
    return res
      .status(400)
      .json({ response: 400, message: "Ukuran foto terlalu besar" });
  if (!allowedType.includes(ext.toLowerCase()))
    return res
      .status(400)
      .json({ response: 400, message: "Tipe file tidak sesuai" });

  file.mv(`./public/images/gambar_bab/${babModuleFoto}`, async (err) => {
    if (err) return res.status(500).json({ response: 500, message: err });
    await BabModule.create({
      moduleId: Number(req.body.moduleId),
      nomorBab: Number(req.body.nomorBab),
      pengatar_bab: req.body.pengantarBab,
      foto: babModuleFoto,
      foto_url: urlBab,
    })
      .then((data) => {
        res
          .status(201)
          .json({ response: 201, data, message: "BAB baru ditambahkan" });
      })
      .catch((err) => {
        res.status(500).json({ response: 500, message: err.message });
      });
  });
};
export const updateBabModule = async (req, res) => {
  const babModule = await BabModule.findOne({
    where: {
      id: req.params.id,
    },
    include: {
      model: Module,
    },
  });
  if (babModule === null || !babModule)
    return res
      .status(404)
      .json({ response: 404, message: "Bab Module tidak ditemukan" });

  let file;
  let babModuleFoto;
  let urlBab;
  if (req.files) {
    file = req.files.foto;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    babModuleFoto = req.body.nomorBab.replace(/ /g, "_") + "-" + file.md5 + ext;
    urlBab = `${req.protocol}://${req.get(
      "host"
    )}/images/gambar_babModule/${babModuleFoto}`;
    const allowedType = [".jpeg", ".jpg", ".png"];
    if (fileSize > 10000000)
      return res
        .status(400)
        .json({ response: 400, message: "Ukuran foto terlalu besar" });
    if (!allowedType.includes(ext.toLowerCase()))
      return res
        .status(400)
        .json({ response: 400, message: "Tipe file tidak sesuai" });
    fs.unlinkSync(`./public/images/gambar_bab/${babModule.foto}`);
    file.mv(`./public/images/gambar_bab/${babModuleFoto}`, async (err) => {
      if (err) return res.status(500).json({ response: 500, message: err });
    });
  } else {
    file = babModule.foto;
    babModuleFoto = babModule.foto;
    urlBab = babModule.url;
  }
  await BabModule.update(
    {
      moduleId: req.body.moduleId,
      nomorBab: req.body.nomorBab,
      pengatar_bab: req.body.pengantarBab,
      foto: babModuleFoto,
      foto_url: urlBab,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((data) => {
      res
        .status(201)
        .json({ response: 201, data, message: "Bab module berhasil diupdate" });
    })
    .catch((err) => {
      res.status(500).json({ response: 500, message: err });
    });
};
export const deleteBabModule = async (req, res) => {
  const babModule = await BabModule.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (babModule === null || !babModule)
    return res
      .status(404)
      .json({ response: 404, message: "Bab Module tidak ditemukan" });
  fs.unlinkSync(`./public/images/gambar_bab/${babModule.foto}`);
  await babModule.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    return res.status(200).json({ response: 200, message: "Success" });
  }).catch(() => {
    return res.status(500).json({ response: 500, message: "Failed" });
  });
};

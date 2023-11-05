/* eslint-disable no-unused-vars */
import Module from "../models/Module.js";
import BabModule from "../models/BabModule.js";
import path from "path";
import fs from "fs";

export const getAllBabModule = async (req, res) => {
  await BabModule.findAll({ include: Module })
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

  file
    .mv(`./public/images/gambar_babModule/${babModuleFoto}`, async (err) => {
      if (err) return res.status(500).json({ response: 500, message: err });
      await Module.create({
        moduleId: req.body.moduleId,
        nomorBab: req.body.nomorBab,
        pengantarBab: req.body.pengantarBab,
        foto: babModuleFoto,
        url: urlBab,
      }).then((data) => {
        res
          .status(201)
          .json({ response: 201, data, message: "Module baru ditambahkan" });
      });
    })
    .catch((err) => {
      res.status(500).json({ response: 500, message: err });
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
  if (req.files) {
    file = req.files.foto;
  } else {
    file = babModule.foto;
  }

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

  file
    .mv(`./public/images/gambar_babModule/${babModuleFoto}`, async (err) => {
      if (err) return res.status(500).json({ response: 500, message: err });
      await Module.create({
        moduleId: req.body.moduleId,
        nomorBab: req.body.nomorBab,
        pengantarBab: req.body.pengantarBab,
        foto: babModuleFoto,
        url: urlBab,
      }).then((data) => {
        res
          .status(201)
          .json({ response: 201, data, message: "Module baru ditambahkan" });
      });
    })
    .catch((err) => {
      res.status(500).json({ response: 500, message: err });
    });
};
export const deleteBabModule = async (req, res) => {};

/* eslint-disable no-unused-vars */
import SubBab from "../models/SubBab.js";
import BabModule from "../models/BabModule.js";
import fs from "fs";
import path from "path";
export const getAllSubBab = async (req, res) => {
  await SubBab.findAll({ include: BabModule })
    .then((subbab) => {
      res.status(200).json({ status: 200, data: subbab, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
export const getSubBabById = async (req, res) => {
  await SubBab.findByPk(req.params.id, { include: BabModule })
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
  const urlProfile = `${req.protocol}://${req.get(
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
      foto_url: urlProfile,
      foto: subBabFoto,
    })
      .then((err) => {
        res
          .status(201)
          .json({ response: 201, message: "Subbab baru ditambahkan" });
      })
      .catch((err) => {
        res.status(500).json({ response: 500, message: err });
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
  if (req.files === null || !req.files)
    return res
      .status(400)
      .json({ response: 400, message: "Gambar tidak ditemukan" });

  let file;
  if (req.files) {
    const file = req.files.foto;
  }else{
    file = subBab.foto
  }
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const subBabFoto =
    req.body.namaSubbab.replace(/ /g, "_") + "-" + file.md5 + ext;
  const urlProfile = `${req.protocol}://${req.get(
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
    await SubBab.create({
      babId: req.body.babId,
      nama_subbab: req.body.namaSubbab,
      is_gratis:
        req.body.isGratis === null || !req.body.isGratis ? false : true,
      foto_url: urlProfile,
      foto: subBabFoto,
    });
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

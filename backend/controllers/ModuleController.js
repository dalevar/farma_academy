import Module from "../models/Module.js";
import fs from "fs";
import path from "path";
export const getAllModule = async (req, res) => {
  await Module.findAll()
    .then((data) => {
      res.status(200).json({ status: 200, data: data, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
export const getModuleById = async (req, res) => {
  await Module.findByPk(req.params.id)
    .then((data) => {
      res.status(200).json({ status: 200, data: data, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err });
    });
};
export const createModule = async (req, res) => {
  if (req.files === null || !req.files)
    return res
      .status(400)
      .json({ response: 400, message: "Gambar tidak ditemukan" });

  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const moduleFoto =
    req.body.namaModule.replace(/ /g, "_") + "-" + file.md5 + ext;
  const urlModule = `${req.protocol}://${req.get(
    "host"
  )}/images/gambar_module/${moduleFoto}`;
  const allowedType = [".jpeg", ".jpg", ".png"];
  if (fileSize > 10000000)
    return res
      .status(400)
      .json({ response: 400, message: "Ukuran foto terlalu besar" });
  if (!allowedType.includes(ext.toLowerCase()))
    return res
      .status(400)
      .json({ response: 400, message: "Tipe file tidak sesuai" });

  file.mv(`./public/images/gambar_module/${moduleFoto}`, async (err) => {
    if (err) return res.status(500).json({ response: 500, message: err });
    await Module.create({
      nama_module: req.body.namaModule,
      penjelasan_materi: req.body.penjelasanMateri,
      category: req.body.category,
      foto_url: urlModule,
      foto: moduleFoto,
    })
      .then((data) => {
        res
          .status(201)
          .json({ response: 201, data, message: "Module baru ditambahkan" });
      })
      .catch((err) => {
        res.status(500).json({ response: 500, message: err });
      });
  });
};
export const updateModule = async (req, res) => {
  const moduleData = await Module.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (moduleData === null || !moduleData)
    return res
      .status(404)
      .json({ response: 404, message: "Module tidak ditemukan" });

  let file;
  let urlModule;
  let moduleFoto;
  if (req.files) {
    file = req.files.foto;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    moduleFoto = req.body.namaModule.replace(/ /g, "_") + "-" + file.md5 + ext;
    urlModule = `${req.protocol}://${req.get(
      "host"
    )}/images/gambar_module/${moduleFoto}`;
    const allowedType = [".jpeg", ".jpg", ".png"];
    if (fileSize > 10000000)
      return res
        .status(400)
        .json({ response: 400, message: "Ukuran foto terlalu besar" });
    if (!allowedType.includes(ext.toLowerCase()))
      return res
        .status(400)
        .json({ response: 400, message: "Tipe file tidak sesuai" });
  } else {
    file = null;
    urlModule = moduleData.foto_url;
    moduleFoto = moduleData.foto;
  }
  if (req.files) {
    fs.unlinkSync(`./public/images/gambar_module/${moduleData.foto}`);
    file.mv(`./public/images/gambar_module/${moduleFoto}`, async (err) => {
      if (err) return res.status(500).json({ response: 500, message: err });
    });
  }
  await Module.update(
    {
      nama_module: req.body.namaModule,
      penjelasan_materi: req.body.penjelasanMateri,
      category: req.body.category,
      foto_url: urlModule,
      foto: moduleFoto,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() => {
      res.status(200).json({ response: 200, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ response: 500, message: err.message });
    });
};
// eslint-disable-next-line no-unused-vars
export const deleteModule = async (req, res) => {
  const moduleData = await Module.findOne({
    where: {
      id: req.params.id,
    },
  });
  if (moduleData === null || !moduleData)
    return res
      .status(404)
      .json({ response: 404, message: "module tidak ditemukan" });
  fs.unlinkSync(`./public/images/gambar_module/${moduleData.foto}`);
  await moduleData
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then(() => {
      res.status(200).json({ response: 200, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ response: 500, message: err.message });
    });
};

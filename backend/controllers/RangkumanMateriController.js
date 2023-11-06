import RangkumanMateri from "../models/RangkumanMateri.js";
import path from "path";
import fs from "fs";
export const getAllRangkumanMateri = async (req, res) => {
  await RangkumanMateri.findAll({
    where: {
      moduleId: req.params.moduleId,
    },
  })
    .then((data) => {
      res.status(200).json({ status: 200, data: data, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.message });
    });
};
export const getRangkumanMateriById = async (req, res) => {
  await RangkumanMateri.findOne({
    where: {
      moduleId: req.params.moduleId,
    },
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
export const createRangkumanMateri = async (req, res) => {
  if (req.files === null || !req.files)
    return res.status(400).json({ status: 400, message: "file not found" });
  const file = req.files.file;
  const ext = path.extname(file.name);
  const fileName =
    req.body.namaRangkuman.replace(/ /g, "_") + "-" + file.md5 + ext;
  const urlFile = `${req.protocol}://${req.get(
    "host"
  )}/images/rangkuman_materi/${fileName}`;
  const notAllowedType = [".exe", ".c", ".js", ""];
  if (notAllowedType.includes(ext.toLowerCase()))
    return res
      .status(400)
      .json({ status: 400, message: "Tipe file tidak sesuai" });
  file.mv(`./public/images/rangkuman_materi/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ status: 500, message: err.message });
    await RangkumanMateri.create({
      moduleId: req.body.moduleId,
      nama_rangkuman: req.body.namaRangkuman,
      url_file: urlFile,
      file: fileName,
    })
      .then(() => {
        res.status(200).json({ status: 200, message: "Success" });
      })
      .catch((err) => {
        res.status(500).json({ status: 500, message: err.message });
      });
  });
};
export const updateRangkumanMateri = async (req, res) => {
  await RangkumanMateri.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data || data === null)
        return res.status(404).json({ status: 404, message: "data not found" });

      let file = null;
      let fileName = null;
      let urlFile = null;
      if (req.files) {
        file = req.files.file;
        const ext = path.extname(file.name);
        fileName = req.body.title.replace(/ /g, "_") + "-" + file.md5 + ext;
        urlFile = `${req.protocol}://${req.get(
          "host"
        )}/images/rangkuman_materi/${fileName}`;
        const notAllowedType = [".exe", ".c", ".js", ""];
        if (notAllowedType.includes(ext.toLowerCase()))
          return res
            .status(400)
            .json({ status: 400, message: "Tipe file tidak sesuai" });
        fs.unlinkSync(`./public/images/rangkuman_materi/${data.file}`);
        file.mv(`./publiv/images/rangkuman_materi/${fileName}`, async (err) => {
          if (err)
            return res.status(500).json({ status: 500, message: err.message });
        });
      } else {
        fileName = data.file;
        urlFile = data.url_file;
      }

      RangkumanMateri.update(
        {
          moduleId: req.body.moduleId,
          nama_rangkuman: req.body.namaRangkuman,
          url_file: urlFile,
          file: fileName,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.message });
    });
};
export const deleteRangkumanMateri = async (req, res) => {
  await RangkumanMateri.findOne({
    where: {
      id: req.params.id,
    },
  }).then((data) => {
    if (!data || data === null)
      return res.status(404).json({ status: 404, message: "data not found" });
    fs.unlinkSync(`./public/images/rangkuman_materi/${data.file}`);
    RangkumanMateri.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then(() => {
        res.status(200).json({ status: 200, message: "data success deleted" });
      })
      .catch((err) => {
        res.status(500).json({ status: 500, message: err.message });
      });
  });
};
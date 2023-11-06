import AlatPraktikum from "../models/AlatPraktikum.js";
import path from "path";
import fs from "fs";
export const getAllAlatPraktikum = async (req, res) => {
  await AlatPraktikum.findAll().then((data) => {
    return res
      .status(200)
      .json({ status: 200, data: data, message: "success" });
  });
};
export const getAlatPraktikumById = async (req, res) => {
  await AlatPraktikum.findByPk(req.params.id).then((data) => {
    if (data === null || !data)
      return res.status(404).json({ status: 404, message: "data not found" });
    return res
      .status(200)
      .json({ status: 200, data: data, message: "success" });
  });
};
export const createAlatPraktikum = async (req, res) => {
  if (!req.files || !req.files.foto)
    return res.status(400).json({ status: 400, message: "foto is required" });
  const file = req.files.foto;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const alatPraktikumFoto =
    req.body.namaAlat.replace(/ /g, "_") + "-" + file.md5 + ext;
  const urlAlatPraktikum = `${req.protocol}://${req.get(
    "host"
  )}/images/gambar_alatPraktikum/${alatPraktikumFoto}`;

  const allowedType = [".jpeg", ".jpg", ".png"];
  if (!allowedType.includes(ext.toLowerCase()))
    return res
      .status(400)
      .json({ status: 400, message: "tipe file tidak sesuai" });
  if (fileSize > 10000000)
    return res
      .status(400)
      .json({ status: 400, message: "ukuran foto terlalu besar" });
  file.mv(
    `./public/images/gambar_alatPraktikum/${alatPraktikumFoto}`,
    async (err) => {
      if (err)
        return res.status(500).json({ status: 500, message: err.message });
      await AlatPraktikum.create({
        nama_alat: req.body.namaAlat,
        penjelasan: req.body.penjelasan,
        foto: alatPraktikumFoto,
        url_foto: urlAlatPraktikum,
      });
    }
  );
};
export const updateAlatPraktikum = async (req, res) => {
  await AlatPraktikum.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data || data === null)
        return res.status(404).json({ status: 404, message: "data not found" });

      let file;
      let alatFoto;
      let alatFotoUrl;
      if (req.file) {
        file = req.files.foto;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        alatFoto = req.body.namaAlat.replace(/ /g, "_") + "-" + file.md5 + ext;
        alatFotoUrl = `${req.protocol}://${req.get(
          "host"
        )}/images/gambar_alatPraktikum/${alatFoto}`;

        const allowedType = [".jpeg", ".jpg", ".png"];
        if (!allowedType.includes(ext.toLowerCase()))
          return res
            .status(400)
            .json({ status: 400, message: "tipe file tidak sesuai" });
        if (fileSize > 10000000)
          return res
            .status(400)
            .json({ status: 400, message: "ukuran foto terlalu besar" });
        fs.unlinkSync(`./public/images/gambar_alatPraktikum/${data.foto}`);
        file.mv(
          `./public/images/gambar_alatPraktikum/${alatFoto}`,
          async (err) => {
            if (err)
              return res
                .status(500)
                .json({ status: 500, message: err.message });
          }
        );
      } else {
        file = null;
        alatFotoUrl = data.url_foto;
        alatFoto = data.foto;
      }

      AlatPraktikum.update(
        {
          nama_alat: req.body.namaAlat,
          penjelasan: req.body.penjelasan,
          url_foto: alatFotoUrl,
          foto: alatFoto,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      ).then(() => {
        return res
          .status(200)
          .json({ status: 200, message: "data updated successfully" });
      }).catch((err) => {
        return res.status(500).json({ status: 500, message: err.message });
      })
    })
    .catch((err) => {
      return res.status(500).json({ status: 500, message: err.message });
    });
};
export const deleteAlatPraktikum = async (req, res) => {
    await AlatPraktikum.findOne({where: {
        id: req.params.id
    }}).then((data) => {
        if (!data || data === null)
            return res.status(404).json({ status: 404, message: "data not found" });
        fs.unlinkSync(`./public/images/gambar_alatPraktikum/${data.foto}`);
        AlatPraktikum.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            return res.status(200).json({ status: 200, message: "data deleted successfully" });
        }).catch((err) => {
            return res.status(500).json({ status: 500, message: err.message });
        })
    })
};

import Materi from "../models/Materi.js";
import fs from "fs";
import path from "path";
import MateriVideo from "../models/MateriVideo.js";
export const getAllMateri = async (req, res) => {
  await Materi.findAll()
    .then((data) => {
      return res
        .status(200)
        .json({ status: 200, data: data, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ status: 500, message: err });
    });
};
export const getMateriById = async (req, res) => {
  await Materi.findByPk(req.body.id)
    .then((data) => {
      return res
        .status(200)
        .json({ status: 200, data: data, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ status: 500, message: err });
    });
};
export const createMateri = async (req, res) => {
  if (!req.files || !req.files) {
    return res
      .status(400)
      .json({ repsonse: 400, message: "Video tidak ditemukan" });
  }
  const video = req.files.video;
  //   const videoSize = video.data.length;
  const ext = path.extname(video.name);
  const videoName = video.md5 + ext;
  const videoUrl = `${req.protocol}://${req.get(
    "host"
  )}/videos/materi/${videoName}`;

  const allowedType = [".mp4", ".mkv", ".mp3"];
  if (!allowedType.includes(ext.toLowerCase()))
    return res
      .status(400)
      .json({ repsonse: 400, message: "Tipe file tidak sesuai" });

  video.mv(`./public/videos/materi/${videoName}`, async (err) => {
    if (err)
      return res.status(500).json({ repsonse: 500, message: err.message });
    await MateriVideo.create({
      video: videoName,
      url_video: videoUrl,
      on_duration_question: req.body.onDurationQuestion,
      pilihan_jawaban: req.body.pilihanJawaban,
      jawaban_benar: req.body.jawabanBenar,
    })
      .then(async (data) => {
        const file = req.files.gambarMateri;
        const fileSize = file.data.length;
        const ext = path.extname(file.name);
        const materiFoto =
          req.body.namaMateri.replace(/ /g, "_") + "-" + file.md5 + ext;
        const urlMateri = `${req.protocol}://${req.get(
          "host"
        )}/images/gambar_materi/${materiFoto}`;
        const allowedType = [".jpeg", ".jpg", ".png"];
        if (fileSize > 10000000)
          return res
            .status(400)
            .json({ response: 400, message: "Ukuran foto terlalu besar" });
        if (!allowedType.includes(ext.toLowerCase()))
          return res
            .status(400)
            .json({ response: 400, message: "Tipe file tidak sesuai" });

        file.mv(`./public/images/gambar_materi/${materiFoto}`, async (err) => {
          if (err)
            return res
              .status(500)
              .json({ response: 500, message: err.message });
          await Materi.create({
            subBabId: req.body.subBabId,
            nama_materi: req.body.namaMateri,
            videoId: data.id,
            gambar_materi: materiFoto,
            gambar_url: urlMateri,
            pengantar_materi: req.body.pengantarMateri,
          })
            .then(async (data) => {
              const materiData = await Materi.findByPk(data.id, {
                include: {
                  model: MateriVideo,
                },
              });
              return res.status(201).json({
                response: 201,
                data: materiData.dataValues,
                message: "Materi dan video materi baru ditambahkan",
              });
            })
            .catch((err) => {
              return res
                .status(500)
                .json({ response: 500, message: err.message });
            });
        });
      })
      .catch((err) => {
        return res.status(500).json({ status: 500, message: err.message });
      });
  });
};
export const updateMateri = async (req, res) => {
  if (!req.files || !req.files) {
    return res
      .status(400)
      .json({ repsonse: 400, message: "Video tidak ditemukan" });
  }
  const materiVideo = await MateriVideo.findByPk(req.params.id);
  if (materiVideo === null || !materiVideo) {
    return res
      .status(404)
      .json({ repsonse: 404, message: "Video tidak ditemukan" });
  }
  let video;
  let videoName;
  let videoUrl;

  if (req.files.video) {
    video = req.files.video;
    const ext = path.extname(video.name);
    videoName = video.md5 + ext;
    const allowedType = [".mp4", ".mkv", ".mp3"];
    if (!allowedType.includes(ext.toLowerCase()))
      return res
        .status(400)
        .json({ status: 400, message: "Tipe file tidak sesuai" });
    videoUrl = `${req.protocol}://${req.get(
      "host"
    )}/videos/materi/${videoName}`;
    video.mv(`./public/videos/materi/${videoName}`, async (err) => {
      if (err)
        return res.status(500).json({ repsonse: 500, message: err.message });
      await MateriVideo.update(
        {
          video: videoName,
          url_video: videoUrl,
          on_duration_question: req.body.onDurationQuestion,
          pilihan_jawaban: req.body.pilihanJawaban,
          jawaban_benar: req.body.jawabanBenar,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
    });
  }

  const file = req.files.gambarMateri;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const materiFoto =
    req.body.namaMateri.replace(/ /g, "_") + "-" + file.md5 + ext;
  const urlMateri = `${req.protocol}://${req.get(
    "host"
  )}/images/gambar_materi/${materiFoto}`;
  const allowedType = [".jpeg", ".jpg", ".png"];
  if (fileSize > 10000000)
    return res
      .status(400)
      .json({ response: 400, message: "Ukuran foto terlalu besar" });
  if (!allowedType.includes(ext.toLowerCase()))
    return res
      .status(400)
      .json({ response: 400, message: "Tipe file tidak sesuai" });

  file.mv(`./public/images/gambar_materi/${materiFoto}`, async (err) => {
    if (err)
      return res.status(500).json({ response: 500, message: err.message });
    await Materi.create({
      subBabId: req.body.subBabId,
      nama_materi: req.body.NamaMateri,
      videoId: req.body.videoId ? req.body.videoId : materiVideo.id,
      gambar_materi: materiFoto,
      gambar_url: urlMateri,
      pengantarMateri: req.body.pengantarMateri,
    })
      .then(async (data) => {
        const materiData = await Materi.findByPk(data.id, {
          include: {
            model: MateriVideo,
          },
        });
        return res.status(201).json({
          response: 201,
          data: materiData.dataValues,
          message: "Materi dan video materi baru ditambahkan",
        });
      })
      .catch((err) => {
        return res.status(500).json({ response: 500, message: err.message });
      });
  });
};
export const deleteMateri = async (req, res) => {
  const materi = await Materi.findByPk(req.body.id);
  if (!materi || materi === null)
    return res
      .status(404)
      .json({ status: 404, message: "Materi tidak ditemukan" });
  const materiVideoId = materi.videoid;
  fs.unlinkSync(`./public/images/gambar_materi${materi.gambar_materi}`);
  await Materi.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then(async () => {
      const meteriVideo = await MateriVideo.findByPk(materiVideoId);
      fs.unlinkSync(`./public/videos/gambar_materi${meteriVideo.video}`);
      await MateriVideo.delete({
        where: {
          id: materiVideoId,
        },
      });
      return res.status(200).json({
        status: 200,
        message: "Materi dan video materi berhasil di hapus",
      });
    })
    .catch((err) => {
      return res.status(500).json({ status: 500, message: err });
    });
};
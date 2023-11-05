import MateriVideo from "../models/MateriVideo.js";
import fs from "fs";
import path from "path";
export const getAllMateriVideo = async (req, res) => {
  await MateriVideo.findAll()
    .then((data) => {
      return res
        .status(200)
        .json({ userData: data, repsonse: 200, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
export const getMateriVideoById = async (req, res) => {
  await MateriVideo.findByPk(req.params.id)
    .then((data) => {
      if (data === null || data === undefined) {
        return res.status(404).json({
          userData: data,
          repsonse: 404,
          message: "Video tidak ditemukan",
        });
      }
      return res
        .status(200)
        .json({ userData: data, repsonse: 200, message: "success" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};
export const createMateriVideo = async (req, res) => {
  if (!req.files || !req.files.video) {
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
  if (!allowedType.include(ext.toLowerCase()))
    return res
      .status(400)
      .json({ repsonse: 400, message: "Tipe file tidak sesuai" });

  video.mv(`./public/videos/materi/${videoName}`, async (err) => {
    if (err) return res.status(500).json({ repsonse: 500, message: err });
    await MateriVideo.create({
      video: videoName,
      url_video: videoUrl,
      on_duration_question: req.body.onDurationQuestion,
      pilihan_jawaban: req.body.pilihanJawaban,
      jawaban_benar: req.body.jawabanBenar,
    }).then((data) => {
       return res.status(201).json({status: 201, data, message: "success"})
    }).catch((err) => {
        return res.status(500).json({status: 500, message: err.message})
    });
  });
};
export const updateMateriVideo = async (req, res) => {
  if (!req.files || !req.files.video) {
    return res
      .status(400)
      .json({ repsonse: 400, message: "Video tidak ditemukan" });
  }
  const videoData = await MateriVideo.findByPk(req.params.id);
  if(!videoData || videoData === null){
    return res
      .status(404)
      .json({ repsonse: 404, message: "Video tidak ditemukan" });
  }
  let video;
  if(req.files){
    video = videoData.video
  }else{
    video = req.files.video
  }
  const ext = path.extname(video.name);
  const videoName = video.md5 + ext;
  const videoUrl = `${req.protocol}://${req.get(
    "host"
  )}/videos/materi/${videoName}`;

  const allowedType = [".mp4", ".mkv", ".mp3"];
  if (!allowedType.include(ext.toLowerCase()))
    return res
      .status(400)
      .json({ repsonse: 400, message: "Tipe file tidak sesuai" });

  video.mv(`./public/videos/materi/${videoName}`, async (err) => {
    if (err) return res.status(500).json({ repsonse: 500, message: err });
    await MateriVideo.create({
      video: videoName,
      url_video: videoUrl,
      on_duration_question: req.body.onDurationQuestion,
      pilihan_jawaban: req.body.pilihanJawaban,
      jawaban_benar: req.body.jawabanBenar,
    });
  });
};
export const deleteMateriVideo = async (req, res) => {
  const video = await MateriVideo.findByPk();

  if (!video || video === null) {
    return res
      .status(404)
      .json({ repsonse: 404, message: "Video tidak ditemukan" });
  }

  fs.unlinkSync(`./public/videos/materi/${video.video}`);
  await MateriVideo.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(() => {
      return res
        .status(200)
        .json({ status: 200, message: "Video berhasil dihapus" });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });
};

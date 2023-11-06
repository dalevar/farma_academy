import Forum from "../models/Forum.js";
// eslint-disable-next-line no-unused-vars
import CommentForum from "../models/CommentForum.js";
import Users from "../models/Users.js";
import path from "path";
import fs from "fs";

export const updateLike = async (req, res) => {
  await Forum.findOne({
    where: {
      uuid: req.params.uuid,
    },
  }).then(async (data) => {
    if (!data || data === null) {
      return res.status(404).json({ status: 404, message: "data not found" });
    }
    // const like = Number(req.body.like) < 0 ? -1 : req.body.like
    await Forum.update({
      like: Number(data.like + req.body.like),
    });
  });
};

export const getAllForum = async (req, res) => {
  const dataForum = await Forum.findAll({
    include: [{
      model: Users,
      attributes: ["nama", "email", "username"],
    }, {
      model: CommentForum,
    }],
  }).then((dataForm) => {
    let commentCount = 0;
    dataForm.map((value) => {
      commentCount = commentCount + value.comment_forums.length
    })
    let data = [...dataForm]
    data.push({commentCount: commentCount})
    return res.status(200).json({ status: 200, dataForum: data, message: "Success" });
  }).catch((err) => {
    return res.status(500).json({ status: 500, message: err.message });
  })

};
export const getForumById = async (req, res) => {
  // 7252eee6-bf37-428e-93b0-c463a4107fde
  await Forum.findOne({
    where: {
      uuid: req.params.id,
    },
    include: {
      model: Users,
      attributes: ["nama", "email", "username"],
    },
  })
    .then(async (data) => {
      if (!data || data === null) {
        return res.status(404).json({ status: 404, message: "data not found" });
      }
      const commentData = await CommentForum.findAll({
        where: {
          forumId: data.id,
        },
        include: {
          model: Users,
          attributes: ["nama", "email", "username"],
        },
      });
      res.status(200).json({
        status: 200,
        dataForum: data,
        commentData: commentData,
        message: "Success",
      });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.message });
    });
};
export const createForum = async (req, res) => {
  let file = null;
  let urlFile = null;
  let fileData = null;
  if (req.files) {
    file = req.files.file;
    const fileSize = file.data.length;
    const ext = path.extname(file.name);
    fileData = req.body.namaForum.replace(/ /g, "_") + "-" + file.md5 + ext;
    urlFile = `${req.protocol}://${req.get("host")}/files/forum/${fileData}`;
    const allowedType = [".exe", ".c", ".js", ""];
    if (fileSize > 10000000) {
      return res
        .status(400)
        .json({ status: 400, message: "Ukuran foto terlalu besar" });
    }
    if (allowedType.includes(ext.toLowerCase())) {
      return res
        .status(400)
        .json({ status: 400, message: "Tipe file tidak sesuai" });
    }
    file.mv(`./public/files/forum/${fileData}`, async (err) => {
      if (err)
        return res.status(500).json({ status: 500, message: err.message });
    });
  }
  await Forum.create({
    userId: req.session.userId,
    title: req.body.title,
    content: req.body.content,
    hastag: req.body.hastag,
    urlFile: urlFile,
    file: fileData,
    like: 0,
  })
    .then((v) => {
      res.status(200).json({ status: 200, data: v, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.message });
    });
};
export const updateForum = async (req, res) => {
  await Forum.findOne({
    where: {
      uuid: req.params.id,
    },
  }).then(async (data) => {
    if (!data || data === null)
      return res.status(404).json({ status: 404, message: "data not found" });

    let file = null;
    let urlFile = data.file;
    let fileData = data.url_file;

    if (req.files) {
      file = req.files.file;
      const fileSize = file.data.length;
      const ext = path.extname(file.name);
      fileData = req.body.title.replace(/ /g, "_") + "-" + file.md5 + ext;
      urlFile = `${req.protocol}://${req.get("host")}/files/forum/${fileData}`;
      const allowedType = [".exe", ".c", ".js", ""];
      if (fileSize > 10000000) {
        return res
          .status(400)
          .json({ status: 400, message: "Ukuran foto terlalu besar" });
      }
      if (allowedType.includes(ext.toLowerCase())) {
        return res
          .status(400)
          .json({ status: 400, message: "Tipe file tidak sesuai" });
      }
      fs.unlinkSync(`./public/files/forum/${data.file}`);
      file.mv(`./public/files/forum/${fileData}`, async (err) => {
        if (err)
          return res.status(500).json({ status: 500, message: err.message });
      });
    }

    await Forum.update(
      {
        title: req.body.title,
        content: req.body.content,
        hastag: req.body.hastag,
        urlFile: urlFile,
        file: fileData,
      },
      {
        where: {
          uuid: data.uuid,
        },
      }
    )
      .then(() => {
        res.status(200).json({ status: 200, message: "data success updated" });
      })
      .catch((err) => {
        res.status(500).json({ status: 500, message: err.message });
      });
  });
};
export const updateForumLike = async (req, res) => {
  await Forum.findOne({
    where: {
      uuid: req.params.id,
    },
  }).then(async (data) => {
    if (!data || data === null)
      return res.status(404).json({ status: 404, message: "data not found" });

    await Forum.update(
      {
        like: Number(data.like + req.body.like),
      },
      {
        where: {
          uuid: data.uuid,
        },
      }
    );
  });
};
export const deleteForum = async (req, res) => {
  await Forum.findOne({
    uuid: req.params.id,
  }).then((data) => {
    if (!data || data === null)
      return res.status(404).json({ status: 404, message: "data not found" });

    fs.unlinkSync(`./public/files/forum/${data.file}`)
      .then(() => {
        Forum.destroy({
          where: {
            uuid: req.params.id,
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
  });
};

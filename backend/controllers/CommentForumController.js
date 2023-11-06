import CommentForum from "../models/CommentForum.js";
import Forum from "../models/Forum.js";
import Users from "../models/Users.js";
import path from "path";
import fs from "fs";

export const getAllCommentForum = async (req, res) => {
  await CommentForum.findAll({
    include: [
      {
        model: Forum,
      },
      {
        model: Users,
      },
    ],
  })
    .then((data) => {
      res.status(200).json({ status: 200, data: data, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.message });
    });
};

export const getCommentForumById = async (req, res) => {
  await CommentForum.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Forum,
      },
      {
        model: Users,
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
export const createCommentForum = async (req, res) => {
  let file = null;
  let fileName = null;
  let urlFile = null;

  if (req.files) {
    file = req.files.file;
    const ext = path.extname(file.name);
    fileName = req.body.title.replace(/ /g, "_") + "-" + file.md5 + ext;
    urlFile = `${req.protocol}://${req.get("host")}/images/forum/${fileName}`;
    const notAllowedType = [".exe", ".c", ".js", ""];
    if (notAllowedType.includes(ext))
      return res
        .status(400)
        .json({ status: 400, message: "Tipe file tidak sesuai" });

    file.mv(`./public/files/comment_forum/${fileName}`, async (err) => {
      if (err)
        return res.status(500).json({ status: 500, message: err.message });
    });
  }
  await CommentForum.create({
    forumId: req.body.forumId,
    userId: req.session.userId,
    comment: req.body.comment,
    url_file: urlFile,
    file: fileName,
    replyCommentUserId: req.body.replyCommentUserId
      ? req.body.replyCommentUserId
      : null,
  }).then((data) => {
    return res.status(200).json({status: 200, data: data, message: "Success"});
  }).catch((err) => {
    return res.status(500).json({status: 500, message: err.message});
  })
};
export const deleteCommentForum = async (req, res) => {
  await CommentForum.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((data) => {
      if (!data || data === null)
        return res.status(404).json({ status: 404, message: "data not found" });
      fs.unlinkSync(`./public/files/comment_forum/${data.file}`);
      data.destroy();
      res.status(200).json({ status: 200, message: "Success" });
    })
    .catch((err) => {
      res.status(500).json({ status: 500, message: err.message });
    });
};
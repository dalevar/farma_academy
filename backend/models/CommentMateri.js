import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const CommentMateri = db.define("comment_materi", {
  forumId: {
    type: DataTypes.INTEGER,
    allowNull: false,

    validate: {
      isInt: true,
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,

    validate: {
      isInt: true,
    }
  },
  comment: {
    type: DataTypes.STRING,
    allowNull: false,

    validate: {
      notEmpty: true,
    }
  },
  star: {
    type: DataTypes.INTEGER,
    allowNull: true,

    validate: {
        notEmpty: true,
    }
  }
}, {
    freezeTableName: true
})

export default CommentMateri;
import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const CommentForum = db.define("comment_forum", {
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
  file: {
    type: DataTypes.TEXT,
    allowNull: true,

    validate: {
      notEmpty: true,
    }
  },
  replyCommentUserId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        notEmpty: true,
    }
  }
}, {
    freezeTableName: true
})

export default CommentForum;
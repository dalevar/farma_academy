import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Users from "./Users.js";
import Forum from "./Forum.js";

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

Users.hasMany(CommentForum, { foreignKey: "userId" });
CommentForum.belongsTo(Users, { foreignKey: "userId" });

Forum.hasMany(CommentForum, { foreignKey: "forumId" });
CommentForum.belongsTo(Forum, { foreignKey: "forumId" });

export default CommentForum;
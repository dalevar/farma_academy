import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Users from "./Users.js";
import Materi from "./Materi.js";

const { DataTypes } = Sequelize;

const CommentMateri = db.define("comment_materi", {
  materiId: {
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

Materi.hasMany(CommentMateri, { foreignKey: "materiId" });
CommentMateri.belongsTo(Materi, { foreignKey: "materiId" });

Users.hasMany(CommentMateri, { foreignKey: "userId" });
CommentMateri.belongsTo(Users, { foreignKey: "userId" });
export default CommentMateri;
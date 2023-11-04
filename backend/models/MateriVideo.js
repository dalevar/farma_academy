import { Sequlize } from "sequelize";
import db from "../config/Database.js";
import Materi from "./Materi.js";

const { DataTypes } = Sequlize;

const MateriVideo = db.define(
  "materi_video",
  {
    materiId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      validate: {
        isInt: true,
      },
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    pilihan_jawaban: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      }
    },
    jawaban_benar: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      }
    }
  },
  {
    freezeTableName: true,
  }
);

Materi.hasMany(MateriVideo, {foreignKey: "materiId"});
MateriVideo.belongsTo(Materi, {foreignKey: "materiId"});
export default MateriVideo;

import { Sequlize } from "sequelize";
import db from "../config/Database.js";

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

export default MateriVideo;

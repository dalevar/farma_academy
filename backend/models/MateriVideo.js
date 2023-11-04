import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const MateriVideo = db.define(
  "materi_video",
  {
    video: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    on_duration_question: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      }
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

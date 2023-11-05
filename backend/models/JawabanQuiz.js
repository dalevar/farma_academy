import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const JawabanQuiz = db.define(
  "jawaban_quiz",
  {
    foto: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      }
    },
    foto_url: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      }
    },
    pilihan_jawaban: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    kalimat_jawaban: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);
export default JawabanQuiz;

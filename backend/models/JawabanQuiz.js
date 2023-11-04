import { Sequelize } from "sequelize";
import db from "../config/Database.js";
const { DataTypes } = Sequelize;

const JawabanQuiz = db.define(
  "jawaban_quiz",
  {
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

import { Sequlize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequlize;

const JawabanQuiz = db.define(
  "jawaban_quiz",
  {
    quizId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      validate: {
        isInt: true,
      },
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

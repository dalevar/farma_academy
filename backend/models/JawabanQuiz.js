import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import QuizMateri from "./QuizMateri.js";
const { DataTypes } = Sequelize;

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
QuizMateri.hasMany(JawabanQuiz, { foreignKey: "quizId" });
JawabanQuiz.belongsTo(QuizMateri, { foreignKey: "quizId" });
export default JawabanQuiz;

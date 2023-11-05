import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Materi from "./Materi.js";
import JawabanQuiz from "./JawabanQuiz.js";
const { DataTypes } = Sequelize;

const QuizMateri = db.define("quiz_materi",
  {
    quiz_tipe: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    materiId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      }
    },
    url_foto: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      }
    },
    soal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    jawabanId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      validate: {
        isInt: true,
      }
    },
    jawaban_benar: {
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

JawabanQuiz.hasMany(QuizMateri, { foreignKey: "jawabanId" });
QuizMateri.belongsTo(JawabanQuiz, { foreignKey: "jawabanId" });

Materi.hasMany(QuizMateri, { foreignKey: "materiId" });
QuizMateri.belongsTo(Materi, { foreignKey: "materiId" });

export default QuizMateri;

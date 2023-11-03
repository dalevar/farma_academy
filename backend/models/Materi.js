import { Sequlize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequlize;

const MateriVideo = db.define(
  "materi_video",
  {
    moduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      validate: {
        isInt: true,
      },
    },
    babId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      validate: {
        isInt: true,
      },
    },
    subBabId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      validate: {
        isInt: true,
      },
    },
    nama_materi: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    videoId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
    gambar_materi: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    pengantar_materi: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    }
  },
  {
    freezeTableName: true,
  }
);

export default MateriVideo;

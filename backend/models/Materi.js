import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Module from "./Module.js";
import BabModule from "./BabModule.js";
import SubBab from "./SubBab.js";

const { DataTypes } = Sequelize;

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

Module.hasMany(MateriVideo, {foreignKey: "moduleId"});
MateriVideo.belongsTo(Module, {foreignKey: "moduleId"});

BabModule.hasMany(MateriVideo, {foreignKey: "babId"});
MateriVideo.belongsTo(BabModule, {foreignKey: "babId"});

SubBab.hasMany(MateriVideo, {foreignKey: "subBabId"});
MateriVideo.belongsTo(SubBab, {foreignKey: "babId"});

export default MateriVideo;

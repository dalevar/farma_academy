import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import SubBab from "./SubBab.js";
import MateriVideo from "./MateriVideo.js";

const { DataTypes } = Sequelize;

const Materi = db.define(
  "materi",
  {
    
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


SubBab.hasMany(Materi);
Materi.belongsTo(SubBab, {foreignKey: "subBabId"});

MateriVideo.hasOne(Materi, {foreignKey: "videoId"});
Materi.belongsTo(MateriVideo, {foreignKey: "videoId"});
export default Materi;

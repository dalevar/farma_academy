import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Materi from "./Materi.js";
const { DataTypes } = Sequelize;

const RangkumanMateri = db.define(
  "rangkuman_materi",
  {
    materiId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
    nama_rangkuman: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
    url_file: {
      type: DataTypes.TEXT,
      allowNull: true,
  
      validate: {
        notEmpty: true,
      }
    },
    file: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    }
  },
  {
    freezeTableName: true,
  }
);
Materi.hasMany(RangkumanMateri, {foreignKey: "materiId"});
RangkumanMateri.belongsTo(Materi, {foreignKey: "materiId"});

export default RangkumanMateri;

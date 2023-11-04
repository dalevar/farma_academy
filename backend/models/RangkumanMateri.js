import { Sequlize } from "sequelize";
import db from "../config/Database.js";
import Materi from "./Materi.js";
const { DataTypes } = Sequlize;

const RangkumanMateri = db.define(
  "sertifikat_user",
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

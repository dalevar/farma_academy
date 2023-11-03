import { Sequlize } from "sequelize";
import db from "../config/Database.js";

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

export default RangkumanMateri;

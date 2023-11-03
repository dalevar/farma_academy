import { Sequlize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequlize;

const SavedPerusahaan = db.define(
  "sertifikat_user",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
    perusahaanId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

export default SavedPerusahaan;

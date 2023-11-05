import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import BabModule from "./BabModule.js";

const { DataTypes } = Sequelize;

const SubBab = db.define(
  "sub_bab",
  {
    babId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
    nama_subbab: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    is_gratis: {
      type: DataTypes.BOOLEAN,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    foto: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
    foto_url: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

BabModule.hasMany(SubBab, { foreignKey: "babId" });
SubBab.belongsTo(BabModule, { foreignKey: "babId" });

export default SubBab;

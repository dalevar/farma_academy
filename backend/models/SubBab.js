import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Module from "./Module.js";
import BabModule from "./BabModule.js";

const { DataTypes } = Sequelize;

const SubBab = db.define(
  "sub_bab",
  {
    moduleId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
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
    gambar: {
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
Module.hasMany(SubBab, { foreignKey: "moduleId" });
SubBab.belongsTo(Module, { foreignKey: "moduleId" });

BabModule.hasMany(SubBab, { foreignKey: "babId" });
SubBab.belongsTo(BabModule, { foreignKey: "babId" });

export default SubBab;

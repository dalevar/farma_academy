import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./Users.js";
import Module from "./Module.js";
const { DataTypes } = Sequelize;

const SertifikatUser = db.define(
  "sertifikat_user",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
    moduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      validate: {
        isInt: true,
      }
    },
    url_gambar: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      }
    },
    gambar_serti: {
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

Module.hasMany(SertifikatUser);
SertifikatUser.belongsTo(Module, { foreignKey: "moduleId" });

Users.hasMany(SertifikatUser);
SertifikatUser.belongsTo(Users, { foreignKey: "userId" });

export default SertifikatUser;
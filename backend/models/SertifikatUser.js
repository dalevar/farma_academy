import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./Users.js";
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
Users.hasMany(SertifikatUser);
SertifikatUser.belongsTo(Users, { foreignKey: "userId" });

export default SertifikatUser;
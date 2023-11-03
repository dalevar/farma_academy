import { Sequlize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequlize;

const SubBab = db.define("sub_bab", {
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
},{
    freezeTableName: true
});

export default SubBab;

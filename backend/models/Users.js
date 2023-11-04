import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Materi from "./Materi.js";
import StatusPremium from "./StatusPremium.js";
import Roles from "./Roles.js";

const { DataTypes } = Sequelize;

const Users = db.define(
  "user",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    materiId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        isInt: true,
      },
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        len: [3, 100],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    no_hp: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tempat_lahir: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    tanggal_lahir: {
      type: DataTypes.DATEONLY,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    jenis_kelamin: {
      type: DataTypes.ENUM("L", "P"),
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    domisili_sekarang: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    pendidikan_terakhir: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    pekerjaan: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    perusahaan_bekerja: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
    serti_konsultan: {
      type: DataTypes.TEXT,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
    photo_profile: {
      type: DataTypes.TEXT,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,

      validate: {
        notEmpty: true,
      }
    },
    statusPremiumId: {
      type: DataTypes.INTEGER,
      allowNull: true,

      validate: {
        notEmpty: true,
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,

      validate: {
        notEmpty: true,
      }
    },
    
  },
  {
    freezeTableName: true,
  }
);
Materi.hasMany(Users, {foreignKey: "materiId"});
Users.belongsTo(Materi, {foreignKey: "materiId"});

StatusPremium.hasMany(Users, {foreignKey: "statusPremiumId"});
Users.belongsTo(StatusPremium, {foreignKey: "statusPremiumId"});

Roles.hasMany(Users, {foreignKey: "roleId"});
Users.belongsTo(Roles, {foreignKey: "roleId"});
export default Users;

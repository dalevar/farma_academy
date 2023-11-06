import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const AlatPraktikum = db.define("alat_praktikum", {
    nama_alat: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    penjelasan: {
        type: DataTypes.TEXT,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    foto_url: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    foto: {
        type: DataTypes.TEXT,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
})

export default AlatPraktikum
import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const PaketBelajar = db.define("daftar_paket", {
    nama: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    penjelasan_paket: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    harga_paket: {
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            isInt: true,
        }
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            isInt: true
        }
    },
    
}, {
    freezeTableName: true
})

export default PaketBelajar;   
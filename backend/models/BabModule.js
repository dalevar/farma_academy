import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Module from "./Module.js";
const { DataTypes } = Sequelize;

const BabModule = db.define("bab_module", {
    moduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            isInt: true,
        }
    },
    nomorBab: {
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            isInt: true,
        }
    },
    pengatar_bab: {
        type: DataTypes.TEXT,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    foto_url: {
        type: DataTypes.TEXT,
        allowNull: true,

        validate: {
            notEmpty: true,
        }
    },
    foto: {
        type: DataTypes.TEXT,
        allowNull: true,

        validate: {
            notEmpty: true,
        }
    }
},{
    freezeTableName: true
})

Module.hasMany(BabModule, { foreignKey: "moduleId" });
BabModule.belongsTo(Module, { foreignKey: "moduleId" });

export default BabModule
import db from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize;

const Roles = db.define("role", {
    nama: {
        type: DataTypes.STRING,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    }
}, {
    freezeTableName: true
})

export default Roles;
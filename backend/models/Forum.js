import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./Users.js";
const { DataTypes } = Sequelize;

const Forum = db.define("forum", {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            isInt: true,
        }
    },
    uuid: {
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,

        },
    },
    hastag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        }
    },
    url_file: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
        }
    },
    file: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            notEmpty: true,
        }
    },
    like: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: true,
        }
    }
},{
    freezeTableName: true
})

Users.hasMany(Forum, { foreignKey: "userId" });
Forum.belongsTo(Users, { foreignKey: "userId" });
export default Forum
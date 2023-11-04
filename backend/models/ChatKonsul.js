import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Users from "./Users.js";

const { DataTypes } = Sequelize;

const ChatKonsultan = db.define(
  "chat_konsultan",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    user_konsulId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    chat: {
        type: DataTypes.TEXT,
        allowNull: false,

        validate: {
            notEmpty: true,
        }
    },
    file: {
        type: DataTypes.TEXT,
        allowNull: true,

        validate: {
            notEmpty: true,
        }
    }
  },
  {
    freezeTableName: true,
  }
);


ChatKonsultan.hasMany(Users, { foreignKey: "user_konsulId" });
Users.belongsTo(ChatKonsultan, { foreignKey: "user_konsulId" });

ChatKonsultan.hasMany(Users, { foreignKey: "userId" });
Users.belongsTo(ChatKonsultan, { foreignKey: "userId" });
export default ChatKonsultan;

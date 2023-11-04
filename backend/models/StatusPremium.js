import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Users from "./Users.js";
import Payment from "./Payment.js";
import PaketBelajar from "./PaketBelajar.js";
const { DataTypes } = Sequelize;

const StatusPremium = db.define("status_premium",{
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,

        validate: {
            isInt: true,
        }
    },
    paketId: {
        type: DataTypes.INTEGER,
        allowNull: true,

        validate: {
            isInt: true,
        }
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,

        validate: {
            notEmpty: true,
        }
    },
    paymentInfoId: {
        type: DataTypes.INTEGER,
        allowNull: true,

        validate: {
            isInt: true,
        }
    }
},{
    freezeTableName: true
})
Users.hasMany(StatusPremium, { foreignKey: "userId" });
StatusPremium.belongsTo(Users, { foreignKey: "userId" });

Payment.hasMany(StatusPremium, { foreignKey: "paymentInfoId" });
StatusPremium.belongsTo(Payment, { foreignKey: "paymentInfoId" });

PaketBelajar.hasMany(StatusPremium, { foreignKey: "paketId" });
StatusPremium.belongsTo(PaketBelajar, { foreignKey: "paketId" });

export default StatusPremium
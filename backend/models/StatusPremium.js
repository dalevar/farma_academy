import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Payment from "./Payment.js";
import PaketBelajar from "./PaketBelajar.js";
const { DataTypes } = Sequelize;

const StatusPremium = db.define("status_premium",{
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
Payment.hasMany(StatusPremium, { foreignKey: "paymentInfoId" });
StatusPremium.belongsTo(Payment, { foreignKey: "paymentInfoId" });

PaketBelajar.hasMany(StatusPremium, { foreignKey: "paketId" });
StatusPremium.belongsTo(PaketBelajar, { foreignKey: "paketId" });

export default StatusPremium
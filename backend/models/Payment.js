import db from "../config/Database.js";
import { Sequelize } from "sequelize";
import Users from "./Users.js";
import PaketBelajar from "./PaketBelajar.js";

const { DataTypes } = Sequelize;

const Payment = db.define(
  "payment",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    paketId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
      },
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
    payment_method: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },

    fraud_status: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
    sales_order_payment: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: true,

      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Users.hasMany(Payment, { foreignKey: "userId" });
Payment.belongsTo(Users, { foreignKey: "userId" });

PaketBelajar.hasMany(Payment, { foreignKey: "paketId" });
Payment.belongsTo(PaketBelajar, { foreignKey: "paketId" });
export default Payment;

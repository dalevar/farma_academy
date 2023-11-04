import { Sequelize } from "sequelize";

const db = new Sequelize("farmaacademy_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

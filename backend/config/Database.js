import sequelize from "sequelize";

const db = new sequelize("farmaacademy_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

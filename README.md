# React + Vite
### Install NPM
```
npm install
```


# Backend (MYSQL ONLY)
### Make new database on Laragon / XAMMP
```
CREATE DATABASE farmaacademy_db;
```
### Before start, u need active this code on index.js
```
// import db from "./config/Database.js";

// (async () => {
//   db.sync();
// })();
```
### Start
```
npm start
```
# ------- API -------
## User api
### Get all User (Method: GET)
```
http://localhost:5000/user
```
### Get one User by uuid (Method: GET)
```
http://localhost:5000/user/:nis
```
### Create new user (Method: POST)
## Key for post data to API
```
{
  "name", TYPE TEXT,
  "email", TYPE TEXT,
  "noHp" : TYPE INTEGER,
  "username" : TYPE TEXT,
  "tempatLahir" : TYPE TEXT (EXAMPLE VALUE: Banjarmasin),
  "tglLahir" : TYPE DATE (YYYY-MM-DD),
  "jenisKelamin" : TYPE DATE ENUM["L","P"],
  "domisiliSekarang" : TYPE TEXT,
  "pendidikanTerakhir" : TYPE TEXT,
  "pekerjaan" : TYPE TEXT (NULLABLE),
  "perusahaanBekerja" : TYPE TEXT (NULLABLE),
  "sertifikatKonsultan" TYPE FILE (NULLABLE),
  "photoProfile" : TYPE FILE (NULLABLE),
  "password" : TYPE TEXT,
  "confirmPassword" : TYPE TEXT,
  "roleId" : TYPE INTEGER
}
```
```
http://localhost:5000/user
```

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

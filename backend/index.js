import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./config/Database.js";
import FileUpload from "express-fileupload";
import session from "express-session";

import UsersRoute from "./routes/UsersRoute.js";
import subBabRoute from "./routes/SubBabRoute.js";
import StatusPremiumRoute from "./routes/StatusPremiumRoute.js";
import SertifikatUserRoute from "./routes/SertifikatUserRoute.js";
import RoleRoute from "./routes/RoleRoute.js";
import RangkumanBelajarRoute from "./routes/RangkumanMateriRoute.js";
import QuizMateriRoute from "./routes/QuizMateriRoute.js";
import PaymentRoute from "./routes/PaymentRoute.js";
import PaketBelajarRoute from "./routes/PaketBelajarRoute.js";
import ModuleRoute from "./routes/ModuleRoute.js";
import BabModuleRoute from "./routes/BabModuleRoute.js";
import ForumRoute from "./routes/ForumRoute.js";
import CommentForumRoute from "./routes/CommentForumRoute.js";
import CommentMateriRoute from "./routes/CommentMateriRoute.js";
import AlatPraktikumRoute from "./routes/AlatPraktikumRoute.js";
import ChatKonsulRoute from "./routes/ChatKonsulRoute.js";
import MateriRoute from "./routes/MateriRoute.js";
import MateriVideo from "./routes/MateriVideoRoute.js";
import JawabanQuizRoute from "./routes/JawabanQuizRoute.js";
import SequelizeStore from 'connect-session-sequelize';

// (async () => {
//   db.sync();
// })();
dotenv.config();
const app = express();
app.use(bodyParser.json());
const sessionStore = SequelizeStore(session.Store);
const store = new sessionStore({
  db: db
})
app.use(
  session({
    // secret digunakan untuk membuat session terenkripsi
    // eslint-disable-next-line no-undef
    secret: process.env.SESS_SECRET,
    // resave digunakan mengontrol apakah sesi akan disimpan ulang pada setiap permintaan HTTP
    resave: false,
    // saveUninitalized digunakan untuk mengontrol apakah sesi akan disimpan, meskipun sesi tersebut tidak mengalami perubahan selama permintaan HTTP tertentu.
    saveUninitialized: true,
    cookie: {
      // true untuk https, false untuk http, auto untuk mendetksi httpnya apa
      store: store,
      secure: "auto",
    },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
app.use(FileUpload());
app.use(express.static("public"));
app.use(RoleRoute);
app.use(ModuleRoute);
app.use(UsersRoute);
app.use(BabModuleRoute);
app.use(subBabRoute);
app.use(StatusPremiumRoute);
app.use(SertifikatUserRoute);
app.use(RangkumanBelajarRoute);
app.use(MateriRoute);
app.use(QuizMateriRoute);
app.use(JawabanQuizRoute);
app.use(MateriVideo);
app.use(PaketBelajarRoute);
app.use(PaymentRoute);
app.use(ForumRoute);
app.use(CommentForumRoute);
app.use(CommentMateriRoute);
app.use(AlatPraktikumRoute);
app.use(ChatKonsulRoute);

// store.sync();
// eslint-disable-next-line no-undef
app.listen(process.env.APP_PORT, () => {
  // eslint-disable-next-line no-undef
  console.log("server up and running in port", process.env.APP_PORT);
});

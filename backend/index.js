import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
dotenv.config();
const app = express();
app.use(bodyParser.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);
// eslint-disable-next-line no-undef
app.listen(process.env.APP_PORT, () => {
  // eslint-disable-next-line no-undef
  console.log("server up and running in port", process.env.APP_PORT);
});

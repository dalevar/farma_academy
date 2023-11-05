import express from "express";
import {Login, SessionInformation, Logout} from "../controllers/AuthController.js";

const route = express.Router();

route.post("/login", Login);
route.get("/sessioninformation", SessionInformation);
route.delete("/logout/:id", Logout);

export default route
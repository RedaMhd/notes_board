import express from "express";
import { registerUser, loginUser } from "../controllers/usersController.js";
import { validatorMiddleware } from "../middlewares/index.js";
import { createUserValidator, loginUserValidator } from "../models/User.js";

const authRouter = express.Router();

authRouter.post(
	"/register",
	createUserValidator,
	validatorMiddleware,
	registerUser,
);

authRouter.post("/login", loginUserValidator, validatorMiddleware, loginUser);

export default authRouter;

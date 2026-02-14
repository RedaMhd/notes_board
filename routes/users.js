import { Router } from "express";
import {
    deleteUserById,
    getAllUsers,
    getUserById,
    registerUser,
    updateUserById
} from "../controllers/usersController.js";
import { createUserValidator, updateUserValidator } from "../models/User.js";
import {authenticateToken, authorizeRole,  validatorMiddleware} from "../middlewares/index.js"

const usersRouter = Router();

// usersRouter.use(authenticateToken); // protect all routes
// usersRouter.use(authorizeRole('admin'));

usersRouter.get("/", getAllUsers);
usersRouter.get("/:id", getUserById );
usersRouter.post("/", createUserValidator, validatorMiddleware, registerUser);
usersRouter.put("/:id", updateUserValidator,validatorMiddleware, updateUserById);
usersRouter.delete("/:id", deleteUserById);

export default usersRouter;

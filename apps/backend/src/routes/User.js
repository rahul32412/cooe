import express from "express";
import { getAllUsers, createUser, updateUser } from "../controllers/User.js";

import {validateCreateUser, validateUpdateUser} from "../middlewares/userValidator.js"

const router = express.Router();
router.get("/get", getAllUsers);
router.post("/create",validateCreateUser, createUser);
router.patch("/update/:id",validateUpdateUser, updateUser)

export default router;

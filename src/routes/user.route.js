import express from "express"
import { createUser , getAllUsers , getUserById ,updateUser , deleteUser } from "../controllers/user.controller.js"
import validateUser from "../middlewares/inputValidator.js"
const router = express.Router()


router.post("/users" , validateUser, createUser)
router.get("/users" , getAllUsers)
router.get("/users/:id" , getUserById)
router.put("/users/:id" , validateUser , updateUser)
router.delete("/users/:id" , deleteUser)

export default router
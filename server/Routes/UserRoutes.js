import express from "express"
import protect from "../Middleware/protect.js"
import admin from "../Middleware/admin.js"
import {
  getMe,
  postUser,
  putUser,
  deleteUser,
  loginUser,
  getUsers,
} from "../controllers/userController.js"

const userRouter = express.Router()

userRouter.route("/").get(protect, getMe).post(postUser)
userRouter.route("/:id").put(putUser).delete(deleteUser)
userRouter.route("/login").post(loginUser)
userRouter.get("/all", admin, getUsers)

export default userRouter

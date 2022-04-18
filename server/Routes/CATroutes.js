import express from "express"
import protect from "../Middleware/protect.js"
import {
  getRouter,
  postRouter,
  putRouter,
  deleteRouter,
} from "../controllers/CatControllers.js"

const router = express.Router()

router.route("/").get(protect, getRouter).post(protect, postRouter)
router.route("/:id").put(protect, putRouter).delete(protect, deleteRouter)

export default router

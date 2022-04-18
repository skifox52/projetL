import UserModel from "../model/UserModel.js"
import AsyncHandler from "express-async-handler"
import jwt from "jsonwebtoken"

const protectAdmin = AsyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)
      req.admin = await UserModel.findById(decoded.id).select("-password")
      if (req.admin.admin) {
        next()
      } else {
        res.status(403)
        throw new Error("You are not authorized , only admins are")
      }
    } catch (error) {
      res.status(401)
      throw new Error(
        error || "You are not the admin, therefore you are not authorized!!"
      )
    }
  }
  if (!token) {
    res.status(401)
    throw new Error("You are not authorized, no token!")
  }
})

export default protectAdmin

import UserModel from "../model/UserModel.js"
import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"

const protect = asyncHandler(async (req, res, next) => {
  let token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1]
      const userToken = jwt.verify(token, process.env.JWT_SECRET)
      req.user = await UserModel.findById(userToken.id).select("-password")
      next()
    } catch (error) {
      console.log(error)
      res.status(400)
      throw new Error("Invalid token!")
    }
  }
  if (!token) {
    res.status(401)
    throw new Error("Not authorized , no token!")
  }
})

export default protect

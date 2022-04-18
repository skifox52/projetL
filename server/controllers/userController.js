import bcrypt from "bcrypt"
import userModel from "../model/UserModel.js"
import asyncHandler from "express-async-handler"
import UserModel from "../model/UserModel.js"
import jwt from "jsonwebtoken"

//Get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await UserModel.find({})
  if (users) {
    res.status(200).json(users)
  } else {
    res.status(400)
    throw new Error("Couldnt fetch the data")
  }
})

//Get single auser
export const getMe = asyncHandler(async (req, res) => {
  const user = await userModel.findById(req.user.id)

  if (user) {
    const { _id, name } = user
    res.status(200).json({
      id: _id,
      name,
    })
  } else {
    res.status(400)
    throw new Error("cannot fetch the data")
  }
})

//Post a user
export const postUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body
  const user = await UserModel.findOne({ name })
  if (user) {
    res.status(400)
    throw new Error("User already exists")
  }
  if (!name || !password) {
    res.status(400)
    throw new Error("Empty field name or password")
  } else {
    const saltPassword = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, saltPassword)
    const newUser = await userModel.create({ name, password: hashedPassword })
    res.status(201).json({
      _id: newUser.id,
      name: newUser.name,
      token: genToken(newUser.id),
    })
  }
})

//Login method
export const loginUser = asyncHandler(async (req, res) => {
  const { name, password } = req.body
  if (!name || !password) {
    res.status(401)
    throw new Error("Empty credentials!")
  }
  const user = await UserModel.findOne({ name })
  if (!user) {
    res.status(400)
    throw new Error("User not found!")
  }
  const comparedPassword = await bcrypt.compare(password, user.password)

  if (comparedPassword) {
    res.status(200).json({
      _id: user.id,
      name: user.name,
      token: genToken(user.id),
    })
  } else {
    res.status(401)
    throw new Error("You are not authorized! check your credentials")
  }
})

//Put user
export const putUser = asyncHandler(async (req, res) => {
  const id = req.params.id
  const user = await userModel.findById(id)
  if (!user) {
    res.status(400)
    throw new Error("User not found")
  } else {
    const updatedUser = userModel.findByIdAndUpdate(req.body)
    res.status(200).json(updatedUser)
  }
})

//Delete User
export const deleteUser = asyncHandler(async (req, res) => {
  const id = req.params.id
  const user = await userModel.findById(id)
  if (!user) {
    res.status(400)
    throw new Error("User not found")
  } else {
    const deletedUser = await UserModel.findByIdAndDelete(id)
    res.status(200).json({
      name: deletedUser.name,
      deleted: true,
    })
  }
})

//Generate token
const genToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30 days" })
}

import Model from "../model/model.js"
import asyncHandler from "express-async-handler"

//Get categories
export const getRouter = asyncHandler(async (req, res) => {
  const catData = await Model.find({ owner: req.user.id })
  if (catData) {
    res.status(200).json(catData)
  } else {
    res.status(400)
    throw new Error("Cannot fetch the data")
  }
})

//Post category
export const postRouter = asyncHandler(async (req, res) => {
  const { name, amount } = req.body
  if (!name) {
    res.status(400)
    throw new Error("Empty field!")
  }
  const newCat = await Model.create({
    name: req.body.name,
    amount: req.body.amount,
    owner: req.user.id,
  })
  res.status(201).json(newCat)
})

//Put category
export const putRouter = asyncHandler(async (req, res) => {
  const id = req.params.id

  const catData = await Model.findById(id)
  if (catData) {
    const { amount } = req.body
    if (!amount) throw new Error("Empty field!")
    const newCat = await Model.findByIdAndUpdate(
      id,
      { $inc: { amount } },
      { new: true }
    )
    res.status(202).json(newCat)
  } else {
    res.status(400)
    throw new Error("Category does not exist")
  }
})

//Delete category
export const deleteRouter = asyncHandler(async (req, res) => {
  const id = req.params.id

  const catData = await Model.findById(id)
  if (catData) {
    const deleted = await Model.findByIdAndDelete(id)
    res.status(202).json(deleted)
  } else {
    res.status(400)
    throw new Error("Category does not exist")
  }
})

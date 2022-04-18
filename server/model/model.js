import mongoose from "mongoose"

const modelSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please type your category name"],
  },
  amount: {
    type: Number,
    default: 0,
    required: [true, "Please type your amount"],
  },
  date: {
    type: Date,
    default: new Date(),
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
  },
})

const model = mongoose.model("model", modelSchema)
export default model

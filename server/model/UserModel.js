import mongoose from "mongoose"

const User = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Empty name field"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Empty password field"],
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

const UserModel = mongoose.model("UserModel", User)
export default UserModel

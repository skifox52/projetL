import mongoose from "mongoose"

const ConnectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB Connected: ${connection.connection.host}`)
  } catch (error) {
    console.error(error)
    proces.exit(1)
  }
}

export default ConnectDb

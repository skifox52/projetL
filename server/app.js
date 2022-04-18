import express from "express"
import "dotenv/config"
import ConnectDb from "./config/db.js"
import ErrorHandler from "./Middleware/ErrorHandler.js"
import router from "./Routes/CATroutes.js"
import userRouter from "./Routes/UserRoutes.js"

const app = express()
const port = process.env.PORT || 5000

ConnectDb()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use("/categories", router)
app.use("/user", userRouter)
app.use(ErrorHandler)

app.listen(port, () => console.log(`Listening at port ${port}`))

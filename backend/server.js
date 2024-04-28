const express = require("express")
const connectDB = require("./config/db")
const router = require("./routes/book")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const PORT = process.env.PORT || 5000

connectDB()
app.use(express.json())
app.use(cors())
app.use("/books", router)

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
})
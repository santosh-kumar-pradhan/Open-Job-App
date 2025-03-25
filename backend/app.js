const express = require("express")
const morgan = require("morgan")
const app = express()
const cors = require("cors")

// body parser
app.use(express.json({}))
app.use(express.urlencoded({extended:false}))
app.use(morgan("dev"))
app.use(cors())

app.use("/api/v1",require("./routes"))

module.exports = app
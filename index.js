// Import Section

const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const ejs = require("ejs")
require("dotenv").config()

// Init. App

const app = express()
port = process.env.PORT || 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// View Engine

app.set("view engine", "ejs")
app.use(express.static("public"))

// Using Routes Middleware

app.use(require("./Routes/route"))

// Mongo Database Connection

DB_link = process.env.MONGODB_URL

mongoose
  .connect(DB_link)
  .then(() => {
    console.log("Connection Successful")
  })
  .catch((err) => {
    if (err) {
      console.log("Connection Unsuccessful")
    }
  })

// Server Start

app.listen(port, () => {
  console.error(`http://localhost:${port}`)
})

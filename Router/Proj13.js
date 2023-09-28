const express = require("express")
const path = require("path")
const app = express.Router()

const ststicpath = path.join(__dirname,"../13-image-slider-project");
app.use(express.static(ststicpath));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../13-image-slider-project/index.html"))
})

module.exports = app
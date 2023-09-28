const express = require("express")
const path = require("path")
const app = express.Router()

const ststicpath = path.join(__dirname,"../14-Dark-Mode-Toggle-project");
app.use(express.static(ststicpath));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../14-Dark-Mode-Toggle-project/index.html"))
})

module.exports = app
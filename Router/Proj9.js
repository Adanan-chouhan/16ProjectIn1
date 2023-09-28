const express = require("express")
const path = require("path")
const app = express.Router()

const ststicpath = path.join(__dirname,"../9-Blurred-Background-Popup-Project");
app.use(express.static(ststicpath));

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"../9-Blurred-Background-Popup-Project/index.html"))
})

module.exports = app
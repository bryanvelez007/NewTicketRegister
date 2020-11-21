const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(require("./rutas"))
app.listen(4000, function(){
console.log("SERVIDOR CORRIENDO");    
})
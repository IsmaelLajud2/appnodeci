const express = require("express");  
const app = express();
const port=3012;

app.get("/", (req,res) =>{
    res.status(200).json({
        message: "HOLA MUNDO"
    })
}) 

app.listen(port , () =>{
    console.log(`Servidor escuchando en http://localhost${port}`);
})
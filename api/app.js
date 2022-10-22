
const express = require("express");
const cors = require('cors')

const app = express();
const port = 5000;
app.use(cors())

//RUTAS
//Mensaje

app.get("/bienvenida", (req, res) => {
   
    let name = req.query.nombre
    let result = `Hola ${name}, como estas?`
  return res.status(200).json(result)

});
app.listen(port, () => console.log(`Escuchando por el puerto`, port));



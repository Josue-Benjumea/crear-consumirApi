//instalamos mongoose = npm install mongoose
const mongoose = require ("mongoose")
const url = ""
mongoose
.connect(url)
.then((db)= console.log("Conexion con db exitosa"))
.catch((err) => console.log(err))

module.exports = mongoose;
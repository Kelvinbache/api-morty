const express = require("express");

const app = express();
const puerto = 3000;

/*carpetas donde estan las rutas*/
const router = require('./router/router1');

/*donde esta la pagina Principal con boton*/
app.use('/',router);

/*pagina donde esta la api*/
app.use(router);

/*conectando y creando la ruta de la plantilla*/
app.set('views',__dirname + '/views');
app.set('views engine','ejs');

/*ultilizando los archovos estaticos*/
app.use(express.static(__dirname + '/public'))
/*mini funciones para sistema de la aplicacion*/

app.get('/',(req,res)=>{
    res.send('hello word i am from app');
})

app.listen(puerto,()=> {
    console.log("puerto activado")
})


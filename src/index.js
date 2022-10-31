import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
//importamos la ruta de los productos con el import 
import productoRouter from './routes/productos.routes'
// llamamos a la conexion de la base de datos (ejecutamos la base de datos)
import './database';


//crear una instancia de express es crear una variable app

const app = express();

// configurar un puerto
app.set('port', process.env.PORT || 4000);

app.listen( app.get('port'), ()=>{
    console.log('estoy en el puerto '+ app.get('port'))
})

//midlewares: funciones que se ejecutan antes de las rutas
//cors es para recibir peticiones permite conexiones remotas.
app.use(cors());

//de express son los siguientes
//permiten interpretar el formato json cuando alguien haga una peticion
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use(morgan('dev'));

// cargar un archivo estatico
app.use(express.static(path.join(__dirname, '../public')))
//aqui es la ruta donde esta ubicado 
// console.log(path.join(__dirname, '../public'));


//dotenv para tomar variables de entorno

//morgan nos da informacion en la terminal 

//rutas
// http://localhost:4000/prueba
app.use('/apicafe', productoRouter);
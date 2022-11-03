//aqui se conecta la base de datos
import mongoose from "mongoose";

//const url = 'mongodb://127.0.0.1:27017/cafecito'; /(si es q no anda el local host)

const url = 'mongodb+srv://jochyd:Lgg31105032@cluster0.0yclxwd.mongodb.net/cafecitodb';

mongoose.connect(url);

// aqui vemos si se ejecuta en la base de datos

const datosConexion = mongoose.connection;

datosConexion.once('open', ()=>{
    console.log('BD conectada');

})
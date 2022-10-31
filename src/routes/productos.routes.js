import { Router } from "express";
import { crearProductos, listarProductos } from "../controllers/productos.controllers";

const router = Router();
//esta es una ruta peticion get
router.route("/productos").get(listarProductos).post(crearProductos);

// app.get('/prueba', (req, res)=>{
//     res.send('esto es una prueba de una peticion get')
// })
// app.delete('/prueba', (req, res)=>{
//     res.send('aqui tendria que borrar un producto o dato')
// })
export default router;

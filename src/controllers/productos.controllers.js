import Producto from "../models/producto";

// aqui va la logica de como vamos a trabajar los productos

export const listarProductos = async(req, res) => {
    try{
        //busco en la bd la coleccion de productos
        const productos = await Producto.find();
        //envio la respuesta al frontend
        res.status(200).json(productos);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los productos'
        });
    }
};

export const crearProductos = async(req, res) => {
    try{
        console.log(req.body)
        //tomar el body y validarlo
    
        //guardar ese objeto en la BD
        const productoNuevo = new Producto(req.body);
        await productoNuevo.save();
        res.status(201).json({
            mensaje: 'El producto fue creado correctamente'
        });
        
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'ocurrio un error al intentar agregar un producto'
        });
    }
};

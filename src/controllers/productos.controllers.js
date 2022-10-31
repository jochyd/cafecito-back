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

export const obtenerProductos = async(req, res) => {
    try{
       // extraer el id de la ruta
        console.log(req.params.id)
       //buscar en la BD el producto que coincida con el id
        const productoBuscado = await Producto.findById(req.params.id);
       //respondes con el producto encontrado
        res.status(200).json(productoBuscado);
    }catch(error){
        console.log(error);
        res.status(404).json({
            mensaje: 'Error no se encontro el producto buscado'
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

export const editarProducto = async(req, res) =>{
    try{
        //extraer el parametro de la ruta y los datos del objeto 
        //validar los datos
        //solicitar a la bd actualizar el producto
        await Producto.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'El producto pudo ser actualizado'
        })
        //respondemos al frontend
    }catch(error){
        console.log(error);
        res.status(400).json({
            mensaje: 'error al intentar editar un producto'
        });
    }
}
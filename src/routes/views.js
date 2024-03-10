const { Router } = require('express');
const router = Router();

// Importamos el Product Manager para traer los productos.
const ProductManager = require(`${__dirname}/../controllers/productManager`);
const manager = new ProductManager(`${__dirname}/../../db/products.json`);

router.get('/home', async (req, res) => {
    const products = await manager.getProducts();

    res.render('home', {
        title: "All Products",
        scripts: [],
        styles: ['home.css'],
        useWS: false,
        products
    })
})
router.get('/realtimeproducts', (req, res) => {
    const wsServer = req.app.get('ws');

    // Al establecer una conexion con un cliente:
    wsServer.on('connection', async (socket) => {
        socket.emit('get-products', (await manager.getProducts()));
    })

    res.render('realTimeProducts', {
        title: "Real Time Prodcuts",
        scripts: ['realTime.js'],
        styles: ['home.css'],
        useWS: true,
    })
})

module.exports = router;

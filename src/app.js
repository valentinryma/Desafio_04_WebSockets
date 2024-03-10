// Importamos Express y Express-Handlebars / Instancia de Express (app)
const express = require('express')
const handlebars = require('express-handlebars');
const app = express();

app.use(express.static(`${__dirname}/../public`))

// Importamos Socket io: Clase para instanciar un servidor WebSocket
const { Server } = require('socket.io');

// Importamos el Router encargado de manegar las vistas.
const viewsRouter = require(`${__dirname}/routes/views.js`);
const productsRouter = require(`${__dirname}/routes/products.js`);

// Config. Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config. Handlebars
app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

// Router Views
app.use('/', viewsRouter);
app.use('/api/products', productsRouter);

// HTTP Server
const PORT = process.env.PORT || 8080
const httpServer = app.listen(PORT, () => {
    console.log(`Rutas:
        - http://localhost:${PORT}/ 
        - http://localhost:${PORT}/realtimeproducts
    `)
});

// WebSocket Server
const wsServer = new Server(httpServer);
app.set('ws', wsServer); // req.app.get('ws'): Devuelve el Web Socket Server.

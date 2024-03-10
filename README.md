********
# Entrega desafio: #4
********

**Descripción:** Gestor de productos realizado con Handlebars y utilizando WebSockets 
**Comando NPM:**
* `npm start`: Inicia el serivdor
* `npm reset`: Resetea los archivos (Simulan base de datos)
**Endpoints:**
* /realtimeproducts: Listado de Productos (Utiliza WebSocket: HTTP + WS)
* /home: Listado de Productos (Utiliza Servidor Express: HTTP)
* /api/products: API REST (GET - POST - PUT - DELETE, Endpoint para ver los cambios reflejados en /realtimeproducts)

const socket = io();

// Obtiene los productos enviados por el servidor.
socket.on('get-products', (products) => {
    const productsBox = document.getElementById('products'); // Tbody donde se le agregaran los productos en celdas

    //Limpia pantalla
    productsBox.innerHTML = '';

    for (const product of products) {
        productsBox.innerHTML += `<tr>
        <td id="p-id">${product.id}</td>
        <td id="p-title">${product.title}</td>
        <td id="p-code">${product.code}</td>
        <td id="p-price">${product.price}</td>
        <td id="p-status">${product.status}</td>
        <td id="p-stock">${product.stock}</td>
        <td id="p-category">${product.category}</td>
        <td id="p-thumbnails">
            <img src="${product.thumbnails[0]}" alt="Thumbnail">
        </td>
    </tr>`
    }
})

// Al crear un producto nuevo, lo agrega al resto
socket.on('post-product', (product) => {
    const productsBox = document.getElementById('products');
    productsBox.innerHTML += `<tr>
        <td id="p-id">${product.id}</td>
        <td id="p-title">${product.title}</td>
        <td id="p-code">${product.code}</td>
        <td id="p-price">${product.price}</td>
        <td id="p-status">${product.status}</td>
        <td id="p-stock">${product.stock}</td>
        <td id="p-category">${product.category}</td>
        <td id="p-thumbnails">
            <img src="${product.thumbnails[0]}" alt="Thumbnail">
        </td>
    </tr>`
})

socket.on('delete-product', (products) => {
    const productsBox = document.getElementById('products'); // Tbody donde se le agregaran los productos en celdas

    //Limpia pantalla
    productsBox.innerHTML = '';

    for (const product of products) {
        productsBox.innerHTML += `<tr>
        <td id="p-id">${product.id}</td>
        <td id="p-title">${product.title}</td>
        <td id="p-code">${product.code}</td>
        <td id="p-price">${product.price}</td>
        <td id="p-status">${product.status}</td>
        <td id="p-stock">${product.stock}</td>
        <td id="p-category">${product.category}</td>
        <td id="p-thumbnails">
            <img src="${product.thumbnails[0]}" alt="Thumbnail">
        </td>
    </tr>`
    }
})


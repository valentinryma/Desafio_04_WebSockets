const { resetDB } = require(`${__dirname}/utils.js`)
const backUpProductos = `${__dirname}/../db/bk/pbk.json`;
const productosFile = `${__dirname}/../db/products.json`;

console.log('Reset in progress...')
resetDB(backUpProductos, productosFile);
console.log('Reset completed ✔')

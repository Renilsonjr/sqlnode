const http = require('http'); // instancia de http
const app = require('./app'); // app

const port = process.env.port || 3000; // Definindo porta padrão
const server = http.createServer(app); // Criando app e escutando ele na porta padrão

server.listen(port); // ouvindo requisições na porta padrão


let http = require('http');

http.createServer(function (req, res) {
    res.end('<h1>Bem vindo ao site!</h1>');
}).listen(8181, function () {
    console.log('Servidor rodando na porta 8181');
});
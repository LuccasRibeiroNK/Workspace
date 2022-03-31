const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo!');
});

app.get('/blog', (req, res) => {
    res.send('Bem vindo ao meu Blog');
});

app.get('/canal', (req, res) => {
    res.send('Bem vindo ao meu Canal');
})

app.get("/canal/youtube", (req, res) => {
    res.send("Bem vindo ao canal do Youtube");
});

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Erro ao iniciar o servidor");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
});
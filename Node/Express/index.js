const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Bem vindo!');
});

app.get('/blog/:artigo?', (req, res) => {
    const artigo = req.params.artigo;
    if (artigo) {
        res.send(`Bem vindo ao blog do artigo ${artigo}`);
    } else {
        res.send('Bem vindo ao blog');
    }
    res.send('Bem vindo ao meu Blog');

});

app.get('/canal', (req, res) => {
    res.send('Bem vindo ao meu Canal!');
})

app.get("/canal/youtube", (req, res) => {
    let canal = req.query['canal'];
    if (canal) {
        res.send(`Bem vindo ao canal ${canal}`);
    } else {
        res.send('Bem vindo ao canal');
    }

});

app.get("/ola/:nome?/:empresa?", (req, res) => {
    let nome = req.params.nome;
    let empresa = req.params.empresa;
    if (!nome) {
        res.send("<h1>Seu nome não foi informado!</h1>");
    } else {
        if (empresa) {
            res.send(`<h1>Olá ${nome}, da empresa ${empresa}</h1>`);
        } else {
            res.send(`<h1>Olá ${nome}</h1>`);
        }
    }
});

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Erro ao iniciar o servidor");
    } else {
        console.log("Servidor iniciado com sucesso");
    }
});
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;
    let exibirMsg = true;
    res.render('index', {
        nome: nome,
        lang: lang,
        empresa: "Sergipe Dev",
        inscritos: 8000,
        msg: exibirMsg
    });
});

app.listen(8181, () => {
    console.log("Servidor rodando na porta 8181");
});
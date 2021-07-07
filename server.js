const express = require('express');
require("./server/config.js");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/usuario', function(req, res) {
    res.json("get Usuario");
});

app.put('/usuario', function(req, res) {
    let body = req.body;

    if (body.nombre == undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es requerido'
        })
    } else {
        res.json({
            persona: body
        });
    }
});

app.post('/usuario', function(req, res) {
    res.json("post Usuario");
});

app.delete('/usuario', function(req, res) {
    res.json("delete Usuario");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto:", 3000);
});
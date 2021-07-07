const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/usuario');

const app = express();

app.get('/usuario', function(req, res) {
    res.json("get Usuario");
});

app.put('/usuario', function(req, res) {
    let body = req.body;

    let usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        role: body.role
    });

    usuario.save((err, usuarioDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            })
        }

        res.json({
            ok: true,
            usuario: usuarioDB
        })
    })

    /*  if (body.nombre == undefined) {
         res.status(400).json({
             ok: false,
             mensaje: 'El nombre es requerido'
         })
     } else {
         res.json({
             persona: body
         });
     } */
});

app.post('/usuario', function(req, res) {
    res.json("post Usuario");
});

app.delete('/usuario', function(req, res) {
    res.json("delete Usuario");
});

module.exports = app;
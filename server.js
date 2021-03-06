const express = require('express');
require("./server/config.js");
const mongoose = require('mongoose');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(require('./server/routes/usuario'));

mongoose.connect(process.env.URLDB, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true },
    (err, res) => {
        if (err) throw err;

        console.log("Base de Datos ONLINE!");
    });

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto:", process.env.PORT);
});
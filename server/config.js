// -----------------------------
// Puerto
//-------------------------------

process.env.PORT = process.env.PORT || 3000;

// -----------------------------
// Base de datos
//-------------------------------

process.env.NODE_ENV = process.env.NODE_ENV || "dev";
let urlDB;

if (process.env.NODE_ENV == "dev") {
    urlDB = 'mongodb+srv://Sorel:violadores@viernes.2qyqm.mongodb.net/cafe?retryWrites=true&w=majority'
} else {
    urlDB = 'mongodb+srv://Sorel:violadores@viernes.2qyqm.mongodb.net/cafe?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;
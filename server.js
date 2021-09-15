const path = require('path');
const express= require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'visaj',
    password: '100288',
    database: 'visaj',
    port: '8889'
});

app.use(express.static(path.join(__dirname, '/public')))
    .get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database");

    var result = db.query(
        `SELECT * FROM products`, function (err, result) {
            if (err) throw err;
            console.log(result);

            // Object.keys(result).forEach(function(key) {
            //     var row = result[key];
            //     console.log(row.id_product)
            // });


        }
    );


    io.on('index', function (socket) {
        socket.emit('produits', result);
    });



});

server.listen(8080);
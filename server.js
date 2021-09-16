const path = require('path');
const express= require('express');

const app = express();
const serverNode = require('http').createServer(app);
const io = require('socket.io')(serverNode);
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

db.connect();

io.on('connection', function (socket) {

    db.query(
        `SELECT * FROM products`, function (err, result) {
            if (err) throw err;

            socket.emit('produits', result);
        }
    );


});

serverNode.listen(8182);
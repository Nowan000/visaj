const path = require('path');
const express= require('express');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'visaj'
});

db.connect(function (err) {
    if (err) throw err;
    console.log("Connected to database");

    app.use(express.static(path.join(__dirname, '/public')))
        .get('/', (req, res) => {
            res.sendFile(__dirname + '/public/inscription.html');
        });
    io.on('/', function (socket) {
        socket.on('signIn', newUser => {
            db.query(
                `INSERT INTO table users (user_firstname, user_lastname, user_password, user_email) VALUES (
                    "${newUser.firstName}",
                    "${newUser.lastName}", 
                    "${newUser.password}", 
                    "${newUser.email}")`
            );
        });
    });
    io.on('/connexion', function (socket) {
        socket.on('connection', userConnexion => {
            db.query(`SELECT user_email, user_password FROM users WHERE user_email = ${userConnection.email}`, function (err, result) {
                if (err) throw err;
                if (result.user_password === userConnection.password){
                    socket.emit('isConnect', true);
                }
            });
        });
    });
});

server.listen(8080);
const path = require('path');
const express = require('express');
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

db.connect();
app.use(express.static(path.join(__dirname, '/public')))
    .get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })
    .get('/inscription', (req, res) => {
        res.sendFile(__dirname + '/public/inscription.html');
    })
    .get('/connexion', (req, res) => {
        res.sendFile(__dirname + '/public/connexion.html');
    })
    .post('/inscription', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })
    .post('/connexion', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    });

io.on('connection', function (socket) {
    db.query(
        `SELECT * FROM products`, function (err, result) {
            if (err) throw err;

            socket.emit('produits', result);
        }
    );
    socket.on('signIn', newUser => {
        db.query(
            `INSERT INTO carts (user_id) VALUES ( 
                ${newUser.userId}
            )`, function (err) {
            if (err) throw err;

            db.query(`SELECT id_cart FROM carts WHERE user_id = ${newUser.userId}`, (err, result) => {
                if (err) throw err;
                console.log(result[0].id_cart);
                db.query(`INSERT INTO users (user_firstname, user_lastname, user_password, user_email, cart_user_id) VALUES (
                    "${newUser.firstName}",
                    "${newUser.lastName}", 
                    "${newUser.password}", 
                    "${newUser.email}",
                    ${result[0].id_cart})`
                ), function (err) {
                        if (err) throw err;
                        console.log("user added to database successfully");
                    }
            });
        });
    });

    socket.on('connexion', userConnexion => {
        db.query(`SELECT user_password FROM users WHERE user_email = "${userConnexion.email}"`, function (err, result) {
            if (err) throw err;
            if (result[0].user_password == userConnexion.password) {
                socket.emit('isConnect');
            } else {
                console.log("wrong password");
            }
        });
    });
    socket.on('disconnect', () => {
        socket.emit('deco');
    });
});


server.listen(8080);
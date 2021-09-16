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

db.connect();

// app.use(express.static(path.join(__dirname, '/public')))
//     .get('/', (req, res) => {
//         res.sendFile(__dirname + '/index.html');
//     })

app.use(express.static(path.join(__dirname, '/public')))
    .get('/index', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    })
    .get('/inscription', (req, res) => {
        res.sendFile(__dirname + '/public/inscription.html');
    })
    .get('/connexion', (req, res) => {
        res.sendFile(__dirname + '/public/connexion.html');
    })
    .post('/inscription', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
        //res.sendFile(__dirname + '/public/inscription.html');
    })
    .post('/connexion', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });



io.on('connection', function (socket) {

    db.query(
        `SELECT * FROM products`, function (err, result) {
            if (err) throw err;

            socket.emit('produits', result);
        }
    );

    db.query(
        `SELECT product_id FROM carts WHERE user_id=50`, function (err, result) {
            if (err) throw err;

            console.log(result);

            socket.emit('panier', result);
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

    socket.on('addCart', newCart => {

        console.log(newCart);

        db.query(
            `INSERT INTO carts (user_id, product_id)
             VALUES (${newCart.idUser}, ${newCart.idProduct})`, function (err) {
                if (err) throw err;
            });
    });
});

serverNode.listen(8182);
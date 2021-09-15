const express = require('express') 
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const mysqlUtilities = require('./utilities/MysqlUtilities');
const Products = require('utilities/Products');
const fs = require('fs'); 


app.use(bodyParser.json());

let imgSrc = 'images/produits/perruque-blonde-platine-star-de-cinema-de.jpg';
let titre = 'titre1';
let description = 'blabla';
let prix = '20';
let typeProduit;
let id;
let nbProduits = 34;
let nbLignes = nbProduits/4;


var produit = '<div class="card me-3 sm col-3 mb-4" style="width: 18rem;">\n' +
    '                <img src="' + imgSrc + '" class="card-img-top" alt="' + titre + '">\n' +
    '                <div class="card-body">\n' +
    '                    <h5 class="card-title">' + titre + '</h5>\n' +
    '                    <p class="card-text">' + description + '</p>\n' +
    '                    <div class="d-flex flex-row justify-content-around align-items-center">\n' +
    '                        <button class="btn btn-primary btn-add">Ajouter</button>\n' +
    ' <button class="btn btn-dark btn-compare" data-bs-toggle="modal" data-bs-target="#exampleModal">Comparer</button>\n'  +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>';

for (i=0; i<nbLignes; i++) {

    document.getElementById("corps").innerHTML;

    for (c=0; c<4; c++) {
        document.getElementById("corps").innerHTML += produit;
    }

    document.getElementById("corps").innerHTML;
}

let button = document.querySelector('.btn-add'); 
button.addEventListener('click', addCartIcon);

var cartIcon = document.getElementById('cart-icon');
var cartIconCount = document.getElementById('cart-icon-count');
var quantityCounter = 0;


function addCartIcon() {
    quantityCounter++;
    cartIconCount.innerHTML = quantityCounter; 
}


let compare = document.querySelector('.btn-compare'); 
compare.addEventListener('click', compareproducts)

function compareproducts() {
    
}

app.get('/products', (req, res) => {
  
    fs.appendFile('logs.txt', 'errors', (error) => {
        if (error) throw error;
        console.log('All errors logs were appended to file!');
      });
    mysqlUtilities.getAllProducts
    ((result, error) => {
        if(!error) {
            res.send(result)
        }else {
            res.status(500).send(error)
        }
    })
});

app.get('/products/:id_product', (req, res) => {
    let id_product = req.params.id_product
    fs.appendFile('logs.txt', 'errors', (error) => {
        if (error) throw error;
        console.log('All errors logs were appended to file!');
      });
    mysqlUtilities.getProductType
    (id_product,(result, error) => {
        if(!error) {
            res.send(result)
        }else {
            res.status(500).send(error)
        }
    })

});
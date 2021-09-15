const express = require('express') 
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const mysqlUtilities = require('./utilities/MysqlUtilities');
const Products = require('utilities/Products');
const fs = require('fs'); 


app.use(bodyParser.json());

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
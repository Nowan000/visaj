let mysql = require('mysql');

const config = {
    host : "localhost",
    user : "root", 
    password : '', 
    database : 'visaj'
};

class MysqlUtilities {

    getAllProducts(callback){
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query('SELECT * FROM products', (error, results) => {
            callback(results, error)
        })
        connection.end()
    }

    getProductType(id_product, callback){
        let connection = mysql.createConnection(config);
        connection.connect();
        connection.query('SELECT product_type FROM products WHERE id=?', [id_product], (error, results) => {
            callback(results, error)
        })
        connection.end()
    }
}

// Export the class and methods
module.exports = new MysqlUtilities();
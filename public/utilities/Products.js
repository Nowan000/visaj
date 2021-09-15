class Products {
    id_product
    product_name
    product_type
    product_image
    product_price
    product_description 
    cart_product_id
    
    constructor(product_name, product_type, product_image, product_price, product_description, cart_product_id) {
        this.id_product= null;
        this.product_name = product_name 
        this.product_type = product_type
        this.product_image = product_image
        this.product_price = product_price
        this.product_description = product_description
        this.cart_product_id = cart_product_id
    }
}

// Export only the class
module.exports = Products;
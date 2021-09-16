let socket = io.connect();

let windowsSize = window.innerWidth;

load();

// jQuery(function($){
//     var windowWidth = $(window).width();
//     var windowHeight = $(window).height();
//
//     $(window).resize(function() {
//         if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
//             setTimeout(function(){ location.reload(); }, 500);
//             return;
//         }
//     });
// });

function load() {

    socket.on('produits', result => {

        if(windowsSize >= 1400) {

            let imgSrc;
            let titre;
            let description;
            let prix;
            let typeProduit;
            let id;

            let produit;

            let ligneProduitId = 0;
            let ligneProduitIdString;

            Object.keys(result).forEach(function(key) {

                var row = result[key];

                imgSrc = row.product_image;
                titre = row.product_name;
                description = row.product_description;
                prix = row.product_price;
                typeProduit = row.product_type;
                id = row.id_product;

                produit = '<div class="card me-3 sm" style="width: 18rem;">\n' +
                    '                <img src="' + imgSrc + '" class="card-img-top" alt="' + titre + '">\n' +
                    '                <div class="card-body d-flex align-content-end flex-wrap">\n' +
                    '                    <h5 class="card-title">' + titre + '</h5>\n' +
                    '                    <p class="card-text">' + description + '</p>\n' +
                    '                    <div class="d-flex flex-row justify-content-around align-items-center sizeButtonCard">\n' +
                    '                        <button type="submit" class="btn btn-primary" id="'+ id +'" onclick="addCart(id)">Ajouter</button>\n' +
                    '                        <div class="form-check form-switch">\n' +
                    '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
                    '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>';

                if (key%4 === 0) {

                    ligneProduitIdString = ligneProduitId.toString();
                    document.getElementById("corps").innerHTML += '' +
                        '<div class="container-xxl mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+ligneProduitIdString+'">';
                }

                document.getElementById("ligneProduit"+ligneProduitIdString).innerHTML += produit;

                if (key%4+4 === 4) {
                    document.getElementById("corps").innerHTML += '</div>';
                    ligneProduitId++;
                }
            });
        }

        if(windowsSize >= 990 && windowsSize <1400) {

            let imgSrc;
            let titre;
            let description;
            let prix;
            let typeProduit;
            let id;

            let produit;

            let ligneProduitId = 0;

            Object.keys(result).forEach(function(key) {

                var row = result[key];

                imgSrc = row.product_image;
                titre = row.product_name;
                description = row.product_description;
                prix = row.product_price;
                typeProduit = row.product_type;
                id = row.id_product;

                produit = '<div class="card me-3 sm" style="width: 18rem;">\n' +
                    '                <img src="' + imgSrc + '" class="card-img-top" alt="' + titre + '">\n' +
                    '                <div class="card-body d-flex align-content-end flex-wrap">\n' +
                    '                    <h5 class="card-title">' + titre + '</h5>\n' +
                    '                    <p class="card-text">' + description + '</p>\n' +
                    '                    <div class="d-flex flex-row justify-content-around align-items-center sizeButtonCard">\n' +
                    '                        <button type="submit" class="btn btn-primary" id="'+ id +'" onclick="addCart(id)">Ajouter</button>\n' +
                    '                        <div class="form-check form-switch">\n' +
                    '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
                    '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>';

                if (key%3 === 0) {

                    ligneProduitIdString = ligneProduitId.toString();
                    document.getElementById("corps").innerHTML += '' +
                        '<div class="container-xl mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+ligneProduitIdString+'">';
                }

                document.getElementById("ligneProduit"+ligneProduitIdString).innerHTML += produit;

                if (key%3+3 === 3) {
                    document.getElementById("corps").innerHTML += '</div>';
                    ligneProduitId++;
                }
            });
        }

        if(windowsSize >= 770 && windowsSize <990) {

            let imgSrc;
            let titre;
            let description;
            let prix;
            let typeProduit;
            let id;

            let produit;

            let ligneProduitId = 0;

            Object.keys(result).forEach(function(key) {

                var row = result[key];

                imgSrc = row.product_image;
                titre = row.product_name;
                description = row.product_description;
                prix = row.product_price;
                typeProduit = row.product_type;
                id = row.id_product;

                produit = '<div class="card me-3 sm" style="width: 18rem;">\n' +
                    '                <img src="' + imgSrc + '" class="card-img-top" alt="' + titre + '">\n' +
                    '                <div class="card-body d-flex align-content-end flex-wrap">\n' +
                    '                    <h5 class="card-title">' + titre + '</h5>\n' +
                    '                    <p class="card-text">' + description + '</p>\n' +
                    '                    <div class="d-flex flex-row justify-content-around align-items-center sizeButtonCard">\n' +
                    '                        <button type="submit" class="btn btn-primary" id="'+ id +'" onclick="addCart(id)">Ajouter</button>\n' +
                    '                        <div class="form-check form-switch">\n' +
                    '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
                    '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>';

                if (key%2 === 0) {

                    ligneProduitIdString = ligneProduitId.toString();
                    document.getElementById("corps").innerHTML += '' +
                        '<div class="container-lg mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+ligneProduitIdString+'">';
                }

                document.getElementById("ligneProduit"+ligneProduitIdString).innerHTML += produit;

                if (key%2+2 === 2) {
                    document.getElementById("corps").innerHTML += '</div>';
                    ligneProduitId++;
                }
            });
        }

        if(windowsSize <770) {

            let imgSrc;
            let titre;
            let description;
            let prix;
            let typeProduit;
            let id;

            let produit;

            let ligneProduitId = 0;

            Object.keys(result).forEach(function(key) {

                var row = result[key];

                imgSrc = row.product_image;
                titre = row.product_name;
                description = row.product_description;
                prix = row.product_price;
                typeProduit = row.product_type;
                id = row.id_product;

                produit = '<div class="card me-3 sm" style="width: 18rem;">\n' +
                    '                <img src="' + imgSrc + '" class="card-img-top" alt="' + titre + '">\n' +
                    '                <div class="card-body d-flex align-content-end flex-wrap">\n' +
                    '                    <h5 class="card-title">' + titre + '</h5>\n' +
                    '                    <p class="card-text">' + description + '</p>\n' +
                    '                    <div class="d-flex flex-row justify-content-around align-items-center sizeButtonCard">\n' +
                    '                        <button type="submit" class="btn btn-primary" id="'+ id +'" onclick="addCart(id)">Ajouter</button>\n' +
                    '                        <div class="form-check form-switch">\n' +
                    '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
                    '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
                    '                        </div>\n' +
                    '                    </div>\n' +
                    '                </div>\n' +
                    '            </div>';

                if (key%1 === 0) {

                    ligneProduitIdString = ligneProduitId.toString();
                    document.getElementById("corps").innerHTML += '' +
                        '<div class="container-md mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+ligneProduitIdString+'">';
                }

                document.getElementById("ligneProduit"+ligneProduitIdString).innerHTML += produit;

                if (key%1+1 === 1) {
                    document.getElementById("corps").innerHTML += '</div>';
                    ligneProduitId++;
                }
            });
        }
    });
}

function addCart(id) {

    let idProduct = document.getElementById(id).id;

    /*TO DO : RECUPERER USER ID */
    let idUser = 50;

    let newCart = {
        idProduct : idProduct,
        idUser : idUser,
    }

    console.log(newCart);

    socket.emit('addCart', newCart);
}
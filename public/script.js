let socket = io();
let windowsSize = window.innerWidth;

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
                '                <div class="card-body">\n' +
                '                    <h5 class="card-title">' + titre + '</h5>\n' +
                '                    <p class="card-text">' + description + '</p>\n' +
                '                    <div class="d-flex flex-row justify-content-around align-items-center">\n' +
                '                        <a href="#" class="btn btn-primary">Ajouter</a>\n' +
                '                        <div class="form-check form-switch">\n' +
                '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
                '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>';

            if (key%4 === 0) {

                document.getElementById("corps").innerHTML += '' +
                    '<div class="container-xxl mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+ligneProduitId+'">';
            }

            document.getElementById("ligneProduit"+ligneProduitId).innerHTML += produit;

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
                '                <div class="card-body">\n' +
                '                    <h5 class="card-title">' + titre + '</h5>\n' +
                '                    <p class="card-text">' + description + '</p>\n' +
                '                    <div class="d-flex flex-row justify-content-around align-items-center">\n' +
                '                        <a href="#" class="btn btn-primary">Ajouter</a>\n' +
                '                        <div class="form-check form-switch">\n' +
                '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
                '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>';

            if (key%3 === 0) {

                document.getElementById("corps").innerHTML += '' +
                    '<div class="container-xl mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+ligneProduitId+'">';
            }

            document.getElementById("ligneProduit"+ligneProduitId).innerHTML += produit;

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
                '                <div class="card-body">\n' +
                '                    <h5 class="card-title">' + titre + '</h5>\n' +
                '                    <p class="card-text">' + description + '</p>\n' +
                '                    <div class="d-flex flex-row justify-content-around align-items-center">\n' +
                '                        <a href="#" class="btn btn-primary">Ajouter</a>\n' +
                '                        <div class="form-check form-switch">\n' +
                '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
                '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>';

            if (key%2 === 0) {

                document.getElementById("corps").innerHTML += '' +
                    '<div class="container-lg mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+ligneProduitId+'">';
            }

            document.getElementById("ligneProduit"+ligneProduitId).innerHTML += produit;

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
                '                <div class="card-body">\n' +
                '                    <h5 class="card-title">' + titre + '</h5>\n' +
                '                    <p class="card-text">' + description + '</p>\n' +
                '                    <div class="d-flex flex-row justify-content-around align-items-center">\n' +
                '                        <a href="#" class="btn btn-primary">Ajouter</a>\n' +
                '                        <div class="form-check form-switch">\n' +
                '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
                '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
                '                        </div>\n' +
                '                    </div>\n' +
                '                </div>\n' +
                '            </div>';

            if (key%1 === 0) {

                document.getElementById("corps").innerHTML += '' +
                    '<div class="container-md mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+ligneProduitId+'">';
            }

            document.getElementById("ligneProduit"+ligneProduitId).innerHTML += produit;

            if (key%1+1 === 1) {
                document.getElementById("corps").innerHTML += '</div>';
                ligneProduitId++;
            }
        });
    }

        // let imgSrc = result[0];
        // let titre = 'titre1';
        // let description = 'blabla';
        // let prix = '20';
        // let typeProduit;
        // let id;
        // let nbProduits = 34;
        // let nbLignes = nbProduits/4;
        //
        // var ligne = '<div class="container-xxl mt-3 d-flex flex-row justify-content-around" id="ligneProduit">';
        //
        // var produit = '<div class="card me-3 sm" style="width: 18rem;">\n' +
        //     '                <img src="' + imgSrc + '" class="card-img-top" alt="' + titre + '">\n' +
        //     '                <div class="card-body">\n' +
        //     '                    <h5 class="card-title">' + titre + '</h5>\n' +
        //     '                    <p class="card-text">' + description + '</p>\n' +
        //     '                    <div class="d-flex flex-row justify-content-around align-items-center">\n' +
        //     '                        <a href="#" class="btn btn-primary">Ajouter</a>\n' +
        //     '                        <div class="form-check form-switch">\n' +
        //     '                            <input class="form-check-input" type="checkbox" id="' + id + '">\n' +
        //     '                            <label class="form-check-label" for="' + id + '">A COMPARER</label>\n' +
        //     '                        </div>\n' +
        //     '                    </div>\n' +
        //     '                </div>\n' +
        //     '            </div>';
        //
        // var finDiv = '</div>';
        //
        // for (i=0; i<nbLignes; i++) {
        //
        //     document.getElementById("corps").innerHTML += '<div class="container-xxl mt-3 d-flex flex-row justify-content-around" id="ligneProduit'+i+'">';
        //
        //     for (c=0; c<4; c++) {
        //         document.getElementById("ligneProduit"+i).innerHTML += produit;
        //     }
        //
        //     document.getElementById("corps").innerHTML += '</div>';
        // }


});




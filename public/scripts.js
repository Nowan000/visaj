let socket = io();
let isConnected = false;
let userId = 1;
//connection
const form = document.querySelector('form');
// let connectionForm = document.querySelector('#connexion');
let userPwd = document.querySelector('#user_password');
let userMail = document.querySelector('#user_email');
form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.action);
    if (form.action === "http://localhost:8080/inscription"){
        
        let userLName = document.querySelector('#user_lastname');
        let userFName = document.querySelector('#user_firstname');

        
        let newUser = {
            lastName : userLName.value,
            firstName : userFName.value,
            password : userPwd.value,
            email: userMail.value,
            userId: userId,
        }
        console.log("inscription");
        socket.emit('signIn', newUser);
        userId++;
    } else if (form.action === "http://localhost:8080/connexion"){
        

        let userConnexion = {
                    email: userMail.value,
                    password : userPwd.value,
                }
                socket.emit('connexion', userConnexion);
                
    }

});

socket.on('isConnect', state => {
    isConnected = true;
    console.log(`connecté : ${isConnected}`);
});

socket.on('deco', () => {
    isConnected = false;
    console.log(`connecté : ${isConnected}`);
});
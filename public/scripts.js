let socket = io();
let isConnected = false;

//connection
let userLName = document.querySelector('#user_lastname');
let userFName = document.querySelector('#user_firstname');
let userPwd = document.querySelector('#user_password');
let userMail = document.querySelector('#user_email');
let signInForm = document.querySelector('#signIn');
let connectionForm = document.querySelector('#connexion');

signInForm.addEventListener('submit', e => {
    e.preventDefault();
    let newUser = {
        lastName : userLName.value,
        firstName : userFName.value,
        password : userPwd.value,
        email: userMail.value,
    }
    socket.emit('signIn', newUser);
});

connectionForm.addEventListener('submit', () => {
    let userConnection = {
        email: userMail.value,
        password : userPwd.value,
    }
    socket.emit('connection', userConnection);
});

socket.on('isConnect', state => {
    isConnected = state;
});

socket.on('disconnect', () => {
    isConnected = false;
});
//JS MAIL

//creazione array con em-mail autorizzate;

const emailAutorizzate = ["joe@gmail.com", "marco@gmail.com", "attila@libero.it"];

//Chiedi l'e-mail all'utente

let inputUtente = document.getElementById('input-utente');
let logInButton = document.getElementById('accedi');
let validator = 'Email non corretta';
const pValidator = document.querySelector('#validator');

//controllo autorizzazione 

logInButton.addEventListener('click', function(){
    let emailUtente = inputUtente.value;
    console.log(emailUtente);
    for (let i = 0; i < emailAutorizzate.length; i++) {
        if (emailUtente === emailAutorizzate[i]) {
            validator = 'E-mail valida';  
            pValidator.append(validator);      
        }
    }
    pValidator.append(validator);

});








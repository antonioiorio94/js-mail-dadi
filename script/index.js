//JS MAIL

//Chiedi l'e-mail all'utente

const inputUtente = document.getElementById('input-utente');
const logInButton = document.getElementById('accedi');

logInButton.addEventListener('click', function(){
    console.log('accedi');
    const emailUtente = inputUtente.value;
    console.log(emailUtente);

})
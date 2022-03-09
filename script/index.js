//JS MAIL

//creazione array con em-mail autorizzate;

let emailAutorizzate = ["joe@gmail.com", "marco@gmail.com", "attila@libero.it"];

//Chiedi l'e-mail all'utente

const inputUtente = document.getElementById('input-utente');
const logInButton = document.getElementById('accedi');

logInButton.addEventListener('click', function(){
    console.log('accedi');
    let emailUtente = inputUtente.value;
    console.log(emailUtente);

});



//controllo autorizzazione 

for (let i = 0; i < emailAutorizzate.lenght; i++) {
    if (emailUtente === emailAutorizzate[i]) {
        console.log('E-mail valida');
    }else{
        console.log('E-mail non valida');
    }
}


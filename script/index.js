//JS MAIL

//creazione array con em-mail autorizzate;

const emailAutorizzate = ["joe@gmail.com", "marco@gmail.com", "attila@libero.it"];

//Chiedi l'e-mail all'utente

let inputUtente = document.getElementById('input-utente');
let logInButton = document.getElementById('accedi');
let validator = true;
const pValidator = document.querySelector('#validator');

//controllo autorizzazione 

logInButton.addEventListener('click', function(){
    let emailUtente = inputUtente.value;
    console.log(emailUtente);
    for (let i = 0; i < emailAutorizzate.length; i++) {
        if (emailUtente === emailAutorizzate[i]) {
            validator = false;  
            pValidator.append("Email corretta");      
        }
    }
    pValidator.append("Email non corretta");

});



//JS DADI

//definisci due numeri random per le 6 facce dei dadi

let dadoGiocatore = Math.floor(Math.random() * 6) + 1;
let dadoComputer = Math.floor(Math.random() * 6) + 1;


//stampa i dadi

console.log(`Il tuo dado: ${dadoGiocatore}`);
console.log(`Il dado avversario: ${dadoComputer}`);


//dichiara il vincitore con if

if (dadoGiocatore > dadoComputer) {
    console.log("Hai vinto");
} else if (dadoGiocatore < dadoComputer) {
    console.log('Hai perso');
} else {
    console.log('Pareggio!');

}
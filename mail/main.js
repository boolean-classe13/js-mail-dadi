// Chiedi all'utente la sua email e controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

// chiedo l'email all'utente
var email_utente = prompt('Inserisci la tua email');
console.log('Email utente: ' + email_utente);

// dichiaro un array che contiene una lista di email
var lista_email = ['pippo@gmail.com', 'pluto@gmail.com', 'paperino@gmail.com'];
console.log('array email');
console.log(lista_email);

// dichiaro una variabile per ricordarmi se a qualche iterazione ho trovato la email dell'utente
var trovata_email = false;

// scorro tutti gli elementi dell'array e li prendo in esame uno alla volta
for (var i = 0; (i < lista_email.length) && (trovata_email == false); i++) {
    // recupero l'elemento corrente di ogni iterazione
    var email_corrente = lista_email[i];
    console.log('iterazione ' + i + ': ' + email_corrente);

    // verificare se l'elemento che sto prendendo in esame è uguale alla email dell'utente
    if(email_utente == email_corrente) {
        // se è vero devo ricordarmi di aver trovato la email dell'utente
        // devo impostare la variabile che tiene conto se ho trovato l'email = a true
        trovata_email = true;
        console.log('trovata email');
    } else {
        // l'email dell'utente è diversa dalla email che sto prendendo in considerazione in questa iterazione
        // continuo a cercare => non devo fare niente
        console.log("email diversa da quella dell'utente");
    }
}

// dopo aver verificato tutti gli elementi posso comunicare all'utente se la sua email è presente o no
if(trovata_email == true) {
    console.log('Sei in lista, puoi entrare');
} else {
    console.log('Non puoi accedere');
}


// pippo
// pluto ---
// paperino
// topolino

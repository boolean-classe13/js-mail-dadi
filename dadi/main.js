// chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!

// chiedo all'utente un numero tra 1 e 6
var numero_utente = parseInt(prompt('Inserisci un numero tra 1 e 6'));
console.log('numero utente: ' + numero_utente);

// procedimento A
if(isNaN(numero_utente) == false && numero_utente >= 1 && numero_utente <= 6) {
    // l'utente ha inserito un numero
    // questo numero è >= 1
    // ed è <= 6

    // genero un numero casuale tra 1 e 6
    var numero_pc = Math.floor(Math.random() * 6) + 1;
    console.log('numero pc: ' + numero_pc);

    // controllo se il numero dell'utente è maggiore del numero del pc
    if(numero_utente > numero_pc) {
        // se sì => ha vinto l'utente
        console.log('Hai vinto!');
    } else if (numero_utente == numero_pc) {
        // se no => verifico se hanno pareggiato
        // se sì => pareggio
        console.log('Pareggio');
    } else {
        // se no => ha vinto il pc
        console.log('Hai perso!');
    }

} else {
    console.log('hai inserito un valore non valido');
}

// procedimento B
if(isNaN(numero_utente) == true || numero_utente < 1 || numero_utente > 6) {
    // l'utente ha inserito un valore non numerico
    // oppure ha inserito un numero < 1
    // oppure ha inserito un numero > 6
    console.log('hai inserito un valore non valido');
} else {
    // l'utente ha inserito un numero valido

    // genero un numero casuale tra 1 e 6
    var numero_pc = Math.floor(Math.random() * 6) + 1;
    console.log('numero pc: ' + numero_pc);

    // controllo se il numero dell'utente è maggiore del numero del pc
    if(numero_utente > numero_pc) {
        // se sì => ha vinto l'utente
        console.log('Hai vinto!');
    } else if (numero_utente == numero_pc) {
        // se no => verifico se hanno pareggiato
        // se sì => pareggio
        console.log('Pareggio');
    } else {
        // se no => ha vinto il pc
        console.log('Hai perso!');
    }
}

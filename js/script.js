/* Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


var pcNumbers = [];

while (pcNumbers.length < 5) {

    var numRand = getRndInteger(1, 100);
    if (!pcNumbers.includes(numRand)) {
        pcNumbers.push(numRand) 
    }
}

alert(pcNumbers);

var userNumber = [];

while (userNumber.length < 5) {

    var number = parseInt(prompt('Inserisci un numero'));

    if(isNaN(number) || number <= 0 || number > 100) {
        alert('Puoi inserire solo i numeri da 1 a 100!')
    }

    if (!userNumber.includes(number)) {
        userNumber.push(number);
    } else{
        alert('Hai già inserito questo numero');
    }
}

var timeLeft=30;

var countdown = setInterval( timer, 1000);















//-------------- FUNCTIONS ------------- //

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function timer() {

    if (timeLeft == 0) {
        console.log('Tempo scaduto');
        
    } else {
        timeLeft -=1;
        console.log(timeLeft); 
    }
    
}
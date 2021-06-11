/* Descrizione:
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati. */


var pcNumbers = [], userNumber = [], found = [], result ;

// Algorithm to generate pc numbers
while (pcNumbers.length < 5) {
    var numRand = getRndInteger(1, 100);
    if (!pcNumbers.includes(numRand)) {
        pcNumbers.push(numRand);
    }
}

alert(pcNumbers);


var timeleft = 10;



var countdown = setInterval(function(){

  if(timeleft == 0){
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML = "Finished";


    // Algorithm to generate user numbers
    setTimeout (function(){
        while (userNumber.length < 5) {

            var number = parseInt(prompt('Inserisci un numero'));

            // Check on Input numbers
            if(isNaN(number) || number <= 0 || number > 100) {
                alert('Puoi inserire solo i numeri da 1 a 100!');
            }
    
            if (!userNumber.includes(number)) {
                userNumber.push(number);
            } else{
                alert('Hai già inserito questo numero');
            }

            // final result: number found 
            if (pcNumbers.includes(number)) {
                found.push(number);
            }
            result = document.getElementById("result").innerHTML = 'hai indovitato ' + found.length + ' numeri:' + found;
        }

    }, 1000);

  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }

  timeleft -= 1;
  
}, 1000);















//-------------- FUNCTIONS ------------- //

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


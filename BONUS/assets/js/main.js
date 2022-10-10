/*

Scrivi un programma che stampi in console conto numeri da 1 a 100:

- Per conto multipli di 3 stampi “Fizz” al posto del numero.
- Per conto multipli di 5 stampi “Buzz”.
- Per conto numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

    BONUS 1:
    Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

    BONUS 2:
    Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un Fizz, un Buzz o un FizzBuzz.

*/


//Funzione ciclica di Conta
let conto;
for (let conto = 1; conto <= 100; conto++) {

        //Multiplo di 3
    if (conto % 3 === 0) {
      console.log("Fizz")
        //Multiplo di 5
    } else if (conto % 5 === 0) {
      console.log("Buzz")
        //Multiplo di 3 e 5
    } else if (conto % 3 === 0 && conto % 5 === 0) {
        console.log("FizzBuzz")
      } else {
      console.log(conto) 
    }

  }

/*

Scrivi un programma che stampi in console i numeri da 1 a 100:

- Per i multipli di 3 stampi “Fizz” al posto del numero.
- Per i multipli di 5 stampi “Buzz”.
- Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

    BONUS 1:
    Crea un container nel DOM , aggiungendo (attraverso la funzione append()) un elemento html con il numero o la stringa corretta da mostrare.

    BONUS 2:
    Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un Fizz, un Buzz o un FizzBuzz.

*/


//Funzione ciclica di Conta
const fizzBoxes = document.querySelector('.fizzBoxes');
for (let i = 1; i <= 100; i++) {

        //Multiplo di 3
      if (i % 3 === 0 && i % 5 === 0) {
      fizzBoxes.innerHTML += `<div class="contaBox contaBox-${i} fizzBuzz">fizzBuzz</div>`;
      } else if (i % 3 === 0) {
      fizzBoxes.innerHTML += `<div class="contaBox contaBox-${i} fizz">fizz</div>`;
        //Multiplo di 5
    } else if (i % 5 === 0) {
      fizzBoxes.innerHTML += `<div class="contaBox contaBox-${i} buzz">buzz</div>`;
        //Multiplo di 3 e 5
    } else {
      fizzBoxes.innerHTML += `<div class="contaBox contaBox-${i} contaBox">${i}</div>`;
    }

  }
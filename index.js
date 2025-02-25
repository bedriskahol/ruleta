
const enteredNumber = prompt('Zadej číslo mezi 0-36');
let color = '';
let type = '';

if (enteredNumber == 0) {
   color = 'zelená';
   type = 'není sudý ani lichý';
} else if ((enteredNumber >= 1 && enteredNumber <= 10) || (enteredNumber >= 19 && enteredNumber <= 28)) {
   if (enteredNumber % 2 == 0) {
       type = 'sudé';
       color = 'černá';
   } else {
       type = 'liché';
       color = 'červená';
   }
} else if ((enteredNumber >= 11 && enteredNumber <= 18) || (enteredNumber >= 29 && enteredNumber <= 36)) {
   if (enteredNumber % 2 == 0) {
       type = 'sudé';
       color = 'červené';
   } else {
       type = 'liché';
       color = 'černé';
   }
} else {
   color = 'není';
   type = 'se zde nevyskytuje';
}

document.body.innerHTML += `<h2>Zadané číslo je ${enteredNumber}.</h2>
   <p>Barva na ruletě ${color}, druh ${type}.</p>`

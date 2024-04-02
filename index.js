//oppgave 1
/*
var minTekst= "Røyken VGS";
var minTekst2 = "";


 function tomlellerikke(string) {
     if ( string === '') {
         return 'strengen er tom'
     } else{
         return 'strenger er ikke tom: ' + string;
     }
 }

 console.log(tomlellerikke(minTekst));
 console.log(tomlellerikke(minTekst2));
 */

 //oppgave 2
/*
 let text= " Røyken videregående skole "
 const myArray = text.split(" ");
 console.log(myArray);
 */

 //oppgave 3
/*
 function ispalindrome(string) {
 const length = string.length;

 for (let i = 0; i < length / 2; i++) {
    if(string[i] !== string[length - 1 - i]) {
        return (string)+ " is not a palindrome";
    }
 }
 return (string)+" is a palindrome";
}

const string = prompt ("Skriv inn et ord: ");
const value = ispalindrome(string);
console.log(value);
 */

//Oppgave 4
/*
function alfabetiskt(string) {
  return string.split('').sort().join('');  

}

const string = prompt ("Skriv inn et ord: ");
console.log(alfabetiskt(string))
*/

//oppgave 5

function noe(text, letter) {
   let count = 0;
   for (let i = 0; i < text.length; i++) {
       if (text[i] === letter) {
           count++;
       }
   }
   return count;
}


const text = prompt ("Skriv inn en settning: ");

const letter = prompt ("Skriv inn en bokstav: ");

const occurrences = noe(text, letter);
console.log("Antall forekomster av bokstaven '" + letter + "' i teksten '" + text + "': " + occurrences);
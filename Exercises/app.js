/* esercizio, scrivere una funzione che prende due numeri e ritorna il massimo dei due.

function max(a, b){  //abbiamo usato function max, al posto di dichiarare due variabili let a = e B =. m
if (a >= b) {
    return a;   //console.log(a). Poi la console deve avere (a) e non ('a'), questo vuol dire mostrami il valore di a e non il letteralmente 'a' in console 
    }
    else {
    return b;   // console.log (b)
    }
}

ora per capire se sta funzionando devo fare ciò:
let number = max(1,2);
console.log(number);

function max(a, b) {
if (a > b) return a;
else return b;
}

- console.log() stampa un valore in console. -> in questo caso dovrei chiamarla e metterci console.log(max(9, 18));
- return restituisce un valore dalla funzione. atttenzione, posso usarli anche entrambi ed assiemeas
- Se l'esercizio chiede "ritorna", devo usare return.
- I parametri (a, b) vengono ricevuti dalla funzione quando viene chiamata.

un altro metodo per fare funzionare la funzione max (a, b) {
return (a > b) ? a : b;
} //qui ho una condizioni (a > b), che viene valutata e se a> b allora return A, altrimenti B.
*/


/*
esercizio, landscape or portrait
Deve ritornare true se width è maggiore di height, altrimenti ritorna false. domanda da porsi -> widht > height ? -> se si, return true. se no, return false.


function isLandscape(width, height) {
if (width > height) {
return true; // ('true') -> restituisce una stringa 'true'. Mentre l'esercizio chiede un booleano true, senza apici. 
}
else {
    return false;
}
}
un modo più furbo potrebbe essere quello di scrivere l'esercizio così:
function isLandscape(width, height){
return widht > height; // può essere scritto anche return (windht > height);
}

let result = 800 > 600;
console.log(result);
*/

/*
il compito della funzione fizzbuzz (input) è:
- ricevere un valore (input)
- controllare se è un numero
- se non è un numero, ritornare: 'NaN'
- dove dichiaro la costante? la costante la dichiaro fuori dalla funzione, come const output = fizzBuzz(15); 
- input è già dichiarato nella funzione, come fizzBuzz(15) -> sarebbe input = 15

REGOLE MENTALI PER QUUESTO ES.
input  -> entra nella funzione
return -> esce dalla funzione
output -> conserva ciò che è uscito
console.log -> lo mostra a schermo


const output = fizzBuzz(5); //regola pratica che serve sempre, se ho 3 parametri tipo: function nome(a,b,c)....allora quando la uso devo aspettarmi qualcosa tipo nome(valore1, valore2, valore3) 
console.log(output);

function fizzBuzz(input) {

// qua si può metttere anche il NaN.
if (typeof input !== 'number')
return 'Not a Number';

if (input % 5 === 0 && input % 3 === 0)
return ('fizzBuzz');

else if (input % 5 === 0)
return ('buzz');

else if (input % 3 === 0)
return ('fizz');

return input; Restituisce il numero che ho impostato in input, mentre ('input') restituisce letterale 'input'
}



// divisible by 3 => fizz
// divisible by 5 => buzz
// divisible by both 3 and 5 => fizzBuzz
// not divisible by 3 or 5 => input
// not a numer => 'not a number'
*/

/*
DEMERIT Points

function checkSpeed(82) {
if (speed <= 70) 
console.log('Ok');

else if (speed > 70){
let output = (speed - 70)
let points = output % 5 
points = Math.floor() 
}
if (points >= 12)
console.log('License Suspended');
else if (points < 12)
delta points = return points - 12 -> questo sarà il valore da mostrare in console.log
console.log('')
}

 return speed - 70 = delta punti
if delta punti % 5 = numero intero allora sottraggo 1 punto ogni 5 di eccesso
if delta punti % 5 = non intero uso math.floor

else if ((speedLimit > 70) % 5 = math.floor

}

// speed limit = 70. fino ai 70 all'ora la console restituisce Ok.
// se invece supero i 70, ogni 5 km di eccedenza mi viene detratto 1 punto
// math.floor, che sta a significare -> se io eccedo di 2km/h, poi lo divido per 5 (se arrivo a 5 allora è un punto intero). Siccome è meno di 5, allora 2/5= 0.4 => math.floor ovvero devo sempre arrotondare per difetto, prendendo la cifra prima del decimale = 0.
// se vengono decurtati più di 12 punti allora la patente è sospesa

*/
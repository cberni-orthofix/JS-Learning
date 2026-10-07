/*
ARITHMETIC OPERATORS

i primi tipi di operators che abbiamo sono gli arithmetic operators, che sono:
- + (addition) somma due numeri, tipo: 5 + 3 = 8
- - (subtraction) sottrae due numeri, tipo: 5 - 3 = 2
- * (multiplication) moltiplica due numeri, tipo: 5 * 3 = 15
- / (division) divide due numeri, tipo: 6 / 3 = 2
- % (modulus) restituisce il resto della divisione tra due numeri, tipo: 5 % 3 = 2
- ** (exponentiation) eleva un numero alla potenza di un altro numero, tipo: 5 ** 3 = 125

possiamo fare qualche esempio di addition operation, tipo:
let x = 5;
let y = 3;
let z = x + y;

console.log(z); // 8

oppure possiamo fare qualche esempio di subtraction operation, tipo:
let x = 10;
let y = 3;
console.log(x - y); // 7
console.log(x * y); // 30
console.log(x / y); // 3.3333333333333335
console.log(x % y); // 1



*/






/*
ASSIGNMENT OPERATORS

Assignment operators sono operatori che permettono di assegnare un valore a una variabile.
esecizio:
let x = 5;
let y = 3;
x += y; // x = x + y; dove il += è il cosiddetto "operatore di assegnazione con addizione", che permette di sommare un valore a una variabile e assegnare il risultato alla stessa variabile in un solo passaggio., che in inglese si chiama "addition assignment operator", quindi x += y è equivalente a x = x + y.
console.log(x); // 8
x -= 5; // x = x - 5; che significa che usando il -=  o il +=, *=, /=, %=, **= possiamo fare l'operazione e assegnare il risultato alla variabile x in un solo passaggio.
tenendo sempre let x e y, se voglio sottrarre o aggiungere direttamente a X, tipo:
let x = 10;
standard: console.log(x); // 10
addizione console.log(++x); // 11
sottrazione console.log(--x); // 9

un modo furbo è l'opratore di assegnazione, tipo:
let x = 10;
let y = x++;

usando increment (++)
x++ // usa il valore, POI incrementa
++x // incrementa, POI usa il valore
console.log(y); // 10, perché prima stampa il valore di x e poi lo incrementa di 1 (non viene mostrato il valore incrementato di x, perché y è stato assegnato prima dell'incremento)
console.log(y++); // y vale 10, perché prima stampa il valore di x e poi lo incrementa di 1 anche qui non viene mostrato il valore incrementato di x, perché y è stato assegnato prima dell'incremento
console.log(++y); // 12, perché prima incrementa il valore di x a 11 e poi essendoci ++y aggiunge un altro +1 e lo stampa
quello che conta è la posizione dei console.log, perché se console.log(++y) fosse stato prima di console.log(y++), allora y sarebbe stato 11 e non 12, perché prima incrementa il valore di x a 11 e poi essendoci ++y aggiunge un altro +1 e lo stampa.
oppure il decrement (--) 
let x = 10
let y = x--;
stessi ragionamenti di prima, quindi y vale 10, perché prima stampa il valore di x e poi lo decrementa di 1 (non viene mostrato il valore decrementato di x, perché y è stato assegnato prima del decremento)
*/







/*
COMPARISON OPERATORS

Una tipologia di Comparison operators sono i ><=, che sono gli operatori di confronto o RELATIONAL OPERATORS, che confrontano due valori e restituiscono true o false, tipo:
let x = 5;
let y = 3;
console.log(x > y); // true, perché 5 è maggiore di 3
console.log(x < y); // false, perché 5 non è minore di 3

EQUALITY OPERATORS

Altra tipologia di Comparison operators sono i ==, ===, !=, !==, che sono gli operatori di uguaglianza o EQUALITY OPERATORS, che confrontano due valori e restituiscono true o false, tipo:
let x = 5;
let y = 3;
console.log(x == y); // false, perché 5 non è uguale a 3
console.log(x != y); // true, perché 5 è diverso da 3


*/






/*
STRICT EQUALITY OPERATORS

Strict equality operator (===) confronta due valori e restituisce true se sono uguali e dello stesso tipo, tipo:
let x = 5;
let y = "5";
console.log(x === y); // false, perché x è un numero e y è una stringa

Mentre la Lose equality operator (==) confronta due valori e restituisce true se sono uguali, tipo:
let x = 5;
let y = "5";

console.log(x == y); // true, perché x è un numero e y è una stringa, ma il valore è lo stesso
oppure console.log(true == 1); // true, perché true è un booleano e 1 è un numero, ma il valore è lo stesso
*/







/*
TERNARY OPERATOR
ternary operator (condizione ? valore_se_vero : valore_se_falso) è un operatore che permette di scrivere una condizione in una sola riga, tipo:
//if a customer has more than 100 points, they are a 'gold' customer, otherwise they are a 'silver' customer.
let points = 110;
let customerType = points > 100 ? 'gold' : 'silver';
console.log(customerType); // gold

: sarebbe, altrimenti o otherwise all interno dell'operazione.
*/






/*
LOGICAL OPERATORS
- && (AND) restituisce true se entrambe le condizioni sono vere, tipo: true && true // true
esempio:
let highIncome = true;
let goodCreditScore = true;
let eligiblForLoan = highIncome && goodCreditScore;

console.log(eligibleForLoan); // true


- || (OR) restituisce true se almeno una delle condizioni è vera, tipo: true || false // true
esempio:
let highIncome = true;
let goodCreditScore = false;
let eligiblForLoan = highIncome || goodCreditScore;

console.log(eligibleForLoan); // true


- ! (NOT) inverte il valore di una condizione, tipo: !true // false, spiegato in altro modo NOT (!) inverte il valore booleano di una variabile o espressione
esempio:
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || gooodCreditScore;
metto anche qua il  console.log('eligible', eligibleForLoan); che restituisce // eligibile false, appunto perchè abbiamo le variabili a false

//NOT (!) altro esempio/spiegazione a come utilizzare il !
let applicationRefused = !eligibleForLoan //applicationRefused era false, ma usando il !eligibleForLoan che prende il valore dichiarato dalla variabile eligibleForLoan (che era false), lo mette su applicationRefused e lo fa diventare true
console.log('application Refused', applicationRefused); restituisce //application refused true
*/







/*

LOGICAL OPERATOR WITH NON BOOLEANS, che significa tipo:

Logical operator blablabla....altresi detti Truthy o Falsy --> Quando JavaScript valuta una condizione (if, while, operatori logici, ecc.), prova automaticamente a trasformare il valore in true o false.

valori che JS considera falsi: undefined, null, 0, false, '', NaN
esempio:
let userColor = '';
 
if (userColor) {
console.log('Color found');
} else {
console.log('Default color');
}   // Output Default color, perchè la stringa è vuota, quindi FALSY

valori che JS considera veri: 'Cristiano',1,-1,[],{},'0','false'
esempio:
if ('Cristiano') {
console.log('Vero');
}  //vero, la strigna è valorizzata
*/

/*
Precedence operators è l'ordine in cui gli operatori vengono valutati in un'espressione, tipo:
let x = 5 + 3 * 2; // 11, perché la moltiplicazione ha una precedenza maggiore dell'addizione, quindi viene eseguita prima.
una soluzione è l'utilizzo delle parentesi, tipo:
let x = (5 + 3) * 2; // 16, perché le parentesi hanno una precedenza maggiore di tutti gli operatori, quindi viene eseguita prima.

*/


/*
esercizio:
let a = 'red';
let b = 'blue';


console.log(a); // red
console.log(b); // blue

compito, fare lo swap dei valori di a e b

let a = (!== b) && (b !== a) -> SBAGLIATA LA MIA RISPOSTA.

serve una terza variabile temporanea:
let c = a;
let a = b;
let b = c;

console.log(a); // blue
console.log(b); // red

*/
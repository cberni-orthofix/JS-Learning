/* 
che cosa sono le veriabili in JS? le variabili sono dei contenitori che possono contenere dei valori.

le variabili si dichiarano con let, tipo:
let name = "Mario";
console.log(name);


regole per dichiarare le variabili:
- non possono iniziare con un numero
- non possono contenere spazi
- sono case sensitive (nome e Nome sono due variabili diverse)
- non possono contenere caratteri speciali (eccetto _ e $)
- non possono essere parole chiave di JS (es. let, var, function, ecc.)
- non possono essere uguali ad altre variabili già dichiarate nello stesso scope (lo scope è il contesto in cui una variabile è definita, ad esempio una funzione, un blocco di codice, ecc.)


let firstName = "Mario"
let lastName = "Rossi"
console.log(firstName + " " + lastName)


Le costanti (che sono permanenti) si dichiarano con const, tipo:
const PI = 3.14;
console.log(PI);

le costanti non possosno essere riassegnate, quindi non si può fare:
const PI = 3.14;
PI = 3.14159; // questo genera un errore


i tipi di variabili in JS sono:
- string (testo)
- number (numeri) si dichiarano senza virgole o punti o altri simboli, tipo:
let age = 30;
console.log(age);
- boolean (vero/falso) si dichiarano con true o false, tipo:
let isAdult = true;
console.log(isAdult);  
- undefined (non definito) si dichiara senza assegnare un valore, tipo:
let address ; -> quando non si dichiara un valore, la variabile è undefined, tipo:
let address;
console.log(address); // undefined
- null (null) si dichiara con null, tipo:
let phoneNumber = null;
console.log(phoneNumber); // null

Altro concetto importante, il fatto che il JS è un linguaggio dinamico, quindi non è necessario dichiarare il tipo di variabile, JS lo capisce da solo in base al valore assegnato. Ad esempio:
let name = "Mario"; // JS capisce che è una stringa
let age = 30; // JS capisce che è un numero
ma posso anche cambiare il tipo di variabile, tipo:
typeof name; // string
name = 30;
typeof name; // number
questo è possibile perché JS è un linguaggio dinamico, ma non è una buona pratica cambiare il tipo di variabile, quindi è meglio dichiarare le variabili con un tipo specifico e non cambiarlo mai.
altro esemio di variabile dinamica:
typeof isApproved; // boolean (risposta è si/no)
oppure typeof firstName; // "undefined" (non definito) perchè non è stata ancora dichiarata la variabile firstName, quindi JS non sa che tipo di variabile è, ma se dichiaro la variabile firstName con un valore, tipo:
let firstName = "Mario";
typeof firstName; // string (risposta è testo)

questo perchè abbiamo primitives/value type come String, Number, Boolean, Undefined, Null e Symbol, che sono immutabili e vengono passati per valore, mentre abbiamo reference type come Object, Array e Function, che sono mutabili e vengono passati per riferimento.


cos'è un oggetto, che è argomento di questione della prossima lezione, lo tratto in "object" folder.
*/
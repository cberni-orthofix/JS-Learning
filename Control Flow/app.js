/*
IF ELSE
If..else statement, ovvero una struttura di controllo che permette di eseguire un blocco di codice se una condizione è vera, e un altro blocco di codice se la condizione è falsa.
Esempio:
let x = 10;
if (x > 5) {
    console.log("x è maggiore di 5");
} else {
    console.log("x è minore o uguale a 5");
}

altro esempio:

hour, if hour is between 6am and 12pm, greet the user with "Good morning!", if hour is between 12pm and 6pm, greet the user with "Good afternoon!", otherwise greet the user with "Good evening!".
let hour = 10;
if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
}
else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log('Good evening!');}
*/

/*
SWITCH CASE
che cos'è uno switch case? è una struttura di controllo che permette di eseguire un blocco di codice tra più opzioni, in base al valore di una variabile.
esempio:

let role
switch (role) {
    case 'admin':
        console.log('Welcome admin!');
        break;

    case 'user':
        console.log('Welcome user!');
        break;

    default:
        console.log('Welcome guest!');
}
affinché il codice funzioni, bisogna assegnare un valore alla variabile role, ad esempio:
let role = 'admin';
questo mostrerà "Welcome admin!" nella console. Se invece assegniamo 'user' alla variabile role, il messaggio sarà "Welcome user!". Se la variabile role non corrisponde a nessuno dei casi definiti, verrà eseguito il blocco di codice nel caso default, mostrando "Welcome guest!".

per lavorare più fluidamente e con meno noise, è possibile usare if o else if al posto di switch case, ma in alcuni casi switch case può essere più leggibile e organizzato, soprattutto quando ci sono molte opzioni da gestire.
in questo caso sarebbe tornato utile, esempio:
if (robe === 'admin') console.log('Welcome admin!');
else if (robe === 'user') console.log('Welcome user!');
else console.log('Welcome guest!');

*/





/*
LOOPS, cosa sono i loops? sono pezzi di codice ripetitivi che tramite varie formule puoi semplificare.

il primo è FOR che sta a significare che se ho 5 valori da ripetere con 5 console.log, allora usiamo una INCREMENT EXPRESSION, ecco un esempio:

for (let i = 0; i < 5; i++) {
console.log('Hello World');
}
per il ciclo for, si usa sempre una initialExpression che sarebbe let i = 0; e la identifichiamo come la loop variable. Poi invece mettiamo una condizione, ovvero la i < 5; e infine l'incrementExpression ovvero la i++. sotto mettiamo lo statement, che banalmente è console.log ('')

Leggendolo puoi tradurlo così:

crea i = 0
finché i <= 5
esegui il blocco
incrementa i


- WHILE loops, è diversa perchè la variabile let non è parte integrante del loop, quindi fra parentesi. Bensi viene dichiarata fuori
Quando usare while? Quando non sai in anticipo quante iterazioni serviranno.
- La variabile di controllo viene dichiarata fuori dal loop.
- Nelle parentesi c'è solo la condizione.
- Bisogna aggiornare manualmente la variabile (i++, i--, ecc.).
- Se la condizione non diventa mai false si crea un loop infinito.
Equivalenza:

for (let i = 0; i < 5; i++)

è uguale a

let i = 0;
while (i < 5) {
  i++;
}

let i = 0;
while (i <= 5) {
 if (i % 2 !== 0) console.log(i);
 i++;
}

let i = 0;      // inizializzazione

while (i <= 5) { // condizione
  console.log(i);
  i++;           // incremento
}

Quindi sei tu che devi ricordarti di:

dichiarare la variabile prima
aggiornarla dentro il loop

*/





/*
FOR IN Loops si usa con gli oggetti ovvero:

const person = {
name : 'Cristiano',
age : 25,
job : 'Tester'
};

Con for...in puoi visitarle una alla volta:

JavaScript
for (let key in person) {
console.log(key);
} 

// si legge, "Per ogni proprietà presente nell'oggetto person, inserisci il nome della proprietà nella variabile key."
- Serve per iterare le proprietà (keys) di un oggetto. (“Iterare” significa ripetere più volte un’azione)
- Ad ogni iterazione restituisce il nome della proprietà.
- Per accedere al valore si usa object[key].

for...in  → dentro un oggetto → restituisce le CHIAVI
for...of  → dentro un array → restituisce i VALORI


FOR OF 
- Serve per iterare direttamente i valori di una collezione,  tipicamente un array.
- È usato principalmente con array e stringhe.
- Ad ogni iterazione restituisce il valore corrente.

ESEMPIO: const colors = ["red", "green", "blue"];
*/


/*
BREAK -> Serve per uscire da un loop. come ad esempio 
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
} // Output -> 1,2,3,4 -> ed esce al 5.
*/

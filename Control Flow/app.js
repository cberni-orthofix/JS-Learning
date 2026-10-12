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
FOR...IN

Si usa con gli OGGETTI.

Restituisce le CHIAVI (properties) dell'oggetto.

Esempio:

const person = {
    name: 'Cristiano',
    age: 25,
    job: 'Tester'
};

for (let key in person) {
    console.log(key);
}

Output:

name
age
job

Ho un oggetto.

Devo guardare tutte le proprietà.

Ah, per gli oggetti uso for...in.

Ok, ora ho la proprietà.

Come prendo il valore?

Ah giusto, obj[key].

Ora come verifico se è una stringa?

Ah sì, typeof.

Perfetto.

function showProperties(obj) {
    for (let key in obj) {

        if (typeof obj[key] === 'string') {

            console.log(key, obj[key]);

        }
    }
}
Lettura:

"Per ogni proprietà presente nell'oggetto person, inserisci il nome della proprietà nella variabile key."

--------------------------------------------------

KEY

Nel for...in:

for (let key in person)

key rappresenta il nome della proprietà corrente.

Prima iterazione:

key = 'name'

Seconda iterazione:

key = 'age'

Terza iterazione:

key = 'job'

--------------------------------------------------

OBJECT[KEY]

Serve per accedere al valore di una proprietà.

Esempio:

person['name']

restituisce:

Cristiano

---------------------------------------

Se:

key = 'name'

allora:

person[key]

restituisce:

Cristiano

--------------------------------------------------

FOR...IN - COSA RESTITUISCE?

oggetto:
const person = {
    name: 'Cristiano',
    age: 25,
    job: 'Tester'
};

funzione:
function showProperties(obj) {
    for (let key in obj) {
        console.log(key);
    }
}

showProperties(person);

for...in restituisce le CHIAVI.

Esempio:

for (let key in person)

Output:

name
age
job

NON restituisce:

Cristiano
25
Tester

--------------------------------------------------

FOR...OF

Si usa principalmente con ARRAY e STRINGHE.

Restituisce direttamente i VALORI.

Esempio:

const colors = ['red', 'green', 'blue'];

for (let color of colors) {
    console.log(color);
}

Output:

red
green
blue

--------------------------------------------------

DIFFERENZA TRA FOR...IN E FOR...OF

for...in  -> OGGETTI -> restituisce le CHIAVI

for...of  -> ARRAY   -> restituisce i VALORI

--------------------------------------------------

TYPEOF

Serve per conoscere il tipo di una variabile o di un valore.

Esempi:

typeof 'Cristiano'

Output:

'string'

---------------------------------------

typeof 2018

Output:

'number'

---------------------------------------

typeof true

Output:

'boolean'

--------------------------------------------------

STRING PROPERTIES - ESERCIZIO

Abbiamo un oggetto:

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

Dobbiamo mostrare SOLO le proprietà che contengono stringhe.

Output atteso:

title a
director b

--------------------------------------------------

COME RAGIONARE

L'oggetto contiene:

title -> 'a'           -> string
releaseYear -> 2018    -> number
rating -> 4.5          -> number
director -> 'b'        -> string

Dobbiamo trovare automaticamente quali proprietà contengono stringhe.

--------------------------------------------------

PASSI LOGICI DELL'ESERCIZIO

1. Ciclo tutte le proprietà dell'oggetto.

Per questo uso:

for...in

--------------------------------------------------

2. Ad ogni iterazione ottengo una chiave.

Esempio:

title
releaseYear
rating
director

--------------------------------------------------

3. Tramite obj[key] ottengo il valore associato.

Esempio:

obj['title']

risultato:

'a'

---------------------------------------

obj['releaseYear']

risultato:

2018

--------------------------------------------------

4. Uso typeof per capire il tipo del valore.

Esempio:

typeof obj['title']

risultato:

'string'

---------------------------------------

typeof obj['releaseYear']

risultato:

'number'

--------------------------------------------------

5. Se il tipo è string, allora stampo proprietà e valore.

--------------------------------------------------

TAKEAWAY IMPORTANTE

for...in  -> mi dà la CHIAVE

obj[key]  -> mi dà il VALORE

typeof    -> mi dice il TIPO del valore

Queste 3 cose sono il concetto principale dell'esercizio.

--------------------------------------------------

ERRORI CHE HO FATTO

Pensavo di usare:

if movie === string

oppure

if obj.title !== 'number'

Ma non stavo controllando il tipo del valore.

Per verificare il tipo devo usare:

typeof

--------------------------------------------------

REGOLA MENTALE

Quando lavoro con un oggetto:

for...in -> trovo la proprietà

obj[key] -> trovo il valore

typeof -> controllo il tipo del valore

Se il tipo mi interessa, lo stampo.
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

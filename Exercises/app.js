/*

COME RAGIONARE DAVANTI A UN ESERCIZIO

1. DEVO SCEGLIERE TRA PIÙ CASI?

Esempi:
- pari/dispari
- maggiore/minore
- fizz/buzz
- velocità sopra/sotto il limite

→ IF / ELSE IF / ELSE


--------------------------------------------------

2. DEVO RIPETERE UN'OPERAZIONE PIÙ VOLTE?

Esempi:
- da 0 a 10
- da 1 a 100
- N volte

→ FOR


--------------------------------------------------

3. DEVO VISITARE LE PROPRIETÀ DI UN OGGETTO?

Esempio:

{
  name: 'Cristiano',
  age: 25
}

→ FOR...IN

for...in = CHIAVI


--------------------------------------------------

4. DEVO VISITARE I VALORI DI UN ARRAY?

Esempio:

['red', 'green', 'blue']

→ FOR...OF

for...of = VALORI


--------------------------------------------------

5. DEVO CONTROLLARE IL TIPO DI UN VALORE?

Esempi:
- string?
- number?
- boolean?

→ TYPEOF

typeof valore


--------------------------------------------------

6. DEVO MOSTRARE UN RISULTATO?

→ console.log()


--------------------------------------------------

7. DEVO RESTITUIRE UN RISULTATO?

→ return

Domanda:

"Mi serve usare questo valore da qualche altra parte?"

SI → return
NO → console.log()


--------------------------------------------------

8. DEVO VERIFICARE SE UN NUMERO È PARI?

→ %

numero % 2 === 0

pari

numero % 2 !== 0

dispari


--------------------------------------------------

9. DEVO SAPERE IL RESTO DI UNA DIVISIONE?

→ %

Esempio:

12 % 5 = 2


--------------------------------------------------

10. DEVO DIVIDERE NORMALMENTE?

→ /

Esempio:

12 / 5 = 2.4


--------------------------------------------------

11. DEVO TOGLIERE I DECIMALI?

→ Math.floor()

Math.floor(2.9)

risultato:

2


--------------------------------------------------

12. FUNZIONI

function nome(parametro) {

}

↓

nome(valore)

Regola mentale:

Parametro = scatola vuota

Valore = contenuto passato alla scatola
`
*/
/*
Cosa sto facendo?

- Sto scegliendo? → IF
- Sto ripetendo? → FOR
- Sto guardando un oggetto? → FOR...IN
- Sto guardando un array? → FOR...OF
- Sto mostrando? → CONSOLE.LOG
- Sto restituendo? → RETURN
- Sto controllando un tipo? → TYPEOF

*/


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
- return restituisce un valore dalla funzione. atttenzione, posso usarli anche entrambi ed assieme
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
// divisible by 3 => fizz
// divisible by 5 => buzz
// divisible by both 3 and 5 => fizzBuzz
// not divisible by 3 or 5 => input
// not a numer => 'not a number'


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

i takeaway/milestone esercizio sono:
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


*/

/*
DEMERIT Points

function checkSpeed(speed){
if (speed <= 70) //cosa utile è quella di inserire una constante sui 70, ovvero const sppedLimit = 70; -> così anche la if sotto non sarà if (speed < 70) bensì if (speed < speedLimit)
console.log('Ok'); 
else if (speed > 70){
let output = (speed - 70)
let points = output / 5 // attenzione che % rappresenta (12%5=2 con resto 2. quinid il resto della divisione). mentre a noi interessa 12/5=2.4 ovvero la divisione normale
points = Math.floor(points); //il () del Math.floor deve essere valorizzato

if (points >= 12)
console.log('License Suspended');
else if (points < 12)
console.log(points);//se non metto le '' prende la variabile points e la stampa.
}
ckeckspeed(82) // non dichiara una variabile. Richiama (esegue) la funzione checkSpeed e passa il valore 82 al parametro speed.
All'interno della funzione, il parametro speed assume il valore 82.

// speed limit = 70. fino ai 70 all'ora la console restituisce Ok.
// se invece supero i 70, ogni 5 km di eccedenza mi viene detratto 1 punto
// math.floor, che sta a significare -> se io eccedo di 2km/h, poi lo divido per 5 (se arrivo a 5 allora è un punto intero). Siccome è meno di 5, allora 2/5= 0.4 => math.floor ovvero devo sempre arrotondare per difetto, prendendo la cifra prima del decimale = 0.
// se vengono decurtati più di 12 punti allora la patente è sospesa



COSì COME L'HA STRUTTURATA IL DOCENTE.

chekcSpeed(82);

funtion checkSpeed(speed) {
const speedLimit = 70;
const kmPerPoint = 5;

if (speed < speedLimit + kmPerPoint) {
conosle.log('Ok');
return;
}

const points = Math.floor((speed - speedLimit) / kmPerPoint);
if (points >=12)
 console.log('license suspended');
else
    console.log('Points', points)
}



TAKE AWAY DELL'ESERCIZIO:

DIFFERENZA FRA FUNZIONE, PARAMETRO E CHIAMATA.

- DICHIARARE LA FUNZIONE: function checkSpeed(speed) {
...
}
checkspeed = nome della funzione
speed = parametro

CHIAMATA DELLA FUNZIONE
checkspeed(82);
ESEGUE LA FUNZIONE
PASSA IL VALORE 82
IL PARAMETRO SPEED ASSUME IL VALORE DI 82

MENTALMENTE speed = 82 all'interno della funzione


ERRORE CHE HO FATTO -> let checkspeed = 82 e poi fare function ckeckSpeed{  ...   }
perchè checkspeed non può essere sia funione che variabile

PARAMETRI:

UN PARAMETRO, function checkSpeed(speed) non ha ancora un valore. è una variabile che riceverà il valore quando la funzione verrò rchiamata. 

DIFFERENZA TRA & e / -> una da il risultato l'altra il resto.

COS'è IL Math.floor(2.4) -> arrotondamento per difetto

CONSOLE.LOG E STRINGHE: la Variabile console.log(points); stampa il contenuto della variabile se ad esempio points = 2; la STRINGA console.log('points'): da come output points letteralmente.

RETURN vs CONSOLE.LOG dove RETURN sta a significare restituisce un valore tipo "return points"; Mentre console.log mostra un valore in console




8. Regola fondamentale sulle funzioni

Quando vedi:

JavaScript
function nome(parametro) {
 
}

pensa:

Creo una funzione chiamata nome che si aspetta un valore.

Quando vedi:

JavaScript
nome(valore);
``
*/












/*
ESERCIZIO - EVEN AND ODD NUMBERS


showNumber(10);

function showNumbers(limit) {
for (let i = 0; i <= limit; i++) // il for va sempre seguito da (inizializzazione, condizione; incremento)
if (i % 2 === 0 ) { 
console.log(i,'EVEN');
}
else console.log(i,'ODD');
}

}; 


let i++;

if numbers are even display number + even
else if number are odd display number + odd
}


// compito, mostrare la lista dei numeri in console e se pari mettere 'pari' e se dispari mostrare 'dispar'

SHOW NUMBERS - TAKEAWAY

1. UTILIZZARE IL PARAMETRO DELLA FUNZIONE

function showNumbers(limit) {

}

limit è un parametro.

Quando scrivo:

showNumbers(10);

il parametro riceve il valore:

limit = 10;

Mentalmente JavaScript lavora come se avesse fatto questa assegnazione all'interno della funzione.


--------------------------------------------------

2. DIFFERENZA TRA DICHIARAZIONE E CHIAMATA DELLA FUNZIONE

Dichiarazione:

function showNumbers(limit) {

}

Creo la funzione.


Chiamata:

showNumbers(10);

Eseguo la funzione e passo il valore 10.


--------------------------------------------------

3. STRUTTURA DEL CICLO FOR

for (let i = 0; i <= limit; i++)

Il ciclo for è composto da:

for (inizializzazione; condizione; incremento)

Inizializzazione:

let i = 0;

Da dove parto.


Condizione:

i <= limit;

Quando fermarmi.


Incremento:

i++;

Come avanzare.


--------------------------------------------------

4. UTILIZZARE IL PARAMETRO INVECE DI VALORI FISSI

Poco flessibile:

i <= 10

Corretto:

i <= limit

In questo modo la funzione funziona con qualsiasi valore:

showNumbers(5);
showNumbers(10);
showNumbers(20);
showNumbers(100);


--------------------------------------------------

5. OPERATORE MODULO %

L'operatore % NON esegue una divisione normale.

Restituisce il RESTO della divisione.

Esempi:

10 % 2 = 0
11 % 2 = 1
12 % 2 = 0
13 % 2 = 1


--------------------------------------------------

6. COME VERIFICARE SE UN NUMERO È PARI

i % 2 === 0

Se il resto della divisione per 2 è uguale a 0, il numero è pari.

Esempi:

0 % 2 = 0
2 % 2 = 0
4 % 2 = 0
6 % 2 = 0


--------------------------------------------------

7. COME VERIFICARE SE UN NUMERO È DISPARI

Se il numero NON è pari, allora è automaticamente dispari.

Per questo motivo:

if (i % 2 === 0)

seguito da

else

è sufficiente.

Non serve una seconda condizione.


--------------------------------------------------

8. DIFFERENZA TRA CONSOLE.LOG E RETURN

console.log()

console.log(i, 'EVEN');

Serve a mostrare un risultato nella console.


return

return value;

Serve a restituire un valore.


In questo esercizio serve console.log() perché dobbiamo stampare tutti i risultati.


--------------------------------------------------

9. DIFFERENZA TRA VARIABILE E STRINGA

Variabile:

console.log(i);

Stampa il valore contenuto nella variabile.

Se:

i = 5

Output:

5


Stringa:

console.log('i');

Output:

i

Viene stampato il testo letterale.


--------------------------------------------------

10. RAGIONAMENTO CORRETTO PER AFFRONTARE L'ESERCIZIO

1. Ricevo un valore limite.

2. Creo un ciclo da 0 fino al limite.

3. Per ogni numero:
   - se è pari stampo EVEN
   - altrimenti stampo ODD


--------------------------------------------------

ERRORI CHE HO COMMESSO E CORRETTO

Primo tentativo:

const even = 0,2,4,6,8,10;
const odd = 1,3,5,7,9;

Stavo elencando manualmente i numeri.


Soluzione corretta:

i % 2 === 0

Lascio al programma il compito di capire se il numero è pari o dispari.


--------------------------------------------------

REGOLA MENTALE DA RICORDARE

Quando un esercizio chiede:

"Da 0 fino a N"

la prima domanda da porsi è:

"Mi serve un ciclo for?"

Nel 90% dei casi la risposta è sì.


--------------------------------------------------

APPUNTO IMPORTANTE SUI PARAMETRI

function showNumbers(limit)

limit è un parametro.

Un parametro è una variabile dichiarata nella funzione.

Il suo valore viene assegnato quando la funzione viene chiamata.

Esempio:

function showNumbers(limit) {

}

showNumbers(10);

Mentalmente:

limit = 10;

all'interno della funzione.


NON è corretto pensare:

"82 diventa una variabile"

È corretto pensare:

"82 diventa il valore del parametro."


Schema mentale:

function nome(parametro) {

}

nome(valore);

↓

Il parametro riceve il valore passato nella chiamata della funzione.
*/





/*
EXERCISE: STRING PROPERTIES
- abbiamo un oggetto e dobbiamo mostrate tutte le properties 

const movie = {
title: 'a',  // string
releaseYear: 2018, //number
rating: 4.5,  //number
director: 'b' // string
};

showProperties(movie); //showProperties(movie), passa l'oggetto alla funzione e l'oggetto è const movie = {...} 

function showProperties(obj) {
    for (let key in obj){

        if (typeof obj[key] === 'string'){
    
         console.log(key, obj[key]); 
       }
    }
}


COSA HO CAPITO DOPO QUESTO ESERCIZIO:

1. Su cosa sto lavorando?
   - numero
   - array
   - oggetto

2. Devo ripetere qualcosa?
   - sì -> ciclo

3. Devo scegliere tra più casi?
   - sì -> if

4. Devo mostrare o restituire?
   - mostrare -> console.log
   - restituire -> return


*/


/*
Exercise - Sum of Multiple 3 and 5


funtion sum(limit) {
let sum = 0;

for (let 1=0; i <= limit, i++)
if (i % 3 === 0 || i % 5 === 0)
sum += i;

}
return sum;

}
console.log(sum(10));




// multipli di 3: 3,6,9
// m di 5: 5 e 10

Devo andare da 1 a 10?
→ FOR

Devo attraversare un oggetto?
→ FOR...IN

Devo attraversare un array?
→ FOR...OF

Per ogni numero devo verificare una condizione?
→ IF

Come verifico se è multiplo?
→ %

Se è multiplo di 3 o 5?
→ aggiungo il numero a una somma
``
*/




/*
Esercise - GRADE

const marks = [80, 80, 50];

// Average = 70

// 1-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

console.log(calculateGrade(marks));

function calculateGrade(marks) {
let total = 0

for (let mark of marks) {   // marks = [80, 80, 50];mark = 80, mark = 80, mark = 50
total += mark; 
}

let everage = total / marks.length // riprendo con total fuori dalla }, siccome è finito il ciclo for dato il ;
if (everage >= 70)
return 'C';

else if (everage >= 80)
return 'B',

else if (everage >= 90)
return 'A';

else if (everage >= 60)
return 'D';

else 
    return 'F';
}

DOMANDE DA PORSI

Sto lavorando con un array?
→ SI

Devo visitare tutti gli elementi?
→ SI

→ FOR...OF

Mi serve una somma finale?

→ SI
→ ACCUMULATORE
let total = 0;

--------------------------------------------------

PATTERN ACCUMULATORE

let total = 0;

for (...) {
    total += valore;
}

return total;
ERRORE CHE HO FATTO

let total = 0

for (...) {
    total += valore
}

poi:

average = mark / 3

ERRORE:

mark contiene il voto corrente.

La media va fatta sulla SOMMA TOTALE.

--------------------------------------------------

CORRETTO

average = total / marks.length

--------------------------------------------------

.length

marks.length

restituisce il numero di elementi dell'array.

Esempio:

[80, 80, 50]

marks.length

risultato:

3

--------------------------------------------------

COME CALCOLARE UNA MEDIA

Formula:

somma totale / numero elementi

↓

total / marks.length

CORRETTO

average = total / marks.length

--------------------------------------------------

.length

marks.length

restituisce il numero di elementi dell'array.

Esempio:

[80, 80, 50]

marks.length

risultato:

3

--------------------------------------------------
DEVO SCEGLIERE TRA PIÙ FASCE?

90-100 → A
80-89  → B
70-79  → C
60-69  → D
1-59   → F

SI

→ IF / ELSE IF / ELSE

--------------------------------------------------

REGOLA PRATICA

Se il problema chiede:

"Calcola un totale"

oppure

"Calcola una media"

la prima cosa da chiedersi è:

"Dove conservo il risultato mentre il ciclo continua?"

Risposta:

In un accumulatore.

let total = 0;
total += valore;
*/



/*
Exercise STARS


showStars(5);

function showStars(rows) {
for (i = 0; i <= 10; i++);
pattern += '*'
console (i + data)

}
let ??? stringhe +=???

let data = i che si incrementa per ogni riga


*/
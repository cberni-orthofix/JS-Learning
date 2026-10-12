/*
=========================================
OBJECTS
=========================================

Come abbiamo detto nella cartella delle variabili, una variabile è un contenitore che può contenere un valore.

I valori possono essere di diversi tipi:

String:
let name = "Mario";

Number:
let age = 30;

Boolean:
let isAdult = true;

Undefined:
let address;

Null:
let phoneNumber = null;

-----------------------------------------
PERCHÉ NASCONO GLI OBJECT?
-----------------------------------------

Se una persona ha molte informazioni, invece di creare tante variabili separate:

let name = "Mario";
let age = 30;
let isAdult = true;
let address;
let phoneNumber = null;

possiamo raggrupparle in un unico contenitore chiamato Object.

Un Object rappresenta un'entità reale (persona, auto, film, prodotto, animale, ecc.) e contiene le sue caratteristiche.

-----------------------------------------
CREARE UN OBJECT
-----------------------------------------

let person = {
    name: "Mario",
    age: 30,
    isAdult: true,
    address: undefined,
    phoneNumber: null
};

In questo esempio:

person = oggetto

name, age, isAdult, address e phoneNumber = proprietà (properties)

"Mario", 30, true, undefined e null = valori (values)

-----------------------------------------
PROPERTY E VALUE
-----------------------------------------

Ogni proprietà è scritta così:

property: value

Esempio:

name: "Mario"

dove:

name = property
"Mario" = value

-----------------------------------------
ACCESSO ALLE PROPRIETÀ
-----------------------------------------

Per leggere una proprietà si usa la notazione a punto:

person.name

oppure:

console.log(person.name);

Output:

Mario

Altri esempi:

console.log(person.age);
console.log(person.isAdult);

-----------------------------------------
MODIFICARE UNA PROPRIETÀ
-----------------------------------------

Possiamo modificare il valore di una proprietà:

person.name = "Luigi";

Ora:

console.log(person.name);

Output:

Luigi

Altro esempio:

person.age = 31;

-----------------------------------------
AGGIUNGERE UNA PROPRIETÀ
-----------------------------------------

Possiamo aggiungere nuove proprietà anche dopo aver creato l'oggetto:

person.city = "Verona";

L'oggetto ora contiene anche la proprietà city.

-----------------------------------------
OBJECT E METODI
-----------------------------------------

Un oggetto può contenere non solo dati (properties), ma anche funzioni.

Quando una funzione appartiene ad un oggetto, si chiama metodo (method).

Esempio:

let person = {
    name: "Mario",
    age: 30,

    greet() {
        console.log("Ciao!");
    }
};

Per eseguire il metodo:

person.greet();

Output:

Ciao!

-----------------------------------------
TAKEAWAY
-----------------------------------------

1. Un Object serve a raggruppare informazioni correlate.

2. Le informazioni dentro un Object si chiamano properties.

3. Ogni property ha un value.

4. Per leggere una property si usa il punto:

   person.name

5. Per modificare una property:

   person.name = "Luigi";

6. Un Object può contenere sia dati sia funzioni.

7. Una funzione contenuta in un Object si chiama method.

8. Quando vedo le parentesi graffe {} nella dichiarazione di una variabile, molto spesso sto creando un Object.

9. Pensa ad un Object come ad una scheda che descrive qualcosa:
   persona, auto, film, prodotto, animale, ecc.

10. Mentre una variabile contiene un singolo valore, un Object può contenere molte informazioni organizzate insieme.

-----------------------------------------
COLLEGAMENTO CON I PROSSIMI ARGOMENTI
-----------------------------------------

OBJECT = insieme di proprietà che descrivono UNA cosa.

ARRAY = insieme di valori ordinati.

FUNCTION = blocco di codice riutilizzabile che esegue un'azione.

Prossimi argomenti:
- Arrays
- Functions
*/
/*
=========================================
FUNCTIONS
=========================================

Cos'è una Function?

Una Function (funzione) è un blocco di codice riutilizzabile che esegue una determinata azione.

Invece di scrivere più volte lo stesso codice, possiamo racchiuderlo dentro una funzione e richiamarlo ogni volta che serve.

Una funzione può:
- eseguire un'azione (task)
- ricevere dei valori in ingresso (parameters)
- restituire un valore (return)

-----------------------------------------
PERCHÉ USARE LE FUNCTION?
-----------------------------------------

Immagina di dover salutare più persone:

console.log("Hello Mario!");
console.log("Hello Luigi!");
console.log("Hello Anna!");

Invece di ripetere codice, possiamo creare una funzione riutilizzabile.

-----------------------------------------
DICHIARAZIONE DI UNA FUNCTION
-----------------------------------------

Una funzione si definisce con la parola chiave:

function

Esempio:

function sayHello() {
    console.log("Hello!");
}

IMPORTANTE:

Dopo la dichiarazione della funzione NON si mette il punto e virgola.

Corretto:

function sayHello() {
    console.log("Hello!");
}

Sbagliato:

function sayHello() {
    console.log("Hello!");
};

-----------------------------------------
CHIAMARE (INVOKE) UNA FUNCTION
-----------------------------------------

Creare una funzione non significa eseguirla.

Per eseguirla bisogna richiamarla:

sayHello();

Output:

Hello!

-----------------------------------------
PARAMETERS
-----------------------------------------

Una funzione può ricevere uno o più parametri.

I parametri sono variabili dichiarate tra le parentesi.

Esempio:

function sayHello(name) {
    console.log("Hello " + name + "!");
}

Qui:

name

è un parametro.

-----------------------------------------
ARGUMENTS
-----------------------------------------

Quando chiamiamo una funzione passiamo degli argomenti.

Esempio:

sayHello("Mario");

"Mario"

è l'argomento.

Mentalmente JavaScript fa qualcosa di simile a:

name = "Mario";

e poi esegue il codice della funzione.

Output:

Hello Mario!

-----------------------------------------
PARAMETER VS ARGUMENT
-----------------------------------------

function sayHello(name) {
}

name = parameter

sayHello("Mario");

"Mario" = argument

Takeaway:

Parameter = variabile definita nella funzione.

Argument = valore passato alla funzione.

-----------------------------------------
PIÙ PARAMETRI
-----------------------------------------

Una funzione può ricevere più parametri.

Esempio:

function sayHello(name, age) {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
}

Chiamata:

sayHello("Mario", 30);

Output:

Hello Mario
You are 30 years old

IMPORTANTE:

Se una funzione ha 2 parametri, normalmente ci aspettiamo 2 argomenti quando la utilizziamo.

-----------------------------------------
DEFAULT PARAMETERS
-----------------------------------------

Possiamo assegnare un valore di default.

Esempio:

function sayHello(name = "Guest") {
    console.log("Hello " + name);
}

Se scrivo:

sayHello();

Output:

Hello Guest

Se scrivo:

sayHello("Mario");

Output:

Hello Mario

-----------------------------------------
PERFORMING A TASK
-----------------------------------------

Molte funzioni eseguono semplicemente un'azione.

Esempio:

function sayHello(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

sayHello("Mario", "Rossi");

Output:

Hello Mario Rossi

Questa funzione esegue un task.

-----------------------------------------
CALCULATING A VALUE
-----------------------------------------

Altre funzioni calcolano un valore.

In questo caso normalmente utilizziamo:

return

Esempio:

function square(number) {
    return number * number;
}

square(5);

restituisce:

25

-----------------------------------------
RETURN
-----------------------------------------

La parola chiave return restituisce un valore al punto in cui la funzione è stata chiamata.

Esempio:

function square(number) {
    return number * number;
}

const result = square(5);

Mentalmente:

const result = 25;

-----------------------------------------
CONSOLE.LOG VS RETURN
-----------------------------------------

Errore molto comune per chi inizia.

console.log()

serve a mostrare qualcosa nella console.

return

serve a restituire un valore.

Esempio:

function square(number) {
    console.log(number * number);
}

square(5);

Output:

25

Ma il valore NON viene restituito.

-----------------------------------------

function square(number) {
    return number * number;
}

const result = square(5);

Ora:

result vale 25.

-----------------------------------------
REGOLA PRATICA
-----------------------------------------

Se la funzione deve:

- mostrare un messaggio
- stampare un'informazione
- eseguire un'azione

spesso userò console.log().

Se la funzione deve:

- produrre un risultato
- fare un calcolo
- fornire un valore ad altro codice

userò return.

-----------------------------------------
ESEMPIO IMPORTANTE
-----------------------------------------

function checkSpeed(speed) {

}

checkSpeed(82);

Qui:

speed è il parametro.

82 è l'argomento.

Mentalmente:

JavaScript esegue qualcosa di simile a:

speed = 82;

e poi entra nella funzione.

-----------------------------------------
TAKEAWAY
-----------------------------------------

1.
Una function è un blocco di codice riutilizzabile.

2.
Una function viene eseguita solo quando viene chiamata.

3.
Le parentesi tonde dopo il nome servono per passare argomenti.

4.
I parametri sono variabili dichiarate nella funzione.

5.
Gli argomenti sono i valori passati alla funzione.

6.
Parameter e argument NON sono la stessa cosa.

7.
Una funzione può ricevere zero, uno o più parametri.

8.
Una funzione può avere valori di default.

9.
console.log() stampa un valore.

10.
return restituisce un valore.

11.
Dopo un return la funzione termina immediatamente.

12.
Quando vedi:

function nome() {
}

devi pensare:

"Sto definendo cosa fare."

Quando vedi:

nome();

devi pensare:

"Sto eseguendo quel codice."
*/
``
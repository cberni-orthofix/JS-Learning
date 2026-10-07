/*
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
Switch...case
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
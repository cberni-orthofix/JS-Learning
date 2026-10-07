/* cos'è una funzione? una funzione è un blocco di codice che può essere eseguito quando viene richiamato, quindi una funzione è un insieme di istruzioni che possono essere eseguite più volte, e può anche ricevere dei parametri e restituire un valore.
come nel progetto abbiamo le Common functions, che sono funzioni che possono essere utilizzate in più parti del progetto, quindi sono funzioni riutilizzabili, e possono anche ricevere dei parametri e restituire un valore. 

allora, la funziona si definisce con la parola chiave function, tipo:
function sayHello() {
    console.log("Hello!");
}

importante sapere che dopo la dichiarazione della funzione non si usa il punto e virgola, quindi non si fa:
function sayHello() {
    console.log("Hello!");
};

ora se vogliamo richiamare una funzione usiamo il nome della funzione seguito da parentesi tonde, tipo: sayHello(); 
quindi la funzione sayHello() viene eseguita e stampa "Hello!" nella console.

Se invece vogliamo aggiungere una variabile alla funzione, tipo:
function sayHello(name) {
    console.log("Hello " + name + "!");
}
che andiamo a richiamare con sayHello("Mario"); // Hello Mario!

oppure possiamo anche fare: 
function sayHello(name) {
    return "Hello " + name + "!";
}
    che andiamo a richiamare con sayHello("Mario"); // Hello Mario!

    possiamo anche fare una funzione con più variabili, tipo:
function sayHello(name, age) {
    return "Hello " + name + "! You are " + age + " years old.";
}
    e dobbiamo aggiungere le variabili quando richiamiamo la funzione, tipo: sayHello("Mario", 30); // Hello Mario! You are 30 years old.

    possiamo anche fare una funzione con un valore di default, tipo:
function sayHello(name = "Guest") {
    return "Hello " + name + "!";
}
*/

/*
se vogliamo performare un task come
function sayHello(name, lastName){
console.log('hello' +  name + '' + lastName);})

e questo task deve calcolare un valore e restituirlo, allora dobbiamo usare return, tipo:
function square(number) {
 return number * number;
}
 e come valore gli passiamo un numero, tipo: square(5); // 25
*/
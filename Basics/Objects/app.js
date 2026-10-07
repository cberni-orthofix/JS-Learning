/* come abbiamo detto nella cartella delle variabili, le variabili sono dei contenitori che possono contenere dei valori, e i valori possono essere di diversi tipi, come string, number, boolean, undefined e null.
quando si parla di oggetti, si parla di un insieme di proprietà e metodi, che possono essere utilizzati per rappresentare una persona, un animale, un oggetto, ecc.

ad esempio, le connatazioni di una persona come: 
let name = "Mario";
let age = 30;
let isAdult = true;
let address;
let phoneNumber = null;

Sono da considerare un Object, quindi un insieme di proprietà e metodi, che possono essere utilizzati per rappresentare una persona. Ad esempio, possiamo creare un oggetto persona con le proprietà name, age, isAdult, address e phoneNumber, e i metodi getName(), getAge(), isAdult() e getAddress(), tipo:
let person = {
    name: "Mario",
    age: 30,
    isAdult: true,
    address: undefined,
    phoneNumber: null
};

per accedere alle proprietà di un oggetto, si utilizza la notazione a punto, tipo:
console.log(person.name);

un esempio può essere: person.name = "Mario"; // assegna il valore "Mario" alla proprietà name dell'oggetto person
oppure person.age = 30; // assegna il valore 30 alla proprietà age dell'oggetto person

prossimo argomento sono le array e poi le function, proseguono nelle relative cartelle
 */
/* 
MATRICE DI RAGIONAMENTO

1. SU COSA STO LAVORANDO?

- Numero
- Array
- Oggetto

Se è importante identificarlo, fermati qui.


--------------------------------------------------

2. DEVO RIPETERE QUALCOSA?

Esempi:
- da 1 a 10
- da 0 a N
- tutti gli elementi

SI -> LOOP

Numeri -> FOR
Oggetti -> FOR...IN
Array -> FOR...OF


--------------------------------------------------

3. DEVO SCEGLIERE TRA PIÙ CASI?

Esempi:
- pari/dispari
- maggiore/minore
- fizz/buzz

SI -> IF / ELSE


--------------------------------------------------

4. DEVO CONTROLLARE IL TIPO?

Esempi:
- string?
- number?
- boolean?

SI -> TYPEOF


--------------------------------------------------

5. DEVO MOSTRARE O RESTITUIRE?

Mostrare -> console.log()

Restituire -> return

Domanda:

"Il risultato deve essere usato da altro codice?"

SI -> return
NO -> console.log()


--------------------------------------------------

6. DEVO TENERE TRACCIA DI UN TOTALE?

Parole chiave:
- sum
- total
- score
- average
- points
- count

SI -> ACCUMULATORE

let total = 0;

total += valore;

return total;


--------------------------------------------------

7. DEVO VERIFICARE UN MULTIPLO?

SI -> %

Esempi:

numero % 3 === 0

numero % 5 === 0


--------------------------------------------------

8. DEVO VERIFICARE PARI O DISPARI?

Pari:

numero % 2 === 0

Dispari:

numero % 2 !== 0


--------------------------------------------------

9. DEVO DIVIDERE?

Divisione normale:

/

Esempio:

12 / 5 = 2.4


Resto della divisione:

%

Esempio:

12 % 5 = 2


--------------------------------------------------

10. DEVO TOGLIERE I DECIMALI?

Math.floor()


--------------------------------------------------

11. STO LAVORANDO CON UNA FUNZIONE?

function nome(parametro) {

}

nome(valore);

Regola mentale:

Parametro = scatola vuota

Valore = contenuto della scatola


--------------------------------------------------

APPLICATO AGLI ESERCIZI

MAX

Problema:
Trovare il maggiore tra due numeri.

Domande:
- Devo ripetere? NO
- Devo scegliere? SI

Strumento:
IF


--------------------------------------------------

LANDSCAPE

Problema:
Confrontare width e height.

Domande:
- Devo ripetere? NO
- Devo scegliere? SI

Strumento:
IF


--------------------------------------------------

FIZZBUZZ

Problema:
Controllare divisibilità.

Domande:
- Devo scegliere tra casi? SI
- Devo verificare multipli? SI

Strumenti:
IF + %


--------------------------------------------------

DEMERIT POINTS

Problema:
Calcolare punti da una velocità.

Domande:
- Devo scegliere? SI
- Devo dividere? SI
- Devo togliere decimali? SI

Strumenti:
IF + / + Math.floor()


--------------------------------------------------

SHOW NUMBERS

Problema:
Visitare tutti i numeri da 0 a N.

Domande:
- Devo ripetere? SI
- Devo verificare pari/dispari? SI

Strumenti:
FOR + IF + %


--------------------------------------------------

STRING PROPERTIES

Problema:
Visitare tutte le proprietà di un oggetto.

Domande:
- Sto lavorando con un oggetto? SI
- Devo visitare tutte le proprietà? SI
- Devo controllare il tipo? SI

Strumenti:
FOR...IN + TYPEOF


--------------------------------------------------

SUM OF MULTIPLES

Problema:
Sommare numeri validi.

Domande:
- Devo visitare tutti i numeri? SI
- Devo verificare una condizione? SI
- Devo tenere un totale? SI

Strumenti:
FOR + IF + ACCUMULATORE

Pattern mentale:

total = 0

trovo un valore valido
↓
total += valore

alla fine
↓
return total

*/

// 1) Quali sono i tipi primitivi principali in TypeScript?
// I tipi primitivi principali in TypeScript sono:
// - string
// - number
// - boolean
// - null
// - undefined
// - any
// - never
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = 'Andrea';
var myAge = 44;
var isStudying = true;
// 3) Tipizza il parametro della seguente funzione:
var greet = function (name) {
    return 'Ciao ' + name;
};
console.log(greet('Andrea'));
// 4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) {
    return a + b;
};
console.log(typeof sum(2, 3));
// sum torna un numero visto che è la somma di due parametri numerici
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var price = function (p) {
    return p + p * 0.22;
};
console.log(price(100));
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var sumStrings = function (a, b) {
    return (a + b).length;
};
console.log(sumStrings('ciao', 'Andrea'));
// 7) Cos'è un Type Union e come si scrive?
// Un Type Union è un tipo che può essere uno tra due o più tipi. Si ottiene utilizzando il simbolo "|".
// 8) Crea una variabile che possa contenere un numero, null o undefined.
var union = 10;
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers: number[] = [1, 2, 3]
// const numbers: Array<number> = [1, 2, 3]
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
// 12) Qual è la differenza tra type e interface?
// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
// 17) Crea un oggetto che implementi l'interfaccia Auto.
// 18) Cosa sono i Generics in TypeScript?
// 19) È possibile avere più tipi generici in un'interfaccia?
// 20) Crea un'interfaccia generica per una risposta API.

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
const myName: string = 'Andrea'
const myAge: number = 44
const isStudying: boolean = true

// 3) Tipizza il parametro della seguente funzione:
const greet = (name: string) => {
  return 'Ciao ' + name
}
console.log(greet('Andrea'))

// 4) Specifica il tipo di ritorno della seguente funzione:
const sum = (a: number, b: number) => {
  return a + b
}
console.log(typeof sum(2, 3))
// sum torna un numero visto che è la somma di due parametri numerici

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
const price = (p: number) => {
  return p + p * 0.22
}
console.log(price(100))

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
const sumStrings = (a: string, b: string) => {
  return (a + b).length
}
console.log(sumStrings('ciao', 'Andrea'))

// 7) Cos'è un Type Union e come si scrive?
// Un Type Union è un tipo che può essere uno tra due o più tipi. Si ottiene utilizzando il simbolo "|".

// 8) Crea una variabile che possa contenere un numero, null o undefined.
const union: number | null | undefined = 10

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
type Days =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers: number[] = [1, 2, 3]
// const numbers: Array<number> = [1, 2, 3]

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
const tupla: [string, string, string, number, number] = ['a', 'b', 'c', 1, 2]

// 12) Qual è la differenza tra type e interface?
// Un type definisce un tipo fra quelli disponibili in TypeScript, mentre un'interfaccia è un costrutto che definisce la struttura di un oggetto.

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".
interface Person {
  firstname: string
  lastname: string
  age: number
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.
interface User {
  email: string
  phone?: string
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.
interface Student {
  name: string
  grade: number
}
const students: Student[] = []

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".
interface Vehicle {
  wheels: number
}
interface Auto extends Vehicle {
  doors: number
}

// 17) Crea un oggetto che implementi l'interfaccia Auto.
const myCar: Auto = {
  wheels: 4,
  doors: 5,
}

// 18) Cosa sono i Generics in TypeScript?
// I Generics in TypeScript sono metodo che permette di creare componenti riutilizzabili che lavorano su tipi diversi.

// 19) È possibile avere più tipi generici in un'interfaccia?
// Sì, è possibile

// 20) Crea un'interfaccia generica per una risposta API.
interface ApiResponse<T> {
  data: T
  status: number
}

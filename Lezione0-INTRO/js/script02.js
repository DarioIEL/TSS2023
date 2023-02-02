//Array
//dichiarazione standard
var colori = ["blu", "verde", "rosso", "bianco"];

console.log(colori);
console.log("Il primo colore è " + colori[0]);
console.log("Il secondo colore è " + colori[1]);
console.log("Il terzo colore è " + colori[2]);
console.log("Il quarto colore è " + colori[3]);
console.log("Il quinto colore è " + colori[4]); //undefined

console.log("Nell'array ci sono " + colori.length+ " colori");

//metodi per array
//push() inserisce un nuovo elemento
colori.push("giallo");

//sort() per ordinare
colori.sort();

//reverse() inverte l'ordine
colori.reverse();

//pop() elimina l'ultimo
colori.pop();

//unire due array
var frutti = ["mela", "pera", "arancia", "albicocca"];

var nuovoArray = colori.concat(frutti);
console.log(nuovoArray);
console.log(colori);

var nomeUser = ["D", "A", "R", 'I', 'O'];
console.log(nomeUser.join(""));

var cognomeUser = "Mennillo";
var cognomeArr = cognomeUser.split("");
console.log(cognomeArr);

//inverti una stringa
var miaStringa = "Pasquale";
console.log( miaStringa.split("").reverse().join("") );

var frase = "i topi non avevano nipoti";
console.log(frase.split("").reverse().join(""));

//array misti
//NOOO
var persona = ["Dario", "Mennillo", "Javascript", true, 33, "Samsung"];
console.log(persona);




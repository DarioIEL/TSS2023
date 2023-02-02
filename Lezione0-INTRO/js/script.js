//dichiaro la variabile
var saluto = "Ciao, Mondo !";

//richiamo la variabile
console.log(saluto);

console.log(typeof saluto);

var numStudenti = 16;
console.log("Nella classe ci sono " + numStudenti + " studenti");
console.log(typeof numStudenti);

//riassegno la variabile
numStudenti = 17;
console.log("Adesso gli studenti sono: " + numStudenti);

//possibile cambiare tipo ma NON fatelo alla leggera
numStudenti = "diciotto";
console.log("Adesso gli studenti sono: " + numStudenti);


var docenti = 3;
var responsabili = 2;

var totale = responsabili + docenti;
console.log(totale);

var dirigenti = 10;
var dipendenti = "345";
//predilige le stringhe
var totale2 = dirigenti + dipendenti; //10345
var moltiplicazione = dirigenti * dipendenti;

console.log(totale2);
console.log(moltiplicazione);

//CAST
var sviluppatori = "55";

var totale3 = Number(sviluppatori) + docenti;
console.log(totale3);

var presenza = true;
console.log(typeof presenza);

///////////////STAMPO NELLA PAGINA
//MANIPOLAZIONE del DOM

var demo = document.getElementById("demo"); //<p id="demo"></p>
console.log(demo);

demo.innerHTML = "ANDIAMO IN PAUSA";



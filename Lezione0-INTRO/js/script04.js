//metodi per stringhe

var frase = "Questa è la seconda lezione";
console.log(frase);
console.log("La frase è composta da " + frase.length + " caratteri");

//metodi per ricerca
var search1 = frase.charAt(1); //u
console.log(search1);

var search2 = frase.indexOf("e"); //recupera la prima occorrenza
console.log(search2);

var search3 = frase.indexOf("con"); //pattern
console.log(search3);

var search4 = frase.lastIndexOf("e");
console.log(search4);

var search5 = frase.indexOf("lezione");
console.log(search5);

var search6 = frase.indexOf("Dario"); // -1
console.log(search6);

if(frase.indexOf("Dario") == -1){
    console.log("La parola che stai cercando non c'è  nella frase");
}else{
    console.log("La parola è presente nella frase");
}

//Metodi per il taglio
var frase2 = "Oggi vedremo le funzioni";
console.log(frase2);

var slice1 = frase2.slice(2,15);
console.log(slice1);

var sub = frase2.substring(2,15);
console.log(sub);

var spl = frase2.split(" "); //splitta ogni spazio creando un array
console.log(spl);

//l'utente carica un file noi dobbiamo capire di che tipo è, cioè l'estensione 
var file = "appunti.qualcosa.ciao.come.stai.benegrazie.pdf";
var array = file.split(".");
console.log(array);
console.log(array[array.length-1]);

//Metodi per sostituire
var stringa = "Il miglior browser al mondo è Explorer";
var stringaVera = stringa.replace("Explorer", "Google Chrome");
console.log(stringaVera);
console.log(stringaVera.toUpperCase());


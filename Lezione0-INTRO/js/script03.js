var libri = [
    "Un volo per Sara",
    "Harry Potter",
    "Dune",
    "Siddartha",
    "Jurassic Park",
    "Il signore degli anelli",
    "Il signore delle mosche",
    "Piccolo Principe",
    "Guida Galattica per autostoppisti"
];

var prezzi = [
    12,
    75,
    15,
    8,
    10,
    20.3,
    8.7,
    4.5,
    11
];

//stampa i libri in console
for(var i = 0; i < libri.length; i++){
    console.log(libri[i]);
}

//stampa i libri nello scaffale
//recupero lo UL dallo HTML
var scaffale = document.getElementById("scaffale") //<ul id=scaffale></ul>
var totale = document.getElementById("totale"); //<div id="totale"></div>

var prezzoTotale = 0;

//vado a riempire l'ul con tanti li
for(var i = 0; i < libri.length; i++){
    // scaffale.innerHTML += "<li>" + libri[i] + " - " + prezzi[i] + "€ </li>";

    //nomenclatura backtick ` = ALT + 96
    //${variabile}
    //non utilizzo + per concatenare 
    scaffale.innerHTML += `<li> ${libri[i]} - ${prezzi[i]} € </li> `


    prezzoTotale += prezzi[i];
}

//innerHTML legge e scrive testo + html
// totale.innerHTML = "<h2> Totale Libri: " + prezzoTotale + " € </h2>";
totale.innerHTML = `<h2> Totale Libri: ${prezzoTotale} € </h2>`

//SPOILER PER DOMANI
function applicaSconto(){
    var prezzoScontato = (prezzoTotale * 0.92).toPrecision(4);
    totale.setAttribute("class", "coloreSconto");
    totale.innerHTML = "<h2> Totale Libri: " + prezzoScontato + " € </h2>";
}

//removeAttribute("class")
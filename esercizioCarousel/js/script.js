function Film(titolo, img, attori, prezzo, durata){
    this.titolo = titolo;
    this.img = img;
    this.attori = attori;
    this.prezzo = prezzo;
    this.durata = durata;

    this.info = function(){
        //to String delle prop
    }
}

/**
 * @name listaFilm  
 * @type Film[]
 */
var listaFilm = [
 new Film("Harry Potter", "https://i.ebayimg.com/images/g/~YoAAOSwHUdihJJz/s-l500.jpg", ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"], 3.50, 120),
 new Film("Guida Galattica per autostoppisti", 
         "https://pad.mymovies.it/filmclub/2005/07/045/locandina.jpg", 
         ["Martin Freeman", "Alan Rickman", "Zoey Deschanel"],
         2.50,
         156 
         ),

    new Film ("fast & Furious", 
    "https://nientepopcorn.b-cdn.net/film-img/584-locandina-big.jpg", 
    ["Vin Diesel", "Paul Walker"],
    2.50,
    156 
    )

]

// #NomeID
// .NomeClasse
var titolo = document.getElementById("titoloFilm");
var img = document.querySelector("#miaImg");
var listaAttori = document.querySelector("#listaAttori");
var durataFilm = document.querySelector("#durataFilm");
var prezzoFilm = document.querySelector("#prezzoFilm");

var contatore = 0;

function caricaFilm(counter){
    listaAttori.innerHTML = "";

    titolo.innerHTML = listaFilm[counter].titolo;
    img.src = listaFilm[counter].img;
    for(var i = 0; i < listaFilm[counter].attori.length; i++){
        listaAttori.innerHTML += "<li>" + listaFilm[counter].attori[i] + "</li>";
    }
    durataFilm.innerHTML = listaFilm[counter].durata;
    prezzoFilm.innerHTML = listaFilm[counter].prezzo;
}

var btnInd = document.querySelector("#btnInd");
var btnAvant = document.querySelector("#btnAvant");

function vaiIndietro(){

    
    // if(contatore == 0){
    //     contatore = listaFilm.length - 1
    // }else{
    //     contatore--;
    // }
    
    contatore = (listaFilm.length + (contatore - 1)) % (listaFilm.length);

    console.log(contatore);
    caricaFilm(contatore);

}

function vaiAvanti(){
    // contatore++;
    
    // if(contatore == listaFilm.length){
    //     contatore = 0
    // }
    
    //modulo
    contatore = (contatore + 1) % listaFilm.length;
    caricaFilm(contatore);
}

// btnInd.onclick = vaiIndietro;
// btnAvant.onclick = vaiAvanti;

//Stessa cosa con una sola funzione

function ruota(verso){
    if(verso == "avanti"){
        vaiAvanti();
    }else{
        vaiIndietro();
    }
}

btnAvant.onclick = function(){
    ruota("avanti");
}

btnInd.onclick = function(){
    ruota("indietro");
}

//questa funzione carica il primo film all'apertura della pagina
caricaFilm(contatore);
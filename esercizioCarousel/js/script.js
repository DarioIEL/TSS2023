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
 new Film(
         "Guida Galattica per autostoppisti", 
         "https://pad.mymovies.it/filmclub/2005/07/045/locandina.jpg", 
         ["Martin Freeman", "Alan Rickman", "Zoey Deschanel"],
         2.50,
         156 
         )
]

var titolo = document.getElementById("titoloFilm");
var img = document.querySelector("#miaImg");
var listaAttori = document.querySelector("#listaAttori");
var durataFilm = document.querySelector("#durataFilm");
var prezzoFilm = document.querySelector("#prezzoFilm");

var contatore =  0

function caricaFilm(counter){
    titolo.innerHTML = listaFilm[counter].titolo;
    img.src = listaFilm[counter].img;
    for(var i = 0; i < listaFilm[counter].attori.length; i++){
        listaAttori.innerHTML += "<li>" + listaFilm[counter].attori[i] + "</li>";
    }
    durataFilm.innerHTML = listaFilm[counter].durata;
    prezzoFilm.innerHTML = listaFilm[counter].prezzo;
}

caricaFilm(contatore);
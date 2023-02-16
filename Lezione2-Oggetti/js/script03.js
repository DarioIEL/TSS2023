var dipendente = {
    nome: "Mario",
    cognome: "Verdi",
    stipendio: 1500,
    ruolo: "impiegato",
    scatto: true,

    toString(){
        return this.nome + " " + this.cognome + " " + this.stipendio;
    }
}

console.log(typeof dipendente);
console.log(typeof dipendente.nome);
console.log(typeof dipendente.stipendio);
console.log(typeof dipendente.toString);

let numero = 12;
console.log(typeof numero);

var demo = document.getElementById("demo");

//Applico un FOR In per poter scorrere le propr dell'oggetto
for(const key in dipendente){
    console.log(key + " - " + dipendente[key]); //dipendente["nome"] == dipendete.nome

    if( typeof dipendente[key] != "function" ){
        demo.innerHTML += key + " - " + dipendente[key] + " <br>";
    }
}


//Costruttore
function Operaio(nome, cognome, stipendio, scatto, anniAssunz){
    //proprietà
    this.nome = nome;
    this.cognome = cognome;
    this.stipendio = stipendio;
    this.scatto = scatto;
    this.anniAssunz = anniAssunz;
 

    //metodo chiamato aumentaStipendio
   this.aumentaStipendio = function(){
     if(this.anniAssunz > 3){
        this.stipendio = stipendio * 1.2;
        return this.stipendio ;
     }else{
        return this.stipendio;
     }
   }
}


var elencoOperai = [
    new Operaio("Luisa", "Verdi", 1200, true, 4),
    new Operaio("John", "Doe", 1100, false, 1),
    new Operaio("Maria", "Rossi", 1400, true, 6),
    new Operaio("Luca", "Verdi", 1250, true, 2)
];

var elenco = document.getElementById("elenco");

//For each si applica su tutti gli array

//operaio =>{}  === function(operaio){}

elencoOperai.forEach(operaio => {

    var descrizione = "";

    operaio.aumentaStipendio();

    for(key in operaio){
        if(typeof operaio[key] != "function"){
            descrizione += key + " : " + operaio[key] + "<br>";
        }
    }

    elenco.innerHTML+= "<div class='dimensioni'>" + descrizione + "</div>";
})



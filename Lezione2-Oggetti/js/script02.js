//notazione letterale
var studentePippo = {
    //prop
    //chiave: valore
    nome: "Pippo",
    cognome: "Rossi",
    voto: 30,
    presenza: true,
    matricola: 123,
    dataNascita: new Date("05/10/2002"),

    //metodi
    studia: function(){
        // console.log("Sto studiando....");
        // console.log("Il mio ultimo voto è " + this.voto);
        return "Sto studiando..."
    },

    prensentaStudente: function() {
      var presentazione = "Mi chiamo " + this.nome + " " + this.cognome + " ";
      presentazione += this.studia();
      return presentazione;
    }
}

// console.log(studentePippo.nome);
// console.log(studentePippo.cognome);
// studentePippo.studia();

console.log(studentePippo.prensentaStudente());


function Studente(nome, cognome, voto,presenza){
    this.nome = nome;
    this.cognome = cognome;
    this.voto = voto;
    this.presenza = presenza;

    this.studia = function(){
        return this.nome + " sta studiando...";
    }
}

var mioStudente = new Studente("Anna", "Gialli", 30, false);
var tuoStudente = new Studente("Paolo", "Bianchi", 27, true);
console.log( mioStudente.studia() );

var aula = [
    new Studente("Teresa", "Mastroianni", 20, true),
    new Studente("Domenico", "Pugliese", 20, true),
    new Studente("Sara", "Carlini", 20, true)
]

console.log("Nella classe di TSS:");
for(var i = 0; i < aula.length; i++){
    var studente = aula[i];
    
    console.log( studente.studia());
}

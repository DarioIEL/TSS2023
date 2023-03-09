//oggetto JS
var  utente = {
    username: "Jenny93",
    password: "123456",
    eta: 29,
    app: ["Instagram", "Fb", "Chess.com"],

    //il metodo non verrà trasformato in stringa
    login: function(){
        console.log("sto controllando " + this.username +  " associato a " + this.password);
    }
}
console.log(utente);
console.log(utente.app[0]);

//trasformo l'oggetto in stringa
var utenteStringa = JSON.stringify(utente);

console.log(utenteStringa);


var ObjStringa = '{"nome": "Pippo", "cognome": "Rossi", "eta": 20, "app": ["fb", "Google"]}';

console.log(typeof ObjStringa);

//trasformo la stringa in oggetto
var ObjObj = JSON.parse(ObjStringa);

console.log(ObjObj);
console.log(ObjObj.nome); //qui pesco le prop al buio

//qui mappo l'oggetto con un costruttore
function mioObj (nome, cognome, eta, app){
    this.nome = nome;
    this.cognome = cognome;
    this.eta = eta;
    this.app = app;

    this.login = function(){
         return "sto controllando " + this.nome +  " associato a " + this.cognome;
    }
}

var mioUtente = new mioObj(ObjObj.nome, ObjObj.cognome, ObjObj.eta, ObjObj.app);

console.log(mioUtente.nome);
console.log(mioUtente.login());

mioObj.prototype.logout = function(){
    console.log(this.nome + " non è più collegato");
}







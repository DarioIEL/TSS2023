var oggi = new Date();
console.log(oggi);

var est = new Date("Apr 15, 2013 10:25:00");
console.log(est);

var anniTrascorsi = oggi.getFullYear() - est.getFullYear();
console.log(anniTrascorsi);

console.log(oggi.getDate());
console.log(oggi.getDay());
console.log(oggi.getHours());
console.log(oggi.getMinutes());
console.log(oggi.getSeconds());
console.log(oggi.getTime());


//orologio digitale
var orologio = document.getElementById('orologio');

setInterval( function (){

    var oraEsatta = new Date();
    var ora = ((oraEsatta.getHours() < 10) ? "0" : "") + oraEsatta.getHours();
    var minuto = ((oraEsatta.getMinutes() < 10) ? "0" : "") + oraEsatta.getMinutes();
    var secondi = ((oraEsatta.getSeconds() < 10) ? "0" : "") + oraEsatta.getSeconds();
    
    orologio.innerHTML = ora + ":" + minuto + ":" + secondi;
    
}, 1000)

//OPERATORE TERNARIO 
var numero = 60;

var esito = (numero >= 50 ) ? "bravo" : "mi dispiace";
console.log(esito);


if(numero >= 50){
    console.log("bravo, hai superato i 50 punti");
}else{
    console.log("mi dispiace, non hai raggiunto i 50 punti");
}


var num = 123.4567;

//Arrotondamento
console.log( num.toFixed(2) ); //num di cifre decimali 
console.log( num.toPrecision(5) ); //num cifre significative

var x1 = "234";
var x2 = true;
var x3 = "234 567";
var x4 = "Ciao";
var x5 = new Date();

//cast
console.log( Number(x1));
console.log( Number(x2));
console.log( Number(x3));
console.log( Number(x4));
console.log( Number(x5));

var mieStringhe = ["2.345", "4.987", "6.654"];

for(var i = 0; i < mieStringhe.length; i++){
    var mioNumero = Number(mieStringhe[i])
    console.log(mioNumero + " è un numero ? " + !isNaN(mioNumero));

    var mioNumeroInt = parseInt(mieStringhe[i]);
    console.log(mioNumeroInt);

    var mioNumeroFloat = parseFloat(mieStringhe[i]);
    console.log(mioNumeroFloat);
}
//FOR IF
// var sequenzaNumeri = [];
// var numGiri = 0;

// for(var i = 0; i < 6; i++){
//     var numeroEstratto = Math.ceil( Math.random() * 90 ) ;
//     if(!sequenzaNumeri.includes(numeroEstratto)){
//         sequenzaNumeri.push(numeroEstratto);
//     }else{
//         i--;
//     }
//     numGiri++;
// }

// console.log(sequenzaNumeri);
// console.log("Giri eseguiti: " + numGiri);

////CON WHILE

// var sequenzaNumeri = [];
// var numerogiri=0;

// while(sequenzaNumeri.length < 6){
//     var numeroEstratto = Math.ceil( Math.random() * 90 ) ;
//     if(!sequenzaNumeri.includes(numeroEstratto)){
//         sequenzaNumeri.push(numeroEstratto);
//     }
//     numerogiri++
// }

// console.log(sequenzaNumeri);
// console.log(numerogiri);

//ALTERNATIVA SPLICE
var numeri = [];
for(var i =0; i < 90; i++){
    numeri.push(i+1);
}
// console.log(numeri);

var sequenzaNumeri = [];
for(var i = 0; i < 10; i++){
    var numero =  Math.floor( Math.random() * numeri.length);
    sequenzaNumeri.push(numeri[numero]);
    numeri.splice(numero, 1);
}

console.log(sequenzaNumeri);



var colori = ["bianco", "verde", "rosso"];
console.log( colori.splice(1, 2) );
console.log(colori);
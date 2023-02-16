var zonaEstrazione = document.getElementById("zonaEstrazione");
var btnEstr = document.getElementById("btnEstr");

function stampa() {
    zonaEstrazione.innerHTML = "";
    
    var numDaEstrarre = document.getElementById("numDaEstr").value;
    if(numDaEstrarre < 1 || numDaEstrarre > 90){
        zonaEstrazione.innerHTML = "Hai inserito un numero non valido";
    }else{
        let sequenza = estrai(numDaEstrarre); //questa funzione restituisce un array
        for(var i = 0; i < sequenza.length; i++){
            zonaEstrazione.innerHTML += sequenza[i] + " ";
        }
    }
}

function estrai(numDaEstrarre) {
    var sequenzaNumeri = [];
    var numerogiri = 0;

    while (sequenzaNumeri.length < numDaEstrarre) {
        var numeroEstratto = Math.ceil(Math.random() * 90); 
        if (!sequenzaNumeri.includes(numeroEstratto)) {
            sequenzaNumeri.push(numeroEstratto);
        }
        numerogiri++
    }

    console.log(sequenzaNumeri);
    console.log(numerogiri);

    return sequenzaNumeri;
}


btnEstr.onclick = stampa;

const BTN = document.getElementById("btn");
const benvenuto = document.getElementById("benvenuto");
const scontrino = document.getElementById("scontrino"); //<ul></ul>
const totale = document.getElementById("totale");
const totaleArticoli = document.getElementById("totaleArticoli");
const campiAggiuntivi = document.getElementById("campiAggiuntivi");

var prodotti = [
    "Pane",
    "Pasta",
    "Vino",
    "Frutta"
];

var prezzi =[
    2.50,
    1.20,
    5.55,
    3.60
];

function salutaStampa(){
    let nomeUtente = document.getElementById("nomeUtente").value;
    
    if(nomeUtente == ""){
        benvenuto.innerHTML = "Mi dispiace non hai inserito nessun nome";
        pulisciHTML();
        
    }else{
        benvenuto.innerHTML = "Ciao " + nomeUtente + " questo sotto è il tuo scontrino";
        stampaScontrino();
    }
    
}

function pulisciHTML(){
    scontrino.innerHTML= "";
    totale.innerHTML= "";
    totaleArticoli.innerHTML= "";
}

function stampaScontrino(){
    var listato = "";
    var costoTotale = 0;

    for(let i = 0; i < prodotti.length; i++){
        // listato += "<li>" + prodotti[i] + " - " + prezzi[i] + " € </li>";
        listato += `<li> ${prodotti[i]} - ${prezzi[i]} € </li>`;
        costoTotale += prezzi[i];
    }

    scontrino.innerHTML = listato;
    totale.innerHTML = "Il totale del tuo scontrino: " + costoTotale;
    totaleArticoli.innerHTML = "Nel carrello ci sono " + prodotti.length + " prodotti";

    creaCampi();
}

function creaCampi(){
    campiAggiuntivi.innerHTML = "<input type='text' id='nuovoProd'> <input type='number' id='nuovoPrice' > <button id='btnAgg'>Aggiungi</button>";

    const nuovoProd = document.getElementById("nuovoProd");
    const nuovoPrice = document.getElementById("nuovoPrice");
    const btnAgg = document.getElementById("btnAgg");


    btnAgg.onclick = function(){
        prodotti.push(nuovoProd.value);
        prezzi.push(Number( nuovoPrice.value));

        stampaScontrino();
    }
}


btn.onclick = salutaStampa;
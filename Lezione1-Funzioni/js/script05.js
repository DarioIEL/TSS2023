
var demo = document.getElementById("demo");
var btn = document.getElementById("btn");

function aggiungi(){
    let item = document.getElementById("item").value;

    demo.innerHTML += `<li>${item}</li>`;

    //azzera, pulire, resettare il campo input
    document.getElementById("item").value = "";
}


btn.onclick = aggiungi;

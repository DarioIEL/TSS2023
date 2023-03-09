var user = {
    nome: "Dario",
    cognome: "Mennillo",
    sistemaOP: "Windows 11",
    connesso: false
}

var btnAgg = document.querySelector("#btnAgg");

btnAgg.onclick = function(){
    //per poterlo registrare in local o session storage lo trasformo in un JSON
    var userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);   
}

var btn = document.querySelector("#btn");

btn.onclick = function(){
    // localStorage.clear(); //azzera completamente la localstorage
    localStorage.removeItem("user");
}

var btnRec = document.querySelector("#btnRec");

btnRec.onclick = function(){
    let demo = document.querySelector("#demo");
    let info = localStorage.getItem("user"); //ricevo sotto formato JSON
    console.log(info);
    if(info == null){
        demo.innerHTML = "Non c'è nessun utente connesso";
    }else{
        let myUser = JSON.parse(info);
        demo.innerHTML = "L'utente connesso è : " + myUser.nome;
    }
}
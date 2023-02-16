function User(name, surname, age, email){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.email = email;

    this.info = function(){
        let description = `Nome: ${this.name} <br> Cognome: ${this.surname} <br> Età: ${this.age} <br> Email: ${this.email}`;
        return description;
    }
}


function prendiDati(){
    //querySelector funziona con la sintassi css, cioè #ID, .class
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let age = document.querySelector("#age").value;
    let email = document.querySelector("#email").value;
    
    if(name == "" || surname == "" || age == "" || email == ""){
        feedback.innerHTML = "Hai dimenticato uno o più campi";
        return null;
    }else{
        let myUser = new User(name, surname, age, email);
        return myUser;
    }
}

function scriviDati(){
    if(prendiDati() != null){
        let myNewUser = prendiDati();
        //scrivo i dati
        console.log(myNewUser);
        feedback.innerHTML = myNewUser.info();
        elencoUsers.push(myNewUser);
        stampaElencoUsers();
    }
}


function stampaElencoUsers(){
    list.innerHTML = "";
    elencoUsers.forEach(user => {
        //stampo nell'elenco
        list.innerHTML += `<li> ${user.name}  ${user.surname} ${user.age} ANNI</li>`
    })
}


var btnSend = document.getElementById("btnSend");
var feedback = document.querySelector("#feedback");
var list = document.querySelector("#list");

let elencoUsers = [];


btnSend.onclick = scriviDati;

//creo un array di oggetti 

var pokemons = [{
        id: 0,
        nome: "Bulbasaur",
        tipo: "erba",
        abilita: "foglie lama",
        thumbnail: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        thumbnailSpalle : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
        info: "Pokemon abbastanza socievole se non infastidito"
    },
    {
        id: 1,
        nome: "Charmander",
        tipo: "fuoco",
        abilita: "fuoco bomba",
        thumbnail: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
        thumbnailSpalle : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
        info: "In caso vada fuori conrtollo chiamare 112 e farsi passare i pompieri"
    },
    {
        id: 2,
        nome: "Pikachu",
        tipo: "elettrico",
        abilita: "tuono shock",
        thumbnail: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
        thumbnailSpalle : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        info: "Coloro i quali lo agganceranno al contatore saranno punibili secondo norma cod. Penale"
    },
    {
        id: 3,
        nome: "Squirtle",
        tipo: "acqua",
        abilita: "idro pompa",
        thumbnail: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
        thumbnailSpalle : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
        info: "Non è un pompiere"
    }
]

var listaCard = document.querySelector("#listaCard")

function creaCard() {

    pokemons.forEach(poke => {
        let card = `<div class="card col-md-3">
        <img class="card-img-top" src="${poke.thumbnail}" alt="Title">
        <div class="card-body">
            <h4 class="card-title">${poke.nome}</h4>
            <p data-nomeAttributo = "qualsiasicosa" class="card-text">Abilità: ${poke.abilita}</p>

            <button class="btn btn-primary" data-id="${poke.id}" >Mostra Info</button>
        </div>
    </div>`;

        listaCard.innerHTML += card;

    });

    mostraInfo();
}


function giraImg(idPokemon){
    listaCard[idPokemon].thumbnailSpalle;
}


function mostraInfo(){
    var buttons = document.querySelectorAll(".btn");
    [...buttons].forEach(btn => {
        btn.onclick = function(){
            console.log("Sto mostrando le info di", pokemons[this.getAttribute("data-id")]);

            let pInfo = document.createElement("p");
       
            if(this.previousSibling.textContent.trim() == "" ){          
                pInfo.textContent = pokemons[this.getAttribute("data-id")].info;
                this.parentNode.insertBefore(pInfo, this);
                this.textContent = "Nascondi Info";
                
                this.parentNode.previousElementSibling.setAttribute("src", pokemons[ this.getAttribute("data-id") ].thumbnailSpalle)
                
            }else{
                
                this.previousSibling.remove();
                // this.previousSibling.textContent = "";
                this.textContent = "Mostra Info";
                this.parentNode.previousElementSibling.setAttribute("src", pokemons[ this.getAttribute("data-id") ].thumbnail)
            }

            
        }
    });
}


creaCard();
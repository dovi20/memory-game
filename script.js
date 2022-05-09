let cards = ['A','B','C','D','E','F','H','I']
let nArr = cards.concat(cards)
let board = document.getElementById("table-game");
let btn = document.getElementById("btn");
let card = document.getElementsByClassName("card");
let newDiv;
cards = shuffle(nArr);


function createDiv(){
    for(i of cards){
        // btn.classList.add('btn-hide')
        // player1.classList.add('btn-hide')
        // player2.classList.add('btn-hide')
        settings.classList.add('hide')
        newDiv = document.createElement ("div");
        newDiv.innerText = i;
        board.appendChild(newDiv)
        newDiv.className = "card " + i;
        newDiv.onclick = click
        newDiv.classList.add('hidden')
        // newDiv.addEventListener('click', click) 
    }
}
// let create = createDiv;

btn.addEventListener('click', createDiv)

// let value = document.getElementsByClassName('card')[0].innerHTML



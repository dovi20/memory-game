let cards = ['A','B','C','D','E','F','H','I']
let nArr = cards.concat(cards)
let board = document.getElementById("table-game");
let card = document.getElementsByClassName("card");
let newDiv;

cards = shuffle(nArr);

createDiv(cards, "card ");
click1()


function click1() {
    for(i=0;i<card.length;i++){
        card[i].addEventListener('click', click) 
    }
}

function check() {
    
}







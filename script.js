let cards = ['A','B','C','D','E','F','H','I']
let nArr = cards.concat(cards)
let board = document.getElementById("table-game");
let card = document.getElementsByClassName("card");
let newDiv;
cards = shuffle(nArr);

createDiv(cards, "card ");

let value = document.getElementsByClassName('card')[0].innerHTML



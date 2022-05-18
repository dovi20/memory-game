// let cards = ['A','B','C','D','E','F','H','I']
let cards = ['🤣','😊','😘','❤️','😍','😗','😎','🤩']
let nArr = cards.concat(cards)
let board = document.getElementById("table-game");
let card = document.getElementsByClassName("card");
let newDiv;
cards = shuffle(nArr);
let player = 0;
let scorePlayer1 = 100
let scorePlayer2 = 100;
let sp1 = document.getElementById("sp1")
let sp2 = document.getElementById("sp2")
let player1 = document.getElementById('player1')
let player2 = document.getElementById('player2')

createDiv(cards, "card ");

let value = document.getElementsByClassName('card')[0].innerHTML



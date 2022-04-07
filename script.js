let cards = ['A','B','C','D','E','F']
let nArr = cards.concat(cards)

function shuffle(arr) {
    // debugger;
    let index = arr.length 
    let random;
    while (index != 0) {
      random = Math.floor(Math.random() * index);
      index--;
      [arr[index], arr[random]] = [
        arr[random], arr[index]];
      

    }
    return arr;
  }

  cards = shuffle(nArr);

  console.log(cards);


let board = document.getElementById("table-game");

function createDiv(value){
    
}
for(i in cards){
    let elem = document.createElement ("div");
    elem.innerText = cards[i];
    board.appendChild(elem);
    elem.className = "card"
}



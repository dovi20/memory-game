// shuffle the cards
function shuffle(arr) {
    let random;
    for (i = arr.length - 1 ;i >= 0 ; i--){
        random = Math.floor(Math.random() * i);
        [arr[i], arr[random]] = [arr[random], arr[i]];
    }
    return arr;
}
// create cards on the table
function createDiv(arr,classN){
    for(i of arr){
        newDiv = document.createElement ("div");
        newDiv.innerText = i;
        board.appendChild(newDiv)
        newDiv.className = classN + i;
        
    }
}

function click() {
    alert()
}
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
        newDiv.onclick = click
        newDiv.classList.add('hidden')
    }
}

count = []
let click =(e)=> {
    let active = document.getElementsByClassName('active')
    e.target.classList.remove("hidden");
    count.push(e.target.innerText)
    if(count.length == 2){
        let flipDiv = document.getElementsByClassName(count[0])
        if(count[0]!=count[1]){
            noMatch(e)
        }else{
            for (i of flipDiv){
                i.classList.add("active")
                i.classList.add("no-click")
            }
            count = []
        }
    }
}  
function noMatch(e){
    flipDiv = document.getElementsByClassName(count[0])
    setTimeout(()=> e.target.classList.add("hidden"),1000)
    setTimeout(()=> flipDiv[0].classList.add("hidden"),1000)
    setTimeout(()=> flipDiv[1].classList.add("hidden"),1000)
    setTimeout(() => changePlayer(),1000)
    count = [];
}

function changePlayer(){
    if (player == 1){
        scorePlayer1--
        player = 2
        sp1.classList.add('hidden')
        sp2.classList.remove('hidden')
        player1.innerText = `player 1: ${scorePlayer1}`
        player2.innerText = `player 2: ${scorePlayer2}`
    }else{
        scorePlayer2--
        player = 1
        sp2.classList.add('hidden')
        sp1.classList.remove('hidden')
        player1.innerText = `player 1: ${scorePlayer1}`
        player2.innerText = `player 2: ${scorePlayer2}`
    }
}

let noclick = ()=> alert()


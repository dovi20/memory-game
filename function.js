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
        // newDiv.addEventListener('click', click) 
        
    }
}

count = []
let click =(e)=> {
    e.target.classList.remove("hidden");
    count.push(e.target.innerText)
    if(count.length%2==0){
        if(count[count.length-1]!=count[count.length-2]){
            alert('not good')

            console.log(count);
        }else{
            console.log(count);
            alert('good')
            count = []
        ,1000}
        
    }

}  

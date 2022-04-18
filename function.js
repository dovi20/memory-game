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
    let active = document.getElementsByClassName('active')
    e.target.classList.remove("hidden");
    count.push(e.target.innerText)
    if(count.length == 2){
        let flipDiv = document.getElementsByClassName(count[0])
        if(count[0]!=count[1]){
            setTimeout(()=> e.target.classList.add("hidden"),1000)
            setTimeout(()=> flipDiv[1].classList.add("hidden"),2000)
            setTimeout(()=> flipDiv[0].classList.add("hidden"),1000)
            console.log(count);
            count = []
        }else{
            for (i of flipDiv){
                i.classList.add("active")
            }
            for (i of active){
                i.onclick = noclick
            }
            console.log(count);
            count = []
        }
        
    }

}  

let noclick = ()=> alert()


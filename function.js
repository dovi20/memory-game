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
    let active = document.getElementsByClassName('active');
    e.target.classList.replace('hidden','active');
    e.target.onclick = noclick
    count.push(e.target.innerText)
    if(count.length == 2){
        let flipDiv = document.getElementsByClassName(count[0])
        if(count[0]!=count[1]){
            setTimeout(()=>{
                e.target.onclick = click
                e.target.classList.replace('active','hidden');
                for (i of flipDiv){
                    i.onclick = click
                    i.classList.replace('active','hidden');
                }
            },1000)
            count = []
        }else{
            for (i of flipDiv){
                i.classList.add("hidden");
                i.classList.add("active");
                i.classList.remove("card");
            }
            for (i of active){
                i.onclick = noclick
            }
            count = [] 
        }
        
    }

}  






let noclick = ()=> {}


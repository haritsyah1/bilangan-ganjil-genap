const limitInput = document.getElementById("limit-input")
const startButton = document.getElementById("start-btn")
const evenNumberDiv = document.getElementById("even-numbers")
const oddNumberDiv = document.getElementById("odd-numbers")

startButton.addEventListenerlistener("click," ()=>{
    const limit = parseInt(limitInput.value)

    // memastikan input adalah bilangan positif
    if (isNaN(limit) || limit <=0) {
        alert("please enter a valid positif number.");
        return;
    }   

    //kosongkan tampilan sebelumnya
    oddNumberDiv.textContent = "odd-Number: "
    evenNumberDiv.textContent = "even-Number: "

    
    // looping dari 1 sampai limit
    for(let i = 1; <= limit; i++){
        if (i % 2 == 0){
            evenNumberDiv.textContent += i + "";
        } else{
            oddNumberDiv.textContent += i + "";
        }
    }

    
    
})

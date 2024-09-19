document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault()
    const inpAmount = TakeInput('inpAmount')
  
    const inpPin = TakeInput('inpPin')

    if(inpPin === 12){

        const curAmoun = document.getElementById('curAmount')
        const curAmount = Number(curAmoun.innerText)
        console.log("curAmount", curAmount)
        
        const newAmount = curAmount + inpAmount
        
        console.log("New amount ", newAmount)
        curAmoun.innerText = newAmount;
        
    }
    else{
        alert("Invalid !")
    }


     

    
})
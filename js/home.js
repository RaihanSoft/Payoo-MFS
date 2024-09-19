// const btn = document.getElementById('btn')
// const inpPin = document.getElementById('inpPin')
// const inpAmount = document.getElementById('inpAmount')
// const curAmount = document.getElementById('curAmount')
// console.log(curAmount.innerText)



document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault()

    const inpAmoun = document.getElementById('inpAmount').value
    const inpAmount = Number(inpAmoun)
    console.log("inpAmount",inpAmount)
  

    const inpPin = document.getElementById('inpPin').value

    if(inpPin === '12'){

        const curAmoun = document.getElementById('curAmount')
        const curAmount = Number(curAmoun.innerText)
        console.log("curAmount", curAmount)

        
        let newAmount = curAmount + inpAmount
        
        console.log("New amount ", newAmount)
        curAmoun.innerText = newAmount;
        
    }
    else{
        alert("Invalid !")
    }


     

    
})
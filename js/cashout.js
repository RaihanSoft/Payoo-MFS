document.getElementById('btn1').addEventListener('click',function(event){
    event.preventDefault()

    const inpAmount = Number(document.getElementById('inpAmount1').value)
    console.log("InputAmo",inpAmount)

    const inpPin = document.getElementById('inpPin1').value

    const curAmount = document.getElementById('curAmount')
    const newCurA = Number(curAmount.innerText)
    console.log("currentValue",newCurA)

    if(inpPin === '12'){

        const newBalance = newCurA - inpAmount
        curAmount.innerText = newBalance
        

    }
    else{
        alert("Invalid")
    }

})

document.getElementById('btn').addEventListener('click',function(event){
    event.preventDefault()

    const inpNumber = document.getElementById('inpNumber').value
    console.log("Number",inpNumber)

    const inpPin = document.getElementById('inpPin').value
    console.log("Pin",inpPin)


    if(inpNumber === "12" && inpPin === '12'){
        console.log("Valid Input ")
        window.location.href = '/home.html'
    }
    else{
        alert("Invalid Input")
    }

   
})
document.getElementById('addMoney').addEventListener('click', function(){
    
    const inpAdd = document.getElementById('inpAdd')
    inpAdd.classList.remove('hidden')


})


document.getElementById('cashout').addEventListener("click",function(){

    const hid = document.getElementById('inptCash')
    hid.classList.remove('hidden')


    const hid1 = document.getElementById('inpAdd')

    hid1.classList.add('hidden')
    
})

document.getElementById('addMoney').addEventListener("click",function(){

    const hid = document.getElementById('inptCash')
    hid.classList.add('hidden')


    const hid1 = document.getElementById('inpAdd')

    hid1.classList.remove('hidden')
    
})


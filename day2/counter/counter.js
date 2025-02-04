 let num = document.querySelector('.num')
 let digit = 0
const decrease = document.querySelector('.decrease')
const reset = document.querySelector('.reset')
const increase = document.querySelector('.increase') 


decrease.addEventListener("click", function(){
    digit--
    num.textContent = digit
})

reset.addEventListener("click", function(){
    digit = 0
    num.textContent = digit
})

increase.addEventListener("click", function(){
    digit++
    num.textContent = digit
})
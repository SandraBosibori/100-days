let num = document.querySelector('.num')
let low = document.querySelector('.low')

const min = 1
const max = 100

const ans = Math.floor(Math.random() * (max - min + 1) + min)

console.log(ans)

num.addEventListener('change', function(){
    if (num.value > 100 || num.value < 1) {
        low.textContent = " Please enter a numer between 1 and 100"
    }else if (num.value > 0 && num.value < 101 && num.value < ans){
        low.textContent = "Good guess! Try a higher number"
    }else if (num.value > 0 && num.value < 101 && num.value > ans){
        low.textContent = "Good guess! Try a lower number"
    }else if (num.value == ans){
        low.textContent = "CORRECT"
    }
})
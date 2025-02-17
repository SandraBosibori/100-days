let num = document.querySelector('.num')
let low = document.querySelector('.low')
let low2 = document.querySelector('.low2')

const min = 1
const max = 100

const ans = Math.floor(Math.random() * (max - min + 1) + min)

let tries = 3

console.log(ans)

num.addEventListener('change', function(){
    if (num.value > 100 || num.value < 1) {
        low.textContent = " Please enter a numer between 1 and 100"
        tries --
        low2.textContent = `You have ${tries} tries left`

    }else{
        tries --
        
    }

    if (num.value > 0 && num.value < 101 && num.value < ans){
        low.textContent = "Good guess! Try a higher number"
        if (tries>=0 && tries<=3){
            low2.textContent = `You have ${tries} tries left`
        }
    }else if (num.value > 0 && num.value < 101 && num.value > ans){
        low.textContent = "Good guess! Try a lower number"
        if (tries>=0 && tries<=3){
            low2.textContent = `You have ${tries} tries left`
        }
    }else if (num.value == ans){
        low.textContent = "CORRECT"
        if (tries>=0 && tries<=3){
            low2.textContent = `You have ${tries} tries left`
        }
    }
    if (tries==0){
        low.textContent = "You have no more tries left"
        num.disabled= true
    }
})
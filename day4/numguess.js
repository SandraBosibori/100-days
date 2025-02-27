let num = document.querySelector('.num')
let low = document.querySelector('.low')
let low2 = document.querySelector('.low2')

console.log(typeof num.value)

const min = 1
const max = 100

const ans = Math.floor(Math.random() * (max - min + 1) + min)

let tries = 3

console.log(ans)

num.addEventListener('change', function(){
        numGuess = Number(num.value)
    if (numGuess > 100 || numGuess < 1) {
        low.textContent = " Please enter a number between 1 and 100"
        tries --
        low2.textContent = `You have ${tries} tries left`

    }else{
        tries --
        
    }

    if (numGuess > 0 && numGuess < 101 && numGuess < ans){
        low.textContent = "Good guess! Try a higher number"
        if (tries>=0 && tries<=3){
            low2.textContent = `You have ${tries} tries left`
        }
    }else if (numGuess > 0 && numGuess < 101 && numGuess > ans){
        low.textContent = "Good guess! Try a lower number"
        if (tries>=0 && tries<=3){
            low2.textContent = `You have ${tries} tries left`
        }
    }else if (numGuess == ans){
        low.textContent = "CORRECT"
        num.disabled = true
       
    }
    if (tries<=0){
        low.textContent = "You have no more tries left"
        num.disabled= true
    }
})


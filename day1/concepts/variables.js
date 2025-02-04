// let username= prompt("Enter your name")
// console.log(username)

// same as...

// let username
// username= window.prompt("What is your name?")
// console.log(username)

// document.querySelector('.submit')

// let name;
// name = 'Sandra' 

// const birthYear = 2003

// var favColour = 'pink' 

// console.log(name, birthYear, favColour)

// console.log(`My name is ${name} and my favourite colour is ${favColour}`)
// console.log(typeof name)

//Booleans
// let open = true
// console.log(`The door is open: ${open}`)

name = 'Sandra' 
var favColour = 'pink'

document.querySelector('.p1').textContent = `My name is ${name}`
document.getElementById('p2').textContent = `My favourite colour is ${favColour}`
document.querySelector('#p2').textContent = `My favourite colour is ${favColour}`
// you're setting textContent three times, and the last one overwrites the previous value instead of adding a new sentence.
// If you want both sentences to appear inside #p2, use += (append instead of overwrite):
document.querySelector('#p2').textContent += `My favourite colour is not ${favColour}`
document.querySelector('#p2').innerHTML += `<br>My favourite colour is not ${favColour}`

// Use textContent when working with plain text (safer). It reads HTML tags as plainText
// Use innerHTML when you need to insert formatted HTML (bold, italics, etc.). It ignores HTML tags
// textContent uses \n, but you need white-space: pre-line; in CSS for it to work.
// innerHTML allows <br> tags for new lines without CSS changes.
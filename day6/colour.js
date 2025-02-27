let page = document.querySelector('.page')
let full = document.querySelector('.full')
let btn = document.querySelector('.btn')
let wordsbtn = document.querySelector('.wordsbtn')
let words = document.querySelector('.words')

page.addEventListener('click', function(){
     if (full.style.backgroundColor == 'white' || full.style.backgroundColor == ''){
        full.style.backgroundColor = 'blue'
        page.textContent = 'Orange'
    }else if(full.style.backgroundColor == 'blue'){
        full.style.backgroundColor = 'orange'
        page.textContent = 'White'
    }else if(full.style.backgroundColor == 'orange'){
        full.style.backgroundColor = 'white'
        page.textContent = 'Blue'
    }
    

})

btn.addEventListener('click', function(){
    if (btn.style.backgroundColor == 'white' || btn.style.backgroundColor == ''){
       btn.style.backgroundColor = 'blue'
       btn.textContent = 'Orange'
   }else if(btn.style.backgroundColor == 'blue'){
       btn.style.backgroundColor = 'orange'
       btn.textContent = 'White'
   }else if(btn.style.backgroundColor == 'orange'){
       btn.style.backgroundColor = 'white'
       btn.textContent = 'Blue'
   }
   

})

wordsbtn.addEventListener('click', function(){
    if (words.style.color == 'black' || words.style.color == ''){
       words.style.color = 'blue'
      
   }else if(words.style.color == 'blue'){
       words.style.color = 'orange'
       
   }else if(words.style.color == 'orange'){
       words.style.color = 'black'
     
   }
   

})
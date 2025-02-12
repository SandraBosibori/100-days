let figure = document.querySelector('.figure')
let fareinheit = document.querySelector('.fareinheit')
let celcius = document.querySelector('.celcius')
let output = document.querySelector('.output')
let converted = 0

fareinheit.addEventListener('change', function(){
    if (figure.value !== ""){
        converted = figure.value * 1.8 + 32
        output.textContent = `${converted}°F`
    }else{
        output.textContent = "Please enter a value"
    }
    
    
})

celcius.addEventListener('change', function(){
    if (figure.value !== ""){
        converted = (figure.value - 32) / 1.8
        output.textContent = `${converted}°C`
    }else{
        output.textContent = "Please enter a value"
    }
    
})








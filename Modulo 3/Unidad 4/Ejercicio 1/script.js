const azul = document.getElementById('azul')
const rojo = document.getElementById('rojo')
const verde = document.getElementById('verde')
const reset = document.getElementById('reset')
const body = document.getElementById('body')

azul.addEventListener('click', function() {
    body.style.backgroundColor = "blue"
})

rojo.addEventListener('click', function() {
    body.style.backgroundColor = "red"
})

verde.addEventListener('click', function() {
    body.style.backgroundColor = "green"
})

reset.addEventListener('click', function() {
    body.style.backgroundColor = "white"
})
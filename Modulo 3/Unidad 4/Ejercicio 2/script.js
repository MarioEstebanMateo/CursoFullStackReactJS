const textarea = document.getElementById('textarea')
const boton = document.getElementById('boton')
const leyenda = document.getElementById('leyenda')

boton.addEventListener('click', function() {
    var total = textarea.value.length
    console.log(total)
    var parrafo = document.createElement('p')
    parrafo.innerText = "Caracteres ingresados: " + total
    document.body.appendChild(parrafo)
})
const alumnos = [{
    nombre: 'Juan Gomez',
    nota: 7
}, {
    nombre: 'Pedro Rodriguez',
    nota: 4
}, {
    nombre: 'Roxana García',
    nota: 8
}, {
    nombre: 'Luciano Lopez',
    nota: 5
}, {
    nombre: 'Fernanda Gimenez',
    nota: 6
}, {
    nombre: 'Florencia Martinez',
    nota: 10
}, {
    nombre: 'Raul Sanchez',
    nota: 7
}, {
    nombre: 'Sandra Figueroa',
    nota: 8
}];

const tabla = document.getElementById('lista_alumnos')
for (var i = 0; i < alumnos.length; i++) {
    const datos_alumno = document.createElement('li')
    datos_alumno.innerHTML = alumnos[i].nombre + ", Nota: " + alumnos[i].nota
    tabla.appendChild(datos_alumno)
}

const aprobados = alumnos.filter(alumnos => alumnos.nota >= 7)
console.log(aprobados)

const alumnos_aprobados = document.getElementById('lista')
for (var i = 0; i < aprobados.length; i++) {
    const item = document.createElement('li')
    item.innerHTML = aprobados[i].nombre
    alumnos_aprobados.appendChild(item)
}
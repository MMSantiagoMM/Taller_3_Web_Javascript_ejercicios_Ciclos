/* Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).  */
let Nombre = prompt("Ingrese el nombre del estudiante")
let Notas = parseInt(prompt("Cuántas notas desea ingresar"));
let resultado = 0;
let acum = 0;
for(let i = 1; i <= Notas; i++){
    let nota = parseFloat(prompt("Ingrese la nota número " + i + ": "))

    acum+=nota;
    resultado = parseFloat(acum/Notas).toFixed(2);
}
document.write("El nombre del estudiante es: " + Nombre + " y su promedio es de: " +  resultado)
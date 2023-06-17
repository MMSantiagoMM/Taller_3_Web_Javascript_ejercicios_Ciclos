/* Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN. */


let inst = prompt("Si desea ponerle fin al programa ingrese la palabra 'fin'")
let cont = 0;
let acum = 0;
while (inst !== "fin") {
    let num = parseInt(prompt("Ingrese un numero"))   
    cont++;
    acum = acum + num;
    inst = prompt("Si desea ponerle fin al programa ingrese la palabra 'fin'");
}
document.write("La cantidad de numeros ingresados es: " + cont + "<br>" + "La suma de los numeros es: " + acum)


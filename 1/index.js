const Check = document.getElementById("check");
let Num = document.getElementById("num");
let Texto = document.getElementById("texto");
/* Hacer un programa que calcule la suma de los N primeros números naturales, dónde N es el número límite ingresado. */
Check.addEventListener("click", ()=>{

    let cont;
    let num_1=0;
    let Numb = Num.value;
    for(let i = 1; i <= Numb; i++){
        cont = num_1 + i
        num_1 += i;
    }
    Texto.textContent = cont + " ";
    Num.value = " "

})
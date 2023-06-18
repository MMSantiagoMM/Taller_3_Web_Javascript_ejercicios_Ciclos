
const Calc = document.getElementById("calc");
/* Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado. */
Calc.addEventListener("click", ()=>{
    let Texto = document.getElementById("texto");
    let Numb = parseInt(document.getElementById("num").value);
    for (let i = 0; i <= 30; i+=Numb){
     Texto.textContent += i;
    }
})
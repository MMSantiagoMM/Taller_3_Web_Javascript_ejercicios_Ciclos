let Texto = document.getElementById("texto");
/* Cree la tabla de multiplicar de cualquier número ingresado de manera descendente. */
const Calc = document.getElementById("calc").addEventListener("click", ()=>{
    let Num = document.getElementById("num").value;
    let resultado;
    for(let i = 10; i > 0; i--){
        resultado = Num * i;
        Texto.innerHTML += "<br>" + resultado    }
    
})
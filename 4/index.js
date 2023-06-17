let Resultado = document.getElementById("resultado");
const Calc = document.getElementById("calc").addEventListener("click", ()=>{
    let Num = document.getElementById("num").value;
    let mul;
    /* realice una tabla de multiplicar con cualquier número ingresado hasta el 30. */
    for(let i = 1; i <= 30; i++){
        mul = Num * i;
        Resultado.innerHTML += "<br>" + mul;
    }
})
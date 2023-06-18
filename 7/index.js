let Texto = document.getElementById("texto")
const Check = document.getElementById("check")
Check.addEventListener("click",()=>{
    let Num = parseInt(document.getElementById("num").value);
    for(let i = 30; i > 0; i-= Num ){
    Texto.textContent += i;
    }
})
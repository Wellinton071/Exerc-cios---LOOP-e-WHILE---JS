function iniciar(){

    let  idade = document.getElementById("idade");
    let  newIdade = Number(idade.value)

    if (newIdade >= 18 ||  newIdade < 18)  {
    let idadeFinal = newIdade 
         
    let  resultado =  document.getElementById("idadeFinal")
    resultado.innerHTML =   "Resultado final é:" + " " + idadeFinal
    }

}  
 function iniciar(){

     
     let resultado = document.getElementById("resultado4");
     
     resultado.innerHTML = "";
     for(let i = 1; i <= 10; i++){
       
        resultado.innerHTML += `- <strong> ${i}</strong> <br>`;
                

    }
    return;
}
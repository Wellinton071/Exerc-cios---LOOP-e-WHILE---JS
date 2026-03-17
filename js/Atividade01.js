 function iniciar(){

    let numero = Number(window.prompt("Digite um número pra verificar se é positivo ou negativo "));  
    
    if (numero > 0) {
        document.getElementById("resultado").innerHTML = `O número: <strong>${numero}</strong> é <strong>POSITIVO</strong>`;
    }else if (numero < 0) {
        document.getElementById("resultado").innerHTML = `O número: <strong>${numero}</strong> é <strong>NEGATIVO</strong>`;
    } else {
        document.getElementById("resultado").innerHTML = `O número: <strong>${numero}</strong> é <strong>NEUTRO</strong>`;
    }
 }
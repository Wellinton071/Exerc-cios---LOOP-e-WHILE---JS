 function iniciar(){

    let numero = Number(window.prompt("Digite número pra verificar se é PAR ou ÍMPAR "));  
    
    if (numero % 2 == 0) {
        document.getElementById("resultado2").innerHTML = `O número é: <strong>${numero}</strong> é <strong>PAR</strong>`;
    }else if(numero % 2 == 1 ){
        document.getElementById("resultado2").innerHTML = `O número: <strong>${numero}</strong> é <strong>ÍMPAR</strong>`;
    
    }
 }
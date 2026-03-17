 function iniciar(){

    let num1 = Number(window.prompt("Digite  um número "));  
    let num2 = Number(window.prompt("Digite  outro número "));  
    

    if (num1 > num2) {
        document.getElementById("resultado3 ").innerHTML = `Entre o: <strong>${num1} e ${num2}</strong> o número maior é o <strong> ${num1}</strong>`;
    }else if(num2 > num1 ){
        document.getElementById("resultado3").innerHTML = `Entre o: <strong>${num1} e ${num2}</strong> o número maior é o <strong> ${num2}</strong>`;

    }else{
        document.getElementById("resultado3").innerHTML = `Os numéros: <strong> ${num1}</strong>  e <strong>${num2}</strong> são iguais !`;
    }
}
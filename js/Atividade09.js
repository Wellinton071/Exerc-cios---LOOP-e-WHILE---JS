function iniciar(){

    let somarNumeros = 0; 
    let numero = 2;

    
while (numero !== 0) {
    
    numero = Number(window.prompt("Digite um numero até chegar no 0"))
    somarNumeros += numero;
}
        document.getElementById("contagem").innerHTML = somarNumeros

}
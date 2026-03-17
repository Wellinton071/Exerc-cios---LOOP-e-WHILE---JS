function confirmar(){

    let nomeLogin = document.getElementById("login");
    let nome = nomeLogin.value
    



    let senhaLogin = document.getElementById("senha");
    let senha = senhaLogin.value;
    
    

    if (nome == "admin"  && senha == "life" ) {
        
        window.alert("Usúario Logado co Sucesso")
    }else{
        window.alert("ERRO: Login ou Senha Invalidos")
        return;
    }


}
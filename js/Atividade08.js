function iniciar(){

    let i = 0;
    let text = "";

    while ( i <= 10) {

        text += "  " + i + "<br>";
        i++
    }
    document.getElementById("contagem").innerHTML = text;



}
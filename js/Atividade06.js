//  function iniciar(){

//     let tabuada0 = document.getElementById("resultado6.0");
//     tabuada0.innerHTML = "";

//     let tabuada1 = document.getElementById("resultado6.1");
//     tabuada1.innerHTML = "";

//     let tabuada2 = document.getElementById("resultado6.2");
//     tabuada2.innerHTML = "";

//     let tabuada3 = document.getElementById("resultado6.3");
//     tabuada3.innerHTML = "";

//     let tabuada4 = document.getElementById("resultado6.4");
//     tabuada4.innerHTML = "";

//     let tabuada5 = document.getElementById("resultado6.5");
//     tabuada5.innerHTML = "";

//     let tabuada6 = document.getElementById("resultado6.6");
//     tabuada6.innerHTML = "";

//     let tabuada7 = document.getElementById("resultado6.7");
//     tabuada7.innerHTML = "";

//     let tabuada8 = document.getElementById("resultado6.8");
//     tabuada8.innerHTML = "";

//     let tabuada9 = document.getElementById("resultado6.9");
//     tabuada9.innerHTML = "";

//     let tabuada10 = document.getElementById("resultado6.10");
//     tabuada10.innerHTML = "";

//     // 
//     for(let i = 0; i <= 10; i++){
//         tabuada0.innerHTML += ` 5 x ${i} = ${0 * i}<br>`;
//         tabuada1.innerHTML += ` 1 x ${i} = ${1 * i}<br>`;                                        
//         tabuada2.innerHTML += ` 2 x ${i} = ${2 * i}<br>`;
//         tabuada3.innerHTML += ` 3 x ${i} = ${3 * i}<br>`;
//         tabuada4.innerHTML += ` 4 x ${i} = ${4 * i}<br>`;
//         tabuada5.innerHTML += ` 5 x ${i} = ${5 * i}<br>`;
//         tabuada6.innerHTML += ` 6 x ${i} = ${6 * i}<br>`;
//         tabuada7.innerHTML += ` 7 x ${i} = ${7 * i}<br>`;
//         tabuada8.innerHTML += ` 8 x ${i} = ${8 * i}<br>`;
//         tabuada9.innerHTML += ` 9 x ${i} = ${9 * i}<br>`;
//         tabuada10.innerHTML += ` 10 x ${i} = ${10 * i}<br>`;
//     }
// }



function iniciar() {


    for (let i = 0; i <= 20; i++) {

        // LOOP - i = Todas as Tabuadas
        // Um loo para gerar todas as tabuadas   
        let elementoHtml = document.getElementById(`tabuadas${i}`);
        elementoHtml.innerHTML = ""


        // LOOP - j = Referencia para fazer a multiplicação.
        // LOOP dento do LOOP para executar tudo d euma vez.
        // O segundo LOOP é para fazer os calculos  usado o primeiro LOOL.   

        for (let j = 0; j <= 10; j++) {
            elementoHtml.innerHTML += ` ${i} x ${j} = ${i * j} <br>`;


        }
    }


}
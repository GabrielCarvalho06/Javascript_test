//if
var hora = 18;

if (hora < 12){
    console.log("Bom dia");
}

if (hora >= 12 && hora < 18){
    console.log("Boa tarde");
}

if (hora >= 18){
    console.log("Boa noite");
}

//Switch

let dia = 3;
let diaNome = '';

switch(dia) {
    case 1:
        diaNome = 'Segunda-Feira';
        break;
    case 2:
        diaNome = 'Terça-Feira';
        break;
    case 3:
        diaNome = 'Quarta-Feira';
        break;
    case 4:
        diaNome = 'Quinta-Feira';
        break;
    case 5:
        diaNome = 'Sexta-Feira';
        break;
    case 6:
        diaNome = 'Sábado';
        break;
    case 7:
        diaNome = 'Domingo';
        break;
    default:
        diaNome = 'Indefinido';
        break;
}

document.getElementById("dia").innerHTML = "Hoje é: "+diaNome;
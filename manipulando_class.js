/*

<button onclick="vermelho()">Vermelho</button>
<button onclick="verde()">Verde</button>
<button onclick="azul()">Azul</button>

function vermelho() {
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('vermelho');
}

function verde() {
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.remove('azul');
    document.querySelector('#exemplo').classList.add('verde');
}

function azul() {
    document.querySelector('#exemplo').classList.remove('verde');
    document.querySelector('#exemplo').classList.remove('vermelho');
    document.querySelector('#exemplo').classList.add('azul');
}*/

function trocar() {
    if(document.querySelector('button').classList.contains('preto')) {
        document.querySelector('button').classList.remove('preto');
        document.querySelector('button').classList.add('verde');
    } else {
        document.querySelector('button').classList.remove('verde');
        document.querySelector('button').classList.add('preto');
    }
}
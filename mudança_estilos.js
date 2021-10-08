function vermelho() {
    limpar();
    document.getElementById("titulo").classList.add('vermelho');
}

function verde() {
    limpar();
    document.getElementById("titulo").classList.add('verde');
}

function azul() {
    limpar();
    document.getElementById("titulo").classList.add('azul');
}

function limpar() {
    document.getElementById("titulo").classList.remove("vermelho");
    document.getElementById("titulo").classList.remove("verde");
    document.getElementById("titulo").classList.remove("azul");
}

function mostrar (elemento) {
    elemento.style.display = "none";
    document.getElementById("telefone").style.display = "block";
}


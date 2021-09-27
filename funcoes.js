/*function alterar() {
    document.getElementById("titulo").innerHTML = "Trocou o titulo";
    document.getElementById("campo").value = "Trocou a lista";
}

alterar();

function soma(x, y) {
    let total = x + y;

    return total;
}

var resultado = soma(10, 15);

console.log(resultado);
*/

function trocarImagem(filename, imagename) {
    document.querySelector('.imagem').setAttribute('src', 'images/'+filename);
    document.querySelector('.imagem').setAttribute('data-imagem', imagename);
}

function pegarImagem() {
    let imagens = document.querySelector('.imagem').getAttribute('data-imagem');
    alert("A imagem é: "+imagens);
}

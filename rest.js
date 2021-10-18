function adicionar(...numeros) {
    console.log(numeros);
}

adicionar(1, 2, 3, 4, 5);

function adicionar2(nomes, ...novosNomes) {
    let novo = [
        ...nomes,
        ...novosNomes
    ];
    return novo;
}

let nomes = ['Gabriel', 'Daiana'];
let outros = adicionar2(nomes, 'Lucas', 'José', 'Maria', 'Amanda');

console.log(outros);
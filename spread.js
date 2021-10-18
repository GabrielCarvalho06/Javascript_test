let num = [1, 2, 3, 4];
let num2 = [...num, 5, 6, 7, 8];

console.log(num2);
/*
let info = {
    nome:'Gabriel',
    sobrenome:'Carvalho',
    idade: 26
};

console.log(info);

let info2 = {
    ...info,
    cidade:'Niterói',
    estado:'Rio de Janeiro',
    pais:'Brasil'
};

console.log(info2);
*/
function adicionarInfo (info) {
    let info2 = {
        ...info,
        cidade:'Niterói',
        estado:'Rio de Janeiro',
        pais:'Brasil'
    };
    return info2;
}
console.log(adicionarInfo({nome:'Gabriel', sobrenome:'Carvalho', idade: 26}));
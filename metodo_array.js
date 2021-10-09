let lista = ['Ovo', 'Farinha', 'Corante', 'Fermento'];

//transforma o array em string
let res = lista.toString();
console.log(res);
//une os elementos do array com um caractere escolhido

res = lista.join('-');
console.log(res);
//mostra o index de um elemento escolhido no array

res = lista.indexOf('Corante');
console.log(res);
//remove o último elemento do array

lista.pop();
res = lista;
console.log(res);
//remove o primeiro elemento do array

lista.shift();
res = lista;
console.log(res);
//insere um elemento na última posição do array

lista.push('Fermento');
res = lista;
console.log(res);
//insere um elemento no index escolhido do array, substituindo caso o index já esteja sendo usado

lista[0] = 'Ovo';
res = lista;
console.log(res);
//Caso não saiba o tamanho do array, a função length ajudará a inserir no último index

lista[lista.length] = 'Farinha';
res = lista;
console.log(res);

//Removendo algum elemento, mas o indice fica vazio
res = lista;
delete res[1];
console.log(res);

//splice o primeiro parâmetro é o que você deseja remover, o segundo é quantos você deseja remover
res = lista;
res.splice(1, 1);
console.log(res);

//Concatenando array
let lista2 = ['Liquidificador', 'Bowl', 'Xícara'];
res = lista.concat(lista2);
console.log(res);

//Ordenando array
res = res.sort();
console.log(res);

//Invertendo array
res = res.reverse();
console.log(res);

//manipulando dados do array
lista = [45, 4, 9, 16, 25];
lista2 = lista.map(function(item) {
    return item * 2;
});
res = lista2;
console.log(res);

//manipulando dados do array 2
lista = [45, 4, 9, 16, 25];
lista2 = [];
for(let i in lista) {
    lista2.push(lista[i] * 2);
}
console.log(lista2);

//Buscando dados específicos com filter
lista2 = lista.filter(function(item) {
    if(item < 20) {
        return true;
    } else {
        return false;
    }
});
res = lista2;
console.log(res);

//Fazendo uma verificação de tudo ou nada
lista2 = lista.every(function(item) {
    return (item > 20)? true : false;
});
res = lista2;
console.log(res);

//buscando valores no array
lista2 = lista.find(function(item) {
    return (item == 16) ? true : false;
});
res = lista2;
console.log(res);

//buscando o index de valores no array
lista2 = lista.findIndex(function(item) {
    return (item == 16) ? true : false;
});
res = lista2;
console.log(res);

lista = [
    {id:1, nome:'Gabriel', sobrenome:'Carvalho'},
    {id:2, nome:'Daiana', sobrenome:'Dias'},
    {id:3, nome:'Lucas', sobrenome:'Sales'}
];

let pessoa = lista.find(function(item) {
    return(item.id == 3) ? true : false;
});
res = pessoa;
console.log(pessoa);























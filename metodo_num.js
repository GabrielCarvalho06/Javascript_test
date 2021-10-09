let n = 10.8364528;
let num = '25.50';

//tranforma a variável em string
let res = n.toString() +5;

//Escolhe o número de casas decimais que irão aparecer
res = n.toFixed(3);
console.log(res);

//Tranforma a variável em número inteiro
res = parseInt(num) + 5;
console.log(res);

//Tranforma a variável em número float
res = parseFloat(num) + 5;
console.log(res);
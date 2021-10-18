let telefone = '5';

console.log(telefone.padEnd(9, '*'));
console.log(telefone.padStart(9, '*'));

let cartao = '1234 1234 1234 1234';

let lastdig = cartao.slice(-4);
let cartao2 = lastdig.padStart(19, '*');
console.log(cartao2.padEnd(15, '*'));
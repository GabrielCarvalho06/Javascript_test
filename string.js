let nome = 'Gabriel da Silva Carvalho         ';

console.log(nome.length);
console.log(nome.indexOf('Silva'));
console.log(nome.slice(-8));
console.log(nome.substring(8, 16));
console.log(nome.substr(8,16));
mudar = nome.replace('Silva', 'Cardoso');
console.log("nome: ", nome);
console.log(mudar);
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.concat(' ','Programador'));
mudar = nome.trim();
console.log(mudar.length);
console.log(nome.charAt(6));
console.log(nome[6]);
mudar = nome.split(' ');
console.log(mudar);


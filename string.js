let nome = 'Gabriel da Silva Carvalho         ';

//retorna o tamanho da string
console.log(nome.length);

//retorna o index de algum caractere da string
console.log(nome.indexOf('Silva'));

//retorna os últimos caracteres da string
console.log(nome.slice(-8));

//retorna alguma parte da string que foi selecionada
console.log(nome.substring(8, 16));

//retorna uma parte da string sendo o primeiro número de onde vai começar e o segundo a quantidade de caracteres que virão em seguida
console.log(nome.substr(8,16));

//Substitui algum caractere ou palavra da string
mudar = nome.replace('Silva', 'Cardoso');
console.log("nome: ", nome);
console.log(mudar);

//Deixa todos os caracteres em maiúsculo
console.log(nome.toUpperCase());

//Deixa todos os caracteres em minúsculo
console.log(nome.toLowerCase());

//Concatena strings
console.log(nome.concat(' ','Programador'));

//Remove espaços desnecessários da string
mudar = nome.trim();
console.log(mudar.length);

//Retorna algum caractere específico da string
console.log(nome.charAt(6));
console.log(nome[6]);

//Tranforma a string em array dividindo por um caractere escolhido
mudar = nome.split(' ');
console.log(mudar);


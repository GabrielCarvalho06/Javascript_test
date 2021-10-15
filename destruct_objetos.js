let pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Carvalho',
    idade: 26,
    social: {
        linkedin: 'https://www.linkedin.com/in/gabriel-da-silva-carvalho-1420b41a7/',
        github: 'https://github.com/GabrielCarvalho06'
    },
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa.nomeCompleto());

let {nome, sobrenome} = pessoa;

console.log(nome, sobrenome);


function pegarNomeCompleto ({nome, sobrenome}) {
    return `${nome} ${sobrenome}`;
}
console.log(pegarNomeCompleto(pessoa));

 

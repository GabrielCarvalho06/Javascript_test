//array
let carros = ["palio", "Uno", "Ferrari", "Corolla"];


//Objeto
let carro = {
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800kg',
    ligar: function (){
        console.log("Carro ligado");
    }
};

//array com objetos
let carros2 = [
    {nome:'Fiat', modelo:'Palio'},
    {nome:'Fiat', modelo:'Uno'},
    {nome:'Toyota', modelo:'Corolla'},
    {nome:'Ferrari', modelo: 'Spider'}
];
 console.log(carros2[1].modelo);

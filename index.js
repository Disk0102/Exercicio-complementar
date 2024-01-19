var nome = prompt ("Digite o seu nome:");
console.log("Olá,", nome)

var numString = prompt ("Digite o ano que voce nasceu:");
var num = parseInt (numString);

var anoString = prompt ("Digite o ano que estamos:");
var ano = parseInt (anoString);

var idade = ano - num;
console.log(nome, "tem", idade, "anos!");

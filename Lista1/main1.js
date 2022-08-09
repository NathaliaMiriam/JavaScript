// ex 1
console.log('Arquivo funcionando');

console.log('---------------------------');


// ex 2
var nome = 'Nathália';
var ano_nasc = 1996;
var ano_atual = 2022;
var idade = ano_atual - ano_nasc;

console.log('Olá, eu me chamo ' + nome + ', tenho ' + idade + ' anos e estou estudando JS');

console.log('---------------------------');


// ex 3
var nomeAluno = 'Jesser';
var numeroMatricula = '41425146'; // coloco como string, pois ñ usarei p nenhuma operação

var n1 = 7;
var n2 = 8.5;

var media = (n1 + n2) / 2;

console.log('O aluno ' + nomeAluno + ', com o nº de matrícula ' + numeroMatricula + ', obteve a média final ' + media);

console.log('---------------------------');


/*ex 4
var numeroCelular = prompt('Digite um número de celular por favor');

if(numeroCelular.length == 9) {
    console.log('Resultado do teste: ', true);
} else{
    console.log('Resultado do teste: ', false);
}
*/


// ex 5
console.log('O resultado de 32 elevado a 6 é: ' + Math.pow(32,6));

console.log('---------------------------');


/*ex 6

var NOME; *legal, mesmo c tudo maiúsculo*

var $num1; *legal, caractere válido p começar*

var typeof; *ilegal, pois typeof é uma keyword do JS*

var nome-aluno; *ilegal, caractere ñ válido*

var tentativa_2; *legal, mesmo com o underline*

var 2a_tentativa; *ilegal, começando com número*

var nome completo; *ilegal, com espaço*
*/


// ex 7
var quantidade = "25";
var numero = 6;
var pressao;
var temperatura = 40;
temperatura = null;

console.log(quantidade += quantidade); 
console.log( (7+5) / numero + 2 ); 
console.log(pressao); 
console.log(temperatura); 
console.log(typeof pressao); 
console.log(typeof temperatura); 

/*
console.log(quantidade += quantidade); * por ser uma string, é concatenado e retorna 2525 *
console.log( (7+5) / numero + 2 ); * retorna o resultado da expressão = 4 *
console.log(pressao); * retorna o valor undefined, por ñ ter sido atribuído nenhum valor na var *
console.log(temperatura); * retorna null *
console.log(typeof pressao); * retorna undefined *
console.log(typeof temperatura); * retorna object, pois null em JS é considerado um objeto *
*/

console.log('---------------------------');


// ex 8
var idade = 65;

console.log(idade != 65); 
console.log(idade >= 65); 
console.log("65" == idade);
console.log(65 !== idade);
console.log(typeof (idade > 60));
console.log(typeof (idade > 70)); 

/*
console.log(idade != 65); * retorna false, pois a idade é = 65 *
console.log(idade >= 65); * retorna true, pois é = 65 *
console.log("65" == idade); * retorna true, pois a idade é = 65, só o tipo que é diferente, se fossem 3 sinais de igualdade retornaria false *
console.log(65 !== idade); * retorna false, pois tanto o tipo, quanto o valor são iguais *
console.log(typeof (idade > 60)); * retorna boolean *
console.log(typeof (idade > 70)); * retorna boolean *
*/

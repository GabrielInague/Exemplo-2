//DECLARAÇÕES E VARIAVEIS 
var nome ="fiap";
console.log(nome)

let idade =18;
console.log(idade)

const sobrenome ="Inague"
console.log(sobrenome)
//undefined
let aula;
console.log(aula)
//null
let valor = null;
console.log(valor)

let exemplo1={};

let exemplo2=[];

//TIPOS VARIAVEIS
let exemplo3 = 10;
console.log(typeof exemplo3)

let exemplo4 = "Aula";
console.log(typeof exemplo4)

let exemplo5 = true;
console.log(typeof exemplo5)

let exemplo6 = ["huguinho", "zezinho","luizinho"];
console.log(typeof exemplo6)

//CONVERSÕES

//float => inteiro
let numfloat= 123.456;
console.log(parseInt(numfloat));

//string => float
let numString ="547.987";
console.log(parseFloat(numString));

//float => string

let numFloat1 =554.665;
console.log(numFloat1.toString());

//Int => string
let numInt=100;
console.log(numInt.toString())

//METODOS - PARTE-1

//LENGTH- VERIFICA O TAMNAHO DA STRING

let frase ="O Mundo da Tecnologia";
console.log(frase.length)

//indexOf -retorna um trecho de um texto

let texto= "Programação Sustentável"
console.log(texto.indexOf("a"))


//slice -retorna parte de um texto apotando o inicio e o final

let info="processamento de ponta";
console.log(info.slice(0,13))


//OPERADORES ARITIMÉTICO

const num1 =10;
const num2 =20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//OPERADORES LÓGICOS

const num3 =20;
const num4 =30;

console.log(num3 < num4);
console.log(num3 < num4 && num4 < 50); //OS DOIS TEM QUE SER VERDADEIRO
console.log(num3 > num4 || num4 > num3); //UM DOS DOIS TEM QUE SER VERDADEIRO
console.log(num4 == num3 || num4 > num3);
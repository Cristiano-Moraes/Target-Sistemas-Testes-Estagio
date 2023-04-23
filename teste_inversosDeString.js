/*
Cristiano Bueno de Moraes
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada 
de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse;
*/

function inversor( s ){
	let size = s.length;
	let reverseString = [];
	for (let i = size; i >= 0 ; i-- ){
	reverseString.push(s[i]);
	}
	return reverseString.join('');

}
console.log(inversor("amazonas"));
console.log(inversor("IRACEMA"));
console.log(inversor("123456"));

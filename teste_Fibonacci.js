/*
Cristiano Bueno de Moraes
2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será 
a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
escreva um programa na linguagem que desejar onde, informado um número, 
ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o 
número informado pertence ou não a sequência.


IMPORTANTE:
Esse número pode ser informado através de qualquer entrada de sua preferência ou 
pode ser previamente definido no código;
*/
function fib( n ){
	let a = 0, b = 1, c = 0;
	if(a == n || b == n){
		return n+" pertence";	
	}
	else {
		for( let i = 2; i <= n; i++ ) {
		if ( c == n){
			return n+" pertence";
		}
		c = a + b;
		a = b;
		b = c;
	      }
	      return n+" não pertence";
	}
}
console.log( fib(56) ); // falso
console.log( fib(55) ); // verdadeiro
console.log( fib(0) );  // verdadeiro
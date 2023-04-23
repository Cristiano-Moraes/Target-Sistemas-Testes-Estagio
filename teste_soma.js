/*
Cristiano Bueno de Moraes
1) Observe o trecho de código abaixo:
int INDICE = 13, SOMA = 0, K = 0; enquanto K < INDICE faça

{
	K = K + 1;
	SOMA = SOMA + K;
}

imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?
--> se o valor de k = 13 então soma = 91
*/

function imprimeSoma( indice ){
	let k = 0;
	let soma = 0;
	while ( indice > k )  {
		k+=1;
		soma+=k;
	}
	return soma;
}

console.log( imprimeSoma(13) );

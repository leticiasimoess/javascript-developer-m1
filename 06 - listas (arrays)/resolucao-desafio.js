// 1) Crie um programa que dado um número imprima a sua tabuada. //

//dois jeitos de se fazer //
const numero = 7;
for (let i = 1; i < 10; i++) {
   console.log(i *numero);

}

//segundo jeito//
let num = parseInt(prompt("Digite um número para ver sua tabuada:"));

for(let i = 1; i <= 10; i++) {
  console.log(num + " x " + i + " = " + (num*i));
}

/*Comentário: O programa solicita ao usuário que digite um número através da função prompte converta para um
 número inteiro usando a função parseInt. Em seguida, utilize um loop for para percorrer os números de 1 a 10
 e para cada número, calcule o resultado da multiplicação entre o número digitado e o número do loop, imprimindo
 uma expressão correspondente no console. O resultado da execução desse programa seria a exibição da tabuada do
 número digitado pelo usuário, apresentando uma multiplicação de 1 a 10 pelo número escolhido.*/



// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado. //

//aqui tambem poderia ser let no lugar de const/ primeiro jeito de se fazer//

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < numeros.length; i++) {
    
    const numero = numeros[i];

       if (numero % 2 === 0) {
      
        console.log = (numero);
    }
}
// segundo jeito //
// aqui seria let numero = [1,2,3,4...]
let = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = 0; i < numeros.length; i++) {
  if(numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}

/*Comentario:O programa utiliza uma lista de números pré-definida no código, mas ela pode ser facilmente substituída
 por uma lista fornecida pelo usuário ou gerada aleatoriamente. Em seguida, use um loop para percorrer a lista de números. 
 Para cada número encontrado, verifique se o resto da sua divisão por 2 é igual a zero, o que indica que o número é par. 
 Se o número for par, o programa o imprime no console utilizando a função console.log. O resultado da execução desse programa
 seria a exibição de todos os números pares conteúdos na lista de números, que neste exemplo seria: 2, 4, 6, 8 e 10.*/ 



//3) Faça um programa que dado uma lista de nomes imprima os nomes que começem com a letra "V". //

let nomes = ["Victor", "Vanessa", "Vinícius", "Pedro", "Valentina"];

for(let i = 0; i < nomes.length; i++) {
  let primeiraLetra = nomes[i][0];
  if(primeiraLetra === "V") {
    console.log(nomes[i]);
  }
}

/* Comentario:O programa define uma lista de nomes e utiliza um loop para percorrer cada nome da lista.
 Para cada nome, é verificado a primeira letra (posição zero da string) e, caso ela seja "V", o nome é exibido no console.
O resultado da execução desse programa seria a exibição dos nomes "Victor", "Vanessa" e "Vinícius", que começam com a letra "V". */



// 4) Faça um programa que preencha uma lista com todos os números pares contidos no intervalo de 10 a 50; //

let numerosPares = [];

for(let i = 10; i <= 50; i++) {
  if(i % 2 === 0) {
    numerosPares.push(i);
  }
}

console.log(numerosPares);

/*Comentário: O programa define uma lista vazia chamada numerosPares. Em seguida, utilize um loop para para abranger 
todos os números no intervalo de 10 a 50. Para cada número, é verificado se ele é par 
(ou seja, se o resto da divisão por 2 é zero) e, caso seja, ele é adicionado à lista numerosParesusando o método push().
Ao final do loop, a lista numerosParesé exibida no console, contendo todos os números pares contidos no intervalo de 10 a 50.
O resultado da execução desse programa seria a exibição da lista 
[10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50].*/



/*5) Dado uma lista com as médias tiradas pelos alunos. Imprima todas as médias que ficaram de recuperação (média < 5).
   Ex de lista = [2, 7, 3, 8, 10, 4] */

   let medias = [2, 7, 3, 8, 10, 4];

for(let i = 0; i < medias.length; i++) {
  if(medias[i] < 5) {
    console.log(medias[i]);
  }
}

/* Comentario: O programa define uma lista de médias chamada mediase utiliza um loop para percorrer cada uma
 das médias da lista. Para cada média, é verificado se ela é menor que 5 (condição para ficar de recuperação)
 e, caso seja, é exibida no console. O resultado da execução desse programa seria a exibição das médias que
  ficaram de recuperação, no caso a média 2 e a média 3.*/



/*6) Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4] */
   let notas = [2, 7, 3, 8, 10, 4];
let maiorNota = notas[0];

for(let i = 1; i < notas.length; i++) {
  if(notas[i] > maiorNota) {
    maiorNota = notas[i];
  }
}

console.log("A maior nota é:", maiorNota);

/*Comentario: O programa define uma lista de notas de chamada notase uma variável maiorNotainicialmente igual à
 primeira nota da lista. Em seguida, utilize um loop para percorrer todas as notas da lista, a partir da segunda,
 comparando cada uma delas com a maiorNota.  Se a nota atual for maior que a maiorNota, a variável maiorNotaé 
 atualizada com o valor da nota atual. Ao final do loop, a nota maior é exibida no console.
O resultado da execução desse programa seria a exibição da maior nota da lista, no caso a nota 10.*/
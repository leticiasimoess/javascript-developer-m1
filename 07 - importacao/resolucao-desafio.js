/* 1) Faça um programa que receba um número e escreva a sua respectiva tabuada.
    Exemplo:
        Entrada:
            2

        Saída:
            2x1 = 2
            2x2 = 4
            2x3 = 6
            2x4 = 8
            2x5 = 10
            2x6 = 12
            2x7 = 14
            2x8 = 16
            2x9 = 18
            2x10 = 20
*/
let num = prompt("Digite um número:");
num = parseInt(num);

for(let i = 1; i <= 10; i++) {
  let resultado = num * i;
  console.log(num + "x" + i + " = " + resultado);
}
/*Comentario: O programa utiliza a função promptpara solicitar ao usuário que digite um número, que está armazenado na variável num.
 Em seguida, utilize um loop for para percorrer os valores de 1 a 10 e calcular o resultado da multiplicação entre o número digitado
 e cada um desses valores. O resultado de cada multiplicação é armazenado na variável resultado, que é utilizada para construir uma
 string no formato "num xi = resultado", utilizando a função console.logpara exibir essa string no console. O resultado da execução
  desse programa seria a exibição da tabuada do número digitado pelo usuário, como no exemplo de saída informada na pergunta */



/* 2) Faça um programa que receba a quantidade de números e seus respectivos valores. 
Imprima o maior e o menor número deste conjunto.

Exemplo:
    Entrada:
        4
        100
        150
        90
        200

    Saída:
        Maior número: 200
        Menor número: 90
*/
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let quantidade;
let maior;
let menor;

rl.question("Digite a quantidade de números: ", (quantidadeInput) => {
  quantidade = parseInt(quantidadeInput);
  let count = 1;

  rl.question("Digite o número " + count + ": ", (numeroInput) => {
    maior = menor = parseInt(numeroInput);
    count++;

    while (count <= quantidade) {
      rl.question("Digite o número " + count + ": ", (numeroInput) => {
        const numero = parseInt(numeroInput);
        if (numero > maior) {
          maior = numero;
        }
        if (numero < menor) {
          menor = numero;
        }
        count++;

        if (count > quantidade) {
          console.log("Maior número: " + maior);
          console.log("Menor número: " + menor);
          rl.close();
        }
      });
    }
  });
});
/*Comentario: Explicando o código:
Ali É criado um readline para ler a entrada de dados do usuário no terminal;
A variável quantidade é lida através da função rl.question(), que aguarda o usuário digitar um valor e apertar enter;
As variáveis maior​​ e menor são inicializadas com o primeiro número digitado;
Um loop é criado para ler todos os números digitados pelo usuário, exceto o primeiro;
A cada iteração do loop, é lido um novo número e é atualizado os valores de maiore menor, caso necessário;
Ao final, são impressos no console os valores de maior e menor.
Observação: É importante notar que a leitura dos números é feita de forma assíncrona, usando a função rl.question().
 Isso significa que as chamadas para esta função não são bloqueantes e são executadas em paralelo. 
 O código aproveita esse recurso para criar um loop que aguarda o usuário digitar todos os números,
  sem travar o processo de leitura dos dados. */

  

/* 3) Faça um programa que receba a quantidade de números e seus respectivos valores.
Imprima todos os números pares.
Exemplo:
    Entrada:
        5
        1
        3
        9
        10
        12

    Saída:
        Números Pares: 10, 12
*/
        let quantidadee = prompt("Digite a quantidadee de números:");
        let numeros = [];
        
        for (let i = 0; i < quantidadee; i++) {
          let numero = prompt(`Digite o número ${i+1}:`);
          numeros.push(Number(numero));
        }
        
        let numerosPares = [];
        
        for (let i = 0; i < numeros.length; i++) {
          if (numeros[i] % 2 === 0) {
            numerosPares.push(numeros[i]);
          }
        }
        
        console.log(`Números Pares: ${numerosPares.join('10, 12 ')}`);

/*  usamos a função prompt para receber a entrada do usuário e convertemos cada número em um tipo Number. 
Em seguida, percorremos a lista de números com um loop fore verificamos se cada número é par com a operadora %.
 Se o resto da divisão por 2 for igual a 0, o número é par e adicionamos ele à lista numerosPares. 
 Por fim, imprimimos uma lista com os números pares encontrados usando a função joinpara separá-los por vírgula.
 */       





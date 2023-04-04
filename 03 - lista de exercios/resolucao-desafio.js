/* 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.
Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre; */
// Lê as 3 notas do usuário
let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let nota3 = parseFloat(prompt("Digite a nota 3:"));

// Calcula a média
let media = (nota1 + nota2 + nota3) / 3;

// Verifica a classificação
if (media < 5) {
  console.log("Reprovado");
} else if (media < 7) {
  console.log("Recuperação");
} else {
  console.log("Passou de semestre");
}

// Imprime a média
console.log("Média: " + media.toFixed(2));

/* 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;*/
let altura = parseFloat(prompt("Digite sua altura em metros: "));
let peso = parseFloat(prompt("Digite seu peso em kg: "));

let imc = peso / (altura ** 2);

if (imc < 18.5) {
  console.log("Abaixo do peso");
} else if (imc < 25) {
  console.log("Peso normal");
} else if (imc < 30) {
  console.log("Acima do peso");
} else if (imc < 40) {
  console.log("Obeso");
} else {
  console.log("Obesidade Grave");
}
/* 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

let precoEtiqueta = parseFloat(prompt("Digite o preço normal de etiqueta: "));
let codigoPagamento = parseInt(prompt("Digite o código da condição de pagamento: "));

let precoFinal;

switch(codigoPagamento) {
  case 1: // À vista Débito
    precoFinal = precoEtiqueta * 0.9;
    break;
  case 2: // À vista no Dinheiro ou PIX
    precoFinal = precoEtiqueta * 0.85;
    break;
  case 3: // Em duas vezes
    precoFinal = precoEtiqueta;
    break;
  case 4: // Acima de duas vezes
    precoFinal = precoEtiqueta * 1.1;
    break;
  default:
    console.log("Código de pagamento inválido");
}

console.log(`Preço final a ser pago: R$ ${precoFinal.toFixed(2)}`);



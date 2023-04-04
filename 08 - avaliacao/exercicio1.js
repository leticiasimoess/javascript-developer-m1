// 1) Faça um programa que receba a média de um aluno.
// Caso a média seja < 5 imprima "Reprovado"
// Caso a média seja >= 5 e < 7 imprima "Recuperação"
// Caso a média seja >= 7 imprima "Aprovado"

//     Exemplo:
//         Entrada:
//             5.5
//         Saída:
//             Recuperação

const { gets, print } = require('./funcoes-auxiliares-ex1');

const media = gets();
//media maior ou igual a 0 E media menos que 5

if (media >= 0 && media < 5) {
    print("REPROVADO!!!");
    //media maior ou igual a 5 E media menos que 7

} else if (media >= 5 && media < 7) {
    print('RECUPERAÇÃO')
    //media maior ou igual a 7

} else if (media >= 7) {
    print('APROVADO!!!');
    //se não for nada do que está acima
    
} else {
    print('VALOR INVÁLIDO');
}
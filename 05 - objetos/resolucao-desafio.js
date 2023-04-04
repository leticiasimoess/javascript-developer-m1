/*1) Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.*/

class Carros {
    marca;
    cor;
    gastoMedioporKmrodado;

constructor(marca, cor, gastoMedioporKmrodado) {
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioporKmrodado = gastoMedioporKmrodado;
}
calcularGastoPercurso(distanciaEmKm, precoCombustivel){
    return distanciaEmKm * this.gastoMedioporKmrodado * precoCombustivel;

}

}
const uno = new Carros('fiat', prata, 1/12);

console.log(uno.calcularGastoPercurso(70, 5));



/* 2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa {
    nome;
    peso;
    altura; 

constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
}

calcularImc (){
    return this.peso / (this.altura* this.altura);
  
 }
 classificarImc() {
    const imc = this.calcularImc();
    if(imc < 18.5) {
        return('Abaixo do peso');
    }
    else if (imc >= 18.5 && imc <25) {
        return ('Peso normal');
    }
    else if(imc >= 25 && imc < 30) {
        return ('Acima do peso');
    }
    else if (imc >=30 && imc< 40) {
        return ('Obeso');
    }
        else {
            return ('Obsedidade grave'); 
        }
    }
 
}
const jose = new Pessoa('jose', 100, 1.75);
console.log(jose.calcularImc());
const leticia = new Pessoa('leticia', 60, 1.51);
console.log(leticia. calcularImc());
const vitor = new Pessoa('vitor', 65, 1.69);
console.log(vitor. calcularImc());

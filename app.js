console.log('Calculadora Simples');

//Import do arquivo para realizar calculos matematicos
const {  calcular } = require('./Módulo/calculadora.js');

const { exit } = require('process');
//importa a bibliioteca de entrada de dados
var readline = require('readline');

//instância do objeto entradaDados
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDados.question('Digite o numero1: \n', function (valor1){

    //Declarando a variável e convertendo o valor digitado pelo usuário em FLOAT
    let numero1 = parseFloat(valor1);
    
    //typeof() ==> Verifica o tipo de dado que está em uma variável ou objeto
    //console.log(typeof(numeor1))
    entradaDados.question('Digite o numero2: \n', function (valor2){
        let numero2 = parseFloat(valor2);

        entradaDados.question('escolha a operação a ser calculadada: somar[+], subtrair[-] multiplicar[*], dividir[/]: \n', function (opcao){
            //Declarando a variavel que vai receber o tipo de operacao matematica e convertendo o texto digitado em MAIUSCULO
            //toUpperCase() ==> Converte qualquer texto String para MAIUSCÚLO
            //toLowerCase() ==> Converte qualquer texto String para minúsculo
            let calculo = opcao.toUpperCase();
        
        //chama a função e realizará os calculos matemáticos

        if(resultado = calcular(numero1, numero2, calculo)){
            console.log('O resultado é: ' + resultado);
         }
         exit();
        })

      
    });
});



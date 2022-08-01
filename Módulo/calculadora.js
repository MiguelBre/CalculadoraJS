/* Objetivo:        Arquivo que contém todas as funções para calculos matemáticos
Autor:              Miguel Antonio
Data de criação:    01/08/2022
Versão:             1.0
*/


//Método alternativo de se criar uma função
    //Formato MAIS utilizado no JS
const calcular = function(valor1, valor2, tipoCalculo){

        //Criando variaveis locais para receber o conteúdo dos argumentos que foram encaminhados na function
        let numero1 = parseFloat(valor1);
        let numero2 = parseFloat(valor2);
        let calculo = tipoCalculo.toUpperCase();
        let resultado;
        let erro;
    
        //isNaN() ==> quando colocado em uma condicional, verifica se os valores das variáveis 1 e 2 são números ou não.
        if(isNaN(numero1) || isNaN(numero2)){
            console.log('ERRO: os valores inseridos não são números');
            exit();
        } else{
            
      
    
                switch(calculo){
                    case 'SOMAR': case '+':
                        resultado = numero1 + numero2;
                        break;
                    case 'SUBTRAIR': case '-':
                        resultado = numero1 - numero2;
                        break;
                    case 'MUTIPLICAR': case '*':
                        resultado = numero1 * numero2;
                        break;
                    case 'DIVIDIR': case '/':
                        if(numero2 == 0){
                            console.log('ERRO: Não é possível realizar a divisão por zero');
                            erro = true;
                        }
                        else{
                            resultado = numero1 / numero2;
                        }
                        break;
                    default:
                        console.log('ERRO: Operação não identificada.');
                        erro = true;
                };
            
        }
    
        if(erro){
            return false;
        }else{
            return resultado;
        }
    }


//Método tradicional de se criar uma FUNÇÃO
    //Formato MENOS utilizado no JS
function calcular2(valor1, valor2, tipoCalculo){

    // //Criando variaveis locais para receber o conteúdo dos argumentos que foram encaminhados na function
    // let numero1 = parseFloat(valor1);
    // let numero2 = parseFloat(valor2);
    // let calculo = tipoCalculo.toUpperCase();
    // let resultado;
    // let erro;

    // //isNaN() ==> quando colocado em uma condicional, verifica se os valores das variáveis 1 e 2 são números ou não.
    // if(isNaN(numero1) || isNaN(numero2)){
    //     console.log('ERRO: os valores inseridos não são números');
    //     exit();
    // } else{
        
  

    //         switch(calculo){
    //             case 'SOMAR': case '+':
    //                 resultado = numero1 + numero2;
    //                 break;
    //             case 'SUBTRAIR': case '-':
    //                 resultado = numero1 - numero2;
    //                 break;
    //             case 'MUTIPLICAR': case '*':
    //                 resultado = numero1 * numero2;
    //                 break;
    //             case 'DIVIDIR': case '/':
    //                 if(numero2 == 0){
    //                     console.log('ERRO: Não é possível realizar a divisão por zero');
    //                     erro = true;
    //                 }
    //                 else{
    //                     resultado = numero1 / numero2;
    //                 }
    //                 break;
    //             default:
    //                 console.log('ERRO: Operação não identificada.');
    //                 erro = true;
    //         };
        
    // }

    // if(erro){
    //     return false;
    // }else{
    //     return resultado;
    // }
}


//As funções que serão importadas em outros projetos, precisam obrigatóriamente serem incluídas no module.exports
//As funções que não forem incluídas no module.exports, elas irão funcionar apenas LOCALMENTE neste arquivo
module.exports = {
    calcular
}
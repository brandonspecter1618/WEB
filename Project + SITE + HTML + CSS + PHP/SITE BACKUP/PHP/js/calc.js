let gvalor;
let goper;
let gvisor;


document.addEventListener('DOMContentLoaded', function() {
    // Pega todos os botões que possuem a classe 'num'
    const numButtons = document.querySelectorAll('.num');

    // Itera sobre cada botão e associa o evento de clique
    numButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const numValue = this.value;  // Pega o valor do botão clicado
                if(numValue == '+'){
                    calcParse('somar');
                    return;
                }if(numValue == '-'){
                    calcParse('subtrair');
                    return;
                }if(numValue == '*'){
                    calcParse('multiplicar')
                    return;
                }if(numValue == '/'){
                    calcParse('dividir');
                    return;
                }if(numValue == '='){
                    calcParse('resultado');
                    return;
                }if(numValue == 'C'){
                    calcLimpar();
                    return;             
                }else{
                    calcNum(numValue);            // Passa o valor para a função calcNum
                }
        });
    });
});

const calcNum = function (num) {

    if(gvisor == undefined) {

        document.calcform.visor.value = '';

    }

    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
 }


const calcLimpar = function() {
    
    document.calcform.visor.value = '';
    gvalor = undefined;
    goper = undefined;
    gvisor = undefined;
 }


const calcParse = function(oper) {

    var valor = document.calcform.visor.value;
    gvisor = undefined;
    

    if(goper !== undefined && oper == 'resultado'){
        gvalor = calcOper(goper, gvalor, valor);
        document.calcform.visor.value = gvalor;
        oper = undefined;
        gvalor = undefined;
        return(0);
    }


    if (gvalor !== undefined){

        gvalor= calcOper(goper, gvalor, valor);
        goper = oper;
        document.calcform.visor.value = gvalor;
    }else {

        gvalor = valor;
        goper = oper;

    }

}

const calcOper = function(oper, valor1, valor2){

    if(oper == "somar"){

        var valor = parseInt(valor1) + parseInt(valor2);
    
       }else
          if(oper == "subtrair"){

             var valor = valor1 - valor2;             
       
             }else
                if(oper == "multiplicar"){

                    var valor = valor1 * valor2;

                }else{

                    var valor = valor1 / valor2;
                }

return(valor);
} 
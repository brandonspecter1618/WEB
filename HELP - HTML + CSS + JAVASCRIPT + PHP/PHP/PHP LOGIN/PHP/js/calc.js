let gvalor;
let goper;
let gvisor;

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
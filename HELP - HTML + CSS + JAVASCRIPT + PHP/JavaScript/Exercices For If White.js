/*JAVASCRIPT EXERCICIOS LOOP*/


Descobrir pares entre 1 à 100

function jsTest(){

var i;
var loop = '';
	for(i = 0; i <= 100; i++){

		if(i % 2 == 0){     /*"%" significa resto de divisão que se for igual à zero é par*/ 

			loop += i + "<br>";
		}
	}

document.getElementById("result").innerHTML= loop;
	
}

/*Só exibir pares complicado*/

function jsTest(){
            
    let loop = "";
    let i = 0;
        while(i <= 20){     /*Se mudar para 22 gera loop infinito*/
            for(i == 0; i <= 21; i++){
                if(i % 2 == 0){
                    loop += i + "<br>";
                }
            }
        }
    document.getElementById("result").innerHTML=loop;
}

###########################################

Criando tabuada if and FOR

function jsTest(){

var input = document.getElementById("input1").value;
var i;
var text = '';

	if(input > 10){

		text = "O valor precisa ser abaixo de 10";
	}

	if(input < 10){

		for(i = 1; i < 11; i++){           /*Faz a contagem de 1 até 10*/
			
			text += input * i + "<br>";    /*Faz a multiplicação da entrada "input" com i*/
		}
	}

document.getElementById("result").innerHTML= text;
	
}

/*ou*/

function jsTest(){

var input = document.getElementById("input1").value;
var i;
var text = '';

	if(input < 10){

		for(i = 1; i < 11; i++){
			
			text += input * i + "<br>";
		}
	}else{

		text = "O número é mais alto que 10";
	}

document.getElementById("result").innerHTML= text;
	
}

/*ou */

/*Tabuada com duas variáveis for*/

function jsTest(){

    let i;
    let x;
    let loop = "";
        for(i = 0, x = 0; i < 11, x < 11; i++, x++){
            
            loop += i * x + "<br>";
        }  
                        
    document.getElementById("result").innerHTML=loop;
}

/*ou*/

function jsTest(){

    let i;
    let x;
    let loop = "";
        for(i = 0, x = 2; i < 11; i++){
            
            loop += i * x + "<br>";
        }  
                        
    document.getElementById("result").innerHTML=loop;
}


############################################################

Repetindo várias vezes a mesma "Palavra"


function jsTest(){

var input = document.getElementById("input1").value;
var text = "";
var i = 0;

	while(i < 30){

		i++
		text += input + "<br>";
	}

document.getElementById("result").innerHTML= text;
	
}

/*ou*/

function jsTest(){

	var input = document.getElementById("input1").value;
	var text = "";

		for(i = 0; i < 30; i++){

			text += input + "<br>";
		}

	document.getElementById("result").innerHTML= text;
		
}


#############################################################

/*Somando com While*/

function jsTest(){

    let input =  document.getElementById("input1").value;
    let input2 = document.getElementById("input2").value;
    let input3 = document.getElementById("input3").value;
    let input4 = document.getElementById("input4").value;
    let i = 0;
    let result;

        while(i == 0){

            result = (+input + +input2 + +input3 + +input4) / 4;
            i = 1;
        }

document.getElementById("result").innerHTML= result;
        
}

###############################################################

Faça um programa que peça ao usuário um número entre 12 e 20. 
Se a pessoa digitar um número diferente, 
mostrar a mensagem "entrada inválida" e solicitar o número novamente. 
Se digitar correto mostrar o número digitado.

function jsTest(){

    let input = document.getElementById("input1").value;
    let result = "O resultado está errado";

        while(input > 12 && input < 20){
            result = "O número digitado é " + input;
            document.getElementById("result").innerHTML = result;
            return(0);
        }
        

    document.getElementById("result").innerHTML=result;
}


####################################################################

function jsTest(){

    var input = document.getElementById("num1").value;
    var i;
    var d = document.getElementById("result");

        for(i = 2; i < input; i++){    /*Incrementa a variável i e cria o resto da
                                         divisão até o valor anterior ao informado pelo
                                         input. Exemplo 9/2,9/3,9/4... até 9/8*, parando
                                         quando satisfazer o if*/

            if(input % i === 0){       /*Testa o resto da divisão de Input / i para igual
                                        a zero, repetindo mesmo até satisfazer a condi
                                        ção de if, no caso seria 9/3 resto 1*/

                d.innerHTML="Não é número primo";
                return;
            }
        }

        d.innerHTML= "O número é primo";
    }

/*OU*/

function jsTest(){

    var i;
    var input = parseInt(document.getElementById("num1").value);

    for(i = 2; i < input; i++){
        if(input % i == 0){
            document.getElementById("result").innerHTML= "Este número não é primo";
            return;
        }
    }
document.getElementById("result").innerHTML= "Este número é primo";

}


######################################################

/*Versão Original Do Código*/

    function ehPrimo(i) {
        for (var divisor = 2; divisor < i; divisor++) 
            if (i % divisor == 0) 
            return false;
            return true;
    }
    
    for (var i = 2; i < 100; i++) 
        if (ehPrimo(i)) 
        document.write(i + '\n');


**********************
/*Versão Do Código Alterado Por mim*/


function ehPrimo(i) {
    for (var divisor = 2; divisor < i; divisor++) 
        if (i % divisor == 0) 
        return false;
        return true;
}

function jsTest() {

    for (var i = 2; i < 100; i++) 
        if (ehPrimo(i)) 
        document.getElementById("result").innerHTML+= i + "<br>";
}

/*OR*/

const jsTest = () => {
    for(let i = 2; i < 100; i++)
    if(primo(i))
    document.getElementById("result").innerHTML+= i + "<br>";
}

const primo = (i) => {
    for(let input = 2; input < i; input++)
    if(i % input == 0)
    return false;
    return true;
}

***********************

/*Versão Do Código Criado Por Mim*/

function primo(input) {
    for(i = 2; i < input; i++)
    if(input % i == 0)
    return false;
    return true;
}

function jsTest(){
    var input2 = parseInt(document.getElementById("num1").value);
    for(var input = 2; input < input2; input++)
    if(primo(input))
    document.getElementById("result").innerHTML+= input + "<br>";
}


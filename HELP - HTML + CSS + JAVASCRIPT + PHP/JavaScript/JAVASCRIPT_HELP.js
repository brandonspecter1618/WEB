/*Atenção, coloque o defer para que o navegador entenda que precisa
carregar o DOM primeiro para depois executar qualquer coisa de JavasScript
ou precisará colocar o comando a linha de código Exemplo 1 no final da página. Ou usar
algum tipo EventListener Exemplo 2*/

//Exemplo1 
<script src="js/js1.js" defer></script> 


//Exemplo2
document.addEventListener('DOMContentLoaded', () =>  {
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

/*************************************************************************/
/*HTML + JAVASCRIPT PARA TEST RAPIDO*/

const jsTest = () => {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector("#num2").value;
    let d = document.querySelector("#result");
    let calcResult = calc(a, b);
    
    d.innerHTML = "The result is " + calcResult; 
    
}

const calc = (a, b) => {
    let arg_a = a;
    let arg_b = b;
    let result = parseInt(arg_a) + parseInt(arg_b);
    return(result);
}


document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

/*HTML ABAIXO*/

/*
    <div class="var_p orbitron-font-google">
        <p>PHP/JAVASCRIPT</p>
        <label for="">Value1:</label>
        <input type="text" id="num1" placeholder="Value1">
        <label for="">Value2:</label>
        <input type="text" id="num2" placeholder="Value2">
        <br><br>

        <label for="subject">Database:</label>
        <select class="var_input_select" id="database">
            <option value="connTest">Test Connection</option>
            <option value="select">SELECT</option>
            <option value="insert">INSERT</option>
            <option value="drop">DROP</option>
            <option value="login">LOGIN</option>
        </select>

        <label for="">DROP </label>
        <input type="text" id="num3" placeholder="Digite um ID">
        <br><br>
        <button class="var_button" id="myBtn">ClickHere</button>
        <p id="result"></p>
    </div>
*/


/*

Com o onclick no button vc pode executar a função direto colocando o nome dela


LEMBRANDO QUE SE O NAVEGADOR TIVER O CSP HABILITADO NÃO VAI FUNCIONAR O ONCLICK OU
OU QUALQUER LINHA DE CÓDIGO INLINE, QUE NÃO VENHA DIRETO DO SERVER


CÓDIGO CSP ABAIXO
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self'; font-src 'self' https://fonts.gstatic.com;">

Aqui o botão que não vai funcionar o onclick por causa do CSP
<button type="button" class="var_1button" onclick="jsTest()">ClickHere</button>

*/

/************************Mouse click Event*****************************/

/*Não esquecer do Exemplo 1 o defer, que faz com que o navegador espere o DOM carregar
antes de iniciar qualquer carregamento do Javascript */

//Exemplo1 

<script src="js/js1.js" defer></script> 

//Exemplo1

const jsTest = () => {
    let nome = document.querySelector("#num1").value;
    let d = document.querySelector("#result");
    d.innerHTML = "Seu nome é " + nome;
}

document.addEventListener('DOMContentLoaded', () =>  {
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

/*Set time with Javascript*/

	setTimeout(
		function(){
			document.location.reload(true)
		}, 3000)


/***********************************************************************/

/*Windows Print = Utilizado para imprimir p�gina.

<button type="button" class="var_button" id="myBtn">ClickHere</button>
*/


const jsTest = () => {
    print(alert("Documento Pronto Para Ser Impresso"));
    alert("Obrigado ṕor visitar nossa página");
}

document.addEventListener('DOMContentLoaded', () =>  {
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



/***********************************************************************/

const jsTest = () => {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector("#num2").value;
    let d = document.querySelector("#result");
    let result = parseInt(a) + parseInt(b);

    d.innerHTML = "Resultado é " + result;
}

document.addEventListener('DOMContentLoaded', () =>  {
    document.querySelector("#myBtn").addEventListener("click", jsTest);   // Para o botão da página rodar o script jsTest()
});


/******************Or****************************/

const jsTest = () => {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector("#num2").value;
    let d = document.querySelector("#result");
    let result = calc(a, b);

    d.innerHTML = "Resultado é " + result;
}

const calc = (a, b) => {
    let a_arg = a;
    let b_arg = b;
    let result_arg = parseInt(a) + parseInt(b);
    return(result_arg);

}

document.addEventListener('DOMContentLoaded', () =>  {
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

/******************Or****************************/

const jsTest = () => {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector("#num2").value;
    let d = document.querySelector("#result");
    let result = calc(a, b) + 100;

    d.innerHTML = "Resultado é " + result;
}

const calc = (a, b) => {
    let a_arg = a;
    let b_arg = b;
    let result_arg = parseInt(a) + parseInt(b);
    return(result_arg);

}

document.addEventListener('DOMContentLoaded', () =>  {
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



/* OBS: Se for executar sem o auxilio do addEventListener
Colocar assim <script src="js/js1.js" defer></script>
O defer vai atrasar a execução do javascript até que o 
DOM esteja com todos os dados. 

/***********************************************************************/
//toString

const jsTest = () => {
    let a, b, result;
    a = 555;
    b = 111;


    document.querySelector("p#result")
   .innerHTML = (555).toString() + b + "<br>"
                + a.toString() + b + "<br>"
                + (555 + 111).toString() + b;
}


document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

//or

const jsTest = () => {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector("#num2").value;
    let d = document.querySelector("#result");
    let result = parseInt(a) + parseInt(b);
    let ToString = (a).toString();

    d.innerHTML = "To String used: " + ToString + b 
    + "<br>" + "The result is: " + result;
    
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/
// += = É o mesmo que x = x + 5


const jsTest = () => {
    let d = document.getElementById("result");
    
    a = 10;
    a += 5;  // a = a + 5
    d.innerHTML = a;
 
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


//OR

const jsTest = () => {
let a = parseInt(document.querySelector("#num1").value);
let d = document.querySelector("#result");

a += 5;
d.innerHTML = a;
 
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/
//-= = É o mesmo que x = x - 5


const jsTest = () => {
    let d = document.getElementById("result");
    
    a = 10;
    a -= 5;  // a = a - 5
    d.innerHTML = a;
 
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

// *= = É o mesmo que x = x * 5

const jsTest = () => {
    let d = document.getElementById("result");
    
    a = 10;
    a *= 5;  // a = a * 5
    d.innerHTML = a;
 
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

// /= = É o mesmo que x = x / 5

const jsTest = () => {
    let d = document.getElementById("result");
    
    a = 10;
    a /= 5;  // a = a / 5
    d.innerHTML = a;
 
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/
// JavaScript object

// Acima, você acessou as propriedades de objetos 
// e métodos usando notação de ponto. 
// O objeto nome (pessoa) atua como namespace (espaço de nomes) — 
// ele deve ser digitado primeiro para que você acesse qualquer coisa 
// encapsulada dentro do objeto. Depois você escreve um ponto, então o 
// item que quer acessar — isso pode ser o nome de uma simples propriedade, 
// um item de um array ou a chamada para um dos métodos do objeto, por exemplo: 






/***********************************************************************/

// Arrays Script

/*Função anônima auto executável no modelo mais aceitável*/

(() => {
    let cars = ["Lamb", "Ferrari", "BMW", "Alpha", "Porsche"];
    let d = document.querySelector("#result");

    d.innerHTML = "Model: " + cars[0];
})()


//Or

const jsTest = () => {
    let cars = ["Lamb", "Ferrari", "BMW", "Alpha", "Porsche"];
    let d = document.querySelector("#result");

        for(let x = 0; x < cars.length; x++ ){
            d.innerHTML += cars[x] + "<br>";
        }
}


document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



//Or

const jsTest = () => {
    let soma = [];
    soma[0] = Number(document.querySelector("#num1").value); //Number se não colocar nada ele assume valor 0
    soma[1] = Number(document.querySelector("#num2").value);
    let d = document.querySelector("#result");
    let result = soma[0] + soma[1];

        if(isNaN(soma[0]) || isNaN(soma[1])){   //isNaN verifica se algo diferente de número foi digitado, se sim ele bloqueia e cai no erro do primeiro IF
            d.innerHTML = "Digite os valores para soma!!!"
        }else{
            d.innerHTML = "The result is " + result;
        }
}


document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



//Or

const jsTest = () => {
    let a = document.querySelector("#num1").value;
    let b = document.querySelector("#num2").value;
    let d = document.querySelector("#result");
    let bool = calc(a, b);

        if(bool === false){
            d.innerHTML = "Digite um número !!!";
        }else{
            d.innerHTML = "The Result is " +  bool;
        }
}

const calc = (a, b) => {
    if(isNaN(a) || isNaN(b)){
        return(false);
    }else{
        let result = Number(a) + Number(b);
        return(result);
    }
}


document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});




/***********************************************************************/

//Loop Number HTML

const jsTest = () => {
    let arr = [];
    let arr_Result = [];
    let d = document.querySelector("#result");
    let loop = "";

        for(let x = 0; x <= 100;  x++){
            arr[x] = x;
            loop += arr[x];
        }

        d.innerHTML = loop;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

// push() Add Item in arrays



const jsTest = () => {
    let arr = [];
    let arr_Result = [];
    let d = document.querySelector("#result");
    let result;

        for(let x = 0; x <= 100;  x++){
            arr[x] = x;
        }

        result = Number(arr[10] + arr[20]);
        arr_Result.push(result);
        d.innerHTML = "The result is " + arr_Result[0];
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



// or

    
const jsTest = () => {
    let arr = new Array("Saab", "Volvo", "Ferrari", "BMW");
    let d = document.querySelector("#result");

    arr.push("FUCKYOU");
    d.innerHTML = arr + "<br> Arr is length: " + arr.length;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


  

/*A variable Input vem antes do fruits.push, já que o código executa de cima para baixo, portanto 
se não tiver valor à declarar não tem o que pesquisar (indexof()) 
ou mesmo colcoar algo em um arrays (push())*/



const jsTest = () => {
    let arr = new Array("Orange", "Banana", "Apple", "Mango");
    let a = document.querySelector("#num1").value;
    let d = document.querySelector("#result");

    arr.push(a);
    d.innerHTML = arr + "<br> Arr is length: " + arr.length;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

// pop() Delete last item arrays


const jsTest = () => {
    let arr = new Array("Orange", "Banana", "Apple", "Mango");
    let d = document.querySelector("#result");

    arr.pop();
    d.innerHTML = arr + "<br> Arr is length: " + arr.length;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



/***********************************************************************/

// shift() method removes the first array element index.

const jsTest = () => {
    let arr = new Array("Orange", "Banana", "Apple", "Mango");
    let d = document.querySelector("#result");

    arr.shift();
    d.innerHTML = arr + "<br> Arr is length: " + arr.length;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});




/***********************************************************************/

// array.join = Transforma o array em string;

const jsTest = () => {
    let arr = new Array("Orange", "Banana", "Apple", "Mango");
    let d = document.querySelector("#result");

    let arr_join = arr.join();
    d.innerHTML = arr_join + "<br> Arr is length: " + arr.length;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



/***********************************************************************/

// array.reverse = Inverte os itens de um arrays 

const jsTest = () => {
    let arr = new Array("Orange", "Banana", "Apple", "Mango");
    let d = document.querySelector("#result");

    let arr_join = arr.reverse();
    d.innerHTML = arr_join + "<br> Arr is length: " + arr.length;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/


// array.concat = Criar um novo array a partir do principal adicionando
// resultado.

const jsTest = () => {
    let arr = new Array("Orange", "Banana", "Apple", "Mango");
    let arr_concat = arr.concat("Tomato", "Corn");
    let d = document.querySelector("#result");

    let arr_join = arr.reverse();
    d.innerHTML = arr_concat + "<br> Arr is length: " + arr.length;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

// array.sort = Ordena em ordem alfabética;

const jsTest = () => {
    let arr = new Array("Orange", "Banana", "Apple", "Mango", "Tomato", "Corn");
    let arr_sort = arr.sort();
    let d = document.querySelector("#result");

    d.innerHTML = arr_sort + "<br> Arr is length: " + arr.length;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

// array.slice = Consulta os intervalos entre o nome e outro.

const jsTest = () => {
    let d = document.querySelector("#result");
    let arr = new Array();

        for(let x = 0; x <= 100; x++){
            arr[x] = x;
        }
    

    d.innerHTML = "Slice " + arr.slice(0,10);
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

// array.map = Mapeia tudo que está em um array e trabalha com esse valor
// através de uma função.

const jsTest = () => {
    let d = document.querySelector("#result");
    let arr = new Array();
    let arr_map;
        for(let x = 0; x <= 100; x++){
            arr[x] = x;
        }
    arr_map = arr.map((a) => {return(a * 2)});
        
    d.innerHTML = "Array MAP:" + arr_map;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

/***********************************************************************/

// arrays.filter = Filtra os resultados de um array de acordo como especificado
// em uma função.

const jsTest = () => {
    let d = document.querySelector("#result");
    let arr = new Array();
    let arr_map;
        for(let x = 0; x <= 100; x++){
            arr[x] = x;
        }
    arr_map = arr.filter(
        (a) => {
            if(a % 2 === 1){
                return(a);
            }
        }
    );
        
    d.innerHTML = "Array MAP:" + arr_map;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

// Procurar String Dentro De uma String 


// indexOf

const jsTest = () => {
    let d = document.querySelector("#result");
    let text = "My name is Brandon and Live in Brazil";
    let inp_search = document.querySelector("#num1").value;
    let text_match = text.indexOf(inp_search);

    d.innerHTML = "Result Search: " + text_match;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



/***********************************************************************/

// Search

const jsTest = () => {
    let d = document.querySelector("#result");
    let text = "My name is Brandon and Live in Brazil";
    let inp_search = document.querySelector("#num1").value;
    let text_match = text.search(inp_search);

    d.innerHTML = "Result Search: " + text_match;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


		

// OR


const jsTest = () => {
    let d = document.querySelector("#result");
    let text = "My name is Brandon and Live in Brazil";
    let text_match = text.search("Brazil");

    d.innerHTML = "Result Search: " + text_match;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


		

/***********************************************************************/
// Replace

const jsTest = () => {
    let d = document.querySelector("#result");
    let text = "My name is Brandon and Live in Brazil";
    let inp_search = document.querySelector("#num1").value;
    let subs_match = document.querySelector("#num2").value;
    let subs_result = text.replace(inp_search, subs_match);

    d.innerHTML = "Modify: " + subs_result;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


		
/***********************************************************************/

// Gera n�meros aleat�rios

// Math.PI



const jsTest = () => {
    let d = document.querySelector("#result");

    d.innerHTML = Math.PI;
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});




// Math.round arredonda o número para baixo ou acima.



const jsTest = () => {
    let d = document.querySelector("#result");

    d.innerHTML = Math.round(6.4);
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});




// Math.pow Potência de número



const jsTest = () => {
    let d = document.querySelector("#result");

    d.innerHTML = Math.pow(2,8);
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

/***********************************************************************/

// Math.floor = Retorna um valor abaixo do valor que colocou em decimal por exemplo Math.floor(7.9) retorna (7)
// Math.random = Retorna valores rand�micos entre 0 e 1.
		

const jsTest = () => {
    let d = document.querySelector("#result");
    let a = document.querySelector("#num1").value;
    let b = document.querySelector("#num2").value;
    let result = soma(a, b);

    d.innerHTML = "The result is " + result;
}

const soma = (a, b) => {
    let calc = Math.floor(Math.random() * (a * b) * a);
    return(calc);
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


	

/***********************************************************************/

// Opera��es Boleano utlizado para descobrir se os operadores s�o true or false.

			
const jsTest = () => {
    let d = document.querySelector("#result");

    d.innerHTML = Boolean(2 <= 12);
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


			

// OR 


const jsTest = () => {
	let d = document.querySelector("#result");
	let a = "5555"
	let b = 5555
	d.innerHTML = Boolean(a != b); //Não são iguais pelo valor ? False pois no valor são iguais
				//Boolean(a !== b) //Não são iguais medindo valor e tipo ? True verdadeiro não são iguais o tipo é diferente    
				//Boolean(a == b) //São iguais pelo valor ? True são iguais pelo valor.
				//Boolean(a === b) //São iguais pelo valor e tipo ? False não são iguais pelo valor e tipo.    
			
}

document.addEventListener('DOMContentLoaded', () =>{
	document.querySelector("#myBtn").addEventListener("click", jsTest);
});





/***********************************************************************/

// IF and Else
		
	
const jsTest = () => {
	let d = document.querySelector("#result");
	let hours = new Date().getHours();
	let message;
		if(hours <= 12){
			message = "Good Morning<br>";
		}else if(hours <= 18){
			message = "Good Afternoon<br>";
		}else{
			message = "Good Evening<br>";
		}
	
	d.innerHTML = message + Date();        
}

document.addEventListener('DOMContentLoaded', () =>{
	document.querySelector("#myBtn").addEventListener("click", jsTest);
});







/***********************************************************************/

// Loop with Case		 

    const jsTest = () => {
        let d = document.querySelector("#result");
        let day = new Date().getDay();
        let whatDay;
            switch(day) {
				
				case 0:
					whatDay = "Sunday";
				break;
				
				case 1:
					whatDay = "Monday";
				break;
				
				case 2:
					whatDay = "Tuesday";
				break;
				
				case 3:
					whatDay = "Wednesday";
				break;
				
				case 4:
					whatDay = "Thursday";
				break;
				
				case 5:
					whatDay = "Friday";
				break;
				
				case 6:
					whatDay = "Saturday";
				break;
				
				default:
					whatDay = "Looking forward to the Weekend"
				
				}
        
        d.innerHTML = "The Today is: " + whatDay;        
    }

    document.addEventListener('DOMContentLoaded', () =>{
        document.querySelector("#myBtn").addEventListener("click", jsTest);
    });


/***********************************************************************/

/*Loop For*/


const jsTest = () => {
	let d = document.querySelector("#result");
	let loop = "";
		for(let x = 0; x <= 100; x++){
				loop += x + "<br>";
		}
		d.innerHTML = loop;       
}

document.addEventListener('DOMContentLoaded', () =>{
	document.querySelector("#myBtn").addEventListener("click", jsTest);
});



// OR

const jsTest = () => {
    let d = document.querySelector("#result");
    let loop = "";
        for(let x = 0; x <= 5000; x++){
            if(x === 101){break;}
            
            loop += x + "<br>";
        }
        d.innerHTML = loop;       
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});
				
	

// OR

const jsTest = () => {
    let d = document.querySelector("#result");
    let loop = "";
        for(let x = 0; x <= 5000; x++){
            if(x === 31){break;}
            
            loop += x + "<br>";
        }
        d.innerHTML = loop;       
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


// OR

const jsTest = () => {
    let d = document.querySelector("#result");
    let loop = "";
        for(let x = 0; x <= 100; x++){
            if(x % 2 === 0){       //pares
                loop += x + "<br>";
            }
        }
        d.innerHTML = loop;       
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});
				
//OR

const jsTest = () => {
    let d = document.querySelector("#result");
    let loop = "";
        for(let x = 0; x <= 100; x++){
            if(x % 2 === 1){        //impares
                loop += x + "<br>";
            }
        }
        d.innerHTML = loop;       
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

			/*Loop While*/


const jsTest = () => {
    let d = document.querySelector("#result");
    let loop = "";
    let x = 0;

        while(x < 101){
            loop += x + "<br>";
            x++;
        }
        d.innerHTML = loop;       
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});




//LOOP INFINITO	
const jsTest = () => {
    let d = document.querySelector("#result");
    let loop = "";
    let x = 1;

        while(x > 0 ){
            loop += x + "<br>";
            x++;
        }
        d.innerHTML = loop;       
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});




/***********************************************************************/
// Converter Number for String
			
const jsTest = () => {
    let d = document.querySelector("#result");
    let a = 123;

    d.innerHTML = "Variable A = 123<br>" + "String(): " + String(a) + 12 + "<br> Number(): " + Number(a + 12);  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


// OR

			
const jsTest = () => {
    let d = document.querySelector("#result");
    let number = 123;

    d.innerHTML = ("The toString() converter numbers for string").toString() + "<br>" +
		number.toString() + "<br>" +
		(123).toString() + "<br>" +
		(1234+67).toString();  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


			


/***********************************************************************/

// Try and Catch and Throw

//TRY CATCH USED FOR DOWN

const jsTest = () => {
    let d = document.querySelector("#result");
    //let number = 123;

    try{
        
        d.innerHTML = ("The toString() converter numbers for string").toString() + "<br>" +
		number.toString() + "<br>" +
		(123).toString() + "<br>" +
		(1234+67).toString();

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

// toUpperCase = Tudo Maiusculo;
		

const jsTest = () => {
    let d = document.querySelector("#result");
    try{
        let x = "kjahbdashdbasdlahewwewejsbdakjshdbasdjhabsdajshb";
        d.innerHTML = x.toUpperCase();

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

/***********************************************************************/

/*Used Call */

        
const jsTest = () => {
    let d = document.querySelector("#result");
    try{
		let person1 = {
			fullname: function() {
				return this.name + "&nbsp" + this.lastname;
				}
			}

		let person2 = {
			name: "Brandon",
			lastname: "Specter",
		}

        d.innerHTML = "Name:" + person1.fullname.call(person2);

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/***********************************************************************/

/*Arrow Function*/
        
const jsTest = () => {
    let d = document.querySelector("#result");
    try{
			let varfunction1 = 

			function jsTest2() {

				var a = 30;
				var b = 50;
				var z = a + b;
				return z;    
			}
			
		let varfunction2 = 
		
			function() {

				var c = 100;
				var d = 20;
				var x = varfunction1() + (c - d); 
				return x;
			}

        d.innerHTML = varfunction2();

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


//or


const jsTest = () => {
    let d = document.querySelector("#result");
    try{
			let calc1 = 

			function() {

				let a = document.querySelector("#num1").value;
				let b = document.querySelector("#num2").value;
				let result = Number(a) + Number(b);
				return result;    
			}
			
		let calc2 = 
		
			function() {

				let x = calc1();
				return x;
			}

        d.innerHTML = calc2();

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});
	

// or 

const jsTest = () => {
    let d = document.querySelector("#result");
    try{
        
        let a = document.querySelector("#num1").value;
        let b = document.querySelector("#num2").value;

        let varCalc1 = calc(a, b);
        d.innerHTML = "The result is " + varCalc1;

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

const calc = (a, b) => {

    try{
        
        let result = Number(a) + Number(b);
        return(result);

    }catch(err){
        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
            + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
            + "Stack: <br>" + err.stack;
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

/***********************************************************************/

// Array.isArray() = Verifica se o objeto é um array.


const jsTest = () => {
    let d = document.querySelector("#result");
    try{
        
        let arr = ['Banana', 'Manga', 'Apple'];
        d.innerHTML = Array.isArray(arr);  //Volta um True se tiver correto. 

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});




/***********************************************************************/

// The forEach() method calls a function once for each array element.


const jsTest = () => {
    let d = document.querySelector("#result");
    try{
        
        let txt = "";
        let numbers = [45, 4, 16, 25];
        numbers.forEach(myFunctionForEach);
        d.innerHTML = txt;

            function myFunctionForEach(value){
                txt = txt + value + "<br>";
            }

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



/***********************************************************************/
// JavaScript Array.prototype.includes = Verifica se a pesquisa existe no array.


const jsTest = () => {
    let d = document.querySelector("#result");
    try{
        
        let arrVar = ['Banana', 'Manga', 'Apple'];
        d.innerHTML = arrVar.includes('Manga');


    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



/***********************************************************************/

// Escondendo o Escopo: Vimos que podemos pegar qualquer trecho de 
// código e envolver uma função ao seu redor, e que, efetivamente, 
// "esconde" as declarações inclusas de funções ou variáveis de fora do escopo principal, 
// dentro do interior do escopo daquela função.

var x = "Brandon";
let d = document.querySelector("#result");

const jsTest = () => {
    let d = document.querySelector("#result2");
    try{
        
        let a = 12;
        let b = 22;
        x = a + b;
        d.innerHTML = "Variable Local:" + x;


    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

d.innerHTML = "Variable Globla:" + x;

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});




/***********************************************************************/

// Closure dando as caras 

// Tomamos uma função interna (chamada timer) e passamos ela para o setTimeout(..). 
// Mas timer tem um escopo fechado sobre o escopo de wait(..), 
// mantendo e usando uma referência para a variável message.

// Mil milésimos de segundo depois de executarmos wait(..), 
// e seu escopo interno deveria ter sido extinto há muito tempo, 
// a tal função interna timer ainda tem uma closure sobre esse escopo.

// Lá no fundo, nas entranhas do Motor, o utilitário embutido setTimeout(..) 
// faz uma referência por algum parâmetro, provavelmente chamado fn, ou func, ou alguma coisa do tipo. 
// O Motor vai invocar essa função, que está invocando nossa função interna timer, 
// e a referência do escopo léxico ainda está intacta.

function wait(message){

setTimeout(function timer() {

	document.getElementById("result").innerHTML=message;
}, 1000);
}

wait("Hello Baby");

/***********************************************************************/

Window.onload //Utilizado para aparecer ao entrar na página

window.onload = function jsTest(){

window.alert("This Page loading for Javascript")
}

/***********************************************************************/

/*Cookie With Javascript*/


const jsTest = () => {
        let d = document.querySelector("#result");
    try{

    document.cookie = "user1=Brandon; path=/wiki.html; max-age=3600; SameSite=Strict";
    document.cookie = "user2=Katherine; path=/index.html; max-age=3600; SameSite=Strict";    
        
    const cookies = document.cookie.split("; ");

    let html = "";

    cookies.forEach(c => {
        let [name, value] = c.split("=");
        html += `${name} : ${value} <br>`;
        
    });

    d.innerHTML = html;


    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;

    }  
}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/************************************************************************/

/*Javascript Helper*/

//Requisições através de AJAX


// Porém, por enviar os dados no cabeçalho da requisição, 
// o GET tem um tamanho máximo de dados que podem ser enviados, 
// que no geral é de 255 caracteres. 
// Com POST, podemos enviar informações um pouco maiores, 
// como imagens. Ou seja, se tentarmos passar uma grande quantidade de 
// informações via GET, algumas partes podem ser perdidas no caminho.


// As requisições do tipo GET são recomendadas para obter dados de um determinado 
// recurso. Como em um formulário de busca ou em uma listagem de todos os produtos 
// cadastrados.

// Já as requisições POST são mais utilizadas para para enviar 
// informações para serem processadas, como por exemplo, criar 
// algum recurso, como um produto, ou um cliente.


/********************************************************************************/

//Para Calculadora

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


/********************************************************************************/

//Preenchimento dos campos em um formulário com CEP

/************************************************************/
//Javascript array.sort script logic

const jsTest = () => {
    arr();
}

const arr = () => {

    try{

        let a, b, c, d, result;
        var vect = [78, 34, 1, 3, 90, 34, -1, -4, 6, 55, 20, -65]; // or let vect = []
        d = document.querySelector("#result");

            for(x = 0; x < vect.length; x++){
                for(y = x + 1; y < vect.length; y++){
                    let tmp = 0;
                    if(vect[x] > vect[y]){
                        tmp = vect[x];
                        vect[x] = vect[y];
                        vect[y] = tmp;
                    }
                }
            d.innerHTML += vect[x] + "<br>";
            }
    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;
    }  

}

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


/************************************************************/
/*Consulta CEP*/


const jsTest = () => {
    let d = document.querySelector("#result");
    try{
        const cep = document.querySelector("#num1").value;

        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
            .then(response => response.json())
                .then(data => {
                    d.innerHTML = JSON.stringify(data, null, 2);
                });

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;
    }  
}
document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

//OR


const jsTest = () => {
    let d = document.querySelector("#result");
    try{

        const cep = document.querySelector("#num1").value;

            if(cep === "" || isNaN(cep) ) {
                alert("Por favor digite um CEP sem o traço. Ex: 71995450");
            }

        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`, options)
            .then(response => response.json())
                .then(data => {
                    let html = `
                        <table border="1" style="border-collapse: collapse; padding:5px;">
                            <tr>
                                <th>Campo</th>
                                <th>Valor</th>
                            </tr>
                    `;

                        for (let key in data) {
                            html += `
                                <tr>
                                    <td>${key}</td>
                                    <td>${data[key]}</td>
                                </tr>
                            `;
                        }

                    html += `</table>`;

                    d.innerHTML = html;
                });

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;
    }  
}
document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});



//OBS: NÃO ESQUEÇA DE PREENCHER O CAMPO DO CEP e não esqueça de colocar no CSP o acesso ao site

//<meta http-equiv="Content-Security-Policy" content="default-src 'self' https://viacep.com.br/ws/; 
// script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self'; 
// font-src 'self' https://fonts.gstatic.com;">

/********************************************************************************/

///////////////////////////////////////////////////////////////////////////////////////////////////////
                                    //FETCH + CODE PHP 


//CODE PHP PAGE: /php/Test.php

<?php

$a = 50; //$_POST['key1']
$b = 40; //$_POST['key2']

$result = $a + $b;

print "o resultado final é " .$result;

?>

////////////////////////////////////////////CODE PHP

const jsTest = () => {
    let d, url;
    d = document.querySelector("#result");
    url = "/php/phpTest.php";
    try{

        let options = {
            method: "POST",
            mode: "cors",

        }

        fetch(url, options)
            .then(response => {
                if(!response.ok){
                    throw new Error("Connection Failure");
                }

                return response.text();
            })

            .then(data => {
                d.innerHTML = data;
            })

            .catch(error => {
                d.innerHTML = error;
            })

    }catch(err){

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;
    }  
}
document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});

//////////////////////////////////////////////////////////////////////

////FETCH + PHP + DATA

//////////////CODE PHP/////////////////

<?php

$a = $_POST['key1'];
$b = $_POST['key2'];

$result = $a + $b;

print "o resultado final é " .$result;

?>

//////////////CODE PHP/////////////////


const jsTest = () => {
    let a, b, d, url;
    a = document.querySelector("#num1").value;
    b = document.querySelector("#num2").value;
    d = document.querySelector("#result");
    url = "/php/phpTest.php";
    try{

        let formData = new FormData();
        formData.append("key1", a);  //Aqui o nome "key1" precisa bater com o $_POST['key1'] 
        formData.append("key2", b);  //Aqui o mesmo com nome "key2" $_POST['key2']

        let options = {
            method: "POST",
            mode: "cors",
            body: formData  //Aqui é necessário para mandar os dados que quer para o server PHP do formData
        }

        fetch(url, options)
            .then(response => {
                if(!response.ok){
                    throw new Error("Connection Failure");
                }

                return response.text();  //Aqui retorna o resultado do server
            })

            .then(data => {
                d.innerHTML = data; //Aqui vc trata a resposta
            })

            .catch(error => {
                d.innerHTML = error; //Erro caso tenha e retornará a mensagem "Connection Failure"
            })

    }catch(err){  //Demais Erros caem aqui

        d.innerHTML = "Name: &nbsp&nbsp" + err.name + "<br>"  
                    + "Message: &nbsp&nbsp" + err.message + "<br><br>" 
                    + "Stack: <br>" + err.stack;
    }  
}
document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("#myBtn").addEventListener("click", jsTest);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////



let phpJsTest = function(){
    let select, value, a, b, c, d, url, result;
    a = document.querySelector("input#num1").value;
    b = document.querySelector("input#num2").value;
    c = parseInt(document.querySelector("input#num3").value);
    
    d = document.querySelector("p#result");
    url = "/php/phpTest.php";


    //Verificar o <select> com id database para que o usuário possa
    //Escolher qual tipo de consultar realizar entre
    //Test Connection, Select, Insert and Drop
    select = document.getElementById("database");
   
    //O valor obtido da verificação select 
    // select.options[select.selectedIndex].text <-- Esta opção captura o texto exato do select
    value  = select.options[select.selectedIndex].value;  
    //Este value captura o value do select exemplo value="connection"

    let formData = new FormData();
    formData.append("key1", a);
    formData.append("key2", b);
    formData.append("key3", c); 
    formData.append("key4", value);


    let options = {
        method: "POST",
        mode: "cors",
        body: formData
    }

    fetch(url, options)
        .then(
            function promisse(response){
                if(!response.ok){  //É diferente de ok ? Se true então..

                    throw new Error('Network response was not ok');
                }

                return response.text();
            }

        )

        .then(
            function handlerPromisses(data){
              d.innerHTML = data;
            }
                        
        )

        .catch(
            function handleError(error){
               d.innerHTML = error;
            }

        )               
}

document.addEventListener('DOMContentLoaded', () =>  {
    const element = document.querySelector("button#myBtn");
    element.addEventListener("click", phpJsTest);
});


        /*

        //JSON RESPONSE

        let result = d.innerHTML = JSON.stringify(data) 
        + "<br><br>" 
        + data.responseConn.message 
        + "<br><br>" 
        + data.responseInsert.messages
        
        */
        




























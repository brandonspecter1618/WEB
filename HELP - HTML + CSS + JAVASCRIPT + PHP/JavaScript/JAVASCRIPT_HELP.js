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

//Preenchimento dos campos em um formulário com CEP

/************************************************************/
//Javascript array.sort script logic

const jsTest = function(){
    arr();
}

const arr = function(){
    let a, b, c, d, result;
    var vect = [78, 34, 1, 3, 90, 34, -1, -4, 6, 55, 20, -65]; // or let vect = []
    d = document.querySelector("p#result");

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
}

//Comando para achar o menor número no array

const jsTest = function(){
    arr();
}

const arr = function(){
    let a, b, c, d, result;
    var vect = [50, 22, 60, 11]; // or let vect = []
    a = document.querySelector("input#inp1").value;
    b = document.querySelector("input#inp2").value;
    d = document.querySelector("p#result");

    var min = vect[0];
            
        for(let y = 0; y <= vect.length; y++){
            if(vect[y] < min){
                min = vect[y];
            }  
        }       
        d.innerHTML = min + "<br>";
}

/************************************************************/
/*Consulta CEP*/

const cep = document.querySelector("input#cep");

const showData = (result) => {
	
	for(const campo in result){
		if(document.querySelector("#"+campo)){
			document.querySelector("#"+campo).value = result[campo];
		}
	}
}


cep.addEventListener("blur", (inp)=>{

	let search = cep.value.replace("-","");
	const options = {

		method: 'GET',
		mode: 'cors',
		cache: 'default'

	}

	fetch(`https://viacep.com.br/ws/${search}/json/`, options)
	.then(response=>{ response.json()
		.then(data => showData(data)) 
	})
	.catch(erro => console.log('Deu erro ' + erro,message))
	

	window.alert(cep.value);

})

/*Consulta CEP*/
/********************************************************************************/

let inp1 = "ajax1.txt"

fetch(inp1)
	 .then(res => res.text())
	 .then(result2 => document.getElementById("result").innerHTML = result2);


/********************************************************************************/

const url = "phptest.php"

	fetch(url, {
		method: 'POST',
		body: {
			num1:"teste"
		}
	})
	
	.then((res1) => res1.text())
	.then((response) => document.getElementById("result").innerHTML = response)

//or

const data = { username: 'example' };

fetch('phptest.php', {
	method: 'POST', // or 'PUT'
	headers: {
		'Content-Type': 'application/json',
	},
	body: data
})
	.then(response => response.text())
	.then(data => {
		console.log('Success:', data);
	});



/************************Mouse click Event*****************************/

	window.document.getElementById("click1").addEventListener("click", 
        
			function() {
				var nomeCompleto = document.getElementById('name').value;
	
			document.getElementById("result").innerHTML= nomeCompleto;	
	});

/*Or*/

	document.getElementById("click1").addEventListener("click",
			
		function(){
			
				let cpf  = document.getElementById("cpf").value;
				let cpfL = cpf.length;

			document.getElementById("result").innerHTML= "Seu CPF é " + 
			cpf + "o tamanho total do número colocado é " + cpfL; 
		});


/***********************************************************************/

/*Set time with Javascript*/

	setTimeout(
		function(){
			document.location.reload(true)
		}, 3000)



/*Or*/

const jsTest = () => {
    setTimeout(
        function(){
            document.location.reload(true);
        }) 
}





/***********************************************************************/

/*Windows Print = Utilizado para imprimir p�gina.

<button type="button" class="var_1button">ClickHere</button>
*/


	window.document.querySelector("button.var_1button").addEventListener("click",
		
		function jsTest(){
			window.print(alert("Documento Pronto Para Ser Impresso"));
			window.alert("Obrigado ṕor visitar nossa página");
	})



/***********************************************************************/


const jsTest = () => {
	let a, b, result;
	a = 67;
	b = 22;
	result = calc(a, b);
	document.querySelector("p#result")
	.innerHTML = result;
}
 
const calc = (a , b) =>{
	 let result;
	 result = a + b;
	 return result;
	 
}
 


/*Or*/

	window.document.querySelector("button.var_1button").addEventListener("click",
		
		function jsTest(){
			let a = window.document.querySelector("input.num").value;
			let b = window.document.querySelector("input.num2").value;

			let result = parseFloat(a) + parseFloat(b);
			
			window.document.querySelector("p.var_p").innerHTML= result;
	})

/*Or*/

const jsTest = () => {
	let a = document.querySelector("input#inp1").value;
	let b = document.querySelector("input#inp2").value;
	let d = document.querySelector("p#result");
	let arrFunction = jsTest2(a, b);
	let result = arrFunction + 100;

		d.innerHTML = "The result is " + result;
}

const jsTest2 = (a, b) => {
	let total = parseInt(a) + parseInt(b);
	return (total);

}


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


/***********************************************************************/
// += = É o mesmo que x = x + 5


	function jsTest() {
			
		var a, x, z; 
		a =  document.getElementById("varjs");
		x = 10;
		x += 5;
	
		a.innerHTML= x;							
	}


/***********************************************************************/
//-= = É o mesmo que x = x - 5


	function jsTest() {

		var a, x, z; 
		a =  document.getElementById("varjs");
		x = 10;
		x -= 5;

	a.innerHTML= x;
		
	}

/***********************************************************************/

	// *= = É o mesmo que x = x * 5

	function jsTest() {

	var a, x, z; 
	a =  document.getElementById("varjs");
	x = 10;
	x *= 5;

	a.innerHTML= x;
		
	}

/***********************************************************************/

// /= = É o mesmo que x = x / 5

	function jsTest() {

		var a, x, z; 
		a =  document.getElementById("varjs");
		x = 10;
		x /= 5;

	a.innerHTML= x;
			
	}

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
			
	(function jsTest() {
		
		var cars = ["Lamb ", " Ferrari ", " BMW ", " Alpha_Romeo ", " Porsche"];
		cars[4] = "Girl Beautiful";
		
		document.getElementById("var3").innerHTML = cars + "<br>" + cars.length;
	})()

// Ou

	const jsTest = () => {

		let arrays = [];
		let result;
		let inputA = window.document.querySelector("input.num").value;
		let inputB = window.document.querySelector("input.num2").value;

			if(isNaN(inputA) || isNaN(inputB)){
				alert("Digite números nos campos animal kkkk");
			}

			else{
				
				arrays.push(parseFloat(inputA) + parseFloat(inputB));
			}

		window.document.querySelector("p.var_p").innerHTML = arrays;
	}

//Ou

const jsTest = () => {
	let array = [];
	let d = document.querySelector("p#result");
	let a = document.querySelector("input#inp1").value;
	let b = document.querySelector("input#inp2").value;
	let result;

		if(!isNaN(a) === true && !isNaN(b) === true){
			array.push(parseInt(a) + parseInt(b));
			d.innerHTML = "Total is " + array[0];
			
		}else{
			alert("Please insert a number");
		} 
}

// ou 

/*IsNaN na mão*/

	const jsTest2 = () => {

		let inputA = parseFloat(window.document.querySelector("input.num").value);
		let inputB = parseFloat(window.document.querySelector("input.num2").value);
		let result;
		let functionjsTest = jsTest(inputA, inputB);

			if(functionjsTest === true){
				result = inputA + inputB;
			}
			else{
				result = "Digite um número";
			}
		window.document.querySelector("p.var_p").innerHTML= result;
	}

	const jsTest = (a,b) => {

		let calc;

			calc = a + b;

				if(calc % 2 === 0 || calc % 2 === 1)
				return(true);
				return(false);
		}




/***********************************************************************/


// push() Add Item in arrays



const jsTest = () => {
	let d = document.querySelector("p#result");
	let array = [];
	let arrayResult = [];
	let result;
	let x;

		 for(x = 0; x <= 100; x++){
			 array[x] = x + "<br>";
		 }
	 result = parseInt(array[10]) + parseInt(array[20]);
	 arrayResult.push(result);
	 d.innerHTML = "The result is " + arrayResult;

 }


// or

    
    function jsTest() {
    
		var a = new Array ("FUCKYOU");
		var cars = new Array(

		"Saab",
		"Volvo",
		"Ferrari",
		"BMW"

	)

		cars.push(a);

		document.getElementById("varjs").innerHTML = cars + "<br>" + cars.length;

		}
  

/*A variable Input vem antes do fruits.push, já que o código executa de cima para baixo, portanto 
se não tiver valor à declarar não tem o que pesquisar (indexof()) 
ou mesmo colcoar algo em um arrays (push())*/



	function jsTest() {

		var fruits = ["Orange", "Banana", "Apple", "Mango"];
		var input =  document.getElementById("var1").value;     
		fruits.push(input);
		var result = document.getElementById("varesult");


	result.innerHTML = fruits;


	}

/***********************************************************************/

// pop() Delete last item arrays


    function jspass1() {
        var cars = ["Saab", "Volvo", "Ferrari", "BMW"];
        cars.pop();
        document.getElementById("var1").innerHTML = cars;

    }



/***********************************************************************/

// shift() method removes the first array element index.

    function jspass1() {
        var cars = ["Saab", "Volvo", "Ferrari", "BMW"];
        cars.shift();
        document.getElementById("var1").innerHTML = cars;

    }


/***********************************************************************/

// array.join = Transforma o array em string;

	(function jsTest(){

		var arr = [1,2,3,4,5];
		var arrJoin = arr.join("");

		document.getElementById("result").innerHTML=parseInt(arrJoin) + 2;
	})();


/***********************************************************************/

// array.reverse = Inverte os itens de um arrays 

	(function jsTest(){

		var arr = [1,2,3,4,5];
		var arrReverse = arr.reverse();

		document.getElementById("result").innerHTML=arrJoin;
	})();


/***********************************************************************/


// array.concat = Criar um novo array a partir do principal adicionando
// resultado.

	(function jsTest(){

		var arr = [1,2,3,4,5];
		var arrConcat = arr.concat(6,7);

		document.getElementById("result").innerHTML=arr + "<br>" + arrJoin;
	})();


/***********************************************************************/

// array.sort = Ordena em ordem alfabética;

	(function jsTest(){

		var arr = ['bbbbb','ttttt','aaaa','ddddd','fffff'];
		var arrJoin = arr.sort();

		document.getElementById("result").innerHTML=arr + "<br>" + arrJoin;
	})();

/***********************************************************************/

// array.slice = Consulta os intervalos entre o nome e outro.

	(function jsTest(){

		var arr = [];
		var text = "";

			for(i = 0; i <= 100; i++){
				arr.push(i + "<br>");
			}

		document.getElementById("result").innerHTML=arr.slice(0,10);
	})();


/***********************************************************************/

// array.map = Mapeia tudo que está em um array e trabalha com esse valor
// através de uma função.

	(function jsTest(){

		var arr = [];
		var text = "";

			for(i = 0; i <= 100; i++){
				arr.push(i);
			}
		var arrMap = arr.map(
				
						function(a){
							
							if(a % 2 == 1)                            
							return(a);
						});

		document.getElementById("result").innerHTML= arrMap;
	})();

/***********************************************************************/

// arrays.filter = Filtra os resultados de um array de acordo como especificado
// em uma função.

	(function jsTest(){

		var arr = [];
		var text = "";

			for(i = 0; i <= 100; i++){
				arr.push(i);
			}
		var arrMap = arr.map(
				
						function(a){
							
							if(a % 2 == 1)                            
							return(a);
						});
		var arrFilter = arrMap.filter(

			function(b){
				return(b < 50);
			}
		);


		document.getElementById("result").innerHTML= arrFilter;
	})();

/***********************************************************************/

// Procurar String Dentro De uma String 


// indexOf

	const jsTest = () => {

		let text = "My name is Brandon Specter e live in  Brazil";
		let inputSearch = document.getElementById("var1").value;

		let textIndex = text.indexOf(inputSearch);
		let d = document.getElementById("result_p");

		d.innerHTML= textIndex;


}

/***********************************************************************/

// Search

	const jsTest = () => {

		let text = "My name is Brandon Specter e live in  Brazil";
		let inputSearch = document.getElementById("var1").value;

		let textIndex = text.search(inputSearch);
		let d = document.getElementById("result_p");

		d.innerHTML= textIndex;


}
		

// OR


	function jspass1() {

		var x = "Visit Brandon Specter";
		var y = x.search("Specter");

		document.getElementById("var1").innerHTML = y;

	}
		

/***********************************************************************/
// Replace

    const jsTest = () => {

        let text = "My name is Brandon Specter e live in  Brazil";
        let inputSearch = document.getElementById("var1").value;
        let inputSubs   = document.getElementById("var2").value;

        let textIndex = text.replace(inputSearch, inputSubs);
        let d = document.getElementById("result_p");

        d.innerHTML= textIndex;
            
        }


		function myfunctiontest1618(){
				
			var var_string = document.getElementById("var1").innerHTML;
			var var_replace = var_string.replace("name","Brandon Specter");
			document.getElementById("var1").innerHTML = var_replace;
						
		}
		
/***********************************************************************/

// Gera n�meros aleat�rios

// Math.PI



    function jspass1() {

        document.getElementById("var1").innerHTML = Math.PI;

    }



// Math.round arredonda o número para baixo ou acima.



    function jspass1() {

        document.getElementById("var1").innerHTML = Math.round(6.4);

    }


// Math.pow Potência de número



	function jspass1() {

		document.getElementById("var1").innerHTML = Math.pow(2,8);

	}

/***********************************************************************/

// Math.floor = Retorna um valor abaixo do valor que colocou em decimal por exemplo Math.floor(7.9) retorna (7)
// Math.random = Retorna valores rand�micos entre 0 e 1.
		



	const jsTest = (num30) => {

		let num55 = document.getElementById("var1").value;
		let num33 = document.getElementById("var2").value;

		var soma2 = soma1(num55, num33);

		var resulTotal = soma2 + num30;
		
		document.getElementById("result_p").innerHTML = resulTotal;        

	}

	
	const soma1 = (valor1, valor2) => {

			var valor = Math.floor(Math.random() * (valor1 - valor2) + valor1);
			return(valor);
	}
	

/***********************************************************************/

// Opera��es Boleano utlizado para descobrir se os operadores s�o true or false.

			
	function var_boolen() {
				
		document.getElementById("var1").innerHTML = Boolean(33 <= 23);
				
}
			

// OR 



    function jspass1() {

        var x, y, z;
        x = "3535";
        y = 3535;

        document.getElementById("var1").innerHTML = Boolean(x != y); // not equal
    }



// OR



    function jspass1() {

        var x, y, z;
        x = "3535";
        y = 3535;

        document.getElementById("var1").innerHTML = Boolean(x !== y); //  	not equal value or not equal type
    }




/***********************************************************************/

// Loop with IF and Else
		
	
	function jsTest(){
		let hours = new Date().getHours();
		let message;

			if(hours <= 12){
				message = "Good Morning"
			
			}else 
				if(hours <= 18){
					message = "Good Afternoon"	
				}
					else{
						message = "Good Evening"
					}
		window.document.querySelector("p.var_p").innerHTML = message + "<br>" + Date();
					
	} 

// Or 



	function jsTest(){
		let hours = new Date().getHours();
		let message;

        	if (vardate == 6) {
            	text = "Good Morning";
        	
				}else 
					if (vardate <= 11.59) {
						text = "Good Morning"
					}else 
						if (vardate <= 17.59) {
							text = "Good Afternoon";
						}        	
							else {
								text = "Good Evening";

							}

        document.getElementById("var1").innerHTML = text;

    }





/***********************************************************************/

// Loop with Case		 

	function myfunction_loop_switch() {
		
		var WhatDay;
				var var_date = new Date().getDay();
				switch(var_date) {
				
				case 0:
					WhatDay = "Sunday";
				break;
				
				case 1:
					WhatDay = "Monday";
				break;
				
				case 2:
					WhatDay = "Tuesday";
				break;
				
				case 3:
					WhatDay = "Wednesday";
				break;
				
				case 4:
					WhatDay = "Thursday";
				break;
				
				case 5:
					WhatDay = "Friday";
				break;
				
				case 6:
					WhatDay = "Saturday";
				break;
				
				default:
					text = "Looking forward to the Weekend"
				
				}
				
		document.getElementById("var6").innerHTML = "<span>" + WhatDay + "</span>"; 
		
	}


/***********************************************************************/

/*Loop For*/



	function myfunction_loop_for() {
				
			var var1_text = "";
			var i;

				for(i = 0; i <= 5; i++){
					var1_text += "The Number is" + i + "<br>";
				}

			document.getElementById("var7").innerHTML = "<span>" + var1_text + "</span>";		
	}



// OR



	function myfunction_loop_for() {
				
		var var1_text = "";
		var i;

			for(i = 0; i <= 1000; i++){
				if(i == 1001 || i == 10000){break;}

					var1_text += "The Number is" + i + "<br>";
					
			}
		document.getElementById("var7").innerHTML = "<span>" + var1_text + "</span>";
	}
				
	

// OR

	function myfunction_loop_for() {
				
		var var1_text = "";
		var i;
			for(i = 0; i <= 1000; i++){	
				if(i > 29 && i === 31) {break;}      /*AND*/
					var1_text += "The Number is" + i + "<br>";
					
			}
		document.getElementById("var7").innerHTML = "<span>" + var1_text + "</span>";
	}

// OR



	function varforif() {

		var vartext = "";
		var x;

			for(x = 0; x <= 1000; x++){
					if(x >= 550 && x <= 500){break}
						vartext += "Values is " + x + "<br>";
			}

		document.getElementById("var1_p").innerHTML = vartext;
	}

// OR

	function myfunction_loop_for() {
				
		var var1_text = "";
		var i;
			for(i = 0; i <= 1000; i++){
				if(i > 29 && i === 31) {continue;}      /*AND*/
					var1_text += "The Number is" + i + "<br>";
					
			}
		document.getElementById("var7").innerHTML = "<span>" + var1_text + "</span>";
				
				
	}


/***********************************************************************/

			/*Loop While*/


	function myfunction_loop_while() {
				
		var var2_text = "";
		var i = 0;

			while( i <= 10) {
				var2_text += "<br>the number is" + i; i++;
			}
				
		document.getElementById("var8").innerHTML = "<span>" + var2_text + "</span>";

	}

/***********************************************************************/





// Converter Number for String
			
	var number = 123;
			
	document.getElementById("var1").innerHTML = 
			
		String(number) + "<br>" +
		String(123) + "<br>" +
		String(100 + 23);
			


// OR

			
	var number = 123;
			
	document.getElementById("var1").innerHTML = 
			
		("The toString() converter numbers for string").toString()+ "<br>" +
		number.toString() + "<br>" +
		(123).toString() + "<br>" +
		(1234+67).toString();
			
			


/***********************************************************************/

// Try and Catch and Throw

		

	function myfunctionlooptrycatch(){
					
		var var_message, z;
		var_message = document.getElementById("var_erro");
		z = document.getElementById("var9").value;
					
			try {

				if(z == "") throw "Empty"
				if(isNaN(z)) throw "Not a number";
				z = Number(z);
				if(z < 5) throw "Too low";
				if(z > 10) throw "Too High";			
			}

			catch(err2) {

				var_message.innerHTML = "Input is " + err2;
						
			}
					
	}	
		
 
// OR


	function myfunctionlooptrycatch(){
					
		
			var z = (document.getElementById("var9").value);
					
				try {

					if(z == "") throw "Empty";
					if(isNaN(z)) throw "Not a number";
					z = Number(z);
					if(z < 30) throw "Too low";
					if(z > 100) throw "Too High";								
				}

				catch(err) {
						document.getElementById("var_erro").innerHTML = "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + 
						"&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + 
						"&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + "&nbsp" + 
						"&nbsp" + "&nbsp" + "Input is " + err;
						
				}
					
	}	

// OR



	function jspass1() {

		var message, x;

		message = document.getElementById("varerr");
		message.innerHTML = "";

		x = document.getElementById("varinput").value;

			try {
				if(x == "") throw "empty";
				if(isNaN(x)) throw "not a number";
				x = Number(x);
				if(x < 5) throw "too low";
				if(x > 10) throw "too high";
				if(x > 5 || x < 10) throw "This number correct"
			}

			catch(err){
				message.innerHTML = "Input is " + err;
			}

	}


/***********************************************************************/

// toUpperCase = Tudo Maiusculo;
		

	function jspass1() {
		var x = "kjahbdashdbasdlahewwewejsbdakjshdbasdjhabsdajshb";
		var result = x + "<br><br>" + x.toUpperCase();

		document.getElementById("var1").innerHTML = "The Result is " + "<br><br>" + result;
	}

/***********************************************************************/

// Criação MINHA 1 



	function jspass1() {

		var x, y, z;

		x = document.getElementById("x_input").value;
		y = document.getElementById("y_input").value;
			if (isNaN(x,y)) {      /*If no number do*/
				z = x + y;
			}
			else {                 /*If yes number do*/
				x_p = parseInt(x);     /*Converter for String and returno values int X*/
				y_p = parseInt(y);     /*Converter for String and returno values int Y*/
				z = x_p + y_p;
			}
		document.getElementById("result").style.display = "block";
		document.getElementById("result").innerHTML = "The Result is " + z;  
	}

/***********************************************************************/

/*Used Call */

        
	function jsTest() {


		var person1 = {
			fullname: function() {
				return this.name + "&nbsp" + this.lastname;
				}
			}

		var person2 = {
			name: "Brandon",
			lastname: "Specter",
		}

		var x = person1.fullname.call(person2);

		document.getElementById("varesult").innerHTML= x;

	}

/***********************************************************************/
/*Multiples Function */


        
	function jsTest() {
	
		var hello = 
		
			function(){
		
				var i;
				var text = "";
				
					for(i = 0; i <= 100; i++) {
						text += i + "<br>";
					} 
				return text;
			};


		var infinite = 

			function(){

				var g;
				var text1 = "";
				
					for(g = 0; g <= 100; g++){
						text1 += g + "<br>";
					}

				return text1;
			};
		
		document.getElementById("varesult").innerHTML= hello() + infinite();

	}
     


/***********************************************************************/

/*Arrow Function*/
        
	function jsTest() {

		var varfunction1 = 

			function jsTest2() {

				var a = 30;
				var b = 50;
				var z = a + b;
				return z;    
			}
			
		var varfunction2 = 
		
			function() {

				var c = 100;
				var d = 20;
				var x = varfunction1() + (c - d); 
				return x;
			}

		document.getElementById("varesult").innerHTML= varfunction2();
				
	};


//or


    function jsTest(){

        let calc1 = 
            function(){
                let inputA = window.document.querySelector("input.num").value;
                let inputB = window.document.querySelector("input.num2").value;

                let result = parseFloat(inputA) + parseFloat(inputB);
                return(result);
            }



        let calc2 =
            function(){
                let varCalc1 = calc1();
                let result2 = varCalc1 + 100;
                return(result2);
            }
            
        window.document.querySelector("p.var_p").innerHTML = calc2();
    }
	

// or 


	
	function jsTest() {
			var a = document.getElementById("var1");
			var b = document.getElementById("var2");

			jsTest2(Number(a.value),Number(b.value))
	}
		
	function jsTest2(a,b) {
			var varsoma = a + b;
			document.getElementById("varesult").innerHTML= varsoma;
	}
	
	



// or 

    function jsTest(){

        let inputA = parseFloat(window.document.querySelector("input.num").value);
        let inputB = parseFloat(window.document.querySelector("input.num2").value);
        
        let functionjsTest2 = jsTest2(inputA,inputB)
        window.alert(functionjsTest2);
    }

    function jsTest2(a,b){

        let result = a * b;
        return(result)
    }

/***********************************************************************/

// Array.isArray() = Verifica se o objeto é um array.


	const jsTest = () => {

		let arrVar = ['Banana', 'Manga', 'Apple'];
		let print = document.getElementById("varesult");

		print.innerHTML = Array.isArray(arrVar);

	}




/***********************************************************************/

// The forEach() method calls a function once for each array element.


	var txt = "";
	var numbers = [45, 4, 9, 16, 25];
	numbers.forEach(myFunction);
	document.getElementById("demo").innerHTML = txt;

		function myFunction(value) {
		txt = txt + value + "<br>"; 
		}



/***********************************************************************/
// JavaScript Array.prototype.includes = Verifica se a pesquisa existe no array.



	const jsTest = () => {

		let arrVar = ['Banana', 'Manga', 'Apple'];
		let print = document.getElementById("varesult");

		print.innerHTML = arrVar.includes('Manga');

	}

/***********************************************************************/

// Escondendo o Escopo: Vimos que podemos pegar qualquer trecho de 
// código e envolver uma função ao seu redor, e que, efetivamente, 
// "esconde" as declarações inclusas de funções ou variáveis de fora do escopo principal, 
// dentro do interior do escopo daquela função.

var x = "Brendo";

function jsTest() {

	var a = 5;
	var b = 10;
	var x = a + b;
	document.getElementById("result").innerHTML=x
	
}

jsTest();

document.getElementById("result2").innerHTML=x;

/***********************************************************************/

// Menos poluído

var x = "Brendo";

(function jsTest() {

	var a = 5;
	var b = 10;
	var x = a + b;
	document.getElementById("result").innerHTML=x
	
})();

document.getElementById("result2").innerHTML=x;

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

// Impar ou Par

	const jsTest = () => {

		let a = document.getElementById("input_result").value;
		let a_conv = parseInt(a) % 2;
			if(a_conv === 0){

				var result = "O número é par";
			
			}else{

				var result = "O número é ímpar";
			}

		document.getElementById("result").innerHTML=result;

	}


// ou



function jsTest(){

	var input = document.getElementById("input1").value;
	var result = '';
	var i = 1;

		while(i < 11){

			result += "" + input * i + "<br>";
			i++;

		}
	document.getElementById("result").innerHTML=result;
}




// ou



function jsTest(){

	var input = document.getElementById("input1").value;
	var result;
	var i = 0;

		while(i == 0){
			result = (+input) + (+input);
			i = 1;
		}
		
	document.getElementById("result").innerHTML=result;
}






/***********************************************************************/

/*Cookie With Javascript*/


(function jsTest2(){

	let a = 5;
	let b = 10;
	let x = a + b;
	
	document.cookie = x;
})();

function jsTest(){

	let cookie2 = document.cookie;

	document.getElementById("result").innerHTML= cookie2;
}

jsTest();

/***********************************************************************/

// O usuário escreve várias vezes a mesma coisa e imprimi na tela. 

function jsTest(){

    let input = document.getElementById("input1").value;
   
document.getElementById("result").innerHTML+=input + "<br>";

}

































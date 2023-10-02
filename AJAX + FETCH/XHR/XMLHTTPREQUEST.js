/*Só recebendo dados*/

const phpTest = () => {

	d = document.querySelector("p#result");
	let url = "phptest.php";
	let xhr = new XMLHttpRequest();

		xhr.onreadystatechange = () => {
			if(xhr.readyState === 4 && xhr.status === 200){
				window.alert("Enviando Dados");
			}
		}

	xhr.open("POST", url) //Tem que ser nessa sequência, "POST" primeiro ou a variável onde ele esteja contido, e depois url
	xhr.send();
	xhr.onload = function(){
		d.innerHTML = this.responseText;
	}  
}


/*

<?php

$a = 55;
$b = 88;

$result = $a + $b;

echo "O resultado final é " . $result;

?>


*/



/*XMLHTTPREQUEST funcionou bem*/

/*

<input type="text" id="inp1" placeholder="Valor1">
<input type="text" id="inp2" placeholder="Valor2">

*/

const jsTest = () =>{
	event.preventDefault();
	let inp1 = document.querySelector("input#inp1").value;
	let inp2 = document.querySelector("input#inp2").value;
	let xhr = new XMLHttpRequest();
	let url = "phptest.php";
	let screen = document.querySelector("p#result");
	let formData = new FormData();
	formData.append('num1', inp1);
	formData.append('num2', inp2);


	xhr.onreadystatechange = () => {
		if(xhr.readyState === 4  && xhr.status === 200){
			console.log("Concluído com sucesso");
		}
	}

	xhr.open("POST", url);
	xhr.send(formData);
	xhr.onload = function(){
		screen.innerHTML = this.responseText; 

	}
}



//or

function jsTest(){

	let inp1 = document.querySelector("input#inp1").value;
	let inp2 = document.querySelector("input#inp2").value;
	let screen = document.querySelector("p#result");
	let url = "phptest.php";

	let formData = new FormData();
	formData.append('num1', inp1);
	formData.append('num2', inp2);


	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (xhttp.readyState == 4 && xhttp.status == 200) {
		screen.innerHTML =  xhttp.responseText;
		}
	};

	xhttp.open("POST", url);
	xhttp.send(formData);

}

//or


let screen = document.querySelector("p#result");
let url = "phptest.php";
let formData = new FormData();
formData.append('num1',44);
formData.append('num2',633);

xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
	screen.innerHTML =  xhttp.responseText;
	}
};

xhttp.open("POST", url);
xhttp.send(formData);



/**********************************************************************/

//Verificando Status Da Aplicação com XHR

var xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('POST', 'phptest.php');
console.log('OPENED: ', xhr.status);

xhr.onprogress = function () {
console.log('LOADING: ', xhr.status);
};

xhr.onload = function () {
console.log('DONE: ', xhr.status);
};

xhr.send();


/**********************************************************************************************/


function jsTest(){
	let xhttp = new XMLHttpRequest(); // AJAX API usada para requerir de um servidor web algumas solicitações 
	xhttp.open("GET", "ajax1.txt"); // Este método é utilizado para abrir um documento só que a requisição precisa ser passada via GET ou POST
	xhttp.send();
	xhttp.onload = function(){
		document.getElementById("app1").innerHTML = this.responseText;
	}
}

/**********************************************************************************************/

//or


let xhr = new XMLHttpRequest();
let url = "phptest.php";
let screen = document.querySelector("p#result");
let formData = new FormData();
formData.append('num1', 55);
formData.append('num2', 99);


xhr.onreadystatechange = function(){
	if(xhr.readyState === 4  && xhr.status === 200){
		alert("Concluído com sucesso");
	}
}

xhr.open("POST", url);
xhr.send(formData);
xhr.onload = function(){
	screen.innerHTML = this.responseText; 

}

/**********************************************************************************************/

//or

function jsTest(){
	event.preventDefault();
	let url = "http://127.0.0.1/phptest.php";
	let nome = document.getElementById("value1").value;
	let email = document.getElementById("value2").value;
	console.log(nome)
	console.log(email)


	body = {
		"value1": nome,
		"value2": email,
	}

	fazPost(url,body)
}

function fazPost(url,body){
	console.log("Body=", body);
	let xhr = new XMLHttpRequest();
	xhr.open("POST", url, true)
	xhr.setRequestHeader("Content-type", "application/json" )
	xhr.send(JSON.stringify(body))

	xhr.onload = function(){
		document.getElementById("result").innerHTML = this.responseText;
	}
	
}


// Agora que a conexão está completa, precisamos capturar a resposta do 
// documento acessado, através de duas propriedades do 
// Objeto XMLHttpRequest: responseText e o responseXML

// responseText : Obtêm a resposta em formato de string, ou seja, um texto.

// responseXML : Retorna um objeto DOM, ou seja, um Node (Nó), que pode ser manipulado com as funções próprias para isto.


/**********************************************************************************************/

// OR

(function(){    
	let button = document.querySelector("button.var_1button");

	button.addEventListener('click', 
		() => {
			let a = 55;
			let b = 22;
			screen = document.querySelector("p#result");
			let url = "phptest.php";
			let xhr = new XMLHttpRequest();
			let formData = new FormData();
			formData.append('inp1', a);
			formData.append('inp2', b);

			xhr.onreadystatechange = () => {
				if(xhr.readyState === 4 && xhr.status === 200){
					alert("Enviando...");
				}
			}

			xhr.open("POST", url);
			xhr.send(formData);
			xhr.onload = function(){
				screen.innerHTML = this.responseText;
				
			}

	})
})();


//or

const jsTest = () => {    
	let button = document.querySelector("button.var_1button");

	button.addEventListener('click', 
		() => {
			let a = 55;
			let b = 22;
			screen = document.querySelector("p#result");
			let url = "phptest.php";
			let xhr = new XMLHttpRequest();
			let formData = new FormData();
			formData.append('inp1', a);
			formData.append('inp2', b);

			xhr.onreadystatechange = () => {
				if(xhr.readyState === 4 && xhr.status === 200){
					alert("Enviando...");
				}
			}

			xhr.open("POST", url);
			xhr.send(formData);
			xhr.onload = function(){
				screen.innerHTML = this.responseText;
				
			}

	})
}

jsTest();
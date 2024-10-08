//Correção para vulnerbailidade de execução via onClick na página

/*

HTML

<button type="button" class="var_1button" id="myBtn">ClickHere</button>

*/ 

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

//Identifique o clique no botão.

document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector("button#myBtn");
    element.addEventListener("click", phpJsTest);
});


//or

document.addEventListener('DOMContentLoaded', function () {
    const element = document.querySelector("button#myBtn");
    element.addEventListener("click", phpJsTest);
});

function phpJsTest(){
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


        /*

        //JSON RESPONSE

        let result = d.innerHTML = JSON.stringify(data) 
        + "<br><br>" 
        + data.responseConn.message 
        + "<br><br>" 
        + data.responseInsert.messages
        
        */
        

/**********************************************************************/
/*Requisição completa enviando dados e recebendo*/

const phpJsTest = function(){
    let a, b, d, url, formData, result;
    a = document.querySelector("input#num1").value;
    b = document.querySelector("input#num2").value;
    d = document.querySelector("p#result");

    // Fetch
    url = "/php/phpTest.php"; //caminho do código em php ou page
    formData = new FormData();
    /*
        new FormData() é um construtor em JavaScript que cria uma 
        instância do objeto FormData. O objeto FormData é usado para c
        riar conjuntos de pares chave/valor, onde as chaves representam 
        os nomes dos campos e os valores são os dados associados a esses 
        campos. Ele é frequentemente usado para construir e enviar dados 
        em formato de formulário para o servidor através de solicitações 
        HTTP, como requisições AJAX ou envios de formulários.
    */

    formData.append("inp1", a); //Chave = Valor: "inp1" = a;  
    formData.append("inp2", b);

    let options = {       //criado o objeto option
        method: "POST",   //Método usado POST ou GET
        mode: "cors",

                /* O CORS (Cross-Origin Resource Sharing) é um 
        mecanismo de segurança implementado pelos navegadores da web para 
        controlar as solicitações de recursos (como dados, fontes, scripts, etc.)
        feitas por um script em uma página da web para um domínio diferente 
        daquele em que a página está sendo carregada. Em outras palavras, 
        o CORS é usado para gerenciar as requisições entre diferentes origens 
        (domínios, protocolos ou portas).
        */ 

        body: formData  //No corpo da requisição HTTP
                        //encaminhar as chaves e os valores
    }
    
    fetch(url, options)
        .then( 
            function promisse(response){ //Início da promisse
                if(!response.ok){  //É diferente de ok ? Se true então..

                    throw new Error('Network response was not ok');

                /*
                    Criação do objeto erro para mais tarde ser
                    recuperado no catch
                */

                }

                return response.text();
                /*
                Retorno da resposta do promisse no futuro convertido
                para texto, retornando para function promisse
                */
            }
        )

        .then(
            function handlerPromisses(data){  //Resposta pega da function promisse vinda em forma de argumento "data" 
                
                
                return d.innerHTML = data;
                /*
                Manipulando a resposta da promisses e colocando 
                o valor em tela. 
                */
            }
        
        )

        .catch(  //Caso o if da function promisse dê verdadeiro ele cai aqui
            function handleError(error){  //Argumento do objeto error criado na function promisse
                alert("Alert " + error);  //alert do erro
                console.error("Fetch error:", error); //Erro disponibilizado no console.log do navageador
            }
        )
}

/* 

//Forma abreviada do comando acima

    fetch(url, options) //Tem que ser nessa sequência URL primeiro depois options
      .then((response) => response.text())
        .then((data) => d.innerHTML = data)

*/

/*

<?php

$a = $_POST['inp1'];
$b = $_POST['inp2'];
$result = $a + $b;

echo "The result is " .$result;

?>

*/
/*************************Response TEXT********************************/

//Mandar Dados para PHP via FETCH

/*Utilizando a response.text*/

/*

<input type="text" id="inp1" placeholder="Valor1">
<input type="text" id="inp2" placeholder="Valor2">



<div class="var_button_position">

<button class="var_button" onclick="jsTest()">Click Aqui</button>
<p class="var_p" id="result"></p>    
</div>

*/

const phpJsTest = function(){
    let a, b, d, url, formData, result;
    a = document.querySelector("input#num1").value;
    b = document.querySelector("input#num2").value;
    d = document.querySelector("p#result");

    // Fetch
    url = "/php/phpTest.php";
    formData = new FormData();
    formData.append("inp1", a);
    formData.append("inp2", b);

    let option = {
        method: "POST",
        mode: "cors",
        body: formData
    }
    
    fetch(url, option)
        .then( 
            function promisse(response){
                if(!response.ok){
                    throw new Error('Network response was not ok');
                }
                
                return response.text();
            }
        )

        .then(
            function handlerPromisses(data){
                return d.innerHTML = data;
            }
        
        )

        .catch(
            function handleError(error){
                alert("Alert " + error);
                console.error("Fetch error:", error);
            }
        )
}


/*

<?php

$a = $_POST['inp1'];
$b = $_POST['inp2'];
$result = $a + $b;

echo "The result is " .$result;

?>

*/


/*************************Response TEXT********************************/






/*************************Response JSON********************************/

let phpJsTest = function(){
    let a, b, c, d, url, result;
    a = document.querySelector("input#num1").value;
    b = document.querySelector("input#num2").value;
    c = document.querySelector("input#num3").value;
    d = document.querySelector("p#result");

    url = "/php/phpTest.php";
    formData = new FormData();
    
    formData.append("key1", a);
    formData.append("key2", b);
    formData.append("key3", c);

    let options = {
        method: "POST",
        mode: "cors",
        body: formData  
    }

    fetch(url, options)
        .then(
            function promisse(response){
                if(!response.ok){
                    throw new Error(response.statusText);
                    //Mostra a mensagem de erro 
                }

            return response.json();
                    //Retorno do JSON;
            }

        )

        .then(
            function handlerPromisses(data){
                let JsonStringify = JSON.stringify(data);
                return d.innerHTML = JsonStringify + "<br>" + data.message + " " + data.result;
            }
        )

        .catch(
            function handleError(error){
                alert("Connection Failed" + error.message);
                console.error("Connection Failed" + error);
            }

        )   
}



/*

<?php

<?php

$a = $_POST['key1'];
$b = $_POST['key2'];
$result = $a + $b;

$response = array(  //O jeito certo de passar os dados via JSON
    'message' => "The result is ", 
    'result'  => $result
);


echo json_encode($response); 

?>

*/


/*************************Response JSON********************************/




/************************************************************************/

//FETCH WITH CEP

/*
<form name="formcep" >
        <label for="cep">CEP</label>
        <input type="text" id="cep" placeholder="CEP">
        <small></small>

        <label for="logradouro">Logradouro</label>
        <input type="text" id="logradouro" placeholder="Logradouro">
        <small></small>


        <label for="bairro">Bairro</label>
        <input type="text" id="bairro" placeholder="Bairro">
        <small></small>

        <label for="localidade">Localidade</label>
        <input type="text" id="localidade" placeholder="Localidade">
        <small></small>

        <label for="uf">UF</label>
        <input type="text" id="uf" placeholder="UF">
        <small></small>

    </form>
*/


const cep = document.querySelector("input#cep");

    cep.addEventListener('blur', ()=> {

        let search = cep.value.replace("-","");

        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${search}/json/`, options)

            .then(response => {response.json()
                .then(data => showData(data))
        
            })

            .catch(erro => console.log('Deu um erro' +  erro, message))

    })

const showData = (result) => {

    for(const campo in result){

        if(document.querySelector('#'+campo)){
            document.querySelector('#'+campo).value = result[campo];
        }
    }

}


//or

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

//or

const cep = document.querySelector("input#cep");

cep.addEventListener('blur', ()=>{

    let search = cep.value.replace("-","")

    let options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }


    fetch(`https://viacep.com.br/ws/${search}/json/`, options)

        .then((response) => {response.json()
            .then((data) => {showData(data)})
        })

        .catch(error => {console.log('Ocorreu um erro' + error, message)})
})


const showData = (result) => {

for(campo2 in result){
    if(document.querySelector('#'+campo2)){
        document.querySelector('#'+campo2).value = result[campo2];
    }
}
}

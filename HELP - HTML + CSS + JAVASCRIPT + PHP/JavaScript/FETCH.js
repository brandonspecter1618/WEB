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
        

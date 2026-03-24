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
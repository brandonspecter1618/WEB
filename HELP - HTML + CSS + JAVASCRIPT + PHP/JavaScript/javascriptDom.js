/*JAVASCRIPT DOM*/

/*****************querySelector or querySelectorAll************************/

let a = window.document.querySelector("div#nameid");
a.style.innerText = "Hello Baby";
a.style.color = "red";
a.style.fontWeight = "bold"


/*Or*/

const jsTest = () => {

    let a = window.document.querySelector("input#num1").value;
    let b = window.document.querySelector("input#num2").value;

    let result = +a + +b;

    window.document.querySelector("p.var_p").innerHTML= result;
}

/*Or*/


const jsTest = () => {

    let a = window.document.querySelector("input#num1").value;
    let b = window.document.querySelector("input#num2").value;

    let result = +a + +b;

    window.document.querySelector("p#result").innerHTML= result;
}











/*****************getElementByTagName*****************************/

    var body2 = window.document.body
    var a = window.document.getElementsByTagName('p')[1]; /*[1] significa a sequência de cima pra baixo do item que queira obter dados*/

    a.style.fontWeight = "bold";
    a.style.color = "blue";

    body2.style.backgroundColor= "red";


/*Or*/

/*
<p class="var_p" name="result"></p>
<input type="text" name="num1" placeholder="Entrada 1">
<input type="text" name="num2" placeholder="Entrada 2"> 

*/

function jsTest(){
    let a =  window.document.getElementsByTagName("input")[0].value;
    let b =  window.document.getElementsByTagName("input")[1].value;

    let result = +a + +b;

    window.document.getElementsByName("result")[0].innerHTML = result;
}

/*****************getElementByTagName*****************************/







/*********************getElementById******************************/

var nameid = document.getElementById("cliquemim");

nameid.style.fontWeight = "bold";
nameid.style.color = "red";
nameid.style.border = "solid";


/*OR*/

var nameid = window.prompt("Qual o valor 1");
var nameid2 = window.prompt("Qual o valor 2");

var result = parseInt(nameid) + parseInt(nameid2);

window.document.getElementById("result").innerText = result;


/*********************getElementById******************************/











/*****************getElementsByName*****************************/

/*<p class="var_p2" name="nameid" >Aprendendo a usar o <strong>DOM</strong> em javascript</p>
<div class="var_p2" name="nameid">Clique em mim</div>*/

let nameid = window.document.getElementsByName("nameid")[0];
nameid.style.color="red";

let nameid = window.document.getElementsByName("nameid")[1];
nameid.style.color="red";


function jsTest(){
    let a =  window.document.getElementsByName("num1")[0].value;
    let b =  window.document.getElementsByName("num2")[0].value;

    let result = +a + +b;

    window.document.getElementsByName("result")[0].innerHTML = result;
}


/*****************getElementsByName*****************************/
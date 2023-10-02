/***********************************************************************/

WINDOWS PIC OFF PIC ON

<img id="var1_light" class="photo_var1" src="photo/pic_bulboff.gif" style="width:100px">
			
<div class="button_var1">

<button type="button" onclick="document.getElementById('var1_light').src='photo/pic_bulbon.gif'">Turn on the light</button> 
&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp

<button type="button" onclick="document.getElementById('var1_light').src='photo/pic_bulboff.gif'">Turn Off the light</button>

</div>



/***************************************************************************************/


Esconde elemento e o tr�s de volta com um click no bot�o


<h3 class="var_p"> What can Javascript Do </h3>
			
<p class="var_p" id="var2" style="display:none" > Hello man ? Please click in button down </p>
			
<button class="var3_buttons" type="button" onclick="document.getElementById('var2').style.display='block'">Click Me</button>





/***************************************************************************************/




Como criar uma fun��o

<h3 class="var_p"> What can Javascript Do </h3>
			
<p class="var_p" id="var2"> Hello man ? Please click in button down </p>
			
<button class="var3_buttons" type="button" onclick="myfuncion()">Click Me</button>
			
		
		function myfuncion() {
			
			document.getElementById("var2").innerHTML = "Hello Javascript !!! Thank You Click this Button";
			
		}

		



Varia��o de esconder algo


<h3 class="var_p"> What can Javascript Do </h3>
			
<p class="var_p" id="var2" style="display:none"> Hello man ? Please click in button down </p>
			
	<button class="var3_buttons" type="button" onclick="myfunction()">Click Me</button>		
			
	<script>
		
		function myfunction() {
			
			document.getElementById("var2").style.display=("block");
		
		}
		
		
		</script>



/***************************************************************************************/




Como executar um javascript vindo de fora ".js"


	<p class="var_p" id="var2" style="display:none"> Hello man ? Please click in button down </p>
			
	<button class="var3_buttons" type="button" onclick="myvarfunction()">Click Me</button>
			
	
			

	<script src="js/myjavascript.js" ></script>  Aqui é utilizado para pedir para um javascript de outro lugar para ser executado


			


/***************************************************************************************/


Usado para aparecer uma janela na parte superior para aparecer algo.

<script class="var4_javascript1">
		
	window.alert(5 + 8);
		
</script>

ou 

<button class="var3_buttons" type="button" onclick="window.alert(5 + 8)">Click Me</button>

/***************************************************************************************/


/*HTML ARRAY*/
							
<form name="inputcalc" method="POST" action="">

<input type="text" id="var1" placeholder="Valor1">
<input type="text" id="var2" placeholder="Valor2">
<br>
<input type="text" id="result">

</form>


const jsTest = () => {

	var varFruits = [];
	var varFruits2 = [];
	var text = '';
	var input1 = document.getElementById("var1").value;
	var input2 = document.getElementById("var2").value;
	
	for(let i = 0; i <= 100; i++){

		varFruits.push(i + "<br>");
	}

	let soma = parseInt(varFruits[input1]) + parseInt(varFruits[input2]);
	varFruits2.push(soma);


	document.getElementById("result_p").innerHTML = varFruits2;

	/*Option for show display*/
	/*document.inputcalc.result.value= varFruits2;*/
}


/***********************************************************/

<!-- Link aberto em outra aba do navegador -->

<a href="javascript:jsTest()" class="links">LINK PRINCIPAL</a>


<script>

    function jsTest(){
        window.open('index.html')
    }


</script>

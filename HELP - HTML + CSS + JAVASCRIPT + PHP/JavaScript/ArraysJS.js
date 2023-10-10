push() Add Item in arrays

<script>

function jsTest() {

	let text = '';
	var dbaArrays = [];
	var i;
		for(i = 0; i <= 100; i++){
	
			text += dbaArrays.push(i) + "<br>";

		}
	result = dbaArrays[70] + dbaArrays[80];

	document.getElementById("result_p").innerHTML= result;

}    

</script>

<script>

    var cars = ["Saab", "Volvo", "Ferrari", "BMW"];
    document.getElementById("var1").innerHTML = cars;

    function jspass1() {
        cars.push("Mazda");  // Adiciona algo à um array.
        document.getElementById("var1").innerHTML = cars;

    }
</script>


<script>
    
    function jstest() {
    
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
  

    </script>

or 

/*A variable Input vem antes do fruits.push, já que o código executa de cima para baixo, portanto 
se não tiver valor à declarar não tem o que pesquisar (indexof()) 
ou mesmo colcoar algo em um arrays (push())*/



function jstest() {

	var fruits = ["Orange", "Banana", "Apple", "Mango"];
	var input =  document.getElementById("var1").value;     
	fruits.push(input);
	var result = document.getElementById("varesult");


   result.innerHTML = fruits;


}


or 

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



********************************************************

pop() Delete last item arrays

<script>

    function jspass1() {
        var cars = ["Saab", "Volvo", "Ferrari", "BMW"];
        cars.pop();
        document.getElementById("var1").innerHTML = cars;

    }
</script>


**********************************************************

shift() method removes the first array element index.

<script>

    function jspass1() {
        var cars = ["Saab", "Volvo", "Ferrari", "BMW"];
        cars.shift();
        document.getElementById("var1").innerHTML = cars;

    }
</script>

***********************************************************

array.join = Transforma o array em string;

(function jsTest(){

	var arr = [1,2,3,4,5];
	var arrJoin = arr.join("");

	document.getElementById("result").innerHTML=parseInt(arrJoin) + 2;
})();


************************************************************

array.reverse = Inverte os itens de um arrays 

(function jsTest(){

	var arr = [1,2,3,4,5];
	var arrReverse = arr.reverse();

	document.getElementById("result").innerHTML=arrJoin;
})();


************************************************************


array.concat = Criar um novo array a partir do principal adicionando
resultado.

(function jsTest(){

	var arr = [1,2,3,4,5];
	var arrConcat = arr.concat(6,7);

	document.getElementById("result").innerHTML=arr + "<br>" + arrJoin;
})();


**************************************************************

array.sort = Ordena em ordem alfabética;

(function jsTest(){

	var arr = ['bbbbb','ttttt','aaaa','ddddd','fffff'];
	var arrJoin = arr.sort();

	document.getElementById("result").innerHTML=arr + "<br>" + arrJoin;
})();

****************************************************************

array.slice = Consulta os intervalos entre o nome e outro.

(function jsTest(){

	var arr = [];
	var text = "";

		for(i = 0; i <= 100; i++){
			arr.push(i + "<br>");
		}

	document.getElementById("result").innerHTML=arr.slice(0,10);
})();


******************************************************************

array.map = Mapeia tudo que está em um array e trabalha com esse valor
através de uma função.

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

********************************************************************

arrays.filter = Filtra os resultados de um array de acordo como especificado
em uma função.

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

****************************************************************


LOOP ARRAYS With <ul> and <li>



const jsTest = () => {

	var varFruits = ["Banana", "Orange", "Apple", "Mango"];
	var varLength = varFruits.length;
	var text;

	text = "<ul>"
	
	for(let i = 0; i <= varLength; i++){

		text += "<li>" + varFruits[i] + "<br>" + "</li>";
	}

	text += "</ul>"

	document.getElementById("result_p").innerHTML = text;
}

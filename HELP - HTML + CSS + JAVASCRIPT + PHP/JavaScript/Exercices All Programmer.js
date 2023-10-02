Exercices

3.  Dado um número inteiro positivo n, imprimir os n primeiros naturais ímpares.
    Exemplo: Para n=4 a saída deverá ser 1,3,5,7. 

            function jsTest(){

                var input = document.getElementById("input1").value;
                var i;
                var loop = "";

                    for(i = input; i < 20; i++){
                        if(i % 2 == 1){
                            loop += i + "<br>";
                        }
                    }
                
                document.getElementById("result").innerHTML=loop;

            }


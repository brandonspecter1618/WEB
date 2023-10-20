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


        /*

        //JSON RESPONSE

        let result = d.innerHTML = JSON.stringify(data) 
        + "<br><br>" 
        + data.responseConn.message 
        + "<br><br>" 
        + data.responseInsert.messages
        
        */
        
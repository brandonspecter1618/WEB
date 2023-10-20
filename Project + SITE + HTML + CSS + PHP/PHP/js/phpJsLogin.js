let phpJsLogin = function(){
    let a, b, url;
    a = document.querySelector("input#num1").value;
    b = document.querySelector("input#num2").value;

    d = document.querySelector("p#result");
    url = "/php/phpLogin.php";

    let formData = new FormData();
    formData.append("key1", a);
    formData.append("key2", b);

    let options = {
        method: "POST",
        mode: "cors",
        body: formData,
    }

    fetch(url, options)
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
                if(data == 1){
                    window.location.replace("http://10.61.10.61/wiki.php");
                }else{
                    d.innerHTML = data;
                }
                
            }
        )

        .catch(
            function handleError(error){
                d.innerHTML = error;
            }
        )

   
    
}


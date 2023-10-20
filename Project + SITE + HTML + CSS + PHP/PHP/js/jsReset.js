let jsReset = function(){
    let a, b, c, url, d;
    a = document.querySelector("input#email").value;
    b = document.querySelector("input#pass1").value;
    c = document.querySelector("input#pass2").value;
    d = document.querySelector("p#result");
    url = "/php/phpReset.php";

        if(b === c){
            b = b;
        }else{
            d.innerHTML = "Password not Match";
            return;
        }
    
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
                    throw new Error("Network response was not ok");
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
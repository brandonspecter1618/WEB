const jsTest = function(){
    let a, b, d, result;
    a = document.querySelector("input#num1").value;
    b = document.querySelector("input#num2").value;
    d = document.querySelector("p#result");
    
    result = parseInt(a) + parseInt(b);
    d.innerHTML = "The result " + result;
}




















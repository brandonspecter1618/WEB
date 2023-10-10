
(function slide1(){

    document.getElementById("id2").src="/home/brandon/Documentos/WORDPRESS/PHP/photo/1.jpg";
    setTimeout("slide2()", 1000);
})()

function slide2(){

    document.getElementById("id2").src="/home/brandon/Documentos/WORDPRESS/PHP/photo/2.jpg";
    setTimeout("slide3()", 1000);
}

function slide3(){

    document.getElementById("id2").src="/home/brandon/Documentos/WORDPRESS/PHP/photo/3.jpg";
    setTimeout("slide1()", 1000);
}
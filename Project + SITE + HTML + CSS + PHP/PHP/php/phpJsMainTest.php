<?php

function phpJsMain(){

    $arr = array("brandonspecter1618@gmail.com", 
    "brandon@gmail.com");
    $arrLength = count($arr);
    $x = 0;
    $login = $_POST["key1"];
    $loginCorreto;
   
        while($x <= $arrLength){
            if($arr[$x] === $login){
                $loginCorreto = $arr[$x];
            }
        $x++;
        }
        
        
        if($loginCorreto !== null){
            echo("Login Correto tem dado dentro da variável " .$loginCorreto);
        }else{
            echo("O login atual é " .$login);
        }

}
phpJsMain();

?>
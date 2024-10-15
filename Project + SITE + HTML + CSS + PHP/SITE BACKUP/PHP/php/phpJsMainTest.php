<?php

function phpJsMain(){

    $a = $_POST['key1'];
    $b = $_POST['key2'];
    $result = $a + $b;
    echo("The result is " .$result);

}
phpJsMain();

?>
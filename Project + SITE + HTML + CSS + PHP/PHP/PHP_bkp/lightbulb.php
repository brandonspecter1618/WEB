<?php


session_start();

if (!isset($_SESSION['sessionStart'])) {  
    // Verifica se não foi setado algum valor na variável $_Session, ou se ela tem um valor diferente de true
    //neste caso seria false, neste caso, em resumo se não existir uma sessão, e se o valor for diferente de true
    //é executado o código abaixo.
  header('Location: index.php'); //Onde será redirecionado se não tiver uma sessão ativa
  exit();  // Se verdadeiro, termina a execução da página aqui
}

?>

<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta name="describes" content="HTML55">
        <meta name="autor" content="Brandon Specter">

        <link href="/css/lightbulb.css" rel="stylesheet">
        
                        <!--Font for Headers-->
        <link href='https://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'>

                        <!--Font for Paragraph-->

                        <!-- JavaScript -->
        <script src="/js/lightbulb.js"></script>

                        <!-- JavaScript -->




    </head>

<body>

<nav>
		<ul class="menu-4">
            <li><a href="/wiki.php" data-hover="Home">Home</a></li>
            <li><a href="/calc.php" data-hover="Calc JS">Calc JS</a></li>
            <li><a href="/phpMain.php" data-hover="PHP">PHP</a></li>
            <li><a href="/php1.php" data-hover="JS">JS</a></li>
            <li><a href="/php_java.php" data-hover="PHP/JavaScript">PHP/JavaScript</a></li>
            <li><a href="/buttons.php" data-hover="Buttons">Buttons</a></li>
            <li><a href="/lightbulb.php" data-hover="Light Bulb">Light Bulb</a></li>
            <li><a href="/register.php" data-hover="Register">Register</a></li>
            <li><a href="/php/logout.php" data-hover="Logout">Logout</a></li>
		</ul>
	</nav>



<div class="img_js_div">
        <img src="/photo/pic_bulboff.gif" class="var_img_js" id="img_js" alt="bulboff">
        <br><br>
        <button class="button-49" role="button" type="button" id="on"  class="var_button_js" onclick="jsTestImgOn()">Turn on the Light</button>

    &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp

        <button class="button-49" role="button" type="button" id="off" class="var_button_js" onclick="jsTestImgOff()">Turn on the Dark</button>

</div>        

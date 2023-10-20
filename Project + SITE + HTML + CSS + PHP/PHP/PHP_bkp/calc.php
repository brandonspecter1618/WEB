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

        <link href="/css/calc.css" rel="stylesheet">

   
        <link rel="preconnect" href="https://fonts.gstatic.com">
        
                        <!--Font for Headers-->
                          
        <link href='https://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'>

        <!--Font for Paragraph-->
        <!--Font for Paragraph-->

                    <!--JAVASCRIPT-->

        <script src="/js/calc.js"></script>
                    
                    <!--JAVASCRIPT-->


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



<!----------------CALCULATE------------------------->

<div class="position_calc">
    <form name="calcform" method="post" action="">
    
        <input type="text" name="visor" id="visor" />
    
        <table>
            <tr>
                <td><input type="button" name="num7" class="num" value="7" onclick="calcNum(7)" /></td>
                <td><input type="button" name="num8" class="num" value="8" onclick="calcNum(8)" /></td>
                <td><input type="button" name="num9" class="num" value="9" onclick="calcNum(9)" /></td>
                <td><input type="button" name="somar" class="oper" value="+" onclick="calcParse('somar')" /></td>
            </tr>
            <tr>
                <td><input type="button" name="num4" class="num" value="4" onclick="calcNum(4)" /></td>
                <td><input type="button" name="num5" class="num" value="5" onclick="calcNum(5)" /></td>
                <td><input type="button" name="num6" class="num" value="6" onclick="calcNum(6)" /></td>
                <td><input type="button" name="subtrair" class="oper" value="-" onclick="calcParse('subtrair')" /></td>
            </tr>
            <tr>
                <td><input type="button" name="num1" class="num" value="1" onclick="calcNum(1)" /></td>
                <td><input type="button" name="num2" class="num" value="2" onclick="calcNum(2)" /></td>
                <td><input type="button" name="num3" class="num" value="3" onclick="calcNum(3)" /></td>
                <td><input type="button" name="multiplicar" class="oper" value="*" onclick="calcParse('multiplicar')" /></td>
            </tr>
            <tr>
                <td><input type="button" name="num0" class="num" value="0" onclick="calcNum(0)" /></td>
                <td><input type="button" name="igual" class="num" value="=" onclick="calcParse('resultado')" /></td>
                <td><input type="button" name="limpar" class="num" value="C" onclick="calcLimpar()" /></td>
                <td><input type="button" name="dividir" class="oper" value="/" onclick="calcParse('dividir')" /></td>
            </tr>
        </table>
    </form>
</div>

<!----------------CALCULATE------------------------->



















    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
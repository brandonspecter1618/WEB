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


    <!-----------------------Button NEON-------------------->

    
    <!-----------------------Button NEON-------------------->

    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f4;
      }
      .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        text-align: center;
      }
      .headline {
        font-size: 36px;
        margin-bottom: 20px;
      }
      .description {
        font-size: 18px;
        margin-bottom: 30px;
      }
      .cta-button {
        display: inline-block;
        padding: 10px 20px;
        background-color: #ff9900;
        color: #fff;
        text-decoration: none;
        border-radius: 5px;
        font-size: 18px;
      }
    </style>

    <div class="container">
      <h1 class="headline">Bem-vindo à Nossa Oferta Especial!</h1>
      <p class="description">Não perca esta oportunidade única. Cadastre-se agora para receber nossas atualizações exclusivas.</p>
      <a href="#" class="cta-button">Cadastre-se</a>
    </div
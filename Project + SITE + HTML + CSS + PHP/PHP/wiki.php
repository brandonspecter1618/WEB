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

        <link href="/css/index.css" rel="stylesheet">
        
                        <!--Font for Headers-->
        <link href='https://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'>

                        <!--Font for Paragraph-->
        




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
    
    
                        <!--Image-->

    <div class="div_img_1">
        <img src="photo/php2.jpg" class="img_1" alt="php2">
    </div>

    <!--<img src="../PHP/photo/php1.png" class="var_img_2" alt="php1"-->
    
                    <!--Paragraph-->

    <div class="div_p">
        
    <h1>PHP</h1>
    <h2>Tudo sobre umas das melhores linguagens do mercado</h1>
    <p class="var_p">
        PHP (um acrônimo recursivo para "PHP: Hypertext Preprocessor", originalmente Personal Home Page) é uma linguagem interpretada livre, usada originalmente apenas para o desenvolvimento de aplicações presentes e atuantes no lado do servidor, capazes de gerar conteúdo dinâmico na World Wide Web.[3] Figura entre as primeiras linguagens passíveis de inserção em documentos HTML, dispensando em muitos casos o uso de arquivos externos para eventuais processamentos de dados. O código é interpretado no lado do servidor pelo módulo PHP, que também gera a página web a ser visualizada no lado do cliente. A linguagem evoluiu, passou a oferecer funcionalidades em linha de comando, e além disso, ganhou características adicionais, que possibilitaram usos adicionais do PHP, não relacionados a web sites. É possível instalar o PHP na maioria dos sistemas operacionais, gratuitamente. Concorrente direto da tecnologia ASP pertencente à Microsoft, o PHP é utilizado em aplicações como o MediaWiki, Facebook, Drupal, Joomla!, WordPress, Magento e o Oscommerce.
        <br><br>
        Criado por Rasmus Lerdorf em 1995, o PHP tem a produção de sua implementação principal, referência formal da linguagem, mantida por uma organização chamada The PHP Group. O PHP é software livre, licenciado sob a PHP License, uma licença incompatível com a GNU General Public License (GPL) devido a restrições no uso do termo PHP. 
    </p>

    </div>                    

                        <!--Headers-->


<br>
<br>


</body>
</html>




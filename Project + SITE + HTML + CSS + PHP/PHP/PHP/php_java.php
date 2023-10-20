<?php

/* 

Sessões são uma forma simples de armazenar dados para usuários individuais 
usando um ID de sessão único. Sessões podem ser usadas para persistir 
informações entre requisições de páginas. IDs de sessão normalmente são 
enviados ao navegador através de cookies de sessão e o ID é usado para 
recuperar dados da sessão existente. A ausência de um ID ou cookie de 
sessão permite que o PHP saiba que deve criar uma nova sessão e gerar um 
novo ID de sessão.

Sessões seguem um fluxo simples. Quando uma sessão é iniciada, o PHP 
recupera uma sessão existente usando o ID informado (normalmente de um 
cookie de sessão) ou se nenhum é informado então será criada uma nova sessão. 
O PHP preencherá a super global $_SESSION com todos os dados de sessão 
depois que a sessão iniciar. Quando o PHP finalizar, automaticamente ele 
pegará o conteúdo da super global $_SESSION, então vai serializá-lo e enviá-lo 
para armazenamento usando o manipulador de gravação da sessão.

Por padrão, o PHP usa o manipulador de gravação interno files que é configurado 
por session.save_handler. Isto salva os dados da sessão no servidor no local 
configurado pela diretiva de configuração session.save_path.

Sessões podem ser iniciadas manualmente usando a função session_start(). 
Se a diretiva session.auto_start estiver configurada como 1, 
a sessão será iniciada automaticamente no início da requisição.

Sessões normalmente se encerram automaticamente quando o PHP termina de executar 
um script, mas podem ser encerradas manualmente usando a função 
session_write_close(). 

*/

session_start();

if (!isset($_SESSION['sessionStart'])) {  //Retorna um false, porém por conta do "!" inverte e se torna verdadeira, e ai o IF continua sua execução
    // Verifica se não foi setado algum valor na variável $_Session, ou se ela tem um valor diferente de true
    //neste caso seria false, neste caso, em resumo se não existir uma sessão, e se o valor for diferente de true
    //é executado o código abaixo.
  header('Location: index.php'); //Onde será redirecionado se não tiver uma sessão ativa
  exit();  // Se verdadeiro, termina a execução da página aqui
}

var_dump(isset($_SESSION['sessionStart']));
echo($_SESSION['sessionStart']);

?>


<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta name="describes" content="HTML55">
        <meta name="autor" content="Brandon Specter">

        <link href="/css/php_java_css.css" rel="stylesheet">
        
                        <!--Font for Headers-->
        <link href='https://fonts.googleapis.com/css?family=Oswald:300' rel='stylesheet' type='text/css'>

                        <!--Font for Paragraph-->

                           <!--JAVASCRIPT-->

        <script src="/js/phpJsTest.js"></script>
                                
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

    <div class="projectJs">
        <p>PHP/JAVASCRIPT</p> 
        <label for="">Login:</label>
        <input type="text" id="num1" placeholder="Nome">
        <label for="">Senha: </label>
        <input type="password" id="num2" placeholder="Senha">
        <br><br><br>
        <!--
        <label for="">Phone: </label>
        <input type="text" id="num3" placeholder="Input 3">
        -->
        <label for="subject">Database: </label>

        <select class="var_input_select" id="database">
            <option value="conn">Test Connection</option>
            <option value="select">SELECT</option>
            <option value="insert">INSERT</option>
            <option value="drop">DROP</option>
            <option value="login">LOGIN</option>

        </select>

        <label for="">DROP </label>
        <input type="text" id="num3" placeholder="Digite um ID">
        
        <p>    
        <button type="button" class="var_1button" onclick="phpJsTest()">ClickHere</button>
        <p class="p_result" id="result"></p>
    </div>









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
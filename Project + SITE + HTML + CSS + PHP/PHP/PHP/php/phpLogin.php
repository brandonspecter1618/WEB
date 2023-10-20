<?php

function customErrorHandler($errno, $errstr, $errfile, $errline) {
    $response = array(
        'success'   => false,
        'error'     => $errstr,
        'errorFile' => $errfile,
        'errorLine' => $errline,
        'errorCode' => $errno  
        //Error sendo capturado para ser transmitido via JSON
    );

    // Envia a resposta como JSON
    header('Content-Type: application/json');
    echo json_encode($response);
    exit;  // Aqui ele sai quando captura o erro
}

// Define a função de tratamento de erro personalizada
set_error_handler('customErrorHandler');

function phpLogin(){
    session_start();
    $login = $_POST['key1'];
    $senha = $_POST['key2'];

    $db    = "db_users";
    $host  = "127.0.0.1";
    $user  = "postgres";
    $pass  = "22091992";

    $connection = pg_connect("host=$host dbname=$db user=$user password=$pass");


    $query = "SELECT * FROM aluno WHERE login='$login' AND password='$senha'";
    $dbConnQuery = pg_query($connection, $query);

        if(pg_num_rows($dbConnQuery) > 0){
            $_SESSION['sessionStart'] = true;
            echo(pg_num_rows($dbConnQuery));

        }else{
                echo '<br><br>' .'Usuário ou Senha incorreto';
             
        }
             

}
phpLogin();


?>
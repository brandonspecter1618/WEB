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

    $db    = "db_server_postgresql";  //Nome do DB utilizado
    $table = "table_user_postgresql"; // Nome da tabela, estou utilizando para mexer o menos possível no código
    $tableNameColumn1 = "username";
    $tableNameColumn2 = "pass"; //Aqui coloque o nome das colunas para automatizar se tiver mais só ir registrando
    //$tableNameColumn3 = "";
    $host  = "10.61.10.250";
    $user  = "postgres";
    $pass  = "22091992";
    $connection = pg_connect("host=$host dbname=$db user=$user password=$pass");


    $query = "SELECT * FROM $table WHERE $tableNameColumn1 = $1 AND $tableNameColumn2 = $2"; //Aqui o $1 É um dado puro onde ele vai ser tratado para depois ser injetado como string
    $dbConnQuery = pg_query_params($connection, $query, [$login, $senha]); // Impede Sql Injection ' OR 1=1 --

    if (pg_num_rows($dbConnQuery) > 0) {
        $_SESSION['sessionStart'] = true;
        echo pg_num_rows($dbConnQuery);
    } else {
        echo '<br><br>Usuário ou Senha incorreto';
    }
             

}
phpLogin();
?>
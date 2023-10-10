<?php

function phpLogin(){

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
            echo(pg_num_rows($dbConnQuery));

        }else{
                echo '<br><br>' .'Usuário ou Senha incorreto';
             
        }
             

}
phpLogin();


?>
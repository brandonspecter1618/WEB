<?php

function phpReset(){
    $email  = $_POST['key1'];
    $senha  = $_POST['key2'];

    $db    = "db_users";
    $host  = "127.0.0.1";
    $user  = "postgres";
    $pass  = "22091992";

    $connection = pg_connect("host=$host dbname=$db user=$user password=$pass");

    $queryUpdate = "UPDATE aluno SET password='$senha' WHERE login='$email'";
    $dbConnQuery = pg_query($connection, $queryUpdate);
    $rowsAffected = pg_affected_rows($dbConnQuery); 

        if ($rowsAffected > 0) {
            echo("Password Updated!");
        }else {
            echo("Password not Updated" . pg_last_error());
        }
       
}
phpReset();
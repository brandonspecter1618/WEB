<?php

function phpRegis(){
    $email  = $_POST['key1'];
    $senha  = $_POST['key2'];

    $db    = "db_aula";
    $host  = "127.0.0.1";
    $user  = "postgres";
    $pass  = "22091992";

    $connection = pg_connect("host=$host dbname=$db user=$user password=$pass");

    $queryInsert = "INSERT into aluno(login, password) values('$email', '$senha');";
    $query = "SELECT * FROM aluno WHERE login='$email'";
    $dbConnQuery = pg_query($connection, $query);

        if(pg_num_rows($dbConnQuery) > 0){

            echo(pg_num_rows($dbConnQuery));
            echo("Este usuário existe no banco de dados");

        }else{
            echo(pg_num_rows($dbConnQuery));

            
            $dbConnQuery = pg_query($connection, $queryInsert);
                if($dbConnQuery){
                    echo("Insert Data Sucess");
                }else{
                    echo("Failed Insert Data");
                }

            
               
        }
}
phpRegis();
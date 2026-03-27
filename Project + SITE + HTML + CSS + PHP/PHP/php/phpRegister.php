<?php

function phpRegis(){
    $email  = $_POST['key1'];
    $senha  = $_POST['key2'];

    $db    = "db_server_postgresql";
    $host  = "10.61.10.250";
    $user  = "postgres";
    $pass  = "22091992";

    $connection = pg_connect("host=$host dbname=$db user=$user password=$pass");

    $queryInsert = "INSERT into table_user_postgresql(username, pass) values('$email', '$senha');";
    $query = "SELECT * FROM table_user_postgresql WHERE username='$email'";
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
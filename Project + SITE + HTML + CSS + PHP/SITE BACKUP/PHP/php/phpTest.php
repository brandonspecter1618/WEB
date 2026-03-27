<?php

function phpTest(){
    $login    = $_POST['key1'];
    $password = $_POST['key2'];
    $drop     = $_POST['key3'];  
    $options  = $_POST['key4'];
    
    $db    = "db_server_postgresql";  //Nome do DB utilizado
    $table = "table_user_postgresql"; // Nome da tabela, estou utilizando para mexer o menos possível no código
    $tableNameColumn1 = "username";
    $tableNameColumn2 = "pass"; //Aqui coloque o nome das colunas para automatizar se tiver mais só ir registrando
    //$tableNameColumn3 = "";
    $host  = "10.61.10.250";
    $user  = "postgres";
    $pass  = "22091992";

    

    $connection = pg_connect("host=$host dbname=$db user=$user password=$pass");
    $status     = pg_connection_status($connection);


    if($options === 'conn'){
        if($status === PGSQL_CONNECTION_OK){
            echo("Sucessfully connection" ."<br>".pg_dbname($connection)); //$connection é necessário para que o PHP saiba corretamente de onde puxar a conexão, e não fazer a coisa automaticamente e fazer um coneão que não deveria iria dá algum tipo de erro, principalmente conectando na ultima conexão que ele conhece para um bando diferente.
        }else{
            echo("<br>Fail Connection" .pg_last_error() ."<br><br>");
        }    
    }else
        if($options === 'insert'){  //Se retirar as aspas aparece um erro no PHP
            $queryInsert = "INSERT into $table($tableNameColumn1, $tableNameColumn2) values('$login', '$password');";
            $query = "SELECT * FROM $table WHERE $tableNameColumn1='$login'";

        
            $dbSelectQuery = pg_query($connection, $query);
                
                if(pg_num_rows($dbSelectQuery) > 0){
                    echo("Já existe um usuário cadastrado");
                }else{
                    $dbConnQuery = pg_query($connection, $queryInsert);
                        if($dbConnQuery){
                            echo("Insert Data Sucess");
                        }else{
                            echo("Failed Insert Data");
                        }
                }              
                
    }else
        if($options === 'select') {
            $query = "SELECT * FROM $table";
            $dbConnQuery = pg_query($connection, $query);
        
            echo '<table style="border-collapse: collapse; width: 100%;">';
            echo '<tr>';
            echo '<th style="padding: 30px; border: 5px solid #fff; color: #fff;">ID</th>';
            echo '<th style="padding: 30px; border: 5px solid #fff; color: #fff;">Login</th>';
            echo '<th style="padding: 30px; border: 5px solid #fff; color: #fff;">Password</th>';
            echo '</tr>';
        
            while ($row = pg_fetch_row($dbConnQuery)) {
                echo '<tr>';
                echo '<td style="padding: 30px; border: 5px solid #000; color: #fff;">' . $row[0] . '</td>';
                echo '<td style="padding: 30px; border: 5px solid #000; color: #fff;">' . $row[1] . '</td>';
                echo '<td style="padding: 30px; border: 5px solid #000; color: #fff;">' . $row[2] . '</td>';
                echo '</tr>';
            }
        
            echo '</table>';
    }else 
    
        if($options === 'drop'){
            $query = "DELETE FROM $table WHERE id = $drop";
            $dbConnQuery = pg_query($connection, $query);
            $rowsAffected = pg_affected_rows($dbConnQuery);

                if($rowsAffected > 0){
                    echo("Foi apagado o ID: " . $drop);
                }else{
                    echo("Não foi apagado");
                }
                    
    }else

        if($options === 'login'){
            $query = "SELECT * FROM $table WHERE $tableNameColumn1 = $1 AND $tableNameColumn2 = $2"; //Aqui o $1 É um dado puro onde ele vai ser tratado para depois ser injetado como string
            $dbConnQuery = pg_query_params($connection, $query, [$login, $pass]); // Impede Sql Injection ' OR 1=1 --

                if(pg_num_rows($dbConnQuery) > 0){
                    echo 'Login Com Sucesso' .'<br><br>';

                    echo '<table style="border-collapse: collapse; width: 100%;">';
                    echo '<th style="padding: 30px; border: 5px solid #000;">Login</th>';
                    echo '<th style="padding: 30px; border: 5px solid #000;">Password</th>';

                    while ($row = pg_fetch_row($dbConnQuery)) {
                        echo '<tr>';
                        echo '<td style="padding: 30px; border: 5px solid #000;">' . $row[1] . '</td>';
                        echo '<td style="padding: 30px; border: 5px solid #000;">' . $row[2] . '</td>';
                        echo '</tr>';
                    }
                    echo '</table>';

                }else{
                    echo 'Usuário ou Senha incorreto';
                }
        }else{
            echo("Não tem autorização de acesso");
        }
    pg_close($connection);

}

phpTest()
?>
<?php

function phpTest(){
    // Função de tratamento de erro personalizada para converter erros em respostas JSON

    $login    = $_POST['key1'];
    $loginRWX;
    $password = $_POST['key2'];
    $drop     = $_POST['key3'];  
    $options  = $_POST['key4'];

    $arr = array("brandonspecter1618@gmail.com", 
    "brandon@gmail.com", "tiago@gmail.com");
    $arrLength = count($arr);
    $x = 0;


    $db    = "db_users";
    $host  = "127.0.0.1";
    $user  = "postgres";
    $pass  = "22091992";

    $connection = pg_connect("host=$host dbname=$db user=$user password=$pass");
    $status     = pg_connection_status($connection); 

        while($x <= $arrLength){
            if($arr[$x] === $login){
                $loginRWX = $arr[$x];
            }
        $x++;
        }

        if($options === 'conn' && $loginRWX === $login){
            if($status === PGSQL_CONNECTION_OK){
                echo("Sucessfully connection" ."<br>".pg_dbname());
            }else{
                echo("<br>Fail Connection" .pg_last_error() ."<br><br>");
            }

        }else
            if($options === 'insert' && $loginRWX === $login){  //Se retirar as aspas aparece um erro no PHP
                        $queryInsert = "INSERT into aluno(login, password) values('$login', '$password');";
                        $query = "SELECT * FROM aluno WHERE login='$login'";

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
                if($options === 'select' && $loginRWX === $login) {
                    $query = "SELECT * FROM aluno";
                    $dbConnQuery = pg_query($connection, $query);
                
                    echo '<table style="border-collapse: collapse; width: 100%;">';
                    echo '<tr>';
                    echo '<th style="padding: 30px; border: 5px solid #000; color: #fff;">ID</th>';
                    echo '<th style="padding: 30px; border: 5px solid #000; color: #fff;">Login</th>';
                    echo '<th style="padding: 30px; border: 5px solid #000; color: #fff;">Password</th>';
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
                    
                    if($options === 'drop' && $loginRWX === $login){
                        $query = "DELETE FROM aluno WHERE id = $drop";
                        $dbConnQuery = pg_query($connection, $query);
                        $rowsAffected = pg_affected_rows($dbConnQuery);

                            if($rowsAffected > 0){
                                echo("Foi apagado o ID: " . $drop);
                            }else{
                                echo("Não foi apagado");
                            }
                    
                    }else

                        if($options === 'login'){
                            $query = "SELECT * FROM aluno WHERE login='$login' AND password='$password'";
                            $dbConnQuery = pg_query($connection, $query);

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
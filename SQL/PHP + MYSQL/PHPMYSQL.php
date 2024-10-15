Código Mysqli

<?php include("cabecalho.php") ?>
<?php $nome = $_GET["nome"];$preco = $_GET["preco"];

$conexao = mysqli_connect('localhost', 'root', '', 'loja');

$query = "insert into produtos (nome, preco) 
values ('{$nome}',{$preco})";
mysqli_query($conexao, $query);

mysqli_close($conexao);


#############################################################################
//Create Table MySQL

<?php

$conn = mysqli_connect("127.0.0.1","root","22091992","mysql");

$query = "CREATE TABLE alunos(id_alunos INT NOT NULL AUTO_INCREMENT, nome VARCHAR(60), 
email VARCHAR(60), PRIMARY KEY(id_alunos))";

mysqli_query($conn, $query) or 

die("Create Table fail");

print "Finished creating table.<br/>";

//or

MYSQL Create Table CMD:

CREATE TABLE alunos(id_alunos INT NOT NULL AUTO_INCREMENT, nome VARCHAR(60), 
email VARCHAR(60), PRIMARY KEY(id_alunos));

//PHP OBJECT CREATE

<?php

$host = "127.0.0.1";
$user = "root";
$pass = "22091992";
$db   = "db_users";
$a    = $_POST['key1'];
$b    = $_POST['key2'];

$mysqli = new mysqli($host, $user, $pass, $db);

$query = "CREATE TABLE $a(
                id_alunos INT NOT NULL AUTO_INCREMENT,
                nome VARCHAR(50),
                email VARCHAR(70),
                PRIMARY KEY(id_alunos))";

$dbQuery = $mysqli->query($query);

    if($dbQuery){
        echo("Create Table Sucess");
    }else{
        echo("Error Connection");
    }ddd

#############################################################################
//Insert Date MySQL

<?php

$host = "127.0.0.1";
$user = "root";
$pass = "22091992";
$db   = "db_users";
$dbConn = mysqli_connect($host, $user, $pass, $db);

$query = "insert into alunos (nome, email) 
values ('Break','breakhdjan@gmail.com')";

$dbCreate = mysqli_query($dbConn, $query);

    if($dbCreate){
        echo("Insert a new Row");
    }else{
        echo("No Insert data");
    };

//or

<?php

$host = "127.0.0.1";
$user = "root";
$pass = "22091992";
$db   = "db_users";
$a    = $_POST['key1'];
$b    = $_POST['key2'];

$dbConn = mysqli_connect($host, $user, $pass, $db);

    if($dbConn){
        echo("Connection Sucess <br>");
    }else{
        echo("Connection Error <br>");
    }

$query = "INSERT INTO alunos(nome, email) VALUES ('$a',
'$b')";

$dbQuery = mysqli_query($dbConn, $query);

    if($dbQuery){
        echo("Additionally Data Sucess");
    }else{
        echo("Error Addtionally Sucesss");
    }


#############################################################################
//Select Mysql


<?php

$host = "127.0.0.1";
$user = "root";
$pass = "22091992";
$db   = "db_users";
$a    = $_POST['key1'];
$b    = $_POST['key2'];

$dbConn = mysqli_connect($host, $user, $pass, $db);

    if($dbConn){
        echo("Connection Sucess <br>");
    }else{
        echo("Connection Error <br>");
    };

$query = "SELECT * from alunos";

$dbQuery = mysqli_query($dbConn, $query);

    if($dbQuery){

        while ($row = mysqli_fetch_row($dbQuery)) {
            echo "Nome: $row[1]  E-mail: $row[2]";
            echo "<br><br>";
        }
    }else{
        echo("Connection Error" . mysqli_error());
    }


//or

<?php

$host = "127.0.0.1";
$user = "root";
$pass = "22091992";
$db   = "db_users";
$a    = $_POST['key1'];
$b    = $_POST['key2'];

$dbConn = mysqli_connect($host, $user, $pass, $db);

    if($dbConn){
        echo("Connection Sucess <br>");
    }else{
        echo("Connection Error <br>");
    };
$query = "SELECT * from alunos";

$dbQuery = mysqli_query($dbConn, $query);

    if($dbQuery){

        while($row = mysqli_fetch_row($dbQuery)){
            var_dump($row);
        }
    }else{
        echo("Connection Error");
    }

//PHP SELECT WITH Object

<?php

$host = "127.0.0.1";
$user = "root";
$pass = "22091992";
$db   = "db_users";
$a    = $_POST['key1'];
$b    = $_POST['key2'];

$dbConn = new mysqli($host, $user, $pass, $db);

$query = "SELECT * FROM alunos";

$dbQuery = $dbConn->query($query);

    if($dbQuery) {

        while($row = $dbQuery->fetch_row()){
            echo("Nome: $row[1]  Email: $row[2] <br><br>");
        }
    }else{
        echo("Error Connection!!!" .mysqli_connect_error());
    }
    


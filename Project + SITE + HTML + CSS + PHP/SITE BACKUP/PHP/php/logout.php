<?php
session_start();
session_destroy(); // Encerre a sessão para fazer logout
header("Location: /index.php"); //Depois do encerrar a sessão volta pra página cadastrada
?>
<?php

$output = ('ipconfig');
$cmd = shell_exec($output);
echo "<pre>{$cmd}</pre>";

?>
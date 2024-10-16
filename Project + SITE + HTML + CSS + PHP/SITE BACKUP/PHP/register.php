<!DOCTYPE html>
<!-- Designined by CodingLab - youtube.com/codinglabyt -->
<html lang="en" dir="ltr">
  <head>
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; img-src 'self'; font-src 'self' https://fonts.gstatic.com;">
    <meta charset="UTF-8">
    <title> Responsive Registration Form | CodingLab </title>
    <link rel="stylesheet" href="css/register.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="js/phpRegister.js"></script>
   </head>
<body>

  <div class="container">
    <div class="title">Registration</div>
    <div class="content">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name">
          </div>
          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" id="email" placeholder="Enter your email">
          </div>
          <div class="input-box">
            <span class="details">Password</span>
            <input type="password" id="pass1" placeholder="Enter your password">
          </div>
          <div class="input-box">
            <span class="details">Confirm Password</span>
            <input type="password" id="pass2" placeholder="Confirm your password">
          </div>
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1">
          <input type="radio" name="gender" id="dot-2">
          <input type="radio" name="gender" id="dot-3">
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer not to say</span>
            </label>
          </div>
        </div>
        <div class="button">
          <input type="button" value="Register" id="myBtn">
          <p id="result"></p>
        </div>
    </div>
    
    
  </div>



  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  <br><br><br>
  
</body>
</html>

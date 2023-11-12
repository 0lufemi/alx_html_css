# HTML Form + JS validation

## 0. Form Validation - Password Strength
Below is the content of ```password.html```:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="passwordForm">
  <label for="password">Password:</label>
  <input type="password" id="password" name="password">
  <button type="submit">Submit</button>
  <p id="error" style="color: red;"></p>
</form>
</body>
</html>
```
* Implement JavaScript validation to check the password strength when the form is submitted.
* Retrieve the value entered in the password input field using JavaScript.
* Your JavaScript should be written in a separate file and used as an external script in the HTML code
* Write a function called validatePassword to validate the password based on the provided criteria.
* The validatePassword function should check the following criteria:
* The password must be ```at least 8 characters long```.
* The password must contain ```at least one uppercase letter```.
* The password must contain ```at least one lowercase letter```.
* The password must contain ```at least one numeric digit```.
* The password must contain ```at least one special character (e.g., !@#$%^&*)```.
* If the password meets all the criteria, allow the form submission.
* If the password does not meet the criteria, display an appropriate error message in the ```<p>``` element with the id “error” .

## 1. Form Validation - Email Validation
Below is the content of ```email.html```:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form id="emailForm">
  <label for="email">Email:</label>
  <input type="text" id="email" name="email">
  <button type="submit">Submit</button>
  <p id="error" style="color: red;"></p>
</form>
</body>
</html>
```
* Implement JavaScript validation to check the email format when the form is submitted.
* Retrieve the value entered in the email input field using JavaScript.
* Your JavaScript should be written in a separate file and used as an external script in the HTML code
* Write a function called ```validateEmail``` to validate the email based on the email format.
* The ```validateEmail``` function should check if the email follows the standard email format, which typically includes an alphanumeric ```username```, followed by the ```@``` symbol, and then the ```domain name```.
* If the email format is ```correct```, allow the form submission.
* If the email format is ```incorrect```, display the error message “```Please enter a valid email address.```” in the
* element with the id ```"error"```.
* Prevent the default form submission behavior using JavaScript to prevent the form from submitting if the email format is not valid.

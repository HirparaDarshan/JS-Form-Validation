const form = document.getElementById('registration-form');

form.addEventListener('submit', (e) => {

    let success=true;
    success= emailFunction() && success;
    success= passwordFunction() && success;
    success= reFunction() && success;
    success= nameFunction() && success;
    success= malefemalefunction() && success;
    success= countryFunction() && success;
    success= termsFunction() && success;

    if (success){
        form.submit();
    } else{
        e.preventDefault();
    }

});

// email 
function emailFunction() {
    
  const emailInput = document.getElementById('email').value.trim();
  const emailmessage = document.getElementById('email-message');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput)) {
    emailmessage.textContent = "Invalid email format!";
  } else {
    emailmessage.textContent = "";
    return true;
  }
}

// password 
function passwordFunction() {;  
  const passwordInput = document.getElementById('password').value;
  const passwordMessage = document.getElementById('password-message');

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(passwordInput)) { 
        passwordMessage.textContent = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
    } else {
        passwordMessage.textContent = "";
        return true;
    }
}    

// repassword
function reFunction() {  
  const passwordInput = document.getElementById('password').value;
  const passwordInputConfirm = document.getElementById('repassword').value;
  const passwordConfirmMessage = document.getElementById('repassword-message');

  if (passwordInput !== passwordInputConfirm && passwordInput === "") { 
        passwordConfirmMessage.textContent = "Passwords do not match!";
  } else {
        passwordConfirmMessage.textContent = "";
        return true;
  } 
}

// first name
function nameFunction() {
    const fNameInput = document.getElementById('fname').value.trim();
    const lNameInput = document.getElementById('lname').value.trim();
    const nameMessage = document.getElementById('name-msg');

    const nameRegex = /^[A-Za-z]+$/;

    if (!nameRegex.test(fNameInput) && !nameRegex.test(lNameInput)) {
        nameMessage.textContent = "Name cannot be empty or have a Number!";
    } else {
        nameMessage.textContent = "";
        return true;
    }
}    

// malefemale
function malefemalefunction(){
    const malefemale = document.querySelector('input[name="optradio"]:checked');
    const malefemaleMessage = document.getElementById('malefemale-msg');
     if (!malefemale) {
        malefemaleMessage.textContent = "Plese select male or female";
    } else {
        malefemaleMessage.textContent = "";
        return true;
    }
}

// country select 
function countryFunction() {   
    const countrySelect = document.querySelector('select');
    const selectedCountry = countrySelect.value;
    const countryMessage = document.getElementById('country-msg');
    if (selectedCountry === "0") {
        countryMessage.textContent = "Please select a country.";
    } else {
        countryMessage.textContent = "";
        return true;
    }
}

// terms and conditions checkbox
function termsFunction() {
    const checkbox = document.getElementById('option1');
    const termsMessage = document.getElementById('terms-msg');
    if (!checkbox.checked) {
        termsMessage.textContent = "You must agree to the terms and conditions.";
    } else {
        termsMessage.textContent = "";
        return true;
    }
}


document.getElementById('autofill').addEventListener('click', () => {
    document.getElementById('email').value = "Darshan@gmail.com";
    document.getElementById('password').value = "Darshan@123";
    document.getElementById('repassword').value = "Darshan@123";
    document.getElementById('fname').value = "Darshan";
    document.getElementById('lname').value = "Patel";
    document.getElementById('male').checked = true;
    document.querySelector('select').value = "India";
    document.getElementById('option1').checked = true;
});

const form = document.getElementById('submitForm');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');

//form submission event listener
form.addEventListener('submit', handleFormSubmit);

//check if email is valid
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

//error message to display
const showError = () => {
    const error = document.getElementById('error');
    error.textContent = 'Please fill in all required fields'
}

//success message if all checks passed
const showSuccess = () => {
    const success = document.getElementById('success');
    success.textContent = 'Form submitted successfully!';
}

//check if required fields are filled
const isRequired = (value) => {
    if (value === '') {
        return false
    } else {
        return true;
    }
}

//check if name field is filled
const checkName = () => {
    let valid = false;

    if (!isRequired(nameEl.value)) {
        showError();
    } else {
        showSuccess();
        valid = true;
    }
    return valid;
};

//check if email field is filled
const checkEmail = () => {
    let valid = false;

    if(!isRequired(emailEl.value)) {
        showError();
    } else {
        showSuccess();
        valid = true;
    }
    return valid;
}


//
const handleFormSubmit = (event) => {
    event.prevent
}

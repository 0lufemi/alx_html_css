const email = document.getElementById('email');
const emailForm = document.getElementById('emailForm');
const error = document.getElementById('error');

//check if email box is not empty
// const isRequired = (value) => {
//     if (value = '') {
//         return false;
//     } else {
//         return true;
//     }
// }

//check if email inputted is valid
const isEmailValid = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const showError = (message) => {
    error.textContent = message;
}

//validate email field
const validateEmail = () => {
    let valid = false;
    const emailValue = email.value;

    if (!isEmailValid(emailValue)) {
        showError('Please enter a valid email address.');
    } else {
    showError('');
    valid = true;
    }
    return valid;
}

//submit event handler
emailForm.addEventListener('submit', function(e) {
    e.preventDefault();

    validateEmail();
});

//Validate each field instead of on pressing 'submit'
emailForm.addEventListener('input', function(e) {
    switch (e.target.id) {
        case 'email':
            validateEmail();
            break;
    }
});

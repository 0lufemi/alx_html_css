const password = document.getElementById('password');
const error = document.getElementById('error');
const form = document.getElementById('passwordForm');

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};


function validatePassword() {
    if (!isPasswordSecure(password.value)) {
        error.innerHTML = `Error! Password format wrong.`;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validatePassword();
});

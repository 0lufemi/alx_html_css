const form = document.getElementById('submitForm');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');

//form submission event listener

const handleFormSubmit = (event) => {
    event.preventDefault();

    if ((nameEl.value === '') || (emailEl.value === '')) {
        alert('Please fill in all required fields');
    } else {
        alert('Form submitted successfully!');
    }
}

form.addEventListener('submit', handleFormSubmit);

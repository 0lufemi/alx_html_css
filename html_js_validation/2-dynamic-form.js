const form = document.getElementById('dynamicForm');
const dropdown = document.getElementById('numFields');
const inputContainer = document.getElementById('inputContainer');

//form submission
form.addEventListener('submit', function(e) {
    //prevent submission
    e.preventDefault();

    //if all fields are valid, then submit
    validateForm();
});

//event listener to change of selection of dropdown menu
dropdown.addEventListener('change', function() {
    generateInputFields(dropdown.value)
});


//function to generate dynamic input fields
function generateInputFields(selectedVal) {
    inputContainer.textContent = '';

    for(let i = 1; i <= selectedVal; i++) {
        //create new text input element
        const textInputEl = document.createElement('input');

        //setting attributes of the created text input fields
        textInputEl.type = 'text';
        textInputEl.name = 'field' + i;
        textInputEl.placeholder = 'Field ' + i;

        //Append text input field to input container
        inputContainer.appendChild(textInputEl);
    }
}

function validateForm() {
    const textInputEls = inputContainer.querySelectorAll('input');

    // const errorMsg = 'Please fill in all fields.';

    //create error message field
    const errorField = document.createElement('div');
    // errorField.textContent = 'Please fill in all fields.';

    //giving error field an id
    errorField.id = 'error';

    //giving error field a text color of red
    errorField.style.color = 'red';

    //appending error field to the form
    form.appendChild(errorField);

    //inserting error message field before submit button
    form.insertBefore(errorField, form.children[3]);

    //to check if text field is empty
    let isEmpty = false;
    textInputEls.forEach(function(textInputEl) {
        if (textInputEl.value === '') {
            isEmpty = true;
        }
    });

    if(isEmpty) {
        errorField.textContent = 'Please fill in all fields.';
    } else {
        errorField.textContent ='';
    }
}

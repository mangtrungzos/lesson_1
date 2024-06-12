function Validator(options) {

    // Func practice validate
    function validate(inputElement, rule) {
        var errorMessage = rule.test(inputElement.value);
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.add('invalid');
        }
    }

    // Get the form's element that needs validate.
    var formElement = document.querySelector(options.form);
    
    if (formElement) {
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);
            

            if (inputElement) {
                // Handle blur case
                inputElement.onblur = () => {
                    // value: inputElement.value
                    // test func: rule.test
                    validate(inputElement, rule);
                }

                // Handle every time user type input
                inputElement.oninput = () => {
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    inputElement.parentElement.classList.add('invalid');
                }
            }
        });
    }
}


// Define Rules
// Rules: 
// 1. When error => return message error
// 2. When valid => none return something else (undefined)
Validator.isRequired = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            return value.trim() ? undefined : 'Please type'
        }
    };
}

Validator.isEmail = (selector) => {
    return {
        selector: selector,
        test: (value) => {
            var regax = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // Undefined: not error / error: Please type email
            return regax.test(value) ? undefined : 'Please type email';
        }
    };
}

Validator.minLength = (selector, min) => {
    return {
        selector: selector,
        test: (value) => {

            // Undefined: not error / error: Please type email
            return value.length >= min ? undefined : `Please type minimum ${min} characters`;
        }
    };
}

Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    rules: [
        // two function isRequired / isEmail
        Validator.isRequired('#fullname'),
        Validator.isEmail('#email'),
        Validator.minLength('#password', 6),
    ]
});

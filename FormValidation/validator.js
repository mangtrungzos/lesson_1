function Validator(options) {

    function getParent(element, selector) {
        // Lặp qua thẻ cha parentElement (.from-group)
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var selectorRules = {};

    // Func practice validate
    function validate(inputElement, rule) {

        var errorElement = getParent(inputElement, options.fromGroupSelector).querySelector(options.errorSelector);
        var errorMessage;
        
        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];

        // Lặp qua từng rule & kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; i++) {
            switch (inputElement.type) {
                case 'radio':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                case 'checkbox':
                    errorMessage = rules[i](
                        formElement.querySelector(rule.selector + ':checked')
                    );
                    break;
                default: 
                    errorMessage = rules[i](inputElement.value);
            }
            // Khi có lỗi thoát khỏi vòng lặp
            if (errorMessage) break;
        }

        // Sau đó nó sẽ xuống logic kiểm tra ở dưới / Check errorMessage

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            getParent(inputElement, options.fromGroupSelector).classList.add('invalid');
        } else {
            errorElement.innerText = '';
            getParent(inputElement, options.fromGroupSelector).classList.remove('invalid');
        }

        return !errorMessage;
    } // func validate return true if error / false if not error

    // Get the form's element that needs validate.
    var formElement = document.querySelector(options.form);
    
    if (formElement) {

        // Remove the default behavior of HTML
        formElement.onsubmit = (e) => {
            e.preventDefault();
            
            var isFormValid = true;

            // Loop through rules & validate
            options.rules.forEach((rule) => {
                var inputElement = document.querySelector(rule.selector);
                var isValid = validate(inputElement, rule);
                if (!isValid) isFormValid = false;
            });

            if (isFormValid) {
                // Case submit with JS
                if (typeof options.onSubmit === 'function') {
                    var enableInputs = formElement.querySelectorAll('[name]');
                    var formValues = Array.from(enableInputs).reduce((values, input) => {
                        // Return values (truyền vào input.name để lấy name đưa vào {}: values - initial value sau đó gán = input.value) 
                        // Sau đó sẽ return ra kq cuối cùng là values 
                        // Khi viết && parameter thì nó sẽ return lại cái cuối cùng trong case này
                        // 1. Gán input.value cho object values / Cuối cùng return ra values
                        
                        switch(input.type) {
                            case 'radio':
                                if (input.checked) {
                                    values[input.name] = input.value;
                                }

                                if (!values[input.name]) {
                                    values[input.name] = ''
                                }
                                break;
                            case 'checkbox':
                                if(input.checked){
                                    if(Array.isArray(values[input.name])){
                                        values[input.name].push(input.value)
                                    } else {
                                        values[input.name] = [input.value]
                                    }
                                } 
                                if(!values[input.name]){
                                    values[input.name] = ''
                                }
                                break;
                            case 'file':
                                values[input.name] = input.files;
                                break;
                            default:
                                values[input.name] = input.value;
                        }
                        return values;
                    }, {});

                    options.onSubmit(formValues);
                } 
                // Case submit with default behaviour
                else {
                    formElement.submit();
                }
            } 
        }

        // Loop through rule & handle (Listen for blur, input, ...)
        options.rules.forEach(function (rule) {

            // Lưu lại các rules cho mỗi input
            // Check if it is an array
            // Nếu selectorRules là 1 mảng thì giá trị của nó sẽ push rule.test vào selectorRules
            // Nếu không thì selectorRules sẽ được gán bằng 1 array (Có các giá trị của rule.test)
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }

            // selectorRules[rule.selector] = rule.test;
            var inputElements = formElement.querySelectorAll(rule.selector);
            Array.from(inputElements).forEach(function (inputElement) {
                inputElement.onblur = () => {
                    validate(inputElement, rule);
                }
                // Handle every time user type input
                inputElement.oninput = () => {
                    var errorElement = getParent(inputElement, options.fromGroupSelector).querySelector(options.errorSelector);
                    errorElement.innerText = '';
                    getParent(inputElement, options.fromGroupSelector).classList.add('invalid');
                }
            });
        });
    }
}


// Define Rules
// Rules: 
// 1. When error => return message error
// 2. When valid => none return something else (undefined)
Validator.isRequired = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value ? undefined : message || 'Please type';
        }
    };
}

Validator.isEmail = (selector, message) => {
    return {
        selector: selector,
        test: (value) => {
            var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // Undefined: not error / error: Please type email
            return regex.test(value) ? undefined : message || 'Please type email';
        }
    };
}

Validator.minLength = (selector, min, message) => {
    return {
        selector: selector,
        test: (value) => {

            // Undefined: not error / error: Please type email
            return value.length >= min ? undefined : message || `Please type minimum ${min} characters`;
        }
    };
}

Validator.isConfirmed = (selector, getConfirmValue, message) => {
    return {
        selector: selector,
        test: (value) => {
            return value === getConfirmValue() ? undefined : message || 'Input value is incorrect';
        }
    };
}

// form 1
Validator({
    form: '#form-1',
    errorSelector: '.form-message',
    fromGroupSelector: '.form-group',
    rules: [
        // two function isRequired / isEmail
        Validator.isRequired('#fullname', 'Please enter your full name'),
        Validator.isRequired('#email'),
        // Validator.isEmail('#email', 'Please enter your email'),
        Validator.minLength('#password', 6),
        Validator.isRequired('#password_confirmation'), 
        Validator.isRequired('#file'), 
        Validator.isRequired('input[name="gender"]'), 
        Validator.isRequired('#province'), 
        Validator.isConfirmed('#password_confirmation', function() {
            return document.querySelector('#form-1 #password').value;
        }, 'Type password again is not correct'),
    ],
    onSubmit: function(data) {
        // Call API
        console.log(data);
    }
});


// form 2
Validator({
    form: '#form-2',
    errorSelector: '.form-message',
    fromGroupSelector: '.form-group',
    rules: [
        // two function isRequired / isEmail
        Validator.isRequired('#fullname', 'Please enter your full name'),
        Validator.isRequired('#email'),
        // Validator.isEmail('#email', 'Please enter your email'),
        Validator.minLength('#password', 6),
        Validator.isRequired('#password_confirmation'), 
        Validator.isRequired('#file'), 
        Validator.isRequired('input[name="gender"]'), 
        Validator.isRequired('#province'), 
        Validator.isConfirmed('#password_confirmation', function() {
            return document.querySelector('#form-1 #password').value;
        }, 'Type password again is not correct'),
    ],

    // Callback - When we typed correct, it will be called this function and return data
    onSubmit: function(data) {
        // Call API
        console.log(data);
    }
});

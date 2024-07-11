function Validator(formSelector) {

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    var formRules = {};

    /**
     * Quy ước tạo rule:
     * - Nếu có lỗi thì trả ra message lỗi
     * - Không có lỗi thì return undefined
     */
    var validatorRules = {
        required: (value) => {
            return value ? undefined : 'Vui lòng nhập trường này';
        },
        email: (value) => {
            var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return regex.test(value) ? undefined : 'Vui lòng nhập email';
        },
        min: (min) => {
            return (value) => {
                return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
            }
        }
    };

    var formElement = document.querySelector(formSelector);
    
    // Just handle when element have into DOM
    if (formElement) {
        var inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {

            var rules = input.getAttribute('rules').split('|');
            for (var rule of rules){
                var ruleInfo;
                var isRuleHasValue = rule.includes(':');
                
                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                var ruleFunc = validatorRules[rule];
                if (isRuleHasValue && typeof ruleFunc === 'function') {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);
                } else {
                    formRules[input.name] = [ruleFunc];
                }
            }
            // Listen to the event to validate (blur, change, ...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
    }

    // Func handle validate
    function handleValidate(e) {
        var rules = formRules[e.target.name];
        var errorMessage;

        for (var rule of rules) {
            switch (e.target.type) {
                case 'radio':
                case 'checkbox':
                    var inputChecked = formElement.querySelector(`input[name="${e.target.name}"][rules]:checked`);
                    errorMessage = rule(inputChecked);
                    break;
                default: 
                    errorMessage = rule(e.target.value);
            }
            if (errorMessage) break;
        }

        rules.some((rule) => {
            errorMessage = rule(e.target.value);
            return errorMessage;
        });

        // If there is an error, it will be diplayed in the UI
        if (errorMessage) {
            var formGroup = getParent(e.target, '.form-group');
            
            if (formGroup) {
                formGroup.classList.add('invalid');

                var formMessage = formGroup.querySelector('.form-message');
                if (formMessage) {
                    formMessage.innerText = errorMessage;
                }
            }
        }

        return !errorMessage;
    }

    // Func handle clear error
    function handleClearError(e) {
        var formGroup = getParent(e.target, '.form-group');
        if (formGroup.classList.contains('invalid')) {
            formGroup.classList.remove('invalid');

            var formMessage = formGroup.querySelector('.form-message');
            if (formMessage) {
                formMessage.innerText = '';
            }
        }
    }

    // Handle behaviour when submit
    formElement.onsubmit = (e) => {
        e.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for (var input of inputs) {
            if (!handleValidate({target: input})) {
                isValid = false;
            }
        }
        
        // When there is not error then submit the form
        if (isValid) {
            if (typeof this.onSubmit === 'function') {
                var enableInputs = formElement.querySelectorAll('[name]');
                var formValues = Array.from(enableInputs).reduce((values, input) => {
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

                this.onSubmit(formValues);

            } else {
                formElement.submit();
            }

        }
    }
}


/**
 * Fix issue - when u execute the event blur, it will just return the last element of the array
 * Because input.onblur = handleValidate lying external for loop
 */
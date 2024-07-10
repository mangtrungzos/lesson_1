function Validator(formSelector, options) {
    // assign default value for parameter 
    if (!options) options = {};

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
    function handleValidate(event) {
        var rules = formRules[event.target.name];
        var errorMessage;

        rules.some(function (rule) {
            errorMessage = rule(event.target.value);
            return errorMessage;
        });

        // If there is an error, it will be diplayed in the UI
        if (errorMessage) {
            var formGroup = getParent(event.target, '.form-group');
            
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
    function handleClearError(event) {
        var formGroup = getParent(event.target, '.form-group');
        if (formGroup.classList.contains('invalid')) {
            formGroup.classList.remove('invalid');

            var formMessage = formGroup.querySelector('.form-message');
            if (formMessage) {
                formMessage.innerText = '';
            }
        }
    }

    // Handle behaviour when submit
    formElement.onsubmit = (event) => {
        event.preventDefault();

        var inputs = formElement.querySelectorAll('[name][rules]');
        var isValid = true;

        for (var input of inputs) {
            if (!handleValidate({target: input})) {
                isValid = false;
            }
        }
        
        // When there is not error then submit the form
        if (isValid) {

            if (typeof options.onSubmit === 'function') {
                options.onSubmit();
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
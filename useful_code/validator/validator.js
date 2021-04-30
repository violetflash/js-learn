'use strict';
class Validator {
    constructor({ selector, pattern = {}, method }) {
        this.form = document.querySelector(selector);
        this.pattern = pattern;
        this.method = method;
        this.elementsForm = [...this.form.elements].filter(item => {
            return item.tagName.toLowerCase() !== 'button' && item.type !== 'button';
        });
        this.checkIt = this.checkIt.bind(this);
        this.error = new Set();
    }

    init() {
        this.applyStyle();
        this.setPattern();
        this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt));
    }

    isValid(elem) {
        console.log(this.error);
        return false;
    }

    checkIt(event) {
        const target = event.target;
        console.log(this);
        if (this.isValid(target)) {
            this.showSuccess(target);
            this.error.delete(target);
        } else {
            this.showError(target);
            this.error.add(target);
        }
    }

    showError(elem) {
        elem.classList.remove('success');
        elem.classList.add('error');
        if (elem.nextElementSibling.classList.contains('validate-error')) {
          return;
        }
        const errorDiv = document.createElement('div');
        errorDiv.textContent = 'Ошибка в этом поле';
        errorDiv.classList.add('validate-error');
        elem.insertAdjacentElement('afterend', errorDiv);
    }

    showSuccess(elem) {
        elem.classList.remove('error');
        elem.classList.add('success');
    }

    applyStyle() {
        const style = document.createElement('style');
        style.textContent = `
            input.success {
                border: 2px solid green;
            }
            input.error {
                border-color: red;
            }
            .validate-error {
                color: red;
                font-size: 12px;
                font-family: sans-serif;
            }
        `;
        document.head.append(style);
    }

    setPattern() {
      
    }
}


class ValidaFormulario {
    constructor(){
        this.formulario = document.getElementById('formulario')

        this.events();
    }

    events(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }
    handleSubmit(e){
        e.preventDefault();
        const isValid = this.isValid();
    }

    isValid(){
        let valid = true;

        for (let errorText  of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }
        
        for(let campo of this.formulario.querySelectorAll('.valid')){
            const label = campo.previousElementSibling.innerHTML
            if (!campo.value) {
                let message = `Campo ${label} não pode ficar vazio`
                this.createError(campo,message)
                valid = false
            }
        }
    }

    createError(field,message){
        const div = document.createElement('div');
        div.innerHTML = message;
        div.classList.add('error-text');
        field.insertAdjacentElement('afterend',div)
    }

}

const valida = new ValidaFormulario()
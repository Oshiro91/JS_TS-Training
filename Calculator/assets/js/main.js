function Calculadora (){
    this.display = document.querySelector('.display')

    this.captureClicks = () => {
        document.addEventListener('click', oEvent => {
            const el = oEvent.target;
            el.classList.contains('btn-num') ? this.addNumDisplay(el) : false 
        })
    }

    this.addNumDisplay = (el) => this.display.value += el.innerText

    this.init = () => {
        this.captureClicks()
    }
}

const calculadora = new Calculadora();
calculadora.init();
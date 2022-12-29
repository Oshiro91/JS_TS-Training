function Calculadora (){
    this.display = document.querySelector('.display');

    this.captureClicks = () => {
        document.addEventListener('click', oEvent => {
            const el = oEvent.target;
            el.classList.contains('btn-num') ? this.onAddNumDisplay(el) : false ;
            el.classList.contains('btn-clear') ? this.onClear() : false ;
            el.classList.contains('btn-del') ? this.onDel() : false ;
            el.classList.contains('btn-eq') ? this.onEvaluate() : false ;
        })
    }

    this.onAddNumDisplay = (el) => this.display.value += el.innerText;
    this.onClear =  () => this.display.value = "";
    this.onDel = () => this.display.value = this.display.value.slice(0,-1);

    this.onEvaluate = () => {
        try {
            const count = eval(this.display.value)
            count ? this.display.value = count : alert("invlid inputs")
            
        } catch (error) {
            alert("invlid inputs")
            console.log(error)
            return
        }
    }

    this.init = () => {
        this.captureClicks();
    }
}

const calculadora = new Calculadora();
calculadora.init();
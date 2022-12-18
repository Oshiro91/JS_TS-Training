// Capturar o evento de submit do formulário
const form = document.querySelector("#formIMC");

form.addEventListener("submit", function (Evt) {
    Evt.preventDefault();
    let peso,altura,msg;
    peso = document.getElementById("peso").value;
    altura = document.getElementById("altura").value ;   
    if (pesoValid() && alturaValid()) {
        msg = "Seu IMC é de: "+IMCCalc(peso,altura);
        document.querySelector("#resultado").innerHTML = `<p>${msg}</p>`;
    }
});

const IMCCalc = (peso,altura) => {
    let IMC = peso/(altura^2);
    return IMC;
};

const pesoValid = function () {
    if (Number(document.getElementById("peso").value) != document.getElementById("peso").value) {
        alert("Peso Inválido")
        return false
    } else {
        return true
    } 
};

const alturaValid = function () {
    if (Number(document.getElementById("altura").value) != document.getElementById("altura").value) {
        alert("Altura Inválida")
        return false
    } else {
        return true
    } 
};
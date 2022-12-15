const clock = document.querySelector('.clock');
const init = document.querySelector('.init');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

init.addEventListener('click',function(oEvent){
    alert("Start button has been pressed")
});

pause.addEventListener('click',function(oEvent){
    alert("Pause button has been pressed")
});

reset.addEventListener('click',function(oEvent){
    alert("Reset button has been pressed")
});
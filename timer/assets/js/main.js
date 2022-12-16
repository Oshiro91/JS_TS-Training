let clockHour, clockMin, clockSeg,clockStatus
const clock = document.getElementById("clock");
const init = document.querySelector('.init');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const test = document.querySelector('.test');
var addSeg
restartClock();

function refreshClock() {
    clock.innerHTML = `${clockHour}:${clockMin}:${clockSeg}${clockStatus}`
};

init.addEventListener('click', function (oEvent) {
    clockStatus = "";
    refreshClock();
    clock.classList.remove("paused");
    addSeg = setInterval(() => {
        addTime("seg")
    }, 1000);
});

pause.addEventListener('click', function (oEvent) {
    clearInterval(addSeg)
    clockStatus = "(Paused)"
    refreshClock()
    clock.classList.add("paused");
});

reset.addEventListener('click', function (oEvent) {
    restartClock();
    clock.classList.remove("paused");
});

function addTime(gran) {
    switch (gran) {
        case "seg":
            if (clockSeg < 59) {
                if (clockSeg<9) {
                    clockSeg++
                    clockSeg = `0${clockSeg}`
                } else {
                    clockSeg++
                }
                refreshClock()
            } else {
                clockSeg = "00"
                addTime("min")
            }
            break;
        case "min":
            if (clockMin < 59) {
                if (clockMin<9) {
                    clockMin++
                    clockMin = `0${clockMin}`
                } else {
                    clockMin++
                }
                refreshClock()
            } else {
                clockMin = "00"
                addTime("hour")
            }
        break;

        case "hour":
                if (clockHour<9) {
                    clockHour++
                    clockHour = `0${clockHour}`
                } else {
                    clockHour++
                }
                refreshClock()
        break
    
        default:
            break;
    }
    
}

function restartClock(){
    clockHour = clockMin = clockSeg = "00"
    clockStatus = ""
    refreshClock();
}
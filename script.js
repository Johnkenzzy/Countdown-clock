const watch = document.getElementById("watch");
const play = document.getElementById("play");
const pause = document.getElementById("watch");
const reset = document.getElementById("reset");

const seconds = 0;
const minutes = 0;
const hours = 0;

function countDown () {
    seconds--;
    if (seconds / 60 === 1){
        seconds = 0;
        minutes--;
        if (minutes <= 60) {
            minutes= 0;
            hours--;
        }
    }  
    
    if (seconds < 10) {
        evenSeconds = '0' + seconds.toString();
    } else {
        evenSeconds = seconds;
    }    
    if  (minutes < 10) {
        evenMinutes = '0' + minutes.toString();
    } else {
        evenMinutes = minutes;
    } 
    if  (hours < 10) {
        evenHours = '0' + hours.toString();
    } else {
        evenHours = hours;
    }    

    timer.innerText = evenHours + ':' + evenMinutes + ':' + evenSeconds;
}



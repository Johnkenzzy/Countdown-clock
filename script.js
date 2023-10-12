const watch = document.getElementById("watch");
const play = document.getElementById("play");
const pause = document.getElementById("watch");
const reset = document.getElementById("reset");

let seconds = 10;
let minutes = 1;
let hours = 1;

let evenSeconds = 0;
let evenMinutes= 0;
let evenHours = 0;

function countDown () {
        seconds--;
        if (seconds === 1) {
            seconds = 60;
            minutes--;
            if (minutes === 1) {
                minutes = 60;
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
    

    watch.innerText = evenHours + ':' + evenMinutes + ':' + evenSeconds;
}



    window.setInterval(countDown, 1000);

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
         
let countInterval = null;
let countStatus = 'stopped';

function countDown () {
    if (seconds >= 0) {
        seconds--;
        if (hours <= 0 && minutes <= 0 && seconds <= 0) {
            seconds = 0;
        }
    }

    if (seconds < 0) {
        minutes--;
        seconds = 59;
        if (minutes < 0) {
            hours--;
            minutes = 59;
        }
        if (hours <= 0) {
            hours = 0;
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


    play.addEventListener('click', ()=>{
        window.setInterval(countDown, 1000);

    })

    pause.addEventListener('click', ()=>{
        if (countStatus === "started"){
            window.clearInterval(countInterval);
            countStatus = "stopped";
       }
       
    })

    reset.addEventListener('click', ()=>{

    const counter = window.setInterval(countDown, 1000);

    window.clearInterval(countInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    watch.innerHTML = '00:00:00';
        
    })
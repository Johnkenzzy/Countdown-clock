const watch = document.getElementById("watch");
const play = document.getElementById("play");
const pause = document.getElementById("watch");
const reset = document.getElementById("reset");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

let seconds = 10;
let minutes = 1;
let hours = 1;

let evenSeconds = 0;
let evenMinutes= 0;
let evenHours = 0;
         
let timerInterval = null;
let timerStatus = 'stopped';

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
        if(timerStatus === 'stopped') {
            timerInterval = window.setInterval(countDown, 1000);
            timerStatus = 'started';
        } else {
            window.clearInterval(timerInterval);
            timerStatus = 'stopped'
        }
    })

    /*play.addEventListener('click', function(){


        if(timerStatus === 'stopped') {
            timerInterval = window.setInterval(countDown, 1000);
            play.innerHTML = `<i class="fa-solid fa-pause" id='pause'></i>`;
            timerStatus = 'started';
        } else {
            window.clearInterval(timerInterval);
            play.innerHTML = `<i class="fa-solid fa-play" id='play'></i>`;
            timerStatus = 'stopped';
        }    
        //return timerStatus;
    })*/


    pause.addEventListener('click', () => {
        if(timerStatus === 'started') {
            window.clearInterval(timerInterval);
            timerStatus = 'stopped';
        } else {
            timerInterval = window.setInterval(countDown, 1000);
            timerStatus = 'started'
        }
    })

    reset.addEventListener('click', ()=>{

        const timerStatus = window.setInterval(countDown, 1000);

        window.clearInterval(timerInterval);
        seconds = 0;
        minutes = 0;
        hours = 0;

        watch.innerText = '00:00:00';
        
    })

    up.addEventListener("click", ()=>{
        return +1
    })

    down.addEventListener("click", ()=>{
        return -1
    })

    left.addEventListener("click", )
const watch = document.getElementById("watch");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const up = document.querySelector(".up");
const down = document.querySelector(".down");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const date = document.querySelector(".date");

// Remember to define the problem i am trying to sove here is.

let seconds = 0;
let minutes = 0;
let hours = 0;

let evenSeconds = 0;
let evenMinutes= 0;
let evenHours = 0;


const string = watch.textContent;
watchArr = string.split(':');
watchArr[2] = seconds;
watchArr[1] = minutes;
watchArr[0] = hours;
         
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
    
    watch.innerHTML = evenHours + ':' + evenMinutes + ':' + evenSeconds;
}

    play.addEventListener('click', ()=>{
        if(timerStatus === 'stopped') {
            timerInterval = window.setInterval(countDown, 1000);
            timerStatus = 'started';
        }
    })

    pause.addEventListener('click', ()=> {
        if(timerStatus === 'started') {
            window.clearInterval(timerInterval);
            timerStatus = 'stopped';
        } 
    })

    reset.addEventListener('click', ()=>{

        window.clearInterval(timerInterval);
        watch.innerHTML = '00:00:00';
        seconds = 0;
        minutes = 0;
        hours = 0;
        timerStatus = 'stopped';
    });

     up.addEventListener("click", ()=>{
        if (minutes  < 59) {
          minutes = minutes + 1;
          seconds = seconds + 0;
          if (minutes === 59) {
            hours = hours + 1;
            minutes = 0;

          }
        }
    })

    down.addEventListener("click", ()=>{
      if (seconds > 0) {
        if (hours === 0 && minutes === 0) {
          seconds = seconds - 1;
          minutes = 0;
          hours = 0;
        }
      }if (hours  === 0 && minutes > 0) {
          hours = 0;
          minutes = minutes - 1;
      }if (hours > 0) {
          hours = hours - 1;
          minutes = minutes + 0;
      }
    })

    position = null;

    right.addEventListener('click', ()=>{
        position = seconds;
        if (position === seconds) {
            position = minutes;
            if (position === minutes) {
                position = hours;
            }
            if (position === hours) {
                position = seconds;
            }
        }
    })

    
    left.addEventListener('click', ()=>{
        position = seconds;
        if (position === seconds) {
            position = minutes;
            if (position === minutes) {
                position = hours;
            }
            if (position === hours) {
                position = seconds;
            }
        }
    })

   /**  function updateTime() {
        var time = (new Date()).toLocaleString({
        hour12: true,
        });
        
        date.innerHTML = time;
        
    };**/


    function time () {
        date.innerHTML = new Date().toLocaleString({hour12: true,})  /**toString("hh:mm:ss tt")**/;
                var timeout = setTimeout(time, 1000); // recalls the function after 1000 ms
        };

    requestAnimationFrame(time);

        

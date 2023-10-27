const watch = document.getElementById("watch");
const play = document.getElementById("play");
const pause = document.getElementById("pause");
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

    const string = watch.textContent;
    watchArr = string.split(':');
    const sec = watchArr[2];
    const min = watchArr[1];
    const hour = watchArr[0];
    const timer = sec;
    const position = null;
    const ck = createElement(p);
    i.textContent = sec;
    i.style.background = 'red'



   
    function moveTimer () {
      if (timer == sec) {
        sec.background = '#f1e1c3'
      }

    }

    // const words = textContent.split(':');
    // let cursorPosition = right.cursorPosition;

    function moveToPreviousWord() {
        if (cursorPosition > 0) {
          cursorPosition--;
        }
      }
      
      function updateElementTextContent() {
        right.textContent = words.join(' ');
      }
      
      // Bind the moveToNextWord() and moveToPreviousWord() functions to the element's keydown event.
      right.addEventListener('keydown', (event) => {
        switch (event.key) {
          case 'ArrowRight':
            moveToNextWord();
            break;
          case 'ArrowLeft':
            moveToPreviousWord();
            break;
        }
      
        // Update the element's text content.
        updateElementTextContent();
      });


    up.addEventListener("click", ()=>{
        return +1
    })

    down.addEventListener("click", ()=>{
        return -1
    })

    left.addEventListener("click", ()=>{})
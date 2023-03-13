let hour = 0;
let minutes = 0;
let seconds = 0;
let tenMillis = 0;

const appendSeconds = document.getElementById("seconds");
const appendMinutes= document.getElementById("minutes");
const appendHour = document.getElementById("hour");
const buttonStart = document.getElementById("bt_start");
const buttonStop = document.getElementById("bt_stop");
const buttonReset = document.getElementById("bt_reset");

let intervalId;

buttonStart.onclick = function(){
  clearInterval(intervalId);
  intervalId = setInterval(operateTimer, 10);
}

buttonStop.onclick = function() {
  clearInterval(intervalId);
}

buttonReset.onclick = function() {
  clearInterval(intervalId);
  tenMillis = 0;
  seconds = 0;
  minutes = 0;
  hour = 0;
  appendHour.textContent = "00";
  appendMinutes.textContent = "00";
  appendSeconds.textContent = "00";
}

// 10ms 마다 숫자 증가
function operateTimer(){
  tenMillis++;
  if(tenMillis > 99) {
    seconds++;
    appendSeconds.textContent = seconds > 9 ? seconds : '0' + seconds;
    tenMillis = 0;
  }
  if(seconds > 59) {
    minutes++;
    appendMinutes.textContent = minutes > 9 ? minutes : '0' + minutes;
    seconds = 0;
    appendSeconds.textContent = "00";
  }
  if(minutes > 59) {
    hour++;
    appendHour.textContent = hour > 9 ? hour : '0' + hour;
    minutes = 0;
    appendMinutes.textContent = "00";
  }
}
//TIME PART
let Days = ["SUN", "MON", "TUE", "TH", "WED", "FR", "SAT"];
setInterval(function () {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let d = a.getDay();
  document.getElementsByClassName("day-text-1")[0].innerHTML = Days[d];
  document.getElementsByClassName("hours-text-1")[0].innerHTML = h;
  document.getElementsByClassName("min-text-1")[0].innerHTML = m;
  document.getElementsByClassName("sec-text-1")[0].innerHTML = s;
}, 10);

let alarmButton = document.querySelector(".set-alarm-button");
let content = document.querySelector(".content");
let select = document.querySelectorAll("select");

//AUDIO PLAYYY
const audio = new Audio("./ringtone.mp3");
function ringBell() {
  console.log("Ringing");
  audio.play();
}

setInterval(() => {
  let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds(),
    ampm = "AM";
  if (h >= 12) {
    h = h - 12;
    ampm = "PM";
  }

  if (alarmTime === `${h}:${m} ${ampm}`) {
    ringBell();
  }
}, 1000);

//ALARM CLOCK FUNCTION
let isAlarmSet = false;
let alarmTime;
function setAlarm() {
  if (isAlarmSet) {
    alarmTime = "";
    audio.pause();
    content.classList.remove("disable");
    alarmButton.innerText = "Set Alarm";
    return (isAlarmSet = false);
  }
  if (
    select[0].value == "Hour" ||
    select[1].value == "Minute" ||
    select[2].value == "AM/PM"
  ) {
    return alert("Invalid input. Fill properly!!");
  }
  let time = `${select[0].value}:${select[1].value} ${select[2].value}`;

  alarmTime = time;
  console.log("Alarm is set on:  ", alarmTime);
  isAlarmSet = true;
  content.classList.add("disable");
  alarmButton.innerText = "Clear Alarm";
}
alarmButton.addEventListener("click", setAlarm);

var hourTimer = document.getElementById("timerHour");
var minuteTimer = document.getElementById("timerMin");
var secondsTimer = document.getElementById("timerSec");
var d = new Date();
var hLast = d.getHours();
var mLast = d.getMinutes();
var sLast = d.getSeconds();

function time() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  hourTimer.querySelector(".static_up span").innerHTML = h;
  hourTimer.querySelector(".animate_down span").innerHTML = h;
  hourTimer.querySelector(".animate_up span").innerHTML = hLast;
  hourTimer.querySelector(".static_down span").innerHTML = hLast;
  minuteTimer.querySelector(".static_up span").innerHTML = m;
  minuteTimer.querySelector(".animate_down span").innerHTML = m;
  minuteTimer.querySelector(".animate_up span").innerHTML = mLast;
  minuteTimer.querySelector(".static_down span").innerHTML = mLast;
  secondsTimer.querySelector(".static_up span").innerHTML = s;
  secondsTimer.querySelector(".animate_down span").innerHTML = s;
  secondsTimer.querySelector(".animate_up span").innerHTML = sLast;
  secondsTimer.querySelector(".static_down span").innerHTML = sLast;

  if (hLast != h) {
    hourTimer.querySelector(".hold_cards").classList.add("animate");
  }
  if (mLast != m) {
    minuteTimer.querySelector(".hold_cards").classList.add("animate");
  }
  if (sLast != s) {
    secondsTimer.querySelector(".hold_cards").classList.add("animate");
  }

  setTimeout(() => {
    hourTimer.querySelector(".hold_cards").classList.remove("animate");
    minuteTimer.querySelector(".hold_cards").classList.remove("animate");
    secondsTimer.querySelector(".hold_cards").classList.remove("animate");
  }, 950);

  hLast = h;
  mLast = m;
  sLast = s;


  document.title = h+':'+m+':'+s

}

setInterval(time, 1000);

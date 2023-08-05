let Days = ["SUN", "MON", "TUE", "TH", "WED", "FR", "SAT"];
setInterval(function () {
  let a = new Date();
  let h = a.getHours();
  let m = a.getMinutes();
  let s = a.getSeconds();
  let d = a.getDay();
  document.getElementsByClassName("day-text-1")[0].innerHTML = Days[d];
  if (h > 12) {
    h = h - 12;
  }
  document.getElementsByClassName("hours-text-1")[0].innerHTML = h;
  document.getElementsByClassName("min-text-1")[0].innerHTML = m;
  document.getElementsByClassName("sec-text-1")[0].innerHTML = s;
}, 10);

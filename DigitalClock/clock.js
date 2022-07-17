let timer = setInterval(display, 1000);
function display() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();

  let today = time.getDate();
  let month = time.getMonth();
  let year = time.getFullYear();

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  today = today < 10 ? "0" + today : today;
  month = month < 10 ? "0" + month : month;

  let currentTime = hour + ":" + min + ":" + sec;
  document.getElementById("clock").innerHTML = currentTime;

  let currentDate = today + " / " + month + " / " + year;
  document.getElementById("date").innerHTML = currentDate;
}

display();

function stopTimer()
{
  if (timer !== -1) {
    clearInterval(timer);
    timer = -1; 
  }
}

function startTimer()
{
  if (timer === -1) {
    timer = setInterval(display, 1000);
  }
}
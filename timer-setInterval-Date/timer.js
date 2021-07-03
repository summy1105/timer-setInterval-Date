let timerStartDateTime;

let startHour;
let startMinute;
let startSecond;

let hour;
let minute;
let second;

let hourScreen;
let minScreen;
let secScreen;

let timerIntervalID;

function timerNumberInit(myTimer, myTimerBtn) {
  hour = 0;
  minute = 0;
  second = 0;

  hourScreen = $(myTimer).find(".timer-hours");
  minScreen = $(myTimer).find(".timer-min");
  secScreen = $(myTimer).find(".timer-sec");

  hourScreen.html((hour < 10 ? "0" : "") + hour);
  minScreen.html((minute < 10 ? "0" : "") + minute);
  secScreen.html((second < 10 ? "0" : "") + second);
}

const timerStartInterval = function () {
  timerIntervalID = setInterval(function () {

    const tempTime = new Date(
      Date.UTC(0, 0, 0, startHour, startMinute, startSecond, 0)
    ).getTime();
    let diffTime = new Date(
      new Date(Date.now() - timerStartDateTime).getTime() + tempTime
    );

    hour = diffTime.getUTCHours();
    minute = diffTime.getUTCMinutes();
    second = diffTime.getUTCSeconds();

    hourScreen.html((hour < 10 ? "0" : "") + hour);
    minScreen.html((minute < 10 ? "0" : "") + minute);
    secScreen.html((second < 10 ? "0" : "") + second);
  }, 1000);
};

const timerStart = function () {
  timerStartDateTime = Date.now();
  
  startHour = hour;
  startMinute = minute;
  startSecond = second;

  timerStartInterval();
};

const timerStop = function () {
  clearInterval(timerIntervalID);
};

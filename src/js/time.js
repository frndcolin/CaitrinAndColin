self.importScripts('../vendor/luxon.js');
var DateTime = self.luxon.DateTime,
    selections = ['months', 'days', 'hours', 'minutes', 'seconds'],
    theBigDay = DateTime.fromISO('2018-12-01T17:30:00');

function checkNum(num) {
    return num < 10 ? `0${num}` : num;
}

function getTime() {
    let now = DateTime.local(),
        today = DateTime.fromISO(now.toString()),
        count = theBigDay.diff(today, selections);
    return {
        seconds: checkNum(count.seconds.toFixed(0)),
        minutes: checkNum(count.minutes),
        hours: checkNum(count.hours),
        days: checkNum(count.days),
        months: checkNum(count.months)
    };
}

postMessage(getTime());

var t = self.setInterval(function () {
    postMessage(getTime());
}, 1000);
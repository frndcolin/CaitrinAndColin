var clock = new Worker('../public/js/time.js');

var Display = function (arr) {
    var self = this;
    self.selections = arr;
    
    arr.forEach(choice => {
        self[choice] = document.querySelector('.date--' + choice);
    });
    return self;
}

Display.prototype.showTime = function (data) {
    var self = this;
    var time = data;

    self.selections.forEach(title => {
        var date = self[title];
        if (date.innerHTML != time[title]) {
            date.innerHTML = time[title];
        }
    });
}

var countdown = new Display(['months', 'days', 'hours', 'minutes', 'seconds']);

clock.onmessage = function (resp) {
    countdown.showTime(resp.data);
    //    console.log(resp.data);
};
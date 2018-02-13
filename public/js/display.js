var clock = new Worker('time.js');

const Display = function (arr) {
    let self = this;
    self.selections = arr;
    
    arr.forEach(choice => {
        self[choice] = document.querySelector(`.--${choice}`);
    });
    return self;
}

Display.prototype.showTime = function (data) {
    let time = data;

    this.selections.forEach(title => {
        let date = this[title];
        if (date.innerHTML != time[title]) {
            date.innerHTML = time[title];
        }
    });
}

const countdown = new Display(['months', 'weeks', 'days', 'hours', 'minutes', 'seconds']);

clock.onmessage = function (resp) {
    countdown.showTime(resp.data);
    //    console.log(resp.data);
};
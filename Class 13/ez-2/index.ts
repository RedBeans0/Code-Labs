class Logger {
    logRandomNumber() {
        Math.floor(Math.random() * 101);
        console.log(this.logRandomNumber);
    }

    logARandomColor() {
        let list = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"]
        var color = list[Math.floor(Math.random() * list.length)];
        console.log(this.logARandomColor);
    }

    logTo100() {

        for (let i = 0; i < 101; i++) {
        console.log(i);
        console.log(this.logTo100);
        }

    }
}


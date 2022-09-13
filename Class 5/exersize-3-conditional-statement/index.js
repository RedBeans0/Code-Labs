let time = 0;

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];

if(milliseconds == 1000){
    milliseconds = 0;
    seconds++;

    if(seconds == 6){
        seconds = 0;
        minutes++;

        if(minutes == 6){
            minutes = 0;
            hours++;
        }
    }
}

let clock;
if (time < 10) {
    clock = "Good morning";
  } else if (time < 20) {
    clock = "Good day";
  } else {
    clock = "Good evening";
  }

  
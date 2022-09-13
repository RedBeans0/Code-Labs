var bgPage = document.getElementsByClassName('bg')[0];

var r = 0,
g = 0,
b = 0;

function bg () {
  
	if (r <= 255 && g == 0 && b == 0) {
		r ++;
	}

	if (r == 255 && b == 0 && g <= 255) {
		g ++;
	}

	if (r == 255 && g == 255 && b <= 255) {
		b ++;
	}

	if (b == 255 && g == 255 && r > 0) {
		r --;
	}

	if (r == 0 && b == 255 && g > 0) {
		g --;
	}

	if (r == 0 && g == 0 && b > 0) {
		b --;
	}

	setTimeout(function() {
		bg();
	}, 10);

	bgPage.style.background = 'rgb('+r+','+g+','+b+')';
}
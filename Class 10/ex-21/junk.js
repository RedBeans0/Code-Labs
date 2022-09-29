function move() {
    const element = document.getElementById("myBar");   
    let width = 0;
    let height = 0;
    const id = setInterval(frame, 10);
    function frame() {
      if (width + height == 200) {
        clearInterval(id);
      } else {
        width++; 
        height++;
        element.style.width = width + '%'; 
        element.style.height = height + '%'; 
      }
    }
  }
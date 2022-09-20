function analogClock(){
}
analogClock.prototype.run = function() {
    var date = new Date();
    var second = date.getSeconds()* 6;
    var minute = date.getMinutes()* 6 + second / 60;
    var hour = ((date.getHours() % 12) / 12) * 360 + 90 + minute / 12;
    jQuery('#hour').css("transform", "rotate(" + hour + "deg)");
    jQuery('#minute').css("transform", "rotate(" + minute + "deg)");
    jQuery('#second').css("transform", "rotate(" + second + "deg)");

};
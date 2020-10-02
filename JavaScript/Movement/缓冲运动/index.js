window.onload = function () {};

var timer = null;

function move(iTarget) {
  var speed = 0;
  var oDiv = document.getElementById("div1");

  clearInterval(timer);
  console.log(iTarget);
  timer = setInterval(function () {
    console.log("此时速度" + speed);
    if (oDiv.offsetLeft == iTarget) {
      clearInterval(timer);
    } else {
      speed = (iTarget - oDiv.offsetLeft) / 10;
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      oDiv.style.left = oDiv.offsetLeft + speed + "px";
      document.title= oDiv.offsetLeft
    }
  }, 30);
}

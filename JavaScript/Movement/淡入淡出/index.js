window.onload = function () {
  var oDiv = document.getElementById("div1");
  oDiv.onmouseover = function () {
    console.log("当前透明度" + oDiv.style.opacity);
    move(100);
  };
  oDiv.onmouseout = function () {
    console.log("当前透明度" + oDiv.style.opacity);
    move(20);
  };
};

var alpha = 30;
var timer = null;

function move(iTarget) {
  var oDiv = document.getElementById("div1");
  var speed = 0;

  alpha < iTarget ? (speed = 10) : (speed = -10);

  clearInterval(timer);
  timer = setInterval(function () {
    if (alpha == iTarget) {
      clearInterval(timer);
    } else {
      alpha += speed;
      oDiv.style.opacity = alpha / 100;
    }
  }, 50);
}

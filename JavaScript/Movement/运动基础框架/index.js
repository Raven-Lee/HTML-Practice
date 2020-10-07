var speed = 7;
var timer = null;

window.onload = function () {
  var oDiv1 = document.getElementById("div1");
  var oBtn = document.getElementById("startMove");
  var oShareBtn = document.getElementById("shareBtn");
  var oShareContainer = document.getElementById("shareContainer");
  //oBtn.onclick = startmove(oDiv1, 7, 300);

  oShareContainer.onmouseover = function () {
    startmove(oShareContainer, 0);
  };
  oShareContainer.onmouseout = function () {
    startmove(oShareContainer, -200);
  };
};
//运动框架水平移动
function startmove(obj, iTarget) {
  var speed = 0;
  if (obj.offsetLeft > iTarget) {
    speed = -40;
  }
  else{
      speed=40
  }
  clearInterval(timer);
  timer = setInterval(function () {
    if (obj.offsetLeft == iTarget) {
      clearInterval(timer);
    } else {
      obj.style.left = obj.offsetLeft + speed + "px";
    }
  }, 30);
}

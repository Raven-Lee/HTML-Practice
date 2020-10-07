window.onload = function () {};

var timer = null;
//to do: 从右往左运动,无法移动到指定的位置
//水平移动到目标位置
function move(iTarget) {
  var speed = 0;
  var oDiv = document.getElementById("div1");

  clearInterval(timer);

  timer = setInterval(function () {
    console.log(
      "此时速度" + speed + ",目标位置" + iTarget + ",当前位置" + oDiv.offsetLeft
    );

    if (oDiv.offsetLeft == iTarget) {
      clearInterval(timer);
      console.log("运动结束");
    } else {
      speed = (iTarget - oDiv.offsetLeft) / 10; //距离越近,速度越慢
      speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //正数向上取整,负数向下取整
      oDiv.style.left = oDiv.offsetLeft + speed + "px";
      document.title = oDiv.offsetLeft;
    }
  }, 30);
}

window.onload = function () {
  var oDiv = document.getElementById("div1");
  console.log("offset = " + oDiv.offsetLeft);
};

var timer = null;

function move(iTartget) {
  var oDiv = document.getElementById("div1");
  var speed = 0;

  console.log("iTartget = " + iTartget);//打印目标位置
  clearInterval(timer);

  timer = setInterval(() => {
    console.log("speed = " + speed); //打印当前速度

    if (oDiv.offsetLeft > iTartget) {
      speed = -7;
    } else {
      speed = 7;
    }
    //如果距离目标位置小于速度, 则以目标位置作为对象的位置,否则继续运动
    if (Math.abs(oDiv.offsetLeft - iTartget) < Math.abs(speed)) {
      oDiv.style.left = iTartget + "px";
      clearInterval(timer);
    } else {
      oDiv.style.left = oDiv.offsetLeft + speed + "px";
    }
  }, 30);
}

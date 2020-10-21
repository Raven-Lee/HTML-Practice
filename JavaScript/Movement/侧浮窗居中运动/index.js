window.onscroll = function () {
  var oDiv = document.getElementById("div1");
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

  // oDiv.style.top =
  //   (document.documentElement.clientHeight -
  //   oDiv.offsetHeight)/2 +
  //   scrollTop +
  //   "px";
  console.log('目标高度'+(document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop));
  console.log('物体当前高度'+oDiv.offsetTop);
  console.log('目标高度'+document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop);
  move(parseInt((document.documentElement.clientHeight - oDiv.offsetHeight)/2 + scrollTop));
  
};

var timer = null;
function move(iTartget) {
  var oDiv = document.getElementById("div1");
  var oTop = document.getElementById('top')

  clearInterval(timer);
  timer = setInterval(() => {
    var speed = (iTartget - oDiv.offsetTop) / 8;
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

    if (oDiv.offsetTop == iTartget) {
      clearInterval(timer);
    } else {
      oDiv.style.top = oDiv.offsetTop + speed + "px";
      oTop.value=oDiv.offsetTop
    }
  }, 30);
}


window.onload = function(){
    
}

//获取元素的指定属性
function getStyle(obj, name) {
  if (obj.currentStyle) {
    return obj.currentStyle[name];
  } else {
    return getComputedStyle(obj, false)[name];
  }
}

//运动框架：改变obj的attr属性到Target值
function move(obj, Target, attr) {
  console.log(
    "开始,对象为" + obj.id + "目标值" + Target + "当前值为:" + obj.cur
  );
  clearInterval(obj.timer);

  obj.timer = setInterval(function () {
    if (attr == "opacity") {
      obj.cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);
    } else {
      obj.cur = parseInt(getStyle(obj, attr)); //获取当前属性值
    }
    var speed = (Target - obj.cur) / 8; //速度赋值
    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //速度取整数
    console.log("当前速度" + speed);

    if (obj.cur == Target) {
      //到达目标值则停止
      clearInterval(obj.timer);
    } else if (attr == "opacity") {
      obj.style.filter = "alpha(opacitu:" + obj.cur + speed + ")"; //兼容IE
      obj.style.opacity = (obj.cur + speed) / 100; //兼容Chrome
    } else {
      obj.style[attr] = obj.cur + speed + "px";
    }
  }, 30);
}



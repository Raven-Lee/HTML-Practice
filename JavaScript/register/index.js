var code;
var CodeTimer;
var SubmitTimer;

window.onload = function () {
  var oSummit = document.getElementById("submit");
  var aWarning = document.getElementsByClassName("warning");
  var oGetCode = document.getElementById("getCode");
  var privateCheck = document.getElementById("privateCheck").checked;
  var oBtnHideOrShow = document.getElementById("hideOrShow");

  //点击获取验证码
  oGetCode.onclick = getCode;

  //隐藏显示密码框
  oBtnHideOrShow.onclick = function () {
    showPSW();
  };

  //提交按钮状态变化--
  SubmitTimer = setInterval(() => {
    if (AllFillCheck() == 1) {
      oSummit.removeAttribute("disabled");
      oSummit.style.backgroundColor = "#007acc";
    } else {
      oSummit.setAttribute("disabled", "disabled");
      oSummit.style.backgroundColor = "#bdcffa";
    }
  }, 500);

  //提交注册时
  oSummit.onclick = function () {
    //隐藏提示
    for (let index = 0; index < aWarning.length; index++) {
      aWarning[index].style.display = "none";
    }
    if ((mobileCheck() == 1) & (pswCheck() == 1) & (codeCheck() == 1)) {
      alert("注册成功！");
    }
  };

};

//手机号验证
function mobileCheck() {
  var mobile = document.getElementById("mobile").value;
  var warning = document.getElementById("warning-mobile");
  if (!/^1[3456789]\d{9}$/.test(mobile)) {
    warning.style.display = "block";
  } else {
    return 1;
  }
}

//密码验证
function pswCheck() {
  var psw = document.getElementById("psw").value;
  var warning1 = document.getElementById("warning-psw8");
  var warning2 = document.getElementById("warning-psw8A");
  console.log("密码位数：" + psw.length);
  if (psw.length < 8) {
    warning1.style.display = "block";
  } else if (!/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$/.test(psw)) {
    //
    warning2.style.display = "block";
  } else {
    console.log("密码校验通过");
    return 1;
  }
}

//获取验证码
function getCode() {
  code = parseInt(Math.random() * 1000000);
  alert(code);

  var oGetCode = document.getElementById("getCode");
  var i = 10; //点击后倒计时
  clearInterval(CodeTimer);
  oGetCode.setAttribute("disabled", "disabled");
  CodeTimer = setInterval(function () {
    if (i > 0) {
      oGetCode.innerHTML = --i;
    } else if (i == 0) {
      oGetCode.innerHTML = "获取验证码";
      clearInterval(CodeTimer);
      oGetCode.removeAttribute("disabled");
    }
  }, 1000);
}

//校验验证码是否正确
function codeCheck() {
  var warning = document.getElementById("warning-code");
  var enterCode = document.getElementById("code").value;
  console.log(warning);
  if (!(enterCode == code)) {
    warning.style.display = "block";
    console.log("验证码错误");
  } else {
    console.log("验证码校验通过");
    return 1;
  }
}

//验证按钮变化
function AllFillCheck() {
  var mobile = document.getElementById("mobile").value;
  var psw = document.getElementById("psw").value;
  var enterCode = document.getElementById("code").value;
  var privateCheck = document.getElementById("privateCheck").checked;
  if ((mobile != "") & (psw != "") & (enterCode != "") & privateCheck) {
    return 1;
  }
}

//显示隐藏密码框
function showPSW() {
  var oPsw = document.getElementById("psw");
  var img = document.getElementById("hideOrShow");
  if (oPsw.getAttribute("type") == "password") {
    oPsw.setAttribute("type", "text");
    img.setAttribute("src", "img/eye.png");
  } else {
    oPsw.setAttribute("type", "password");
    img.setAttribute("src", "img/eyeClose.png");
  }
}

//注册框移动--Todo
// function startMove() {
//   var oBackgournd = document.getElementById("backgournd");
//   oBackgournd.style.position='absolute'
//   var speed = -5;

//   timer = setInterval(() => {
//     console.log( oContainer.offsetTop)
//     oBackgournd.style.top = oContainer.offsetTop + speed + 'px';
//   }, 30);
// }

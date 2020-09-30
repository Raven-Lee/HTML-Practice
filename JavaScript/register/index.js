var code;
var CodeTimer;
var SubmitTimer;

window.onload = function () {
  var oSummit = document.getElementById("submit");
  var aWarning = document.getElementsByClassName("warning");
  var oGetCode = document.getElementById("getCode");
  var enterCode = document.getElementById("code").value;
  //点击获取验证码
  oGetCode.onclick = getCode;
    
  //提交按钮状态变化
  SubmitTimer = setInterval(() => {
    if (AllFillCheck()==1) {
      oSummit.removeAttribute("disabled");
      oSummit.style.backgroundColor = "#007acc";
      console.log('都填上了')
      console.log('定时器'+SubmitTimer)
    }else{
      oSummit.setAttribute("disabled", "disabled");
      oSummit.style.backgroundColor = "#bdcffa";
      console.log('没填完')
    }
  }, 500);

  //提交注册时
  oSummit.onclick = function () {
    //隐藏提示
    for (let index = 0; index < aWarning.length; index++) {
      aWarning[index].style.display = "none";
    }
    mobileCheck();
    pswCheck();
    codeCheck(enterCode);
  };
};

//手机号验证
function mobileCheck() {
  var mobile = document.getElementById("mobile").value;
  var warning = document.getElementById("warning-mobile");
  if (!/^1[3456789]\d{9}$/.test(mobile)) {
    warning.style.display = "block";
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
    warning2.style.display = "block";
  } else {
    console.log("密码校验通过");
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
function codeCheck(enterCode) {
  var warning = document.getElementById("warning-code");
  if (!enterCode == code) {
    warning2.style.display = "block";
  } else {
    console.log("验证码校验通过");
  }
}

//验证按钮变化
function AllFillCheck() {
  var mobile = document.getElementById("mobile").value;
  var psw = document.getElementById("psw").value;
  var enterCode = document.getElementById("code").value;

  if ((mobile != "") & (psw != "") & (enterCode != "")) {
    clearInterval(SubmitTimer);
    return 1;
  }
}

//注册校验

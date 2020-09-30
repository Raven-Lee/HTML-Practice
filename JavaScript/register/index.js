//手机号验证
function mobileCheck() {
  var mobile = document.getElementById("mobile").value;
  if (!/^1[3456789]\d{9}$/.test(mobile)) {
    alert("手机号码有误，请重填");
    return false;
  }
}

//密码验证
function pswCheck() {
  var psw = document.getElementById("psw").value;
  if (length.psw < 9) {
    alert("密码需要8位以上字母数字组合");
  } else if (!/^[0-9a-zA-Z]$/.test(psw)) {
    alert("密码需要8位以上字母数字组合");
  }
}
//获取验证码

//验证按钮变化

//注册校验

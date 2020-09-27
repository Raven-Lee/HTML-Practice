//手机号验证
function mobileCheck(){
    var mobile = document.getElementById('mobile').value;
    if(!(/^1[3456789]\d{9}$/.test(mobile))){
        alert("手机号码有误，请重填");
        return false;
    }

}

//密码验证

//获取验证码

//验证按钮变化

//注册校验
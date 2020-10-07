window.onscroll = function () {
  var oDiv = document.getElementById("div1");
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;


  oDiv.style.top = document.documentElement.clientHeight - oDiv.offsetHeight + scrollTop + 'px';

  console.log(oDiv.offsetHeight);
};



var timer= null
function move(iTartget){
     clearInterval(timer)
     timer = setInterval(() => {
         
     }, 30);
}
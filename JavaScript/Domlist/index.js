window.onload = function () {
  let oTab = document.getElementById("tab");
  let aRows = oTab.tBodies[0].rows;
  var oSerchButton = document.getElementById('serchBtn');
  //添加操作栏
  for (let index = 0; index < aRows.length; index++) {
    var oTd = document.createElement("td");
    oTd.innerHTML =
      '<input type="submit" name="" id="check" value=""><input type="submit" name="" id="edit" value=""><input type="submit" name="" id="del" value="">';

    aRows[index].appendChild(oTd);
  }
  console.log('操作按钮添加完毕');

  //检索
  
  console.log(oSerchButton);

  oSerchButton.onclick = function () {
    var oSerchText = document.getElementById("serchText");

    for (let index = 0; index < aRows.length; index++) {
      var content = aRows[index].td[1];
      console.log(content);
      if (oSerchText.value == content.value) {
        content.parentNode.style.backgoundColor = "#007acc";
      }
    }
  };
};

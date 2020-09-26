window.onload = function () {
  let oTab = document.getElementById("tab");
  let aRows = oTab.tBodies[0].rows;
  var oSerchButton = document.getElementById("serchBtn");
  var increID = aRows.length + 1;
  var oUser = document.getElementById("userName");
  var oCreator = document.getElementById("creator");
  var oCreate = document.getElementById("create");
  var oNewContainer = document.getElementById("newContainer");
  var oNewContainerTitle = document.getElementById("newContainerTitle");
  var oNewContainer_back = document.getElementById("newContainer-background");
  var oBtn_back_in_newContainer = document.getElementById("back");
  var oBtn_submit_in_newContainer = document.getElementById("newSubmit");
  var oBtn_save_in_newContainer = document.getElementById("save");
  var oidli = document.getElementById("idli");
  //添加操作栏
  addHandle();
  //操作栏初始化
  handleInitialy();
  //检索
  oSerchButton.onclick = function () {
    var oSerchText = document.getElementById("serchText");
    for (let i = 0; i < aRows.length; i++) {
      if (aRows[i].cells[1].innerHTML.search(oSerchText.value) != -1) {
        for (let index = 0; index < aRows.length; index++) {
          aRows[index].style.display = "none";
        }
        aRows[i].style.display = "";
      }
    }
    if (oSerchText.value == "") {
      for (let index = 0; index < aRows.length; index++) {
        const element = aRows[index];
        element.style.display = "";
      }
    }
  };

  //新建窗口初始化
  oCreate.onclick = function () {
    oidli.style.display = "none";
    oNewContainerTitle.innerHTML = "新建用户";
    oUser.value = "";
    oCreator.value = "";
    oNewContainer_back.style.display = "block";
    oNewContainer.style.display = "block";
    oBtn_submit_in_newContainer.style.display = "";
    oBtn_save_in_newContainer.style.display = "none";
  };
  //新建提交
  var oSubmit = document.getElementById("newSubmit");
  oSubmit.onclick = function () {
    var createdDate = new Date();
    var oTr = document.createElement("tr");

    var oTd = document.createElement("td");
    oTd.innerHTML = increID++;
    oTr.appendChild(oTd);

    var oTd = document.createElement("td");
    oTd.innerHTML = oUser.value;
    oTr.appendChild(oTd);

    var oTd = document.createElement("td");
    oTd.innerHTML = oCreator.value;
    oTr.appendChild(oTd);

    var oTd = document.createElement("td");
    oTd.innerHTML = newDate();
    oTr.appendChild(oTd);

    var oTd = document.createElement("td");
    oTd.innerHTML =
      '<input type="submit" name="" id="check" value="查看"><input type="submit" name="" id="edit" value="编辑"><input type="submit" name="" id="del" value="删除">';
    oTr.appendChild(oTd);

    oTab.tBodies[0].appendChild(oTr);
    handleInitialy();
    oNewContainer.style.display = "none";
    oNewContainer_back.style.display = "none";
  };
  //新建窗口-返回
  var oBack = document.getElementById("back");
  oBack.onclick = function () {
    oNewContainer.style.display = "none";
    oNewContainer_back.style.display = "none";
    oUser.removeAttribute("readOnly");
    oCreator.removeAttribute("readOnly");
  };

  //编辑窗口-确定
  oBtn_save_in_newContainer.onclick = function () {
    console.log("编辑提交");
    let oTab = document.getElementById("tab");
    let aRows = oTab.tBodies[0].rows;

    for (var i = 0; i < aRows.length; i++) {
      if (id.value == aRows[i].cells[0].innerHTML) {
        aRows[i].cells[1].innerHTML = oUser.value;
        aRows[i].cells[2].innerHTML = oCreator.value;
        aRows[i].cells[3].innerHTML = newDate();
        alert("保存成功");
        oNewContainer.style.display = "none";
        oNewContainer_back.style.display = "none";
        break;
      }
    }
  };
};

//返回日期字符串
function newDate() {
  var myDate = new Date();
  var sMonth =
    myDate.getMonth() > 8
      ? myDate.getMonth() + 1
      : "0" + (myDate.getMonth() + 1);
  var sDate = myDate.getDate() > 9 ? myDate.getDate() : "0" + myDate.getDate();
  var sHour =
    myDate.getHours() > 9 ? myDate.getHours() : "0" + myDate.getHours();
  var sMinute =
    myDate.getMinutes() > 9 ? myDate.getMinutes() : "0" + myDate.getMinutes();
  var sSecond =
    myDate.getSeconds() > 9 ? myDate.getSeconds() : "0" + myDate.getSeconds();
  return (
    myDate.getFullYear() +
    "-" +
    sMonth +
    "-" +
    sDate +
    " " +
    sHour +
    ":" +
    sMinute +
    ":" +
    sSecond
  );
}

function check(params) {
  var oNewContainer = document.getElementById("newContainer");
}

//添加操作栏按键
function addHandle() {
  let oTab = document.getElementById("tab");
  let aRows = oTab.tBodies[0].rows;
  for (let index = 0; index < aRows.length; index++) {
    var oTd = document.createElement("td");
    oTd.innerHTML =
      '<input type="submit" name="" id="check" value="查看"><input type="submit" name="" id="edit" value="编辑"><input type="submit" name="" id="del" value="删除">';

    aRows[index].appendChild(oTd);
  }
}

//定义操作行为
function handleInitialy() {
  var aBtn = document.getElementsByTagName("input");
  var oNewContainerTitle = document.getElementById("newContainerTitle");
  var id = document.getElementById("id");
  var oUser = document.getElementById("userName");
  var oCreator = document.getElementById("creator");
  var oNewContainer = document.getElementById("newContainer");
  var oNewContainerTitle = document.getElementById("newContainerTitle");
  var oNewContainer_back = document.getElementById("newContainer-background");
  var oBtn_submit_in_newContainer = document.getElementById("newSubmit");
  var oBtn_save_in_newContainer = document.getElementById("save");
  var oidli = document.getElementById("idli");
  
  for (let index = 0; index < aBtn.length; index++) {
    const element = aBtn[index];
    //删除当前行
    if (element.id == "del") {
      element.onclick = function () {
        element.parentNode.parentNode.parentNode.removeChild(
          element.parentNode.parentNode
        );
      };
    }
    //查看当前行
    else if (element.id == "check") {
      //
      element.onclick = function name(params) {
        oNewContainerTitle.innerHTML = "查看用户";
        oidli.style.display = "block";
        id.value = element.parentNode.parentNode.cells[0].innerHTML;
        oUser.value = element.parentNode.parentNode.cells[1].innerHTML;
        oCreator.value = element.parentNode.parentNode.cells[2].innerHTML;
        oNewContainer_back.style.display = "block";
        oNewContainer.style.display = "block";
        oBtn_submit_in_newContainer.style.display = "none";
        oUser.readOnly = "readonly";
        oCreator.readOnly = "readonly";
      };
    }
    //编辑当前行
    else if (element.id == "edit") {
      element.onclick = function () {
        oidli.style.display = "block";
        oNewContainerTitle.innerHTML = "编辑用户";
        oNewContainer_back.style.display = "block";
        oNewContainer.style.display = "block";
        id.value = element.parentNode.parentNode.cells[0].innerHTML;
        oUser.value = element.parentNode.parentNode.cells[1].innerHTML;
        oCreator.value = element.parentNode.parentNode.cells[2].innerHTML;
        oBtn_submit_in_newContainer.style.display = "none";
        oBtn_save_in_newContainer.style.display = "";
      };
    }
  }
}

//编辑提交
function edit(id, user, creator) {
  console.log("编辑提交");
  let oTab = document.getElementById("tab");
  let aRows = oTab.tBodies[0].rows;
  for (var i = 0; i < aRows.length; i++) {
    if (id == aRows[i]) {
      aRows[i].cells[1] = user;
      aRows[i].cells[2] = creator;
      aRows[i].cells[3] = newDate();
    }
  }
}

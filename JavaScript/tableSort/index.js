window.onload = function () {};

function numberSort(i) {
    var oTab = document.getElementById("tab");
    var aRow = oTab.tBodies[0].rows;
    var aThead = document.getElementById("thead");
  
    var arr = new Array();

  for (let index = 0; index < aRow.length; index++) {
    arr[index] = aRow[index];
  }
  console.log('排序前');
  console.log(arr);
  arr.sort(function (tr1, tr2) {
    n1 = parseInt(tr1.cells[i].innerHTML);
    n2 = parseInt(tr2.cells[i].innerHTML);
    return n1 - n2;
  });
  console.log('排序后');
  console.log(arr);
  for (let index = 0; index < arr.length; index++) {
    oTab.tBodies[0].appendChild(arr[index]);
  }
}

function AlphSort() {
    var oTab = document.getElementById("tab");
    var aRow = oTab.tBodies[0].rows;
    var aThead = document.getElementById("thead");
  
    var arr = new Array();
  
    for (let index = 0; index < aRow.length; index++) {
      arr[index] = aRow[index];
    }
    console.log('排序前');
    console.log(arr);
    arr.sort(function (tr1, tr2) {
    //   n1 = parseInt(tr1.cells[1].innerHTML);
    //   n2 = parseInt(tr2.cells[1].innerHTML);
    // console.log('N1是'+tr1.cells[1].innerHTML)
    // console.log('N2是'+n2)
      return tr1.cells[1].innerHTML.localeCompare(tr2.cells[1].innerHTML);
    });
    console.log('排序后');
    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
      oTab.tBodies[0].appendChild(arr[index]);
    }
  }
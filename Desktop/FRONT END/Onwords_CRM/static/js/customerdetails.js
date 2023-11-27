var table = document.getElementById("myTable");
// document.getElementById("individual").style.display = "none";
function countPerUser() {
  var u_anitha = 0,
    u_jeeva = 0,
    u_gowtham = 0,
    u_abdul = 0,
    u_arun = 0,
    u_vasanth = 0,
    u_pradeep = 0,
    u_sakthi = 0,
    u_radha = 0,
    u_onwords = 0,
    u_iyyappan = 0,
    u_abdulkareem = 0,
    u_ashikaboobacker = 0;
    u_harshiniu=0;
    u_aishwaryak=0;
    u_karthikam=0;
    u_sanjetht=0;
    u_gokulnathn=0;
    u_mohamedthoufic=0;
    u_logeshp=0;
    u_rajkannanb=0;
    u_karthickrajaa=0;
    u_pradeepkumar=0;
    u_AnushaUnnikrishnan=0;
    u_ArasiS=0;
  _sort = getCheckedByName();
  for (var r = 1, n = table.rows.length; r < n; r++) {
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
      if (c == 7) {
        if (table.rows[r].cells[c].innerHTML == "Anitha") {
          u_anitha++;
        }
        if (table.rows[r].cells[c].innerHTML == "Jeeva") {
          u_jeeva++;
        }
        if (table.rows[r].cells[c].innerHTML == "Gowtham") {
          u_gowtham++;
        }
        if (table.rows[r].cells[c].innerHTML == "Abdul Abbas") {
          u_abdul++;
        }
        if (table.rows[r].cells[c].innerHTML == "Arun Kumar") {
          u_arun++;
        }
        if (table.rows[r].cells[c].innerHTML == "Vasanth Kumar") {
          u_vasanth++;
        }
        if (table.rows[r].cells[c].innerHTML == "Pradeep Kanth") {
          u_pradeep++;
        }
        if (table.rows[r].cells[c].innerHTML == "Sakthivel Nagaraj") {
          u_sakthi++;
        }
        if (table.rows[r].cells[c].innerHTML == "Radhakrishnan") {
          u_radha++;
        }
        if (table.rows[r].cells[c].innerHTML == "Onwords") {
          u_onwords++;
        }
        if (table.rows[r].cells[c].innerHTML == "Iyyappan K") {
          u_iyyappan++;
        }
        if (table.rows[r].cells[c].innerHTML == "Abdul Kareem") {
          u_abdulkareem++;
        }
        if (table.rows[r].cells[c].innerHTML == "Ashik Aboobacker") {
          u_ashikaboobacker++;
        }
        if (table.rows[r].cells[c].innerHTML == "Harshini U") {
          u_harshiniu++;
        }
        if (table.rows[r].cells[c].innerHTML == "Aishwarya K") {
          u_aishwaryak++;
        }
        if (table.rows[r].cells[c].innerHTML == "Karthika M") {
          u_karthikam++;
        }
        if (table.rows[r].cells[c].innerHTML == "Sanjeth T") {
          u_sanjetht++;
        }
        if (table.rows[r].cells[c].innerHTML == "Gokulnath N") {
          u_gokulnathn++;
        }
        if (table.rows[r].cells[c].innerHTML == "Mohamed Thoufic") {
          u_mohamedthoufic++;
        }
        if (table.rows[r].cells[c].innerHTML == "Logesh P") {
          u_logeshp++;
        }
        if (table.rows[r].cells[c].innerHTML == "Rajkannan B") {
          u_rajkannanb++;
        }
        if (table.rows[r].cells[c].innerHTML == "Karthickraja A") {
          u_karthickrajaa++;
        }
        if (table.rows[r].cells[c].innerHTML == "Pradeep kumar") {
          u_pradeepkumar++;
        }
        if (table.rows[r].cells[c].innerHTML == "Anusha Unnikrishnan") {
          u_AnushaUnnikrishnan++;
        }
        if (table.rows[r].cells[c].innerHTML == "Arasi S") {
          u_ArasiS++;
        }
      }
    }
  }
  console.log(u_gowtham,u_anitha)
  document.getElementById("u-gowtham").innerHTML = "(" + u_gowtham + ")";
  document.getElementById("u-jeeva").innerHTML = "(" + u_jeeva + ")";
  document.getElementById("u-anitha").innerHTML = "(" + u_anitha + ")";
  document.getElementById("u-abdul").innerHTML = "(" + u_abdul + ")";
  document.getElementById("u-arun").innerHTML = "(" + u_arun + ")";
  document.getElementById("u-vasanth").innerHTML = "(" + u_vasanth + ")";
  document.getElementById("u-pradeep").innerHTML = "(" + u_pradeep + ")";
  document.getElementById("u-sakthi").innerHTML = "(" + u_sakthi + ")";
  document.getElementById("u-radha").innerHTML = "(" + u_radha + ")";
  document.getElementById("u-onwords").innerHTML = "(" + u_onwords + ")";
  document.getElementById("u-iyyappan").innerHTML = "(" + u_iyyappan + ")";
  document.getElementById("u-abdulkareem").innerHTML = "(" + u_abdulkareem + ")";
  document.getElementById("u-ashikaboobacker").innerHTML = "(" + u_ashikaboobacker + ")";
  document.getElementById("u-harshiniu").innerHTML = "(" + u_harshiniu + ")";
  document.getElementById("u-aishwaryak").innerHTML = "(" + u_aishwaryak + ")";
  document.getElementById("u-karthikam").innerHTML = "(" + u_karthikam + ")";
  document.getElementById("u-sanjetht").innerHTML = "(" + u_sanjetht + ")";
  document.getElementById("u-gokulnathn").innerHTML = "(" + u_gokulnathn + ")";
  document.getElementById("u-mohamedthoufic").innerHTML = "(" + u_mohamedthoufic + ")";
  document.getElementById("u-logeshp").innerHTML = "(" + u_logeshp + ")";
  document.getElementById("u-rajkannanb").innerHTML = "(" + u_rajkannanb + ")";
  document.getElementById("u-karthickrajaa").innerHTML = "(" + u_karthickrajaa + ")";
  document.getElementById("u-pradeepkumar").innerHTML = "(" + u_pradeepkumar + ")";
  document.getElementById("u-AnushaUnnikrishnan").innerHTML = "(" + u_AnushaUnnikrishnan + ")";
  document.getElementById("u-ArasiS").innerHTML = "(" + u_ArasiS + ")";
}
function colorChange() {
  for (let i in table.rows) {
    let row = table.rows[i];
    for (let j in row.cells) {
      let col = row.cells[j];
      customerState = row.cells[4].innerHTML;
      if (customerState === "Following Up") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#91f291";
      } else if (customerState === "Delayed") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "orange";
      } else if (customerState === "Rejected from Customer") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#f55f5f";
      } else if (customerState === "Rejected from MGMT") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#f55f5f";
      } else if (customerState === "Advanced") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#f1f7b5";
      } else if (customerState === "B2B") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#9ea1d4";
      } else if (customerState === "Under Construction") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#F099D2";
      } else if (customerState === "Installation Completed") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#16f0b6";
      } else if (customerState === "Product") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#63E0E9";
      } else if (customerState === "Interested") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#9EA1D4";
      } else if (customerState === "New leads") {
        document.getElementById("myTable").rows[i].style.backgroundColor =
          "#F55F5F78";
      }

    }
  }
}
function checkDatesInTable() {
  notFollowing = 0;
  var currDate = new Date();
  var curr_year = currDate.getUTCFullYear();
  var curr_month = currDate.getUTCMonth() + 1;
  var curr_day = currDate.getUTCDate();
  if (curr_day < 10) {
    curr_day = "0" + curr_day;
  }
  for (var r = 1, n = table.rows.length; r < n; r++) {
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
      if (c == 6) {
        d = table.rows[r].cells[c].innerHTML;
        if (d.length >= 8) {
          year = d.slice(0, 4);
          month = d.slice(5, 7);
          date = d.slice(8, 10);
          var givenDate = new Date(year, month - 1, date);
          var current_date = new Date(curr_year, curr_month - 1, curr_day);
          var Difference_In_Time = current_date.getTime() - givenDate.getTime();
          var diff = Difference_In_Time / (1000 * 3600 * 24);
          if (diff >= 7) {
            document.getElementById("myTable").rows[r].cells[2].childNodes[3].innerHTML = "&nbsp;&nbsp;&nbsp;";
            notFollowing++;
          }
        }
      }
    }
  }
  // document.getElementById("nfid").innerHTML = notFollowing;
}

function hideshowblackdot() {
  var currDate = new Date();
  var curr_year = currDate.getUTCFullYear();
  var curr_month = currDate.getUTCMonth() + 1;
  var curr_day = currDate.getUTCDate();
  if (curr_day < 10) {
    curr_day = "0" + curr_day;
  }
  for (var r = 1, n = table.rows.length; r < n; r++) {
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
      if (c == 6) {
        d = table.rows[r].cells[c].innerHTML;
        if (d == "-") {
          document.getElementById("myTable").rows[r].style.display = "none";
        }
        if (d.length >= 8) {
          year = d.slice(0, 4);
          month = d.slice(5, 7);
          date = d.slice(8, 10);
          var givenDate = new Date(year, month - 1, date);
          var current_date = new Date(curr_year, curr_month - 1, curr_day);
          var Difference_In_Time = current_date.getTime() - givenDate.getTime();
          var diff = Difference_In_Time / (1000 * 3600 * 24);
          ckbxstate = document.getElementById("checkboxbd").checked
          if (ckbxstate) {
            if (diff < 7) {
              document.getElementById("myTable").rows[r].style.display = "none";
            }
          } else {
            if (diff < 7) {
              document.getElementById("myTable").rows[r].style.display = ""
            }
          }
        }
      }
    }
  }
}

function getBlackDots() {
  var bd_anitha = 0,
    bd_jeeva = 0,
    bd_gowtham = 0,
    bd_abdul = 0,
    bd_arun = 0,
    bd_vasanth = 0,
    bd_pradeep = 0,
    bd_sakthi = 0,
    bd_radha = 0,
    bd_onwords = 0,
    bd_iyyappan = 0,
    bd_abdulkareem = 0,
    bd_ashikaboobacker = 0;
    bd_harshiniu=0;
    bd_aishwaryak=0;
    bd_karthikam=0;
    bd_sanjetht=0;
    bd_gokulnathn=0;
    bd_mohamedthoufic=0;
    bd_logeshp=0;
    bd_rajkannanb=0;
    bd_karthickrajaa=0;
    bd_pradeepkumar=0;
    bd_AnushaUnnikrishnan=0;
    bd_ArasiS=0;

  var currDate = new Date();
  var curr_year = currDate.getUTCFullYear();
  var curr_month = currDate.getUTCMonth() + 1;
  var curr_day = currDate.getUTCDate();
  if (curr_day < 10) {
    curr_day = "0" + curr_day;
  }
  for (var r = 1, n = table.rows.length; r < n; r++) {
    for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
      if (c == 6) {
        d = table.rows[r].cells[c].innerHTML;
        if (d.length >= 8) {
          year = d.slice(0, 4);
          month = d.slice(5, 7);
          date = d.slice(8, 10);
          var givenDate = new Date(year, month - 1, date);
          var current_date = new Date(curr_year, curr_month - 1, curr_day);
          var Difference_In_Time = current_date.getTime() - givenDate.getTime();
          var diff = Difference_In_Time / (1000 * 3600 * 24);
          if (diff >= 7) {
            if (table.rows[r].cells[7].innerHTML == "Anitha") {
              bd_anitha++;
            }
            if (table.rows[r].cells[7].innerHTML == "Jeeva") {
              bd_jeeva++;
            }
            if (table.rows[r].cells[7].innerHTML == "Gowtham") {
              bd_gowtham++;
            }
            if (table.rows[r].cells[7].innerHTML == "Abdul Abbas") {
              bd_abdul++;
            }
            if (table.rows[r].cells[7].innerHTML == "Arun Kumar") {
              bd_arun++;
            }
            if (table.rows[r].cells[7].innerHTML == "Vasanth Kumar") {
              bd_vasanth++;
            }
            if (table.rows[r].cells[7].innerHTML == "Pradeep Kanth") {
              bd_pradeep++;
            }
            if (table.rows[r].cells[7].innerHTML == "Sakthivel Nagaraj") {
              bd_sakthi++;
            }
            if (table.rows[r].cells[7].innerHTML == "Radhakrishnan") {
              bd_radha++;
            }
            if (table.rows[r].cells[7].innerHTML == "Onwords") {
              bd_onwords++;
            }
            if (table.rows[r].cells[7].innerHTML == "Iyyappan K") {
              bd_iyyappan++;
            }
            if (table.rows[r].cells[7].innerHTML == "Abdul Kareem") {
              bd_abdulkareem++;
            }
            if (table.rows[r].cells[7].innerHTML == "Ashik Aboobacker") {
              bd_ashikaboobacker++;
            }
            if (table.rows[r].cells[7].innerHTML == "Harshini U") {
              bd_harshiniu++;
            }
            if (table.rows[r].cells[7].innerHTML == "Aishwarya K") {
              bd_aishwaryak++;
            }
            if (table.rows[r].cells[7].innerHTML == "Karthika M") {
              bd_karthikam++;
            }
            if (table.rows[r].cells[7].innerHTML == "Sanjeth T") {
              bd_sanjetht++;
            }
            if (table.rows[r].cells[7].innerHTML == "Gokulnath N") {
              bd_gokulnathn++;
            }
            if (table.rows[r].cells[7].innerHTML == "Mohamed Thoufic") {
              bd_mohamedthoufic++;
            }
            if (table.rows[r].cells[7].innerHTML == "Logesh P") {
              bd_logeshp++;
            }
            if (table.rows[r].cells[7].innerHTML == "Rajkannan B") {
              bd_rajkannanb++;
            }
            if (table.rows[r].cells[7].innerHTML == "Karthickraja A") {
              bd_karthickrajaa++;
            }
            if (table.rows[r].cells[7].innerHTML == "Pradeep kumar") {
              bd_pradeepkumar++;
            }
            if (table.rows[r].cells[7].innerHTML == "Anusha Unnikrishnan") {
              bd_AnushaUnnikrishnan++;
            }
            if (table.rows[r].cells[7].innerHTML == "Arasi S") {
              bd_ArasiS++;
            }
          }
        }
      }
    }
  }
  console.log(bd_anitha,bd_gowtham)
  document.getElementById("b-anitha").innerHTML = "(" + bd_anitha + ")";
  document.getElementById("b-jeeva").innerHTML = "(" + bd_jeeva + ")";
  document.getElementById("b-gowtham").innerHTML = "(" + bd_gowtham + ")";
  document.getElementById("b-abdul").innerHTML = "(" + bd_abdul + ")";
  document.getElementById("b-arun").innerHTML = "(" + bd_arun + ")";
  document.getElementById("b-vasanth").innerHTML = "(" + bd_vasanth + ")";
  document.getElementById("b-pradeep").innerHTML = "(" + bd_pradeep + ")";
  document.getElementById("b-sakthi").innerHTML = "(" + bd_sakthi + ")";
  document.getElementById("b-radha").innerHTML = "(" + bd_radha + ")";
  document.getElementById("b-onwords").innerHTML = "(" + bd_onwords + ")";
  document.getElementById("b-iyyappan").innerHTML = "(" + bd_iyyappan + ")";
  document.getElementById("b-abdulkareem").innerHTML = "(" + bd_abdulkareem + ")";
  document.getElementById("b-ashikaboobacker").innerHTML = "(" + bd_ashikaboobacker + ")";
  document.getElementById("b-harshiniu").innerHTML = "(" + bd_harshiniu + ")";
  document.getElementById("b-aishwaryak").innerHTML = "(" + bd_aishwaryak + ")";
  document.getElementById("b-karthikam").innerHTML = "(" + bd_karthikam + ")";
  document.getElementById("b-sanjetht").innerHTML = "(" + bd_sanjetht + ")";
  document.getElementById("b-gokulnathn").innerHTML = "(" + bd_gokulnathn + ")";
  document.getElementById("b-mohamedthoufic").innerHTML = "(" + bd_mohamedthoufic + ")";
  document.getElementById("b-logeshp").innerHTML = "(" + bd_logeshp + ")";
  document.getElementById("b-rajkannanb").innerHTML = "(" + bd_rajkannanb + ")";
  document.getElementById("b-karthickrajaa").innerHTML = "(" + bd_karthickrajaa + ")";
  document.getElementById("b-pradeepkumar").innerHTML = "(" + bd_pradeepkumar + ")";
  document.getElementById("b-AnushaUnnikrishnan").innerHTML = "(" + bd_AnushaUnnikrishnan + ")";
  document.getElementById("b-ArasiS").innerHTML = "(" + bd_ArasiS + ")";
}

function getBDbyName() {
  var table = document.getElementById("myTable");
  var checkedName = getCheckedByNameBD();
  if (checkedName.length === 0) {
    var table = document.getElementById("myTable");
    for (var r = 1; r < table.rows.length; r++) {
      table.rows[r].style.display = "";
    }
  }
  else {
    var currDate = new Date();
    var curr_year = currDate.getFullYear();
    var curr_month = currDate.getMonth() + 1;
    var curr_day = currDate.getDate();
    if (curr_day < 10) {
      curr_day = "0" + curr_day;
    }

    for (var r = 1; r < table.rows.length; r++) {
      var d = table.rows[r].cells[6].innerHTML;
      if (d.length >= 10) {
        var year = d.slice(0, 4);
        var month = d.slice(5, 7);
        var date = d.slice(8, 10);
        var givenDate = new Date(year, month - 1, date);

        var Difference_In_Time = currDate.getTime() - givenDate.getTime();
        var diff = Difference_In_Time / (1000 * 3600 * 24);
        if (diff >= 7 && checkedName.includes(table.rows[r].cells[7].innerHTML)) {
          table.rows[r].style.display = "";
        } else {
          table.rows[r].style.display = "none";
        }
      } else {
        table.rows[r].style.display = "none";
      }
    }
  }
}

function sortTableAscending() {
  var table, i, x, y;
  table = document.getElementById("myTable");
  var switching = true;
  while (switching) {
    switching = false;
    var rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      var Switch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        Switch = true;
        break;
      }
    }
    if (Switch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function sortTableDescending() {
  var table, i, x, y;
  table = document.getElementById("myTable");
  var switching = true;
  while (switching) {
    switching = false;
    var rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      var Switch = false;
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
        Switch = true;
        break;
      }
    }
    if (Switch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
function searchFunction() {
  var input, filter, table, tr, td, cell, i, j;
  filter = document.getElementById("myInput3").value.toLowerCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 1; i < tr.length; i++) {
    tr[i].style.display = "none";
    const tdArray = tr[i].getElementsByTagName("td");
    for (var j = 0; j < tdArray.length; j++) {
      const cellValue = tdArray[j];
      if (cellValue && cellValue.innerHTML.toLowerCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        break;
      }
    }
  }
}
function srt() {
  console.log("=========================")
  fi = document.getElementById("from-date1").value;
  si = document.getElementById("to-date1").value;
  if (fi == "" || si == "") {
    alert("Select from and to date as well");
  } else {
    fdate = document.getElementById("from-date1").value;
    tdate = document.getElementById("to-date1").value;
    console.log(fdate,tdate)
    fyear = fdate.slice(0, 4);
    fmonth = fdate.slice(5, 7);
    fday = fdate.slice(8, 10);
    tyear = tdate.slice(0, 4);
    tmonth = tdate.slice(5, 7);
    tday = tdate.slice(8, 10);
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        if (c == 6) {
          cellDate = table.rows[r].cells[8].innerHTML;
          if (cellDate.length >= 8) {
            year = cellDate.slice(0, 4);
            month = cellDate.slice(5, 7);
            date = cellDate.slice(8, 10);
            var dateFromTable = new Date(year, month - 1, date);
            var from_date = new Date(fyear, fmonth - 1, fday);
            var to_date = new Date(tyear, tmonth - 1, tday);
            var f_Difference_In_Time =
              from_date.getTime() - dateFromTable.getTime();
            var fdiff = f_Difference_In_Time / (1000 * 3600 * 24);
            var t_Difference_In_Time =
              to_date.getTime() - dateFromTable.getTime();
            var tdiff = t_Difference_In_Time / (1000 * 3600 * 24);
            if (fdiff < 0 && tdiff > 0) {
              table.rows[r].style.display = "";
            } else {
              table.rows[r].style.display = "none";
            }
          }
        }
      }
    }
  }
}

function srt1() {
  var fi = document.getElementById("from-date").value;
  var si = document.getElementById("to-date").value;
  var visibleRowCount=0;
  var Advanced = 0;
  var FollowingUp = 0;
  var Delayed = 0;
  var Newleads = 0;
  var Product = 0;
  var B2B = 0;
  var Onwords = 0;
  var UnderConstruction = 0;
  var installationCompleted = 0;
  var Interested = 0;
  var RejectedfromCustomer = 0;
  var RejectedfromMGMT = 0;
  var RejectedfromCustomerend = 0;
  var Rejectedfrommanagementside = 0;
  var testc=0;
  if (fi == "" || si == "") {
    alert("Select from and to date as well");
  } else {
    var fdate = document.getElementById("from-date").value;
    var tdate = document.getElementById("to-date").value;
    var fyear = fdate.slice(0, 4);
    var fmonth = fdate.slice(5, 7);
    var fday = fdate.slice(8, 10);
    var tyear = tdate.slice(0, 4);
    var tmonth = tdate.slice(5, 7);
    var tday = tdate.slice(8, 10);

    for (var r = 1, n = table.rows.length; r < n; r++) {
      var cellDate = table.rows[r].cells[6].innerHTML.trim();
      var cellDate1 = table.rows[r].cells[4].innerHTML.trim();
      if (cellDate.length >= 6 && cellDate !== "-") {
        var year = cellDate.slice(0, 4);
        var month = cellDate.slice(5, 7);
        var date = cellDate.slice(8, 10);
        var dateFromTable = new Date(year, month - 1, date);
        var from_date = new Date(fyear, fmonth - 1, fday);
        var to_date = new Date(tyear, tmonth - 1, tday);
        var f_Difference_In_Time = from_date.getTime() - dateFromTable.getTime();
        var fdiff = f_Difference_In_Time / (1000 * 3600 * 24);
        var t_Difference_In_Time = to_date.getTime() - dateFromTable.getTime();
        var tdiff = t_Difference_In_Time / (1000 * 3600 * 24);
        if (fdiff <= 0 && tdiff >= 0) {
          table.rows[r].style.display = ""; // Show the row
          visibleRowCount++;
          // if (cellDate1 == "Advanced") {
          //   Advanced++;
          // } if (cellDate1 == "Following Up") {
          //     FollowingUp++;
          // } if (cellDate1 == "Delayed") {
          //     Delayed++;
          // } if (cellDate1 == "New leads") {
          //   Newleads++;
          // } if (cellDate1 == "Product") {
          //   Product++;
          // } if (cellDate1 == "B2B") {
          //   B2B++;
          // } if (cellDate1 == "Onwords") {
          //   Onwords++;
          // } if (cellDate1 == "Under Construction") {
          //   UnderConstruction++;
          // } if (cellDate1 == "installation Completed") {
          //   installationCompleted++;
          // } if (cellDate1 == "Interested") {
          //   Interested++;
          // } if (cellDate1 == "Rejected from Customer" ) {
          //   RejectedfromCustomer++;
          // }
          // if (cellDate1 == "Rejected from MGMT" ) {
          //   RejectedfromMGMT++;
          // }
          // if (cellDate1 == "Rejected from Customer end" ) {
          //   RejectedfromCustomerend++;
          // }
          // if (cellDate1 == "Rejected from management side" ) {
          //   Rejectedfrommanagementside++;
          // }
          
        } else {
          table.rows[r].style.display = "none"; // Hide the row
        }
      } else {
        // Hide the row if the cell contains a symbol or is empty
        table.rows[r].style.display = "none";
      }
    }
  // var countElement = document.getElementById("Advanced");
  // countElement.textContent = Advanced;
  // var countElement = document.getElementById("FollowingUp");
  // countElement.textContent = FollowingUp;
  // var countElement = document.getElementById("Delayed");
  // countElement.textContent = Delayed;
  // var countElement = document.getElementById("Newleads");
  // countElement.textContent = Newleads;
  // var countElement = document.getElementById("Product");
  // countElement.textContent = Product;
  // var countElement = document.getElementById("B2B");
  // countElement.textContent = B2B;
  // var countElement = document.getElementById("Onwords");
  // countElement.textContent = Onwords;
  // var countElement = document.getElementById("UnderConstruction");
  // countElement.textContent = UnderConstruction;
  // var countElement = document.getElementById("installationCompleted");
  // countElement.textContent = installationCompleted;
  // var countElement = document.getElementById("Interested");
  // countElement.textContent = Interested;
  // var countElement = document.getElementById("RejectedfromCustomer");
  // countElement.textContent = RejectedfromCustomer;
  // var countElement = document.getElementById("RejectedfromMGMT");
  // countElement.textContent = RejectedfromMGMT;
  // var countElement = document.getElementById("RejectedfromCustomerend");
  // countElement.textContent = RejectedfromCustomerend;
  // var countElement = document.getElementById("Rejectedfrommanagementside");
  // countElement.textContent = Rejectedfrommanagementside;

  }
  document.getElementById("visibleRowCount").textContent = visibleRowCount;
  }

function getCheckedByState() {
  const result = [];
  var checkboxes = document.getElementsByName("state");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      if (checkboxes[i].value == "ONWORDS") {
        result.push("Rejected from Customer end", "Rejected from Customer", "Rejected from management side", "Rejected from MGMT", "Onwords");
      } 
      else if (checkboxes[i].value == "Hot lead"){
        result.push("Interested", "Hot lead");
      }
      else {
        result.push(checkboxes[i].value);
      }
    }
  }
  return result;
}
function getCheckedByName() {
  const result = [];
  var checkboxes = document.getElementsByName("staff-name");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(checkboxes[i].value);
    }
  }
  return result;
}
function getCheckedByNameBD() {
  const result = [];
  var checkboxes = document.getElementsByName("bd-staff-name");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(checkboxes[i].value);
    }
  }
  return result;
}
function getCheckedByNotFolowing() {
  const result = [];
  var checkboxes = document.getElementsByName("not-following");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      result.push(checkboxes[i].value);
    }
  }
  return result;
}
function subState() {
  const result = [];
  var checkboxes = document.getElementsByName("sub-state");
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      if (checkboxes[i].value == "ONWORDS") {
        result.push("Rejected from Customer end", "Rejected from management side");
      } else {
        result.push(checkboxes[i].value);
      }
    }
  }
  return result;
}
// functions with return
function sortByState() {
  a = getCheckedByState();
  console.log("inside func")
  if (a.length == 0) {
    console.log("inside if")
    document.getElementById("anithaId").disabled = false;
    // // document.getElementById("balaId").disabled = false;
    // // document.getElementById("jnId").disabled = false;
    document.getElementById("jeevaIdd").disabled = false;
    // // document.getElementById("akhilId").disabled = false;
    // document.getElementById("gId").disabled = false;
    // document.getElementById("thiyaguId").disabled = false;

    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        table.rows[r].style.display = "";
      }
    }
  } else {
    console.log("inside else")
    document.getElementById("anithaId").disabled = true;
    // // document.getElementById("balaId").disabled = true;
    // // document.getElementById("jnId").disabled = true;
    document.getElementById("jeevaIdd").disabled = true;
    // // document.getElementById("akhilId").disabled = true;
    // document.getElementById("gId").disabled = true;
    // document.getElementById("thiyaguId").disabled = true;

    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        if (c == 4) {
          if (a.includes(table.rows[r].cells[c].innerHTML)) {
            table.rows[r].style.display = "";
          } else {
            table.rows[r].style.display = "none";
          }
        }
      }
    }
  }
}
function sortByName() {
  countPerUser();
  var sf = 0, sd = 0, so = 0, sa = 0, sb = 0, neo = 0, su = 0, si = 0, sot = 0, following = 0, notFollowing = 0, notFol = 0, ht = 0;
  _sort = getCheckedByName();
  if (_sort.length == 0) {
    // document.getElementById("individual").style.display = "none";
    document.getElementById("fupId").disabled = false;
    document.getElementById("dId").disabled = false;
    document.getElementById("newleadsId").disabled = false;
    document.getElementById("onwordsId").disabled = false;
    document.getElementById("aId").disabled = false;
    document.getElementById("b2bId").disabled = false;
    document.getElementById("ucId").disabled = false;
    document.getElementById("icId").disabled = false;
    document.getElementById("othersId").disabled = false;
    document.getElementById("htleadId").disabled = false;
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        table.rows[r].style.display = "";
      }
    }
  } else {
    // document.getElementById("individual").style.display = "";
    document.getElementById("fupId").disabled = true;
    document.getElementById("dId").disabled = true;
    document.getElementById("onwordsId").disabled = true;
    document.getElementById("newleadsId").disabled = false;
    document.getElementById("aId").disabled = true;
    document.getElementById("b2bId").disabled = true;
    document.getElementById("ucId").disabled = true;
    document.getElementById("icId").disabled = true;
    document.getElementById("othersId").disabled = true;
    document.getElementById("htleadId").disabled = true;
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        if (c == 7) {
          if (_sort.includes(table.rows[r].cells[c].innerHTML)) {
            table.rows[r].style.display = "";
            if (table.rows[r].cells[4].innerHTML == "Following Up") {
              sf++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Delayed") {
              sd++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Rejected from Customer end") {
              so++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Rejected from management side") {
              so++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Advanced") {
              sa++;
            }
            else if (table.rows[r].cells[4].innerHTML == "B2B") {
              sb++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Under Construction") {
              su++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Installation Completed") {
              si++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Hot Lead") {
              ht++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Interested") {
              ht++;
            }
            else if (table.rows[r].cells[4].innerHTML == "Interested") {
              neo++;
            }
            else {
              sot++
            }
            if (true) {
              var currDate = new Date();
              var curr_year = currDate.getUTCFullYear();
              var curr_month = currDate.getUTCMonth() + 1;
              var curr_day = currDate.getUTCDate();
              if (curr_day < 10) {
                curr_day = "0" + curr_day;
              }
              _sd = table.rows[r].cells[6].innerHTML;
              if (_sd.length >= 8) {
                year = _sd.slice(0, 4);
                month = _sd.slice(5, 7);
                date = _sd.slice(8, 10);
                var givenDate = new Date(year, month - 1, date);
                var current_date = new Date(
                  curr_year,
                  curr_month - 1,
                  curr_day
                );
                var Difference_In_Time =
                  current_date.getTime() - givenDate.getTime();
                var diff = Difference_In_Time / (1000 * 3600 * 24);
                if (diff < 7) {
                  following++;
                  // table.rows[r].style.display = "none";
                } else {
                  notFollowing++;
                  // table.rows[r].style.display = "";
                }
              }
              notFol++;
            }
          } else {
            table.rows[r].style.display = "none";
          }
        }
      }
    }
  }

  document.getElementById("sf").innerHTML = sf;
  document.getElementById("sd").innerHTML = sd;
  document.getElementById("so").innerHTML = so;
  document.getElementById("sa").innerHTML = sa;
  document.getElementById("sb").innerHTML = sb;
  document.getElementById("su").innerHTML = su;
  document.getElementById("si").innerHTML = si;
  document.getElementById("sot").innerHTML = sot;
  document.getElementById("neo").innerHTML = neo;
  document.getElementById("ht").innerHTML = ht;
}
function checkSubState() {
  ss = subState();
  cname = getCheckedByName();
  if (ss.length > 0) {
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        if (c == 7) {
          if (table.rows[r].cells[c].innerHTML == cname) {
            if (ss.includes(table.rows[r].cells[4].innerHTML)) {
              table.rows[r].style.display = "";
            } else {
              table.rows[r].style.display = "none";
            }
          }
        }
      }
    }
  } else {
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        if (c == 7) {
          if (table.rows[r].cells[c].innerHTML == cname) {
            table.rows[r].style.display = "";
          }
        }
      }
    }
  }
}
function sothersFunction() {
  ar = [
    "Following Up",
    "Delayed",
    "Rejected from Customer end",
    "Rejected from Customer",
    "Onwords",
    "Rejected from management side",
    "Rejected from MGMT",
    "Advanced",
    "B2B",
    "Installation Completed",
    "Hot lead",
    "Under Construction",
    "Product",
    "Interested"
  ];
  ss = getCheckedByName()
  sisCh = document.getElementById("sothersId").checked;
  if (sisCh === true) {
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        if (ss.includes(table.rows[r].cells[7].innerHTML)) {
          re = table.rows[r].cells[4].innerHTML;
          if (ar.includes(re)) {
            table.rows[r].style.display = "none";
          } else {
            table.rows[r].style.display = "";
          }
        }
      }
    }
  } else {
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        table.rows[r].style.display = "";
      }
    }
  }
}
function othersFunction() {
  ar = [
    "Following Up",
    "Delayed",
    "Rejected from Customer end",
    "Rejected from Customer",
    "Onwords",
    "Rejected from management side",
    "Rejected from MGMT",
    "Advanced",
    "B2B",
    "Installation Completed",
    "Hot lead",
    "Under Construction",
    "Product",
    "Interested",
    "New leads"
  ];
  ss = getCheckedByName()
  isCh = document.getElementById("othersId").checked;
  if (isCh === true) {
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        re = table.rows[r].cells[4].innerHTML;
        if (ar.includes(re)) {
          table.rows[r].style.display = "none";
        }
      }
    }
  } else {
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        table.rows[r].style.display = "";
      }
    }
  }
}

countPerUser();
getBlackDots();
colorChange();
checkDatesInTable();

// code to check
/*
function othersFunction() {
  isCh = document.getElementById("othersId").checked;
  if (isCh === true) {
    ar = [
      "Following Up",
      "Delayed",
      "Rejected from Customer end",
      "Rejected from management side",
      "Advanced",
      "B2B",
      "Installation Completed",
    ];
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        re = table.rows[r].cells[4].innerHTML;
        if (ar.includes(re)) {
          table.rows[r].style.display = "none";
        }
      }
    }
  } else {
    for (var r = 1, n = table.rows.length; r < n; r++) {
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        re = table.rows[r].cells[4].innerHTML;
        table.rows[r].style.display = "";
      }
    }
  }
}
*/

// not used function to find not following the ones with black spot
/*
function notFollowingFunction() {
  _sort = getCheckedByName();
  if (_sort.length == 0) {
    a = getCheckedByNotFolowing();
    if (a.length == 0) {
      document.getElementById("input10").disabled = false;
      document.getElementById("input11").disabled = false;
      document.getElementById("input12").disabled = false;
      document.getElementById("input13").disabled = false;

      document.getElementById("input15").disabled = false;
      document.getElementById("input16").disabled = false;
      document.getElementById("input17").disabled = false;
      document.getElementById("input18").disabled = false;
      document.getElementById("input19").disabled = false;
      for (var r = 1, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
          table.rows[r].style.display = "";
        }
      }
    } else {
      document.getElementById("input10").disabled = true;
      document.getElementById("input11").disabled = true;
      document.getElementById("input12").disabled = true;
      document.getElementById("input13").disabled = true;

      document.getElementById("input15").disabled = true;
      document.getElementById("input16").disabled = true;
      document.getElementById("input17").disabled = true;
      document.getElementById("input18").disabled = true;
      document.getElementById("input19").disabled = true;
      // notFollowing = 0;
      // following = 0;
      var currDate = new Date();
      var curr_year = currDate.getUTCFullYear();
      var curr_month = currDate.getUTCMonth() + 1;
      var curr_day = currDate.getUTCDate();
      if (curr_day < 10) {
        curr_day = "0" + curr_day;
      }
      for (var r = 1, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
          if (c == 6) {
            d = table.rows[r].cells[c].innerHTML;
            if (d.length >= 8) {
              year = d.slice(0, 4);
              month = d.slice(5, 7);
              date = d.slice(8, 10);
              var givenDate = new Date(year, month - 1, date);
              var current_date = new Date(curr_year, curr_month - 1, curr_day);
              var Difference_In_Time =
                current_date.getTime() - givenDate.getTime();
              var diff = Difference_In_Time / (1000 * 3600 * 24);
              if (diff < 7) {
                // following++;
                table.rows[r].style.display = "none";
              } else {
                // notFollowing++;
                table.rows[r].style.display = "";
              }
            }
          }
        }
      }
    }
  } else {
    if (document.getElementById("notf").checked) {
      for (var r = 1, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
          if (c == 6) {
            if (_sort.includes(table.rows[r].cells[7].innerHTML)) {
              d = table.rows[r].cells[6].innerHTML;
              if (d.length >= 8) {
                year = d.slice(0, 4);
                month = d.slice(5, 7);
                date = d.slice(8, 10);
                var currDate = new Date();
                var curr_year = currDate.getUTCFullYear();
                var curr_month = currDate.getUTCMonth() + 1;
                var curr_day = currDate.getUTCDate();
                if (curr_day < 10) {
                  curr_day = "0" + curr_day;
                }
                var givenDate = new Date(year, month - 1, date);
                var current_date = new Date(
                  curr_year,
                  curr_month - 1,
                  curr_day
                );
                var Difference_In_Time =
                  current_date.getTime() - givenDate.getTime();
                var diff = Difference_In_Time / (1000 * 3600 * 24);
                if (diff < 7) {
                  table.rows[r].style.display = "none";
                } else {
                  table.rows[r].style.display = "";
                }
              }
            }
          }
        }
      }
    } else {
      for (var r = 1, n = table.rows.length; r < n; r++) {
        for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
          if (c == 6) {
            if (_sort.includes(table.rows[r].cells[7].innerHTML)) {
              table.rows[r].style.display = "";
            } else {
              table.rows[r].style.display = "none";
            }
          }
        }
      }
    }
  }
}
*/
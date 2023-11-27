function navcon() {
    var navCon = document.querySelector('.nav-con')
    var rightCon = document.querySelector('.right-con')
    var rightnavlist = document.querySelectorAll('.right-nav-list')
    var smallLogo = document.querySelector('.small-logo')
    var closeIcon = document.querySelector('.close-icons')
    var menuIcon = document.querySelector('.menu-icons')
    var navmaincon = document.getElementById('nav-main-con');
    var userprofilelist = document.getElementById('userprofilelist');
    if (navCon.style.width == '5%') {
        navCon.style.width = '18%'
        rightCon.style.width = '82%'
        navmaincon.style.height='56vh'
        userprofilelist.style.display='block'
        for (const rightcon of rightnavlist) {
            rightcon.style.display = 'block'
        }
        smallLogo.style.display = 'none'
        closeIcon.style.display = 'block'
        menuIcon.style.display = 'none'
    

    }
 
    else {
        navCon.style.width = '5%'
        rightCon.style.width = '95%'
        for (const rightnav of rightnavlist) {
            rightnav.style.display = 'none'
        }
        smallLogo.style.display = 'block'
        closeIcon.style.display = 'none'
        menuIcon.style.display = 'block'
        navmaincon.style.height='76vh'
        userprofilelist.style.display='none'
    }
}
function rightcon() {
    var navCon = document.querySelector('.nav-con')
    var rightCon = document.querySelector('.right-con')
    var rightnavlist = document.querySelectorAll('.right-nav-list')
    var smallLogo = document.querySelector('.small-logo')
    var closeIcon = document.querySelector('.close-icons')
    var menuIcon = document.querySelector('.menu-icons')
 
    navCon.style.width = '5%'
    rightCon.style.width = '95%'
    for (const rightnav of rightnavlist) {
        rightnav.style.display = 'none'
    }
    smallLogo.style.display = 'block'
    closeIcon.style.display = 'none'
    menuIcon.style.display = 'block'
    navmaincon.style.height='76vh'

}

// ===============activd nav start============

var header = document.getElementById("nav-main-con");
var btns = header.getElementsByClassName("navlistmenu");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("navlistmenu-active");
        current[0].className = current[0].className.replace(" navlistmenu-active", "");
        this.className += " navlistmenu-active";
    });
}
// ===============activd nav end============

// ===========check order button==============

const checkOrder = document.querySelectorAll('.check-order');
const orderButton = document.querySelector('#ordBtn');

checkOrder.forEach(chekBtn => {
    chekBtn.addEventListener('change', () => {
        const atLeastOneChecked = Array.from(checkOrder).some(chk => chk.checked);
        if (atLeastOneChecked) {
            orderButton.style.display = 'block';
        } else {
            orderButton.style.display = 'none';
        }
    });
});

// ===========check order button============== 


// break
var xValues = [];
var yValues = [30, 70];
var barColors = [
    "#7FA9FB",
    "#266386",
];
new Chart("myChart12", {
    type: "doughnut",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues,
            borderColor: 'transparent'

        }]
    },
    options: {
        cutoutPercentage: 80,
        title: {
            display: true,
            text: ""
        }
    }
});

//   =============leave form start========

const casualLeave = document.getElementById('casual-leaves')
const sickleave = document.getElementById('sick-leave')
const permission = document.getElementById('permission')
const casualBtn = document.getElementById('casualBtn')
const permissionBtn = document.getElementById('permissionBtn')
const sickBtn = document.getElementById('sickBtn')

casualBtn.addEventListener('click', () => {
    casualLeave.style.display = 'block'
    sickleave.style.display = 'none'
    permission.style.display = 'none'
    casualBtn.classList.add('active-forms')
    sickBtn.classList.remove('active-forms')
    permissionBtn.classList.remove('active-forms')

})
sickBtn.addEventListener('click', () => {
    casualLeave.style.display = 'none'
    sickleave.style.display = 'block'
    permission.style.display = 'none'
    casualBtn.classList.remove('active-forms')
    sickBtn.classList.add('active-forms')
    permissionBtn.classList.remove('active-forms')

})
permissionBtn.addEventListener('click', () => {
    casualLeave.style.display = 'none'
    sickleave.style.display = 'none'
    permission.style.display = 'block'
    casualBtn.classList.remove('active-forms')
    sickBtn.classList.remove('active-forms')
    permissionBtn.classList.add('active-forms')

})

//   =============leave form end========

const newLeaveBtn = document.getElementById('newLeave')
const leaveHistoryBtn = document.getElementById('leaveHistory')
const leaveForm = document.getElementById('leavem_con')
const leaveHistory = document.getElementById('leaveHistorys')

newLeaveBtn.addEventListener('click', () => {
    leaveForm.style.display = 'block'
    leaveHistory.style.display = 'none'
    newLeaveBtn.classList.add('active-form-li')
    leaveHistoryBtn.classList.remove('active-form-li')
})

leaveHistoryBtn.addEventListener('click', () => {
    leaveForm.style.display = 'none'
    leaveHistory.style.display = 'block'
    leaveHistoryBtn.classList.add('active-form-li')
    newLeaveBtn.classList.remove('active-form-li')
})

// =============late entry start===================



function approvalpage() {
    const lateApprovalBtn = document.getElementById('lateApprovalBtn')
    const leaveApprovalBtn = document.getElementById('leaveApprovalBtn')
    const lateApprovalTable = document.getElementById('lateApprovalTable')
    const leaveApprovalTable = document.getElementById('leaveApprovalTable')

   
        lateApprovalTable.style.display = 'block'
        leaveApprovalTable.style.display = 'none'
        lateApprovalBtn.classList.add('active-form-li')
        leaveApprovalBtn.classList.remove('active-form-li')

}
function lateapproval() {
    const lateApprovalBtn = document.getElementById('lateApprovalBtn')
    const leaveApprovalBtn = document.getElementById('leaveApprovalBtn')
    const lateApprovalTable = document.getElementById('lateApprovalTable')
    const leaveApprovalTable = document.getElementById('leaveApprovalTable')

   
        lateApprovalTable.style.display = 'none'
        leaveApprovalTable.style.display = 'block'
        lateApprovalBtn.classList.remove('active-form-li')
        leaveApprovalBtn.classList.add('active-form-li')

}

// ==================leave full day halfday=====

function fullday() {
    const fullday = document.getElementById('fullday')
    const halfday = document.getElementById('halfday')
    const halfdayBtn = document.getElementById('halfdayBtn')
    const fulldayBtn = document.getElementById('fulldayBtn')
    fullday.style.display = 'block'
    halfday.style.display = 'none'
    fulldayBtn.classList.add('active-forms')
    halfdayBtn.classList.remove('active-forms')
}
function halfday() {
    const fullday = document.getElementById('fullday')
    const halfday = document.getElementById('halfday')
    const halfdayBtn = document.getElementById('halfdayBtn')
    const fulldayBtn = document.getElementById('fulldayBtn')
    fullday.style.display = 'none'
    halfday.style.display = 'block'
    fulldayBtn.classList.remove('active-forms')
    halfdayBtn.classList.add('active-forms')
}

// ==================sick=================

function fulldaysick() {
    const fulldaysick = document.getElementById('fulldaysick')
    const halfdaysick = document.getElementById('halfdaysick')
    const halfdayBtn = document.getElementById('halfdaysickBtn')
    const fulldayBtn = document.getElementById('fulldaysickBtn')
    fulldaysick.style.display = 'block'
    halfdaysick.style.display = 'none'
    fulldayBtn.classList.add('active-forms')
    halfdayBtn.classList.remove('active-forms')
}
function halfdaysick() {
    const fulldaysick = document.getElementById('fulldaysick')
    const halfdaysick = document.getElementById('halfdaysick')
    const halfdayBtn = document.getElementById('halfdaysickBtn')
    const fulldayBtn = document.getElementById('fulldaysickBtn')
    fulldaysick.style.display = 'none'
    halfdaysick.style.display = 'block'
    fulldayBtn.classList.remove('active-forms')
    halfdayBtn.classList.add('active-forms')
}



// =============pr lead form=============

function createLead() {
    const usingData = document.getElementById('usingData')
    const usingFile = document.getElementById('usingFile')
    const LeadForm = document.getElementById('create_lead_form')
    const dataForm = document.getElementById('create_data_lead')

        LeadForm.style.display = 'block'
        dataForm.style.display = 'none'
        usingData.classList.add('active-form-late')
        usingFile.classList.remove('active-form-late')
    
}
function createLeadfile() {
    const usingData = document.getElementById('usingData')
    const usingFile = document.getElementById('usingFile')
    const LeadForm = document.getElementById('create_lead_form')
    const dataForm = document.getElementById('create_data_lead')

        LeadForm.style.display = 'none'
        dataForm.style.display = 'block'
        usingData.classList.remove('active-form-late')
        usingFile.classList.add('active-form-late')
    
}


// ============financial====================



function exp() {
    const expenseBtn = document.getElementById('expenseBtn')
    const IncomeBtn = document.getElementById('IncomeBtn')
    const expenseTable = document.getElementById('expense-table')
    const incomeTable = document.getElementById('income-table')
    const ExpMainNav = document.getElementById('exp-main-nav')
    const IncMainNav = document.getElementById('inc-main-nav')
    expenseBtn.style.display = 'block'
    IncomeBtn.style.display = 'none'
    expenseTable.style.display = 'block'
    incomeTable.style.display = 'none'
    ExpMainNav.classList.add('active-financial')
    IncMainNav.classList.remove('active-financial')
}

function inc() {
    const expenseBtn = document.getElementById('expenseBtn')
    const IncomeBtn = document.getElementById('IncomeBtn')
    const expenseTable = document.getElementById('expense-table')
    const incomeTable = document.getElementById('income-table')
    const ExpMainNav = document.getElementById('exp-main-nav')
    const IncMainNav = document.getElementById('inc-main-nav')
    expenseBtn.style.display = 'none'
    IncomeBtn.style.display = 'block'
    expenseTable.style.display = 'none'
    incomeTable.style.display = 'block'
    ExpMainNav.classList.remove('active-financial')
    IncMainNav.classList.add('active-financial')
}

function expInpBox() {
    const expBox = document.getElementById('exp-box')
    const IncBox = document.getElementById('inc-box')
    if (expBox.style.display == 'none') {
        expBox.style.display = 'block'
        IncBox.style.display = 'none'
    }
    else {
        expBox.style.display = 'none'
        IncBox.style.display = 'none'
    }

}
function incInpBox() {
    const expBox = document.getElementById('exp-box')
    const IncBox = document.getElementById('inc-box')
    if (IncBox.style.display == 'none') {
        expBox.style.display = 'none'
        IncBox.style.display = 'block'
    }
    else {
        expBox.style.display = 'none'
        IncBox.style.display = 'none'
    }

}


// ======================
function printTable() {
    var table = document.getElementById("myTable");
    var newWin = window.open('', '', 'width=800,height=600');
    newWin.document.open();
    newWin.document.write('<style type="text/css">');
    newWin.document.write('@media print {');
    newWin.document.write('  body { width: 90%; }'); // Make sure the body is full width
    newWin.document.write('  body { margin: 0 auto; }'); // Make sure the body is full width
    newWin.document.write('  table { width: 100%; }'); // Make sure the table is full width
    newWin.document.write('  table { text-align: center; }'); // Make sure the table is full width
    newWin.document.write('  table { border: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table th { border-bottom: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table td { border-bottom: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table td { padding: 4px; }'); // Make sure the table is full width
    newWin.document.write('}');
    newWin.document.write('</style>');
    newWin.document.write('<html><head><title>Installation Details</title></head><body>');
    newWin.document.write('<h1>Installation Details</h1>');
    newWin.document.write(table.outerHTML);
    newWin.document.write('</body></html>');
    newWin.document.close();
    newWin.print();
    newWin.close();
}

// ====================create WTA =========

function createGate() {
    const createGate = document.getElementById('createGate')
    const createWTA = document.getElementById('createWTA')
    const creategateBtn = document.getElementById('creategateBtn')
    const createwtaBtn = document.getElementById('createwtaBtn')
    createGate.style.display = 'block';
    createWTA.style.display = 'none';
    creategateBtn.classList.add('active-form-late')
    createwtaBtn.classList.remove('active-form-late')
}

function createWTA() {
    const createGate = document.getElementById('createGate')
    const createWTA = document.getElementById('createWTA')
    const creategateBtn = document.getElementById('creategateBtn')
    const createwtaBtn = document.getElementById('createwtaBtn')

    createGate.style.display = 'none';
    createWTA.style.display = 'block';
    creategateBtn.classList.remove('active-form-late')
    createwtaBtn.classList.add('active-form-late')
}

// ============checkin list print script==========

function printCheckinTable() {
    var table = document.getElementById("checkinTable");
    var newWin = window.open('', '', 'width=800,height=600');
    newWin.document.open();
    newWin.document.write('<style type="text/css">');
    newWin.document.write('@media print {');
    newWin.document.write('  body { width: 90%; }'); // Make sure the body is full width
    newWin.document.write('  body { margin: 0 auto; }'); // Make sure the body is full width
    newWin.document.write('  table { width: 100%; }'); // Make sure the table is full width
    newWin.document.write('  table { text-align: center; }'); // Make sure the table is full width
    newWin.document.write('  table { border: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table th { border-bottom: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table td { border-bottom: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table td { padding: 4px; }'); // Make sure the table is full width
    newWin.document.write('}');
    newWin.document.write('</style>');
    newWin.document.write('<html><head><title>Installation Details</title></head><body>');
    newWin.document.write('<h1>Check In List</h1>');
    newWin.document.write(table.outerHTML);
    newWin.document.write('</body></html>');
    newWin.document.close();
    newWin.print();
    newWin.close();
}
function printAbsentTable() {
    var table = document.getElementById("absentTable");
    var newWin = window.open('', '', 'width=800,height=600');
    newWin.document.open();
    newWin.document.write('<style type="text/css">');
    newWin.document.write('@media print {');
    newWin.document.write('  body { width: 90%; }'); // Make sure the body is full width
    newWin.document.write('  body { margin: 0 auto; }'); // Make sure the body is full width
    newWin.document.write('  table { width: 100%; }'); // Make sure the table is full width
    newWin.document.write('  table { text-align: center; }'); // Make sure the table is full width
    newWin.document.write('  table { border: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table th { border-bottom: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table td { border-bottom: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table td { padding: 4px; }'); // Make sure the table is full width
    newWin.document.write('}');
    newWin.document.write('</style>');
    newWin.document.write('<html><head><title>Installation Details</title></head><body>');
    newWin.document.write('<h1>Absent List</h1>');
    newWin.document.write(table.outerHTML);
    newWin.document.write('</body></html>');
    newWin.document.close();
    newWin.print();
    newWin.close();
}
function printAttendanceTable() {
    var table = document.getElementById("attendance-table");
    var newWin = window.open('', '', 'width=800,height=600');
    newWin.document.open();
    newWin.document.write('<style type="text/css">');
    newWin.document.write('@media print {');
    newWin.document.write('  body { width: 90%; }'); // Make sure the body is full width
    newWin.document.write('  body { margin: 0 auto; }'); // Make sure the body is full width
    newWin.document.write('  table { width: 100%; }'); // Make sure the table is full width
    newWin.document.write('  table { text-align: center; }'); // Make sure the table is full width
    newWin.document.write('  table { border: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table th { border-bottom: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table th:last-child() { display:none; }'); // Make sure the table is full width
    newWin.document.write('  table td { border-bottom: 1px solid #282828; }'); // Make sure the table is full width
    newWin.document.write('  table td { padding: 4px; }'); // Make sure the table is full width
    newWin.document.write('}');
    newWin.document.write('</style>');
    newWin.document.write('<h1>Attendance List</h1>');
    newWin.document.write(table.outerHTML);
    newWin.document.write('</body></html>');
    newWin.document.close();
    newWin.print();
    newWin.close();
}

function absentBtn() {
    const checkinTable = document.getElementById('checkin-table')
    const absentTable = document.getElementById('absentList-table')
    const absentBtns = document.getElementById('absentBtn')
    const presentBtns = document.getElementById('presentBtn')
    const printcheckBtn = document.getElementById('printcheckBtn')
    const printabsentBtn = document.getElementById('printabsentBtn')
    const checkinDate =document.getElementById("checkin-date")
    const absentDate = document.getElementById("absent-date")
    const myForm =document.getElementById("myForm")
    const absentForm = document.getElementById('absentmyForm')
    const presentSearch = document.getElementById("presntSearch")
    const absentSearch = document.getElementById("absentSearch")

    absentTable.style.display = 'block'
    checkinTable.style.display = 'none'
    absentBtns.style.display = 'none'
    presentBtns.style.display = 'block'
    printcheckBtn.style.display = 'none'
    printabsentBtn.style.display = 'block'
    absentDate.style.display='block'
    checkinDate.style.display='none'
    myForm.style.display='none'
    absentForm.style.display='block'
    presentSearch.style.display='none'
    absentSearch.style.display='block'
}

function presentBtn() {
    const checkinTable = document.getElementById('checkin-table')
    const absentTable = document.getElementById('absentList-table')
    const presentBtns = document.getElementById('presentBtn')
    const absentBtns = document.getElementById('absentBtn')
    const printcheckBtn = document.getElementById('printcheckBtn')
    const printabsentBtn = document.getElementById('printabsentBtn')
    const checkinDate =document.getElementById("checkin-date")
    const absentDate = document.getElementById("absent-date")
    const myForm =document.getElementById("myForm")
    const absentForm = document.getElementById('absentmyForm')
    const presentSearch = document.getElementById("presntSearch")
    const absentSearch = document.getElementById("absentSearch")


    absentTable.style.display = 'none'
    checkinTable.style.display = 'block'
    presentBtns.style.display = 'none'
    absentBtns.style.display = 'block'
    printcheckBtn.style.display = 'block'
    printabsentBtn.style.display = 'none'
    absentDate.style.display='none'
    checkinDate.style.display='block'
    myForm.style.display='block'
    absentForm.style.display='none'
    presentSearch.style.display='block'
    absentSearch.style.display='none'
}

// =============



function quotation() {
    const quotationTable = document.getElementById('quotationTable')
    const proformaTable = document.getElementById('proformaTable')
    const invoiceTable = document.getElementById('invoiceTable')
    const quotationBtn = document.getElementById('quotationBtn')
    const proformaBtn = document.getElementById('proformaBtn')
    const invoiceBtn = document.getElementById('invoiceBtn')
    quotationTable.style.display = 'block'
    proformaTable.style.display = 'none'
    invoiceTable.style.display = 'none'
    quotationBtn.classList.add('active-form-li')
    proformaBtn.classList.remove('active-form-li')
    invoiceBtn.classList.remove('active-form-li')
}
function proforma() {
    const quotationTable = document.getElementById('quotationTable')
    const proformaTable = document.getElementById('proformaTable')
    const invoiceTable = document.getElementById('invoiceTable')
    const quotationBtn = document.getElementById('quotationBtn')
    const proformaBtn = document.getElementById('proformaBtn')
    const invoiceBtn = document.getElementById('invoiceBtn')
    quotationTable.style.display = 'none'
    proformaTable.style.display = 'block'
    invoiceTable.style.display = 'none'
    quotationBtn.classList.remove('active-form-li')
    proformaBtn.classList.add('active-form-li')
    invoiceBtn.classList.remove('active-form-li')
}
function invoice() {
    const quotationTable = document.getElementById('quotationTable')
    const proformaTable = document.getElementById('proformaTable')
    const invoiceTable = document.getElementById('invoiceTable')
    const quotationBtn = document.getElementById('quotationBtn')
    const proformaBtn = document.getElementById('proformaBtn')
    const invoiceBtn = document.getElementById('invoiceBtn')
    quotationTable.style.display = 'none'
    proformaTable.style.display = 'none'
    invoiceTable.style.display = 'block'
    quotationBtn.classList.remove('active-form-li')
    proformaBtn.classList.remove('active-form-li')
    invoiceBtn.classList.add('active-form-li')
}


// ===========================

function weeklytarget(){
    const weeklytarget = document.getElementById('weeklytarget')
    const employeweek = document.getElementById('employeofweek')
    const progress = document.getElementById('progress')
    const weeklyTable = document.getElementById('weekltTargetTable')
    const emplytable = document.getElementById('employeofweekTable')
    const progressTable= document.getElementById('progressTable')

    weeklyTable.style.display='block'
    emplytable.style.display='none'
    progressTable.style.display='none'
    weeklytarget.classList.add('active-form-late')
    employeweek.classList.remove('active-form-late')
    progress.classList.remove('active-form-late')
    
}
function employeeweek(){
    const weeklytarget = document.getElementById('weeklytarget')
    const employeweek = document.getElementById('employeofweek')
    const progress = document.getElementById('progress')
    const weeklyTable = document.getElementById('weekltTargetTable')
    const emplytable = document.getElementById('employeofweekTable')
    const progressTable= document.getElementById('progressTable')

    weeklyTable.style.display='none'
    emplytable.style.display='block'
    progressTable.style.display='none'
    weeklytarget.classList.remove('active-form-late')
    employeweek.classList.add('active-form-late')
    progress.classList.remove('active-form-late')
    
}
function progress(){
    const weeklytarget = document.getElementById('weeklytarget')
    const employeweek = document.getElementById('employeofweek')
    const progress = document.getElementById('progress')
    const weeklyTable = document.getElementById('weekltTargetTable')
    const emplytable = document.getElementById('employeofweekTable')
    const progressTable= document.getElementById('progressTable')

    weeklyTable.style.display='none'
    emplytable.style.display='none'
    progressTable.style.display='block'
    weeklytarget.classList.remove('active-form-late')
    employeweek.classList.remove('active-form-late')
    progress.classList.add('active-form-late')
    
}



// ===================view workmanager==========

function completework(){
    const completeTable = document.getElementById('colpleteTable')
    const didnotworkdoneTable = document.getElementById('didnotworkdoneTable')
    const stillworkingtable = document.getElementById('stillworkingtable')
    const CompleteWork = document.getElementById('CompleteWork')
    const didnotworkdone = document.getElementById('didnotworkdone')
    const Stillworkingon = document.getElementById('Stillworkingon')

    completeTable.style.display='block'
    didnotworkdoneTable.style.display='none'
    stillworkingtable.style.display='none'
    CompleteWork.classList.add('active-form-li')
    didnotworkdone.classList.remove('active-form-li')
    Stillworkingon.classList.remove('active-form-li')
    
}
function didnotworkdone(){
    const completeTable = document.getElementById('colpleteTable')
    const didnotworkdoneTable = document.getElementById('didnotworkdoneTable')
    const stillworkingtable = document.getElementById('stillworkingtable')
    const CompleteWork = document.getElementById('CompleteWork')
    const didnotworkdone = document.getElementById('didnotworkdone')
    const Stillworkingon = document.getElementById('Stillworkingon')

    completeTable.style.display='none'
    didnotworkdoneTable.style.display='block'
    stillworkingtable.style.display='none'
    CompleteWork.classList.remove('active-form-li')
    didnotworkdone.classList.add('active-form-li')
    Stillworkingon.classList.remove('active-form-li')

}
function Stillworkingon(){
    const completeTable = document.getElementById('colpleteTable')
    const didnotworkdoneTable = document.getElementById('didnotworkdoneTable')
    const stillworkingtable = document.getElementById('stillworkingtable')
    const CompleteWork = document.getElementById('CompleteWork')
    const didnotworkdone = document.getElementById('didnotworkdone')
    const Stillworkingon = document.getElementById('Stillworkingon')

    completeTable.style.display='none'
    didnotworkdoneTable.style.display='none'
    stillworkingtable.style.display='block'
    CompleteWork.classList.remove('active-form-li')
    didnotworkdone.classList.remove('active-form-li')
    Stillworkingon.classList.add('active-form-li')

}

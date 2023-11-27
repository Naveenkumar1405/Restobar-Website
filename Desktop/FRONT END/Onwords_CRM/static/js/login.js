

// ----CMO add and calulate ------//

function calInpBox() {
    const calpoint = document.getElementById('cal-point')
    const addpoint = document.getElementById('add-point')

    calpoint.style.display = 'block'
    addpoint.style.display = 'none'

}
function addInpBox() {
    const calpoint = document.getElementById('cal-point')
    const addpoint = document.getElementById('add-point')

    addpoint.style.display = 'block'
    calpoint.style.display = 'none'


}

// ----CMO add and calulate ------//


const calculateBtn = document.getElementById('calculateBtn')
const addBtn = document.getElementById('addBtn')
const calpoint = document.getElementById('cal-point')
const addpoint = document.getElementById('add-point')

function notipanel() {
    const firstlineBtn = document.getElementById('firstline-Btn')
    const targetBtn = document.getElementById('target-Btn')
    const pendingBtn = document.getElementById('pending-Btn')
    const notipanel = document.getElementById('notipanl-Btn')
    const installaBtn = document.getElementById('Install-Btn')
    const weeklyBtn = document.getElementById('weekly-Btn')

    firstlineBtn.style.display = 'block'
    targetBtn.style.display = 'none'
    pendingBtn.style.display = 'none'
    notipanel.classList.add('active-inv')
    installaBtn.classList.remove('active-inv')
    weeklyBtn.classList.remove('active-inv')

}

function installation() {
    const firstlineBtn = document.getElementById('firstline-Btn')
    const targetBtn = document.getElementById('target-Btn')
    const pendingBtn = document.getElementById('pending-Btn')
    const notipanel = document.getElementById('notipanl-Btn')
    const installaBtn = document.getElementById('Install-Btn')
    const weeklyBtn = document.getElementById('weekly-Btn')

    firstlineBtn.style.display = 'none'
    targetBtn.style.display = 'block'
    pendingBtn.style.display = 'none'
    notipanel.classList.remove('active-inv')
    installaBtn.classList.add('active-inv')
    weeklyBtn.classList.remove('active-inv')

}
function target() {
    const firstlineBtn = document.getElementById('firstline-Btn')
    const targetBtn = document.getElementById('target-Btn')
    const pendingBtn = document.getElementById('pending-Btn')
    const notipanel = document.getElementById('notipanl-Btn')
    const installaBtn = document.getElementById('Install-Btn')
    const weeklyBtn = document.getElementById('weekly-Btn')

    firstlineBtn.style.display = 'none'
    targetBtn.style.display = 'none'
    pendingBtn.style.display = 'block'
    notipanel.classList.remove('active-inv')
    installaBtn.classList.remove('active-inv')
    weeklyBtn.classList.add('active-inv')

}


function productBtn() {
    const productTable = document.getElementById('product-table')
    const adminPoints = document.getElementById('admin-points')
    const prdashBoard = document.getElementById('prdashboard')
    const proNav = document.getElementById('pro-nav')
    const adminNav = document.getElementById('admin-nav')
    const prperNav = document.getElementById('prper-nav')


    productTable.style.display = 'block'
    adminPoints.style.display = 'none'
    prdashBoard.style.display = 'none'
    proNav.classList.add('active-inv')
    adminNav.classList.remove('active-inv')
    prperNav.classList.remove('active-inv')
}

function adminBtn() {
    const productTable = document.getElementById('product-table')
    const adminPoints = document.getElementById('admin-points')
    const prdashBoard = document.getElementById('prdashboard')
    const proNav = document.getElementById('pro-nav')
    const adminNav = document.getElementById('admin-nav')
    const prperNav = document.getElementById('prper-nav')


    productTable.style.display = 'none'
    adminPoints.style.display = 'block'
    prdashBoard.style.display = 'none'
    proNav.classList.remove('active-inv')
    adminNav.classList.add('active-inv')
    prperNav.classList.remove('active-inv')
}
function prpercBtn() {
    const productTable = document.getElementById('product-table')
    const adminPoints = document.getElementById('admin-points')
    const prdashBoard = document.getElementById('prdashboard')
    const proNav = document.getElementById('pro-nav')
    const adminNav = document.getElementById('admin-nav')
    const prperNav = document.getElementById('prper-nav')


    productTable.style.display = 'none'
    adminPoints.style.display = 'none'
    prdashBoard.style.display = 'block'
    proNav.classList.remove('active-inv')
    adminNav.classList.remove('active-inv')
    prperNav.classList.add('active-inv')
}



const selectNav = document.getElementById('select-nav')
const staffName = document.getElementById('staff-name')
const depBtn = document.getElementById('dep-Btn')
const staffDetailsWorkdone = document.getElementById('staff-details-workdone')
const workdoneView = document.getElementById('workdone-view')


function selectBtn() {
    depBtn.style.display = 'block'
    staffDetailsWorkdone.style.display = 'none'
    workdoneView.style.display = 'none'
    staffName.display.style = 'block'
    selectNav.classList.add('activ-inv')
}
function choosestaff() {
    depBtn.style.display = 'none'
    staffDetailsWorkdone.style.display = 'none'
    workdoneView.style.display = 'none'
    staffName.display.style = 'block'
    selectNav.classList.add('activ-inv')
}





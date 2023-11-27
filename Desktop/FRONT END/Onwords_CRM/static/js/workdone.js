alert('dhfbv')
function productBtn() {
    const productTable = document.getElementById('product-table')
    const updateTable = document.getElementById('update-table')
    const adminPoints = document.getElementById('admin-points')
    const prdashBoard = document.getElementById('prdashboard')
    const proNav = document.getElementById('pro-nav')
    const updateNav = document.getElementById('update-nav')
    const adminNav = document.getElementById('admin-nav')
    const prperNav = document.getElementById('prper-nav')


    productTable.style.display = 'block'
    updateTable.style.display = 'none'
    adminPoints.style.display = 'none'
    prdashBoard.style.display = 'none'
    proNav.classList.add('active-inv')
    updateNav.classList.remove('active-inv')
    adminNav.classList.remove('active-inv')
    prperNav.classList.remove('active-inv')
}
function updateBtn() {

    const productTable = document.getElementById('product-table')
    const updateTable = document.getElementById('update-table')
    const adminPoints = document.getElementById('admin-points')
    const prdashBoard = document.getElementById('prdashboard')
    const proNav = document.getElementById('pro-nav')
    const updateNav = document.getElementById('update-nav')
    const adminNav = document.getElementById('admin-nav')
    const prperNav = document.getElementById('prper-nav')

    productTable.style.display = 'none'
    updateTable.style.display = 'block'
    adminPoints.style.display = 'none'
    prdashBoard.style.display = 'none'
    proNav.classList.remove('active-inv')
    updateNav.classList.add('active-inv')
    adminNav.classList.remove('active-inv')
    prperNav.classList.remove('active-inv')
}
function adminBtn() {
    const productTable = document.getElementById('product-table')
    const updateTable = document.getElementById('update-table')
    const adminPoints = document.getElementById('admin-points')
    const prdashBoard = document.getElementById('prdashboard')
    const proNav = document.getElementById('pro-nav')
    const updateNav = document.getElementById('update-nav')
    const adminNav = document.getElementById('admin-nav')
    const prperNav = document.getElementById('prper-nav')


    productTable.style.display = 'none'
    updateTable.style.display = 'none'
    adminPoints.style.display = 'block'
    prdashBoard.style.display = 'none'
    proNav.classList.remove('active-inv')
    updateNav.classList.remove('active-inv')
    adminNav.classList.add('active-inv')
    prperNav.classList.remove('active-inv')
}
function prpercBtn() {
    const productTable = document.getElementById('product-table')
    const updateTable = document.getElementById('update-table')
    const adminPoints = document.getElementById('admin-points')
    const prdashBoard = document.getElementById('prdashboard')
    const proNav = document.getElementById('pro-nav')
    const updateNav = document.getElementById('update-nav')
    const adminNav = document.getElementById('admin-nav')
    const prperNav = document.getElementById('prper-nav')


    productTable.style.display = 'none'
    updateTable.style.display = 'none'
    adminPoints.style.display = 'none'
    prdashBoard.style.display = 'block'
    proNav.classList.remove('active-inv')
    updateNav.classList.remove('active-inv')
    adminNav.classList.remove('active-inv')
    prperNav.classList.add('active-inv')
}

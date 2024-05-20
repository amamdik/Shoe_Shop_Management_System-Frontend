$(document).ready(function () {
    $(".nav-link-color").click(function () {
        $(".nav-link-color").removeClass("active bg-dark-blue");
        $(this).closest(".nav-link-color").addClass("active bg-dark-blue");
    });
});

//navigation
$("#btnDashboard").on('click',() =>{
    $("#signInForm").css('display','none');
    $("#dashboardForm").css('display','block');
    $("#employeeForm").css('display','none');
    $("#topBar").css('display','block');
    $("#customerForm").css('display','none');
    $("#sidenav-main").css('display','block');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','none');
    $("#sizeForm").css('display','none');
})

//employee form
$("#btnEmployee").on('click',() =>{
    $("#signInForm").css('display','none');
    $("#dashboardForm").css('display','none');
    $("#employeeForm").css('display','block');
    $("#topBar").css('display','block');
    $("#customerForm").css('display','none');
    $("#sidenav-main").css('display','block');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','none');
    $("#sizeForm").css('display','none');
})

//signout form
$("#btnSingOut").on('click',() =>{
    $("#signInForm").css('display','block');
    $("#dashboardForm").css('display','none');
    $("#employeeForm").css('display','none');
    $("#topBar").css('display','none');
    $("#customerForm").css('display','none');
    $("#sidenav-main").css('display','none');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','none');
    $("#sizeForm").css('display','none');
})

//customer form
$("#btnCustomer").on('click',() =>{
    $("#signInForm").css('display','none');
    $("#dashboardForm").css('display','none');
    $("#employeeForm").css('display','none');
    $("#topBar").css('display','block');
    $("#customerForm").css('display','block');
    $("#sidenav-main").css('display','block');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','none');
    $("#sizeForm").css('display','none');
})

//inventory form
$("#btnInventory").on('click',() =>{
    $("#signInForm").css('display','none');
    $("#dashboardForm").css('display','none');
    $("#employeeForm").css('display','none');
    $("#topBar").css('display','block');
    $("#customerForm").css('display','none');
    $("#sidenav-main").css('display','block');
    $("#inventoryForm").css('display','block');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','none');
    $("#sizeForm").css('display','none');
})

//supplier form
$("#btnSupplier").on('click',() =>{
    $("#signInForm").css('display','none');
    $("#dashboardForm").css('display','none');
    $("#employeeForm").css('display','none');
    $("#topBar").css('display','block');
    $("#customerForm").css('display','none');
    $("#sidenav-main").css('display','block');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','block');
    $("#saleForm").css('display','none');
    $("#sizeForm").css('display','none');
})

//sale form
$("#btnSale").on('click',() =>{
    $("#signInForm").css('display','none');
    $("#dashboardForm").css('display','none');
    $("#employeeForm").css('display','none');
    $("#topBar").css('display','block');
    $("#customerForm").css('display','none');
    $("#sidenav-main").css('display','block');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','block');
    $("#sizeForm").css('display','none');
})

//size form
$("#btnSize").on('click',() =>{
    $("#signInForm").css('display','none');
    $("#dashboardForm").css('display','none');
    $("#employeeForm").css('display','none');
    $("#topBar").css('display','block');
    $("#customerForm").css('display','none');
    $("#sidenav-main").css('display','block');
    $("#inventoryForm").css('display','none');
    $("#supplierForm").css('display','none');
    $("#saleForm").css('display','none');
    $("#sizeForm").css('display','block');
})

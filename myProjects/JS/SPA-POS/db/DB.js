

var customerDB = new Array();
var itemDB = new Array();
var orderDB = new Array();
var cartDB = new Array();



function saveCustomer(customer) {
    customerDB.push(customer);

    $("#customerTable > tr").click(function () {
        $("#cusDetailPopup").modal('show');
        $("#txtCusID").val($(this).children(":eq(0)").text());
        $("#txtCusName").val($(this).children(":eq(1)").text());
        $("#txtCusAddress").val($(this).children(":eq(2)").text());
        $("#txtCusTP").val($(this).children(":eq(3)").text());
    });
}

function updateCustomer(id, name, address , tp){
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId() === id) {
            customerDB[i].setCusName(name);
            customerDB[i].setCusAddress(address);
            customerDB[i].setCusTP(tp);
            return true;
        }
    }
    return false;
}

function searchCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId() === id) {
            return customerDB[i];
        }
    }
    return false;
}

function deleteCustomer(id) {
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId() === id) {

            customerDB.splice(i, 1);
            $("#customerTable").empty();
            loadAllCustomers();
            clearAll();
        }
    }
    return false;
}


function saveItem(item) {
    //console.log();
    itemDB.push(item);
    $("#itemTable > tr").click(function () {
        $("#txtItemCode").val($(this).children(":eq(0)").text());
        $("#txtItemName").val($(this).children(":eq(1)").text());
        $("#txtItemQty").val($(this).children(":eq(2)").text());
        $("#txtItemPrice").val($(this).children(":eq(3)").text());
    });
}

function updateItem(code, name, qty , price){
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemId() === code) {
            itemDB[i].setItemName(name);
            itemDB[i].setItemQty(qty);
            itemDB[i].setItemPrice(price);
            return true;
        }
    }
    return false;
}

function searchItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemId() === code) {
            return itemDB[i];
        }
    }
    return false;
}

function deleteItem(code) {
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemId() === code) {

            itemDB.splice(i, 1);
            $("#itemTable").empty();
            loadAllItems();
            clearAllItem();
        }
    }
    return false;
}






function loadAllCusID(){
    $("#inputCustomer").empty();
    $("#inputCustomer").append(`<option value="" disabled selected hidden>Select ID</option>`);
    for (let i = 0; i < customerDB.length; i++) {
        let id=   `<option value="${customerDB[i].getCusId()}">${customerDB[i].getCusId()}</option>`;
        $("#inputCustomer").append(id);
    }
}
function loadAllItemID(){
    $("#inputItem").empty();
    $("#inputItem").append(`<option value="" disabled selected hidden>Select ID</option>`);
    for (let i = 0; i < itemDB.length; i++) {
        let code= `<option value="${itemDB[i].getItemId()}">${itemDB[i].getItemId()}</option>`;
        $("#inputItem").append(code);
    }
}


function loadCusDetails(id){
    for (let i = 0; i < customerDB.length; i++) {
        if (customerDB[i].getCusId() === id) {
            $("#txtOrderCusID").val(customerDB[i].getCusId());
            $("#txtOrderCusName").val(customerDB[i].getCusName());
            $("#txtOrderCusAddress").val(customerDB[i].getCusAddress());
            $("#txtOrderCusTP").val(customerDB[i].getCusTp());
        }
    }
}
function loadItemDetails(id){
    for (let i = 0; i < itemDB.length; i++) {
        if (itemDB[i].getItemId() === id) {
            $("#txtOrderItemCode").val(itemDB[i].getItemId());
            $("#txtOrderItemName").val(itemDB[i].getItemName());
            $("#txtOrderQtyOnHand").val(itemDB[i].getItemQty());
            $("#txtOrderItemPrice").val(itemDB[i].getItemPrice());
        }
    }
}
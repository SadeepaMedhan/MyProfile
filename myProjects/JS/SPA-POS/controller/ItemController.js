

$("#btnSaveItem").click(function () {
    let newItem = new ItemDTO($("#txtItemCode").val(), $("#txtItemName").val(), $("#txtItemQty").val(), $("#txtItemPrice").val());
    if (!searchItem($("#txtItemCode").val())) {
        if (checkIfValidItem()) {
            saveItem(newItem);
            clearAllItem();
            loadAllItems();
        }
    } else {
        $("#errorPopupItem").modal('show');
    }
});

$("#btnUpdateItem").click(function () {
    if (updateItem($("#txtItemCode").val(), $("#txtItemName").val(), $("#txtItemQty").val(), $("#txtItemPrice").val())) {
        loadAllItems();
        clearAllItem();
    }
});

function loadAllItems() {
    $("#itemTable").empty();
    for (var i of itemDB) {
        let row = `<tr><td>${i.getItemId()}</td><td>${i.getItemName()}</td><td>${i.getItemQty()}</td><td>${i.getItemPrice()}</td></tr>`;
        $("#itemTable").append(row);
    }
}

$("#btnSearchItem").click(function () {

    var searchID = $("#txtSearchItem").val();
    var res = searchItem(searchID);

    if (!res) {
        clearAllItem();
        alert("No Such a Item");
    } else {
        $("#addNewItemModal").modal('show');
        console.log(res.getItemId());

        $("#txtItemCode").val(res.getItemId());
        $("#txtItemName").val(res.getItemName());
        $("#txtItemQty").val(res.getItemQty());
        $("#txtItemPrice").val(res.getItemPrice());

    }
});

$("#btnItemDelete").click(function () {
    if (!searchItem($("#txtItemCode").val())) {
        let searchCode = $("#txtItemCode").val();
        clearAllItem();
        $("#txtItemCode").val(searchCode);
        checkIfValidItem();
    }else {
        deleteItem($("#txtItemCode").val());
    }
});


//validation
//item regular expressions
const regExItemCode = /^I[0-9]{3,4}$/;
const regExItemName = /^[A-z]{3,15}$/;
const regExItemQty = /^[0-9]{1,4}$/;
const regExItemPrice = /^[0-9]{1,}[.]?[0-9]{1,2}$/;

$('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').on('keydown', function (eventOb) {
    if (eventOb.key == "Tab") {
        eventOb.preventDefault();
    }
});

$('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').on('blur', function () {
    formValidItem();
});

//focusing events
$("#txtItemCode").on('keyup', function (eventOb) {
    setItemButton();
    if (eventOb.key == "Enter") {
        checkIfValidItem();
    }

    if (eventOb.key == "Control") {
        var typedItemCode = $("#txtItemCode").val();
        var srcItem = searchItem(typedItemCode);
        $("#txtItemCode").val(srcItem.getItemId());
        $("#txtItemName").val(srcItem.getItemName());
        $("#txtItemQty").val(srcItem.getItemQty());
        $("#txtItemPrice").val(srcItem.getItemPrice());
    }
});

$("#txtItemName").on('keyup', function (eventOb) {
    setItemButton();
    if (eventOb.key == "Enter") {
        checkIfValidItem();
    }
});

$("#txtItemQty").on('keyup', function (eventOb) {
    setItemButton();
    if (eventOb.key == "Enter") {
        checkIfValidItem();
    }
});

$("#txtItemPrice").on('keyup', function (eventOb) {
    setItemButton();
    if (eventOb.key == "Enter") {
        checkIfValidItem();
    }
});
// focusing events end
$("#btnSaveItem").attr('disabled', true);

function clearAllItem() {
    $('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').val("");
    $('#txtItemCode,#txtItemName,#txtItemQty,#txtItemPrice').css('border', '2px solid #ced4da');
    $('#txtItemCode').focus();
    $("#btnSaveItem").attr('disabled', true);
    loadAllItems();
    $("#lblitemcode,#lblitemname,#lblitemqty,#lblitemprice").text("");
}

function formValidItem() {
    var itemCode = $("#txtItemCode").val();
    $("#txtItemCode").css('border', '2px solid green');
    $("#lblitemcode").text("");
    if (regExItemCode.test(itemCode)) {
        var itemName = $("#txtItemName").val();
        if (regExItemName.test(itemName)) {
            $("#txtItemName").css('border', '2px solid green');
            $("#lblitemname").text("");
            var itemQty = $("#txtItemQty").val();
            if (regExItemQty.test(itemQty)) {
                var itemPrice = $("#txtItemPrice").val();
                var resp = regExItemPrice.test(itemPrice);
                $("#txtItemQty").css('border', '2px solid green');
                $("#lblitemqty").text("");
                if (resp) {
                    $("#txtItemPrice").css('border', '2px solid green');
                    $("#lblitemprice").text("");
                    return true;
                } else {
                    $("#txtItemPrice").css('border', '2px solid red');
                    $("#lblitemprice").text("Item Price is a required field : Pattern 100.00");
                    return false;
                }
            } else {
                $("#txtItemQty").css('border', '2px solid red');
                $("#lblitemqty").text("Item Qty is a required field : Used Numbers Only");
                return false;
            }
        } else {
            $("#txtItemName").css('border', '2px solid red');
            $("#lblitemname").text("Cus Name is a required field : Minimum 3, Max 15, Spaces Allowed");
            return false;
        }
    } else {
        $("#txtItemCode").css('border', '2px solid red');
        $("#lblitemcode").text("Item Code is a required field : Pattern I001");
        return false;
    }
}

function checkIfValidItem() {
    var itemCode = $("#txtItemCode").val();
    if (regExItemCode.test(itemCode)) {
        $("#txtItemName").focus();
        var itemName = $("#txtItemName").val();
        if (regExItemName.test(itemName)) {
            $("#txtItemQty").focus();
            var itemQty = $("#txtItemQty").val();
            if (regExItemQty.test(itemQty)) {
                $("#txtItemPrice").focus();
                var itemPrice = $("#txtItemPrice").val();
                var resp = regExItemPrice.test(itemPrice);
                if (resp) {
                    return true;
                    /*let res = confirm("Do you really need to add this Item..?");
                    if (res) {
                       return true;
                    }*/
                } else {
                    $("#txtItemPrice").focus();
                }
            } else {
                $("#txtItemQty").focus();
            }
        } else {
            $("#txtItemName").focus();
        }
    } else {
        $("#txtItemCode").focus();
    }
}

function setItemButton() {
    let b = formValidItem();
    if (b) {
        $("#btnSaveItem").attr('disabled', false);
    } else {
        $("#btnSaveItem").attr('disabled', true);
    }
}

$('#btnSaveItem').click(function () {
    checkIfValidItem();
});

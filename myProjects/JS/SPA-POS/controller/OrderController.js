function loadCusIds(){
    var select = document.getElementById("inputCustomer");
    loadCusDetails(select.options[select.selectedIndex].value);
}

function loadItemCodes(){
    var select = document.getElementById("inputItem");
    loadItemDetails(select.options[select.selectedIndex].value);
}

$("#btnAddToCart").click(function () {
    var itemCode = $("#txtOrderItemCode").val();
    var itemName = $("#txtOrderItemName").val();
    var itemPrice = $("#txtOrderItemPrice").val();
    var itemQty = $("#txtOrderQtyOnHand").val();
    var orderQty = $("#txtOrderQty").val();

    if (regExItemQty.test(orderQty)) {
        var itemTotal = itemPrice*orderQty;
        let row = `<tr><td>${itemCode}</td><td>${itemName}</td><td>${itemPrice}</td><td>${orderQty}</td><td>${itemTotal}</td></tr>`;
        $("#tableCart").append(row);
        $("#txtOrderQty").css('border', '2px solid #ced4da');
        clearOrderItem();
    } else {
        $("#txtOrderQty").css('border', '2px solid red');
    }
});

function clearOrderItem(){
    $('#txtOrderItemCode,#txtOrderItemName,#txtOrderItemPrice,#txtOrderQtyOnHand,#txtOrderQty').val("");
}
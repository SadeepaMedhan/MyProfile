function loadCusIds() {
    var select = document.getElementById("inputCustomer");
    loadCusDetails(select.options[select.selectedIndex].value);
}

function loadItemCodes() {
    var select = document.getElementById("inputItem");
    loadItemDetails(select.options[select.selectedIndex].value);
    $("#txtOrderItemCode").css('border', '2px solid #ced4da');
}

$("#btnAddToCart").click(function () {
    var itemCode = $("#txtOrderItemCode").val();
    var itemName = $("#txtOrderItemName").val();
    var itemPrice = $("#txtOrderItemPrice").val();
    var itemQty = $("#txtOrderQtyOnHand").val();
    var orderQty = $("#txtOrderQty").val();

    if (regExItemCode.test(itemCode)) {
        $("#txtOrderItemCode").css('border', '2px solid #ced4da');
        if (regExItemQty.test(orderQty)) {

            var itemTotal = itemPrice * orderQty;
            let newItemToCart = new Cart(itemCode, orderQty, itemTotal);
            addCart(newItemToCart);
            loadCartAll();

            $("#txtOrderQty").css('border', '2px solid #ced4da');
            clearOrderItem();
        } else {
            $("#txtOrderQty").css('border', '2px solid red');
        }
    } else {
        $("#txtOrderItemCode").css('border', '2px solid red');
    }
});

function removeCartItem(code) {
    for (let i of cartDB) {
        if (i.getCItemCode() === code) {
            cartDB.splice(i, 1);
        }
    }
}

function loadCartAll() {

    $("#tableCart").empty();
    for (var i of cartDB) {
        let item = searchItem(i.getCItemCode());
        $("#btnRemove").click(function () {
            let res = confirm("Do you need to Remove this Item..?");
            if (res) {
                removeCartItem(i.getCItemCode());
                loadCartAll();
            }
        });
        let row = `<tr>
                    <td>${i.getCItemCode()}</td>
                    <td>${item.getItemName()}</td>
                    <td>${item.getItemPrice()}</td>
                    <td>${i.getQtyForSale()}</td>
                    <td>${i.getTotPrice()}</td>
                    <td><button id="btnRemove" type="button" className="btn-sm">X</button></td>
                    </tr>`;

        $("#tableCart").append(row);
    }
    calculate();
}

function clearOrderItem() {
    $('#txtOrderItemCode,#txtOrderItemName,#txtOrderItemPrice,#txtOrderQtyOnHand,#txtOrderQty').val("");
    loadAllItemID();
}

function calculate() {
    $("#lblTotalPrice").text("Total : " + getTotal() + ".00 Rs/=");
    $("#lblSubTotal").text("SubTotal : " + getTotal() + ".00 Rs/=");
}


$("#btnPurchase").click(function () {
    var list = Array();
    for (let item of cartDB) {
        list.push(item);
    }
    var newOrder = new OrderDTO($("#lblOrderID").text(), $("#txtOrderCusID").val(), "2022/03/14", "12:06", getTotal(), list);
    saveOrder(newOrder);
    clearAllOrder();
});

function getTotal() {
    var total = 0;
    for (var i of cartDB) {
        total += i.getTotPrice();
    }
    return total;
}

function clearAllOrder() {
    $("#tableCart").empty();
    cartDB.splice(0, cartDB.length);
    calculate();
    getOrderID();
}

function loadAllOrders() {
    $("#tableOrderList").empty();
    for (var i of orderDB) {
        let itemQty = i.getCart().length;
        let row = `<tr><td>${i.getOrderId()}</td><td>${i.getCustomerId()}</td><td>${itemQty}</td><td>${i.getDate()}</td><td>${i.getTotal()}</td></tr>`;
        $("#tableOrderList").append(row);
    }
}



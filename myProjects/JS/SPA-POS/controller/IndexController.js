


$("#orderSection").css("display", "none");
$("#itemSection").css("display", "none");
$("#customerSection").css("display", "none");
$("#orderListSection").css("display", "none");
$("#homePage").css("fontWeight", "bold");

$("#homePage").click(function () {
    $("#homeSection").css("display", "block");
    $("#orderSection").css("display", "none");
    $("#itemSection").css("display", "none");
    $("#customerSection").css("display", "none");
    $("#homePage").css("fontWeight", "bold");
    $("#orderPage").css("fontWeight", "normal");
    $("#itemPage").css("fontWeight", "normal");
    $("#customerPage").css("fontWeight", "normal");

    $("#orderListSection").css("display", "none");
    $("#orderList").css("fontWeight", "normal");

});

$("#orderPage").click(function () {
    $("#homeSection").css("display", "none");
    $("#orderSection").css("display", "block");
    $("#itemSection").css("display", "none");
    $("#customerSection").css("display", "none");
    $("#orderPage").css("fontWeight", "bold");
    $("#homePage").css("fontWeight", "normal");
    $("#itemPage").css("fontWeight", "normal");
    $("#customerPage").css("fontWeight", "normal");

    $("#orderListSection").css("display", "none");
    $("#orderList").css("fontWeight", "normal");
    loadAllCusID();
    loadAllItemID();
    getOrderID();
});

$("#itemPage").click(function () {
    $("#homeSection").css("display", "none");
    $("#orderSection").css("display", "none");
    $("#itemSection").css("display", "block");
    $("#customerSection").css("display", "none");
    $("#itemPage").css("fontWeight", "bold");
    $("#orderPage").css("fontWeight", "normal");
    $("#homePage").css("fontWeight", "normal");
    $("#customerPage").css("fontWeight", "normal");

    $("#orderListSection").css("display", "none");
    $("#orderList").css("fontWeight", "normal");
});

$("#customerPage").click(function () {
    $("#homeSection").css("display", "none");
    $("#orderSection").css("display", "none");
    $("#itemSection").css("display", "none");
    $("#customerSection").css("display", "block");
    $("#customerPage").css("fontWeight", "bold");
    $("#orderPage").css("fontWeight", "normal");
    $("#itemPage").css("fontWeight", "normal");
    $("#homePage").css("fontWeight", "normal");

    $("#orderListSection").css("display", "none");
    $("#orderList").css("fontWeight", "normal");
});

$("#orderList").click(function () {
    $("#homeSection").css("display", "none");
    $("#orderSection").css("display", "none");
    $("#itemSection").css("display", "none");
    $("#customerSection").css("display", "none");
    $("#orderListSection").css("display", "block");
    $("#orderList").css("fontWeight", "bold");
    $("#orderPage").css("fontWeight", "normal");
    $("#customerPage").css("fontWeight", "normal");
    $("#itemPage").css("fontWeight", "normal");
    $("#homePage").css("fontWeight", "normal");
    loadAllOrders();
});

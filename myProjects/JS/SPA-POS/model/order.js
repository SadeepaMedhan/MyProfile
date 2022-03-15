function OrderDTO(orderId, customerId, date, time, total,cartList) {
    var __orderId = orderId;
    var __customerId = customerId;
    var __date = date;
    var __time = time;
    var __total = total;
    var __cartLis = cartList;

    this.setOrderId = function (oId) {
        __orderId = oId;
    }
    this.setCustomerID = function (cId) {
        __customerId = cId;
    }
    this.setDate = function (date) {
        __date = date;
    }
    this.setTime = function (time) {
        __time = time;
    }
    this.setTotal = function (total) {
        __total = total;
    }
    this.setCart = function (cartList) {
        __cartLis = cartList;
    }
    this.getOrderId = function () {
        return __orderId;
    }
    this.getCustomerId = function () {
        return __customerId;
    }
    this.getDate = function () {
        return __date;
    }
    this.getTime = function () {
        return __time;
    }
    this.getTotal = function () {
        return __total;
    }
    this.getCart = function () {
        return __cartLis;
    }

}
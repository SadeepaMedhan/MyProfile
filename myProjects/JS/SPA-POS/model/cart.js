function cart(code,description,qtyForSale,price){
    var __code=code;
    var __qtyForSale =qtyForSale;
    var __price = price;

    this.setCode=function (code){
        __code=code;
    }
    this.setQtyForSale=function (qty){
        __qtyForSale=qty;
    }
    this.setCItemPrice=function (price){
        __price=price;
    }
    this.getCItemCode=function (){
        return __code;
    }
    this.getQtyForSale = function (){
        return __qtyForSale;
    }
    this.getCItemPrice = function (){
        return __price;
    }

}
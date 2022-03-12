function ItemDTO(id, name, qty, price){
    var __id=id;
    var __name=name;
    var __qty=qty;
    var __price=price;

    this.setItemID=function (id){
        __id=id;
    }
    this.setItemName=function (name){
        __name=name;
    }
    this.setItemQty=function (qty){
        __qty=qty;
    }
    this.setItemPrice=function (price){
        __price=price;
    }
    this.getItemId=function (){
        return __id;
    }
    this.getItemName = function(){
        return __name;
    }
    this.getItemQty = function (){
        return __qty;
    }
    this.getItemPrice = function (){
        return __price;
    }
}
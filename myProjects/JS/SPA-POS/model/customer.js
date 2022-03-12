function CustomerDTO(id, name, address, tp){
    var __id=id;
    var __name= name;
    var __address= address;
    var __tp = tp;

    this.setCusId= function (id){
        __id=id;
    }
    this.setCusName = function (name){
        __name= name;
    }
    this.setCusAddress = function(address){
        __address=address;
    }
    this.setCusTP= function(tp){
        __tp=tp;
    }
    this.getCusId = function (){
        return __id;
    }
    this.getCusName= function (){
        return __name;
    }
    this.getCusAddress= function (){
        return __address;
    }
    this.getCusTp= function (){
        return __tp;
    }
}
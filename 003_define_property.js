var Book = function(name, price){
    var priceChangingCallback,
        priceChangedCallback,
        me = this;
    
    this.name = function(val){
        name = val;
        return name;
    };

    this.price = function(val){
        if(val != undefined && val != price){
            if(priceChangingCallback(me, val)){
                price = val;
                priceChangedCallback(me);
            }
        }
        return price;
    };

    this.onPriceChanging = function(callback){
        priceChangingCallback = callback;
    };

    this.onPriceChanged = function(callback){
        priceChangedCallback = callback;
    };
};


var b = new Book("Hello World", 20);
console.log("name: " + b.name());
console.log("price: Rs" + b.price() + '/-');

b.onPriceChanging(function(object, newPrice){
    var returnFlag = false
    if(object.price() > newPrice){
        console.log("Price can't go down.")
    } else if(newPrice > 100){
        console.log("Price can not go beyond 100");  
    } else{
        console.log("Changing price to Rs" + newPrice + "/-.");
        returnFlag = true
    }

    return returnFlag;
});

b.onPriceChanged(function(object){
    console.log("Price changed to Rs" + object.price() + "/-");
});

b.price(30);
b.price(20);
b.price(200);

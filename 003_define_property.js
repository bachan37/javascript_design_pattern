var Book = function(){
    var me = this,
        name;

    Object.defineProperty(me, 'name', {
        get: function(){
            return name;
        },
        set: function(val){
            name = val;
        }
    });
}

var b = new Book();
b.name = "Hello World";
console.log(b.name)

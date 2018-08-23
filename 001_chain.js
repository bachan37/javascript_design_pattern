var Calc = function(){
    var s = 0;

    this.add = function(arg){
        s += arg;
        return this;
    };

    this.sub = function(arg){
        s -= arg;
        return this;
    };

    this.mul = function(arg){
        s *= arg;
        return this;
    };

    this.eql = function(){
        return s;
    };
    
};

new Calc().
    add(1).
    add(2).
    sub(1).
    mul(3).
    eql();

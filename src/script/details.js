class loupe{
    constructor(){
        this.big_box=$('#preview')//大盒子
        this.small_pic=$('.jqzoom')//
    }
    init(){
        
    }
}
define([],function(){
    return {
        init:function(){
            new loupe().init();
        }
    }
})
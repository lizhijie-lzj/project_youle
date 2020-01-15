// 渲染
class render{
    constructor(){
        this.box=$('.mod_prodlist')
    }
    init(){
        $.ajax({
            url:"http://10.31.152.35/js%20second%20month/project_youle/php/inex_data.php",
            dataType:'json'
        }).done((data)=>{
            console.log(data)
            let str='<ul>'
            $.each(data,function(index,value){
                str+=`
                <li class="li1" style="top: 0;">
                    <a href="#" class="_block">
                        <img src="${value.url}" alt="">
                    </a>
                    <p class="prod_title _block">
                        <a href="#" class="gray">${value.title}</a>
                    </p>
                    <p class="prod_price _block">
                        <span>
                            ￥${value.price}
                        </span>
                    </p>
                </li>
                `
            })
            str+='</ul>'
            console.log(this.box);
            this.box.html(str)
        })
       
    }
}
//轮播图
class banner{
    constructor(){
        this.box=$('._dots span')       
        this.ban_box=$('.banner_img')
        this.index=null;
        this.timer=null
    }
    init(){
        let _this = this;
        this.tabswitch();
        this.autoplay() 
        this.box.hover(function(){
            _this.index=$(this).index();
            _this.tabswitch();
            clearInterval(_this.timer);
        },()=>{
            // _this.box.css("backgroundPosition" ,"-67px -158px");
            this.autoplay
        });
        this.ban_box.hover(()=>{
            clearInterval(this.timer);
        },()=>{
            this.autoplay()
        })  
    }
    // 透明度模拟轮播图
    tabswitch(){
        this.box.eq(this.index).css("backgroundPosition" ,"-47px -158px").siblings('span').css("backgroundPosition" ,"-67px -158px");
        this.ban_box.animate({
            opacity:0
        });
        this.ban_box.eq(this.index).stop(true).animate({
            opacity:1
        })
    }
    // 自动播放
    autoplay(){
       this.timer=setInterval(()=>{
            console.log(1)
            this.index++;
                if (this.index > this.box.size() - 1) {
                    this.index = 0;
                }
                this.tabswitch();
        },3000)
    }
    
}

class stair{
    constructor(){

    }
    inint(){
        
    }
}
define([],function(){
    return {
        init:function(){
            new render().init();
            new banner().init();
        }
    }
})
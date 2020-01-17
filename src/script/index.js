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
// 楼梯
class stair{
    constructor(){
        this.louti=$('.louti_left')
        this.louti_a=$('.louti_left a')
        this.louceng=$('.louceng_one')
        this.last=$('.return_top')
        this._up=$('.back_top')
        this.top_levitate=$('.fixed-menu')
    }
    init(){
        //点击楼层的方法
        let  _this=this
        this.louti_a.not('.return_top').on('click',function(){
            $(this).addClass('show_bg').siblings('a').removeClass('show_bg');
            let $top_val=_this.louceng.eq($(this).index()).offset().top;
            $('html').animate({
                scrollTop:$top_val
            });
        })
        this.last.on('click',function(){
            $('html').animate({
                scrollTop:0
            })
        });
        this._up.on('click',function(){
            $('html').animate({
                scrollTop:0
            })
        })
        // 窗口滚动条
        let $top=$(window).scrollTop();
        if($top>=1200){
            this.louti.show();
            this.top_levitate.show()
        }else{
            this.louti.hide()
            this.top_levitate.hide()
        }
        $(window).on('scroll',function(){
            $top=$(window).scrollTop();
            if($top>=1200){
                _this.louti.show();
                _this.top_levitate.show()
            }else{
                _this.louti.hide()
                _this.top_levitate.hide()
            }
            _this.louceng.each(function(index,element){
                let $louceng_top=_this.louceng.eq(index).offset().top;
                if($louceng_top>=$top){
                    _this.louti_a.eq(index).addClass('show_bg').siblings('a').removeClass('show_bg');
                    return false
                }
            });
        });
    }
    details(){
        
    }
}
define([],function(){
    return {
        init:function(){
            new render().init();
            new banner().init();
            new stair().init();
        }
    }
})
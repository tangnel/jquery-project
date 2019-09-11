$(function(){
    function myFullPage(options){
        this.wrap = options.wrap;
        this.section = this.wrap.find('.section');
        this.colorsArray = options.colorsArray;
        this.onLeave = options.onLeave;
        this.afterLoad = options.afterLoad;
        this.commonStyle = {
            width:'100%',
            height:'100%'
        }
        this.clientWidth = $(window).outerWidth();
        this.clientHeight = $(window).outerHeight();
        this.curIndex = 0;
        this.lock = true;
    }

    myFullPage.prototype.init = function(){
        this.createDom();
        this.bindEvent();
    }

    myFullPage.prototype.createDom = function(){
        var self = this;
        $('html')
            .add('body').css({
                position:'relative',
                overflow:'hidden',
                margin:0,
            }).add(self.wrap)
                .add(self.section)
                    .css(self.commonStyle);

        self.wrap.css({position: 'absolute',top:0,left: 0})
            .find('.section')
                .each(function(index,ele){
                    $(ele).css({
                        backgroundColor:self.colorsArray[index],
                        position:'relative'
                    }).find(".slide")
                        .css({float:"left", width: self.clientWidth, height: self.clientHeight,position:"relative"})
                            .wrapAll('<div class="sliderWrapper"></div>')
                });

        
        self.section.find(".sliderWrapper").each(function(index,ele){
            $(ele).css({width:$(ele).find(".slide").size() * self.clientWidth,height: self.clientHeight})
        })

        self.section.eq(0).addClass("active").end().find(".sliderWrapper").css({position:"absolute",left:0,top:0}).each(function(index,ele){
            $(ele).find(".slide").eq(0).addClass("innerActive");
        })
    }

    myFullPage.prototype.bindEvent = function(){
        var self = this;
        $(document).on("keydown",function(e){
            if(e.which == 38 || e.which == 40){
                if(self.lock){
                    self.lock = false
                    var newTop = self.wrap.offset().top;
                    var direction = "";
                    //垂直方向移动
                    if (e.which == 38 && self.curIndex != 0) {
                        direction = "top";
                        self.onLeave(self.curIndex,direction);
                        newTop += self.clientHeight;
                        self.curIndex--;
                        
                    } else if (e.which == 40 && self.curIndex != self.section.size() - 1) {
                        direction = "bottom";
                        self.onLeave(self.curIndex,direction);
                        newTop -= self.clientHeight;
                        self.curIndex++;
                    }

                    self.wrap.animate({
                        top: newTop
                    }, 350, "swing", function () {
                        self.lock = true;
                        self.section.eq(self.curIndex).addClass("active")
                        if(direction == "top"){
                            self.section.eq(self.curIndex + 1).removeClass("active")
                        }else{
                            self.section.eq(self.curIndex - 1).removeClass("active")
                        }
                        self.afterLoad(self.curIndex,direction)
                    })
                }
                
            }
            if(e.which == 37 || e.which == 39){
                //水平方向移动
                var sw = $(".active").find(".sliderWrapper");
                if(self.lock && sw){
                    self.lock = false;
                    var curShowDown = sw.find(".innerActive");
                    var newLeft = sw.offset().left;
                    var direction = null;
                    if (e.which == 37 && curShowDown.index() != 0) {
                        
                        newLeft += self.clientWidth;
                        direction = "left";
                        console.log(direction)
                    } else if (e.which == 39 && curShowDown.index() != sw.find(".slide").size() - 1) {
                        newLeft -= self.clientWidth;
                        direction = "right";
                        console.log(direction)
                    }

                    sw.animate({
                        left: newLeft
                    }, 200, "swing", function () {
                        self.lock = true;
                        if(direction == "left"){
                            curShowDown.removeClass("innerActive")
                            curShowDown.prev().addClass("innerActive")
                        }else if(direction == "right"){
                            curShowDown.removeClass("innerActive");
                            curShowDown.next().addClass("innerActive")
                        }
                    })
                }
            }
        })
    }

    $.fn.extend({
        myFullPage:function(options){
            options.wrap = $(this);
            var obj = new myFullPage(options);
            obj.init();
        }
    })
}())
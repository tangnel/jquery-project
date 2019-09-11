var pageEngine = {
    init:function(selector,colorsArray){
        this.$W = $(selector);
        this.colorsArray = colorsArray;
        return this;
    },
    addSection: function(className){
        this.$Page = $("<div class='section'></div>").addClass(className);
        this.$Page.appendTo(this.$W);
        return this;
    },
    addSlide: function(className){
        this.slideFlag = true;
        this.$Slide = $("<div class='slide'></div>").addClass(className);
        this.$Slide.appendTo(this.$Page);
        return this;

    },
    addComponent : function(config){
        var oCp = null;
        switch(config.type){
            case "base":
                oCp = componentFactory(config);
                break;
        }

        this.slideFlag ? this.$Slide.append(oCp) :this.$Page.append(oCp);
        return this;
    },
    bindEvent: function(){
        this.$W.find(".section").on({
            _leave: function(){
                $(this).find(".component").trigger("cpLeave");
            },
            _load:function(){
                $(this).find(".component").trigger("cpLoad");
            }
        })       
    },
    load:function(){
        var self = this;
        this.bindEvent();
        this.$W.myFullPage({
            colorsArray:this.colorsArray,
            onLeave:function(index,direction){
                self.$W.find(".section").eq(index).trigger("_leave");
            },
            afterLoad:function(index,direction){
                self.$W.find(".section").eq(index).trigger("_load");
            }
        })

        this.$W.find(".section").eq(0).trigger("_load");
    }
}


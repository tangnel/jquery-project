pageEngine.init(".wrapper",["red","blue","green"])
        .addSection("oneSection")
            .addComponent({
                type:"base",
                className: "duyi",
                width:522,
                height:336,
                text:"渡一教育",
                center: true,
                css:{
                    position:'absolute',
                    top:0,
                    opacity:0,
                    background:"yellow",
                    textAlign:"center",
                    fontSize:"18px"
                },
                animateIn:{
                    opacity:1,
                    top:120
                },
                animateOut:{
                    opacity:0,
                    top:0
                },
                delay:1000,
                event:{
                    click:function(){},
                    mouseenter:function(){}
                }
            })
            .addSection("twoSection")
                .addComponent({
                    type:"base",
                    className: "duyi",
                    width:522,
                    height:336,
                    text:"渡一教育",
                    center: true,
                    css:{
                        position:'absolute',
                        top:0,
                        opacity:0,
                        background:"yellow",
                        textAlign:"center",
                        fontSize:"18px"
                    },
                    animateIn:{
                        opacity:1,
                        top:120
                    },
                    animateOut:{
                        opacity:0,
                        top:0
                    },
                    delay:1000,
                    event:{
                        click:function(){},
                        mouseenter:function(){}
                    }
                })
            .addSection("threeSection")
                .addSlide("slide-1")
                    .addComponent({
                        type:"base",
                        className: "duyi",
                        width:522,
                        height:336,
                        text:"渡一教育横屏1",
                        center: true,
                        css:{
                            position:'absolute',
                            top:0,
                            opacity:0,
                            background:"yellow",
                            textAlign:"center",
                            fontSize:"18px"
                        },
                        animateIn:{
                            opacity:1,
                            top:120
                        },
                        animateOut:{
                            opacity:0,
                            top:0
                        },
                        delay:1000,
                        event:{
                            click:function(){},
                            mouseenter:function(){}
                        }
                    })
                .addSlide("slide-2")
                    .addComponent({
                        type:"base",
                        className: "duyi",
                        width:522,
                        height:336,
                        text:"渡一教育横屏2",
                        center: true,
                        css:{
                            position:'absolute',
                            top:0,
                            opacity:0,
                            background:"yellow",
                            textAlign:"center",
                            fontSize:"18px"
                        },
                        animateIn:{
                            opacity:1,
                            top:120
                        },
                        animateOut:{
                            opacity:0,
                            top:0
                        },
                        delay:1000,
                        event:{
                            click:function(){},
                            mouseenter:function(){}
                        }
                    })
                .addSlide("slide-3")
                    .addComponent({
                        type:"base",
                        className: "duyi",
                        width:522,
                        height:336,
                        text:"渡一教育横屏3",
                        center: true,
                        css:{
                            position:'absolute',
                            top:0,
                            opacity:0,
                            background:"yellow",
                            textAlign:"center",
                            fontSize:"18px"
                        },
                        animateIn:{
                            opacity:1,
                            top:120
                        },
                        animateOut:{
                            opacity:0,
                            top:0
                        },
                        delay:1000,
                        event:{
                            click:function(){},
                            mouseenter:function(){}
                        }
                    })
        .load();




// $(".wrapper").myFullPage({
//     colorsArray:["red","blue","green"],
//     onLeave:function(index,direction){
//         $(".section").eq(index).trigger("_leave");
//     },
//     afterLoad:function(index,direction){
//         $(".section").eq(index).trigger("_load");
//     }
// });


// $(".section").each(function(index,ele){
//     $(ele).append(componentFactory({
//         type:"base",
//         className: "duyi",
//         width:522,
//         height:336,
//         text:"渡一教育",
//         center: true,
//         css:{
//             position:'absolute',
//             top:0,
//             opacity:0,
//             background:"yellow",
//             textAlign:"center",
//             fontSize:"18px"
//         },
//         animateIn:{
//             opacity:1,
//             top:120
//         },
//         animateOut:{
//             opacity:0,
//             top:0
//         },
//         delay:1000,
//         event:{
//             click:function(){},
//             mouseenter:function(){}
//         }
//     }));
// })

// $(".section").on("_leave",function(){
//     $(this).find(".component").trigger("cpLeave");
// })

// $(".section").on("_load",function(){
//     $(this).find(".component").trigger("cpLoad");
// })
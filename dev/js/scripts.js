$(document).ready(function() {
    // hover для блока gallery
    $(".gallery .preview").each(function () {
        var obj=$(this);
        $(obj).prepend("<div class='menu'><div class='add'></div><div class='view'></div></div>");
        $(obj).find(".menu").each(function(){
            $(this).hover(function(){
                    $(this).css("background","rgba(206,178,141,.7)");
                    $(this).find("div").css("display","block");
                }, function(){
                    $(this).css("background","none");
                    $(this).find("div").css("display","none");
                }
            );
        });
    });


    //slider-header
    $(".slider-header").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav-slider-header'></div>");
        $(obj).find(".slide").each(function () {
            $(obj).find(".nav-slider-header").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
            $(this).addClass("slide"+$(this).index());
        });
        $(obj).find(".nav-slider-header span").first().addClass("on"); // делаем активным первый элемент меню
    });


    //slider-quotes
    $(".slider-quotes").each(function () {
        var obj = $(this);
        $(obj).append("<div class='nav-slider-quotes'></div>");
        $(obj).find(".slide1").each(function () {
            $(obj).find(".nav-slider-quotes").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
            $(this).addClass("slide1"+$(this).index());
        });
        $(obj).find(".nav-slider-quotes span").first().addClass("on"); // делаем активным первый элемент меню
    });
    scrollHeader();
});



//slider-header func
function sliderHeader(obj,sl){
    var ul = $(sl).find(".slider-header-wrapper"); // находим блок
    var bl = $(sl).find(".slide"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}

$(document).on("click", ".slider-header span",function(){
   var sl=$(this).closest(".slider-header");
    $(sl).find("span").removeClass("on");
    $(this).addClass("on");
    var obj=$(this).attr("rel");
    sliderHeader(obj, sl);
    return false;
});

//slider-quotes func
    function sliderQuotes(obj,sl){
        var ul = $(sl).find(".slider-quotes-wrapper"); // находим блок
        var bl = $(sl).find(".slide1"+obj); // находим любой из элементов блока
        var step = $(bl).width(); // ширина объекта
        $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
    }

    $(document).on("click", ".slider-quotes span",function(){
        var sl=$(this).closest(".slider-quotes");
        $(sl).find("span").removeClass("on");
        $(this).addClass("on");
        var obj=$(this).attr("rel");
        sliderQuotes(obj, sl);
        return false;
    });

$(document).scroll(function(){
   if( $(this).scrollTop()>75){
       $("header").css("background-color", "#775B83");
   }else{
       $("header").css("background-color", "rgba(151, 125, 166, .5)");
   }
});
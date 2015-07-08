$(document).ready(function() {
    $(".slider-header").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
            $(this).addClass("slider-header"+$(this).index());
        });
        $(obj).find(".nav span").first().addClass("on"); // делаем активным первый элемент меню
    });
    $(".slider").each(function () { // обрабатываем каждый слайдер
        var obj = $(this);
        $(obj).append("<div class='nav1'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav1").append("<span rel='"+$(this).index()+"'></span>"); // добавляем блок навигации
            $(this).addClass("slider"+$(this).index());
        });
        $(obj).find(".nav1 span").first().addClass("on"); // делаем активным первый элемент меню
    });
       $(".gallery .menu").each(function(){
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
function sliderJS (obj, sl) { // slider function
    var ul = $(sl).find("ul"); // находим блок
    var bl = $(sl).find("li.slider-header"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
function sliderJS1 (obj, sl) { // slider function
    var ul = $(sl).find("ul"); // находим блок
    var bl = $(sl).find("li.slider"+obj); // находим любой из элементов блока
    var step = $(bl).width(); // ширина объекта
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 это скорость перемотки
}
$(document).on("click", ".slider-header .nav span", function() { // slider click navigate
    var sl = $(this).closest(".slider-header"); // находим, в каком блоке был клик
    $(sl).find("span").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS(obj, sl); // слайдим
    return false;
});
$(document).on("click", ".slider .nav1 span", function() { // slider click navigate
    var sl = $(this).closest(".slider"); // находим, в каком блоке был клик
    $(sl).find("span").removeClass("on"); // убираем активный элемент
    $(this).addClass("on"); // делаем активным текущий
    var obj = $(this).attr("rel"); // узнаем его номер
    sliderJS1(obj, sl); // слайдим
    return false;
});
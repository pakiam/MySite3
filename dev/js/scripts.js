$(document).ready(function() {
    $(".slider-header").each(function () { // ������������ ������ �������
        var obj = $(this);
        $(obj).append("<div class='nav'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav").append("<span rel='"+$(this).index()+"'></span>"); // ��������� ���� ���������
            $(this).addClass("slider-header"+$(this).index());
        });
        $(obj).find(".nav span").first().addClass("on"); // ������ �������� ������ ������� ����
    });
    $(".slider").each(function () { // ������������ ������ �������
        var obj = $(this);
        $(obj).append("<div class='nav1'></div>");
        $(obj).find("li").each(function () {
            $(obj).find(".nav1").append("<span rel='"+$(this).index()+"'></span>"); // ��������� ���� ���������
            $(this).addClass("slider"+$(this).index());
        });
        $(obj).find(".nav1 span").first().addClass("on"); // ������ �������� ������ ������� ����
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
    var ul = $(sl).find("ul"); // ������� ����
    var bl = $(sl).find("li.slider-header"+obj); // ������� ����� �� ��������� �����
    var step = $(bl).width(); // ������ �������
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 ��� �������� ���������
}
function sliderJS1 (obj, sl) { // slider function
    var ul = $(sl).find("ul"); // ������� ����
    var bl = $(sl).find("li.slider"+obj); // ������� ����� �� ��������� �����
    var step = $(bl).width(); // ������ �������
    $(ul).animate({marginLeft: "-"+step*obj}, 500); // 500 ��� �������� ���������
}
$(document).on("click", ".slider-header .nav span", function() { // slider click navigate
    var sl = $(this).closest(".slider-header"); // �������, � ����� ����� ��� ����
    $(sl).find("span").removeClass("on"); // ������� �������� �������
    $(this).addClass("on"); // ������ �������� �������
    var obj = $(this).attr("rel"); // ������ ��� �����
    sliderJS(obj, sl); // �������
    return false;
});
$(document).on("click", ".slider .nav1 span", function() { // slider click navigate
    var sl = $(this).closest(".slider"); // �������, � ����� ����� ��� ����
    $(sl).find("span").removeClass("on"); // ������� �������� �������
    $(this).addClass("on"); // ������ �������� �������
    var obj = $(this).attr("rel"); // ������ ��� �����
    sliderJS1(obj, sl); // �������
    return false;
});
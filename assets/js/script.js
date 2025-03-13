$(document).ready(function () {
    $("header").hover(
        function () {
            $(this).addClass("active"); 
            $(".sub_list").stop().slideDown(); 
            $(".menu_bg").stop().slideDown(); 
        },
        function () {
            if ($(window).scrollTop() === 0) {
                $(this).removeClass("active"); 
            }
            $(".sub_list").stop().slideUp(); 
            $(".menu_bg").stop().slideUp(); 
        }
    );

    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $("header").addClass("active"); 
        } else {
            $("header").removeClass("active");
        }
    });

    $('.search_open_btn').click(function(){
        let scrollBarWidth = window.innerWidth - document.documentElement.clientWidth; 
        $("body").css({
            "overflow": "hidden",
            "padding-right": scrollBarWidth + "px" 
        });
        $(".main_search_box").show();
        $('.search_open_btn').addClass('active');
    });
    
    $('.close_search_box').click(function(){
        $(".main_search_box").hide();
        $("body").css({
            "overflow": "",
            "padding-right": "" 
        });
        $('.search_open_btn').removeClass('active');
    });
    
});

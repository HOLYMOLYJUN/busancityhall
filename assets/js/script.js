$(document).ready(function () {
   
    $("a").click(function(event) {
        event.preventDefault();
    });
   
    $("header").hover(
        function () {
            $(this).addClass("active"); 
            $(".sub_list").stop().slideDown(); 
            $(".menu_bg").stop().slideDown(); 
            $('.menu_open_black').stop().fadeIn(500);
        },
        function () {
            if ($(window).scrollTop() === 0) {
                $(this).removeClass("active"); 
            }
            $(".sub_list").stop().slideUp(); 
            $(".menu_bg").stop().slideUp(); 
            $('.menu_open_black').stop().fadeOut(500);
        }
    );

    $(".main_menu, .sub_menu").focusin(
        function () {
            $(this).addClass("active"); 
            $(".sub_list").stop().slideDown(); 
            $(".menu_bg").stop().slideDown(); 
            $('.menu_open_black').stop().fadeIn(500);
        },
    );
    $(".main_menu, .sub_menu").focusout(
        function () {
            if ($(window).scrollTop() === 0) {
                $(this).removeClass("active"); 
            }
            $(".sub_list").stop().slideUp(); 
            $(".menu_bg").stop().slideUp(); 
            $('.menu_open_black').stop().fadeOut(500);
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
        $(".main_search_box").show();
        $('.search_open_btn').addClass('active');
    });
    
    $('.close_search_box').click(function(){
        $(".main_search_box").hide();
        $('.search_open_btn').removeClass('active');
    });
    

    $(".service_item").hover(
        function () {
            $(this).find("i").css({
                transform: "rotateY(360deg)",
                transition: "transform 0.5s ease-in-out"
            });
        },
        function () {
            $(this).find("i").css({
                transform: "rotateY(0deg)"
            });
        }
    );

    $(".social_item").hover(
        function() {
            var currentTransform = $(this).css("transform");

            var newTranslateY;

            if (currentTransform !== "none") {
                var matrix = new WebKitCSSMatrix(currentTransform);
                var translateY = matrix.m42; 

                newTranslateY = translateY - (translateY * 0.1);
            } else {
                newTranslateY = -10;
            }

            $(this).data("originalTransform", currentTransform);

            $(this).css("transform", "translateY(" + newTranslateY + "px)");

            $(this).find("a").css("box-shadow", "20px 20px 10px 1px rgba(0, 0, 0, 0.2)");
        },
        function() {
            var originalTransform = $(this).data("originalTransform");
            $(this).css("transform", originalTransform);
            $(this).find("a").css("box-shadow", "none");
        }
    );

    $(window).on('scroll', function() {

        var scrollPos = $(window).scrollTop(); 

        var sectionOffset01 = $('.sc_info').offset().top; 
        var sectionOffset02 = $('.notice_box').offset().top; 
        var sectionOffset03 = $('.flex').offset().top; 

        if (scrollPos + $(window).height() > sectionOffset01) { 
            $('.sc_info .card_item').each(function(i) {
                $(this).delay(i * 300).queue(function(next) {
                    $(this).addClass('active');
                    next();
                });
            });
        }

        if (scrollPos + $(window).height() > sectionOffset02) {
            $('.notice_box .card_list').addClass('active');
        }

        if (scrollPos + $(window).height() > sectionOffset03) {
            $('.flex .commu_card').addClass('active');
        }

    });





    
});


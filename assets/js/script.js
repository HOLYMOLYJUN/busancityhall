$(document).ready(function () {
    // header에 마우스를 올리면 active 클래스 추가하고 sub_list slideDown
    $("header").hover(
        function () {
            $(this).addClass("active"); // 마우스 오버 시 active 클래스 추가
            $(".sub_list").stop().slideDown(); // 
            // 모든 sub_list 슬라이드 다운
            $(".menu_bg").stop().slideDown(); // menu_bg 슬라이드 다운
        },
        function () {
            if ($(window).scrollTop() === 0) {
                $(this).removeClass("active"); // 스크롤이 0일 때만 active 클래스 제거
            }
            $(".sub_list").stop().slideUp(); // 모든 sub_list 슬라이드 업
            $(".menu_bg").stop().slideUp(); // menu_bg 슬라이드 업
        }
    );

    // 스크롤이 0보다 높으면 header에 active 클래스를 추가
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 0) {
            $("header").addClass("active"); // 스크롤이 0보다 높으면 active 클래스 추가
        } else {
            $("header").removeClass("active"); // 스크롤이 0일 때 active 클래스 제거
        }
    });
});

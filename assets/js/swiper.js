// swiper.js

$(document).ready(function () {
    var swiper4 = new Swiper(".policy-banner", {
        slidesPerView: 1,
        speed: 1000,
        effect: "slide",
        breakpoints: {
            1024: {
                effect: "coverflow",
                grabCursor: true,
                spaceBetween: -600,
                loop: false,
                initialSlide: 0,
                centeredSlides: true,
                slidesPerView: "auto",
            },
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".banner-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".banner-button-next",
            prevEl: ".banner-button-prev",
        },
        on: {
            init: function () {
                document.querySelector(".banner-button-prev").focus();
            },
        },
    });

    // 슬라이드 클릭 시 focus 이동
    const slides = document.querySelectorAll(".policy-banner .swiper-slide a");
    const prevButton = document.querySelector(".banner-button-prev");
    const nextButton = document.querySelector(".banner-button-next");

    document.addEventListener("keydown", function (e) {
        if (e.key === "Tab") {
            let activeElement = document.activeElement;
            let activeIndex = Array.from(slides).indexOf(activeElement);

            if (activeElement === prevButton) {
                e.preventDefault();
                slides[0].focus();
                swiper4.slideTo(0);
            } else if (activeElement === nextButton) {
                return;
            } else if (activeIndex !== -1) {
                if (!e.shiftKey && activeIndex < slides.length - 1) {
                    e.preventDefault();
                    slides[activeIndex + 1].focus();
                    swiper4.slideTo(activeIndex + 1);
                } else if (e.shiftKey && activeIndex === 0) {
                    e.preventDefault();
                    prevButton.focus();
                } else if (!e.shiftKey && activeIndex === slides.length - 1) {
                    e.preventDefault();
                    nextButton.focus();
                }
            }
        }
    });

    // 슬라이드 포커스 시 슬라이드 이동
    slides.forEach((slide, index) => {
        slide.addEventListener("focus", () => {
            swiper4.slideTo(index);
        });
    });

    // 자동재생/일시정지 버튼 클릭 이벤트
    $(".policy-banner .btn-play").click(function () {
        if ($(this).hasClass("on")) {
            swiper4.autoplay.start();
            $(this).removeClass("on").text("일시정지");
        } else {
            swiper4.autoplay.stop();
            $(this).addClass("on").text("재생");
        }
        return false;
    });
});

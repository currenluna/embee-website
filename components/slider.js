window.Webflow ||= [];
window.Webflow.push(() => {
    //alert("hello world hi");
});

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", (event) => {
    $(".slider_wrap").each(function (index) {
        let loopMode = false;
        if ($(this).attr("loop-mode") === "true") {
            loopMode = true;
        }
        let sliderDuration = 300;
        if ($(this).attr("slider-duration") !== undefined) {
            sliderDuration = +$(this).attr("slider-duration");
        }
        const swiper = new Swiper($(this).find(".swiper")[0], {
            speed: sliderDuration,
            loop: loopMode,
            autoHeight: false,
            centeredSlides: loopMode,
            followFinger: true,
            freeMode: false,
            slideToClickedSlide: false,
            slidesPerView: "auto",
            spaceBetween: 16,
            rewind: false,
            mousewheel: {
            forceToAxis: true
            },
            keyboard: {
            enabled: true,
            onlyInViewport: true
            },
            breakpoints: {
            // mobile landscape
            480: {
                slidesPerView: "auto",
                spaceBetween: 16
            },
            // tablet
            768: {
                slidesPerView: "auto",
                spaceBetween: 16
            },
            // desktop
            992: {
                slidesPerView: "auto",
                spaceBetween: 16
            }
            },
            pagination: {
            el: $(this).find(".swiper-bullet-wrapper")[0],
            bulletActiveClass: "is-active",
            bulletClass: "swiper-bullet",
            bulletElement: "button",
            clickable: true
            },
            navigation: {
            nextEl: $(this).find(".swiper-next")[0],
            prevEl: $(this).find(".swiper-prev")[0],
            disabledClass: "is-disabled"
            },
            slideActiveClass: "is-active",
            slideDuplicateActiveClass: "is-active"
        });
    });
});
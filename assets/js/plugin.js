// 플러그인 스크립트

let visualSwiper = null;

// gsap 스크립트 등

// main visual swiper

var swiper = new Swiper('.main_visual_image', {
    pagination: {
        el: '.swiper-pagination',
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// business swiper
var swiper = new Swiper('.projects_visual', {
    slidesPerView: 4,
    // centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

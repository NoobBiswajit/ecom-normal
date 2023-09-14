var swiper = new Swiper(".heroslider", {
    pagination: {
        el: ".swiper-pagination",
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// ===========Product-slider=========

var swiper = new Swiper(".sellProduct", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

// ============New product load more==============
$(function () {
    $(".new-product").slice(0, 4).show();
    $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".new-product:hidden").slice(0, 4).slideDown();
        if ($(".new-product:hidden").length == 0) {
            $(".load-more").css('visibility', 'hidden');
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 500);
    });
});
// ============New product load more==============
// ===========Toprated-product-load-more=========
$(function () {
    $(".toprated").slice(0, 4).show();
    $("body").on('click touchstart', '.topretedProload', function (e) {
        e.preventDefault();
        $(".toprated:hidden").slice(0, 4).slideDown();
        if ($(".toprated:hidden").length == 0) {
            $(".topretedProload").css('visibility', 'hidden');
        }
        // $('html,body').animate({
        //     scrollTop: $(this).offset().top
        // }, 500);
    });
});
// ===========Toprated-product-load-more=========

// =========Menu drodwn=========
jQuery(function ($) {
    $('.menu-btn').click(function () {
        $('.dropdown').toggleClass('expand')
    })
})

$(window).scroll(function() {
    if ($(window).scrollTop() >= 40) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});
$('.openside').click(function() {
    $('.sidenav').css('right', '0px');
});
$('.closeside').click(function() {
    $('.sidenav').css('right', '-100%');
});
$(document).ready(function() {
    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".innerlinks")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-angle-up")
                .addClass("fa-angle-down");
        } else {
            $(".set > a i")
                .removeClass("fa-angle-up")
                .addClass("fa-angle-down");
            $(this)
                .find("i")
                .removeClass("fa-angle-down")
                .addClass("fa-angle-up");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".innerlinks").slideUp(200);
            $(this)
                .siblings(".innerlinks")
                .slideDown(200);
        }
    });
});
$('.slider').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
});
$('.slick').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
});
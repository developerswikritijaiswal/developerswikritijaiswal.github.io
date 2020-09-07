
// Fixed Header Start

$(window).scroll(function () {

    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});

// Fixed Header Start



///   Sidebar Start

$('.navbar-toggler').click(function () {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('left', '-275px');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('left', '0px');
    }
});

//   Sidebar End

//   Navbar Button Style Start

$(document).ready(function () {
    $('.navbar-toggler').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
});

//$(document).on('click','.bannerLeftIn ul li a',function(){
//	$('.bannerLeftIn ul li a').removeClass('active');
//	$(this).addClass('active');
//});
$(document).on('click','.navbar-expand-md .navbar-nav .nav-link',function(){
	$('.navbar-expand-md .navbar-nav .nav-link').removeClass('active');
	$(this).addClass('active');
});
$(document).on('click','.medxAppIn ul li a' ,function(){
	var id =$(this).data('id');
	$('.medxAppIn ul li a').removeClass('active');
	$(this).addClass('active');
	$(".ShowApp").removeClass('active');
	$(".app"+ id).addClass('active');
});
$(document).on('click','.cloneBtn ul li a',function(){
	$('.cloneBtn ul li a').removeClass('active');
	$(this).addClass('active');
});
// accordian
$(document).ready(function() {
    $(".set > a").on("click", function() {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this)
                .siblings(".content")
                .slideUp(200);
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
        } else {
            $(".set > a i")
                .removeClass("fa-minus")
                .addClass("fa-plus");
            $(this)
                .find("i")
                .removeClass("fa-plus")
                .addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(200);
            $(this)
                .siblings(".content")
                .slideDown(200);
        }
    });
});

// accordian end
// slick 
$('.prolftSlick').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
});

// slick end

$(".dotAll").click(function() {
	var x = $(this).data('type');
	$('.graphicSlider1 ul li a').removeClass('active');
			$(this).addClass('active')
	$('html, body').animate({
	scrollTop: $(".content" +x).offset().top
	}, 1000);
	});

$(document).on('scroll' ,function(){
	
onscroll();

});

onscroll();

function onscroll(){
	
	    var scrollPos = $(document).scrollTop();
    $('.graphicSlider1 ul li a').each(function() {
			var x = $(this).data('type');
        var currLink = $(this);
        var refElement = $('.content' + x);
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.dotAll').removeClass("active");
            $('.dot_All' +x).addClass("active");
        }
    });
}
$(document).scroll(function(){
	  var scrollPos = $(document).scrollTop();
	  var refElement = $('.graphical');
	var heightt =-3074.390625;
//	alert($('.header').offset().top - $('.graphical').offset().top);
	 if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
		 if($('.header').offset().top - $('.graphical').offset().top >= 3074.390625 ) {
			 $('.graphicSlider1').hide();
		 }
		 else{
			 $('.graphicSlider1').show();
		 }
	 }
	else{
		$('.graphicSlider1').hide();
	}
});



// Fixed Header Start

    $(window).scroll(function () {
    
        if ($(window).scrollTop() >= 1) {
            $('.header').addClass('fixedHeader');
        } else {
            $('.header').removeClass('fixedHeader');
        }
    });
  
  // Fixed Header End



  // Sidebar Start

  $('.navbar-toggler').click(function () {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('top', '-120%');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('top', '0');
    }
});
  
  // Sidebar End

// Contact Us Form Validation Start

$(document).on('submit', '#contactForms', function (evt) {
    evt.preventDefault();
    var name=$('#name').val();
    var email=$('#email').val();
    var title=$('#title').val();
    var genre =$('#genre').val();
    var gamePitch=$('#gamePitch').val();
    var gameFootage =$('#gameFootage').val();

    $('#contactForms').find('.errorMsg.form-group span').css('display','none');
    $("#formTerms").parents(".form-group").find('.errorCheck span').css('display','none');

    if(name===''){
        $("#name").parents(".form-group").find('.form-control').addClass('errorClass');
    }
    else{
        $("#name").parents(".form-group").find('.form-control').removeClass('errorClass');
        
    }

    if(email===''){
        $("#email").parents(".form-group").find('.form-control').addClass('errorClass');
    }
    else{
        $("#email").parents(".form-group").find('.form-control').removeClass('errorClass');
    }

    if(title===''){
        $("#title").parents(".form-group").find('.form-control').addClass('errorClass');
    }
    else{
        $("#title").parents(".form-group").find('.form-control').removeClass('errorClass');
    }

    if(genre===''){
        $("#genre").parents(".form-group").find('.form-control').addClass('errorClass');
    }
    else{
        $("#genre").parents(".form-group").find('.form-control').removeClass('errorClass');
    }

    if(gamePitch===''){
        $("#gamePitch").parents(".form-group").find('.form-control').addClass('errorClass');
    }
    else{
        $("#gamePitch").parents(".form-group").find('.form-control').removeClass('errorClass');
    }

    if(gameFootage===''){
        $("#gameFootage").parents(".form-group").find('.form-control').addClass('errorClass');
    }
    else{
        $("#gameFootage").parents(".form-group").find('.form-control').removeClass('errorClass');
    }
    
    if(name==='' || email==='' || title==='' || genre==='' || gamePitch==='' || gameFootage===''){
        $("#contactForms").find(".errorMsg.form-group").append('<span>Please fill out all mandatory fields</span>');
    }
    else{
        $("#contactForms").find(".errorMsg.form-group").css('display','none');
    }

    if(!($('#formTerms').prop('checked'))){
        $("#formTerms").parents(".form-group").find('.errorCheck').append('<span class="termsError">Please accept our Data Privacy Policy</span>');
    }
    else{
        $("#formTerms").parents(".form-group").find('.errorCheck .termsError').css('display','none');
    }
    if(name !='' && email !='' && title !='' && genre !='' && gamePitch !='' && gameFootage!='' && formTerms.checked){
        window.location.href = "thankyou.html";
        // $('.thankyouMid').show();
        // $('.concthide').hide();

    }

});




    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        asNavFor: '.slider-nav-thumbnails',
   
    });
   
    $('.slider-nav-thumbnails').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider',
        dots: false,
        arrows: false,
        //	centerMode: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: { 
                    slidesToShow: 4
                }
            },
        ]
    });
   
   
    //remove active class from all thumbnail slides
    $('.slide .slider-nav-thumbnails .slick-slide').removeClass('slick-active');
   
    //set active class to first thumbnail slides
    $('.slide .slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');
   
    // On before slide change match active thumbnail to current slide
    $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var mySlideNumber = nextSlide;
        $('.slide .slider-nav-thumbnails .slick-slide').removeClass('slick-active');
        $('.slide .slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
   });



  $('.sec_drop').click(function(){
   $('.sec_drop ul').toggle();
  });


   //overview slider
$('.gamesilder').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: false,
    infinite: false,
});

//overview slider

// NewsoverView Slider Start

$('.newsOverviewSlider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 3,
    rows: 3,
    infinite: false,
    adaptiveHeight: false,

    responsive: [
         {
            breakpoint: 992,
             settings: {
                slidesToShow: 2,
            }
         },
         {
            breakpoint: 561,
             settings: {
                slidesToShow: 1,
                rows: 6
            }
         }
    ]

});

// NewsoverView Slider End


// News Slider Start

if($(window).width()<= 414){
    $('.newsSlider').slick({
        dots: true,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false,
    });
}

//  News Slider End



// Partners Slider Start

$('.sliderPartner').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 768,
            settings: { 
                slidesToShow: 3
            }
        },
        {
            breakpoint: 561,
            settings: {
            slidesToShow: 2
            }
        },
        {
        breakpoint: 415,
        settings: {
            slidesToShow: 1
        }
    }
    ]
});

// Partners Slider End
// retail slider start
$('.sliderRetail').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 768,
            settings: { 
                slidesToShow: 3
            }
        },
        {
            breakpoint: 561,
            settings: {
            slidesToShow: 2
            }
        },
        {
        breakpoint: 415,
        settings: {
            slidesToShow: 1
        }
    }
    ]
});
// retail slider end
// single_page start

$('.singleslider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    adaptiveHeight: false,
    responsive: [
        {
            breakpoint: 1200,
            settings: { 
                slidesToShow: 2
            }
        },
        {
            breakpoint: 561,
            settings: {
            slidesToShow: 1
            }
        },
    ]
});

// single_page end
// press start
$('.fact_drop').click(function() {
    $('html,body').animate({
        scrollTop:$('.factsheet').offset().top - 120
    },500)
 });

 $('.hist_drop').click(function() {
    $('html,body').animate({
        scrollTop:$('.history_box').offset().top - 100
    },500)
 });

 $('.video_drop').click(function() {
    $('html,body').animate({
        scrollTop:$('.vedio_box').offset().top - 100
    },500)
 });
 $('.article_drop').click(function() {
    $('html,body').animate({
        scrollTop:$('.articlebox').offset().top - 100
    },500)
 });
 $('.monti_drop').click(function() {
    $('html,body').animate({
        scrollTop:$('.Monetization').offset().top - 100
    },500)
 });
 $('.addition_drop').click(function() {
    $('html,body').animate({
        scrollTop:$('.Additional').offset().top - 100
    },500)
 });
 $('.about_drop').click(function() {
    $('html,body').animate({
        scrollTop:$('.Aboutbox').offset().top - 100
    },500)
 });
 $('.team_drop').click(function() {
    $('html,body').animate({
        scrollTop:$('.teambox').offset().top - 100
    },500)
 });

// press end

$("#country_selector").countrySelect();


 


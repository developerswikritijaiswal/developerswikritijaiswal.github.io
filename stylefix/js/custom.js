
$('.myslider_custom').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                
            }
           
        }]
});

$('.myslider_guide').slick({
    fade:true,
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,

            }
      }]
});
$('.myslider').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: false,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                
            }},
            {
            breakpoint: 415,
            settings: {
                slidesToShow: 1,
                
            }}
        ]
});
$(document).ready(function() {

    $('.user_click').click(function(event) {
        event.stopPropagation();
        $('.user_drop_down').slideToggle();
    });

    $(document).click(function() {
        $('.user_drop_down').slideUp();
    });
});

$('.forget a').click(function() {
    $('.signindiv').hide();
    $('.forgetpass').fadeIn();
});
$('.movesA').hide();
$('.movesa').show();
$('.fortabs button').click(function() {
    var type = $(this).data('type');
    $('.movesA').hide();
    $('.moves' + type).fadeIn();
});
$('.selectBx select').click(function() {
    $(this).siblings('.selectBx i').toggleClass('rotate');
});


// privacy scroll
function scrollNav() {
    $('.privacynew .privnav a').click(function(){  
      //Toggle Class
      $(".privacynew .privnav .active").removeClass("active");      
      $(this).closest('.privacynew .privnav li').addClass("active");
      var theClass = $(this).attr("class");
      $('.'+theClass).parent('.privacynew .privnav li').addClass('active');
      //Animate
      $('html, body').stop().animate({
          scrollTop: $( $(this).attr('href') ).offset().top - 160
      }, 400);
      return false;
    });
    $('.scrollTop a').scrollTop();
  }
  scrollNav();
  
  //scroll end
  $(document).ready(function () {
    $('.wr_con').hover(function () {
        $(this).children('p').find('span').toggle();
    });
});

$(document).ready(function () {
    if ($(window).width() <= 414) {
        $('.wr_con p span').css('display', 'block');
    } else {
        $('.wr_con p span').css('display', 'none');
    }
});

$(document).ready(function () {
    $('#styleList').click(function () {
        $('.styleInner').toggle();
    })

});

// header dropdown start
$(document).ready(function() {

    $('.styleinner').click(function(event) {
        event.stopPropagation();
        $('.head_dropdown').slideToggle();
    });

    $(document).click(function() {
        $('.head_dropdown').slideUp();
    });
});
// header dropdown end
  


$(window).scroll(function () {
    if ($(window).scrollTop() >= 30) {
        $('.header').addClass('fixed_header');
    }
    else {
        $('.header').removeClass('fixed_header');
    }
}); 
var forEach = function (t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function (hamburger) {
        hamburger.addEventListener("click", function () {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function () {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('left', '0px');
    }
    else {
        $('#mySidenav').css('left', '-250px');
    }
});

$('.tab').click(function () {
    if ($(this).hasClass('active')) {
        $('.tab').find('span').removeClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $('.tabs').slideUp();
    }
    else {
        var id = $(this).data('id');

        $('.tab').find('span').removeClass('color');
        $(this).find('span').addClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $(this).find('.fa').addClass('fa-chevron-up').removeClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $(this).addClass('active');
        $('.tabs').slideUp();
        $('#tab' + id).slideDown();
    }
});
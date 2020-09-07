
//cultre page

$(document).ready(function () {
    $('.slickslide').
    on('init', () => {
        $('.slickslide .slick-slide[data-slick-index="-2"]').addClass('lt2');
        $('.slickslide .slick-slide[data-slick-index="-1"]').addClass('lt1');
        $('.slickslide .slick-slide[data-slick-index="1"]').addClass('gt1');
        $('.slickslide .slick-slide[data-slick-index="2"]').addClass('gt2');
    }).
    slick({
        centerMode: true,
        dots: true,
        arrows: false,
        centerPadding: 0,
        slidesToShow: 3,
                responsive: [{
        breakpoint: 992,
        settings: {
             slidesToShow: 1,
        },
    },
                     ]
    }).
    on('beforeChange', (event, slick, current, next) => {
        $('.slickslide .slick-slide.gt2').removeClass('gt2');
        $('.slickslide .slick-slide.gt1').removeClass('gt1');
        $('.slickslide .slick-slide.lt1').removeClass('lt1');
        $('.slickslide .slick-slide.lt2').removeClass('lt2');

        const lt2 = current < next && current > 0 ? current - 1 : next - 2;
        const lt1 = current < next && current > 0 ? current : next - 1;
        const gt1 = current < next || next === 0 ? next + 1 : current;
        const gt2 = current < next || next === 0 ? next + 2 : current + 1;

        $(`.slickslide .slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
        $(`.slickslide .slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
        $(`.slickslide .slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
        $(`.slickslide .slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

        // Clone processing when moving from 5 to 0
        if (current === 5 && next === 0) {
            $(`.slickslide .slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
            $(`.slickslide .slick-slide[data-slick-index="${current}"]`).addClass('lt1');
            $(`.slickslide .slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
            $(`.slickslide .slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
        }

        // Clone processing when moving from 0 to 5
        if (current === 0 && next === 5) {
            $(`.slickslide .slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
            $(`.slickslide .slick-slide[data-slick-index="${current}"]`).addClass('gt1');
            $(`.slickslide .slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
            $(`.slickslide .slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
        }

        console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
    });
});

//culture page END

$(window).scroll(function () {

    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedheader');
        $('.headerContent.luxuryContent1 ul li a').css('color', '#000');
    } else {
        $('.header').removeClass('fixedheader');
        $('.headerContent.luxuryContent1 ul li a').css('color', '#fff');
    }
});
$(window).scroll(function () {

    if ($(window).scrollTop() >= 1) {
        $('.header.luxHead').addClass('luxuryheader');

    } else {
        $('.header.luxHead').removeClass('luxuryheader');
    }
});

$(document).ready(function () {
    $(document).on('click', '.headerContent ul li a', function () {
        $(".headerContent ul li a").removeClass("addActive");
        $(this).addClass("addActive");
    });
});
$('.prolftSlick').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
        responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: false,
            dots: true,
        },
    },
                     ]
});

$('.galeryAll').slick({
    dots: true,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 1000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
        responsive: [{
        breakpoint: 1200,
        settings: {
            arrows: true,
            dots: true,
        },
    },
                     ]
});


$(document).ready(function () {
    $(document).on('click', '.modalRight .form-group .form-control', function () {
        $(".modalRight .form-group .form-control").removeClass("addopacity");
        $(this).addClass("addopacity");
    });
});
$(document).ready(function () {
    $(document).on('click', '.gendAll .form-group button', function () {
        $(".gendAll .form-group button").removeClass("btnopacity");
        $(this).addClass("btnopacity");
    });
});

  // hamburger 

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
      } else {
          $('#mySidenav').css('left', '-250px');
      }
  });

// hamburger end

//$(document).ready(function(){
//       $(document).on('click', '#section01', function () {
//  $('html, body').animate({ 
//                    scrollTop: $( 
//                      '.lookBook').scrollHeight 
//                }, 100); 
//});
//    });
$(".section1").click(function() {
    $('html, body').animate({
        scrollTop: $(".BespokeNation").offset().top
    }, 1000);
});
$(".section2").click(function() {
    $('html, body').animate({
        scrollTop: $(".doesWork").offset().top
    }, 1000);
});
$(".section3").click(function() {
    $('html, body').animate({
        scrollTop: $(".lookBook").offset().top
    }, 1000);
});
$(".section4").click(function() {
    $('html, body').animate({
        scrollTop: $(".pureMag").offset().top
    }, 1000);
});
 $(".section5").click(function() {
    $('html, body').animate({
        scrollTop: $(".subscritHome").offset().top
    }, 1000);
});
$(document).on('click','.dress_clk p' ,function(){
    var id = $(this).data('id');
    $('.galeryAll').slick('slickPrev');
    $(".galeryAll .slick-dots li").removeClass('slick-active');
    $(".galeryAll .slick-dots li:nth-child("+id+")").addClass('slick-active');
});  
$(document).ready(function () {
    $(document).on('click', '.litBtn1 a', function () {
        $(".litBtn1 a").removeClass("litColor");
        $(this).addClass("litColor");
    });
});
$(document).ready(function () {
    $(document).on('click', '.litBtn2 a', function () {
        $(".litBtn2 a").removeClass("litColor");
        $(this).addClass("litColor");
    });
});
$(document).ready(function () {
    $(document).on('click', '.litBtn3 a', function () {
        $(".litBtn3 a").removeClass("litColor");
        $(this).addClass("litColor");
    });
});
$(document).ready(function () {
    $(document).on('click', '.litBtn4 a', function () {
        $(".litBtn4 a").removeClass("litColor");
        $(this).addClass("litColor");
    });
});
$(document).ready(function () {
    $(document).on('click', '.litBtn4 a', function () {
        $(".litBtn4 a").removeClass("litColor");
        $(this).addClass("litColor");
    });
});
$(document).ready(function () {
    $(document).on('click', '.litBtn5 .shirtSize a', function () {
        $(".litBtn5 .shirtSize a").removeClass("litColor");
        $(this).addClass("litColor");
    });
});
$(document).ready(function () {
    $(document).on('click', '.litBtn6 .shirtSize a', function () {
        $(".litBtn6 .shirtSize a").removeClass("litColor");
        $(this).addClass("litColor");
    });
});
/*Dropdown Menu*/
$('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
/*End Dropdown Menu*/
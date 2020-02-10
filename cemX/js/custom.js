// on scroll start

if ($(window).width() <= 560) {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 1) {
            $('.header').addClass('fixed_header');
            $('.searchhd').css('display', 'none');
        } else {
            $('.header').removeClass('fixed_header');
            $('.searchhd').css('display', 'block');
        }
    });
}
// on scroll end



// tab start
$(document).ready(function () {
    $('.all').hide();
    $('.all1').show();
    $('.clickme').click(function () {
        var type = $(this).data('type');
        $('.all').hide();
        $('.all' + type).fadeIn();
        $('.clickme').removeClass('active');
        $(this).addClass('active');
    });
});

$('.all').hide();
$('.all1').show();
$('.discover ul li a').click(function () {
    var type = $(this).data('type');
    $('.all').hide();
    $('.all' + type).fadeIn();
    $('.discover ul li a').removeClass('active');
    $(this).addClass('active');
});
// tab end

(function () {

    var parent = document.querySelector("#rangeSlider");
    if (!parent) return;

    var
        rangeS = parent.querySelectorAll("input[type=range]"),
        numberS = parent.querySelectorAll("input[type=number]");

    rangeS.forEach(function (el) {
        el.oninput = function () {
            var slide1 = parseFloat(rangeS[0].value),
                slide2 = parseFloat(rangeS[1].value);

            if (slide1 > slide2) {
                [slide1, slide2] = [slide2, slide1];
                // var tmp = slide2;
                // slide2 = slide1;
                // slide1 = tmp;
            }

            numberS[0].value = slide1;
            numberS[1].value = slide2;
        }
    });

    numberS.forEach(function (el) {
        el.oninput = function () {
            var number1 = parseFloat(numberS[0].value),
                number2 = parseFloat(numberS[1].value);

            if (number1 > number2) {
                var tmp = number1;
                numberS[0].value = number2;
                numberS[1].value = tmp;
            }

            rangeS[0].value = number1;
            rangeS[1].value = number2;

        }
    });

})();

$('.slider').slick({
    sliderCounter: true,
    dots: false,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: false,

    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        }],
});


//  plus & minus start
$(".plus_btn").click(function () {
    var $n = $(this).parent(".vaulebox").find(".qty");
    $n.val(Number($n.val()) + 1);
});

$(".minus_btn").click(function () {
    var $n = $(this).parent(".vaulebox").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount - 1);
    }
});
setTimeout(function () {
    $(document).ready(function () {
        $("#myModal").modal('show');
    });
}, 1000);

// plus & minus end
$(document).ready(function () {

    $('.listclick').click(function (event) {
        event.stopPropagation();
        $('.listsDrop').slideToggle();
    });
    $(document).on("click", function (event) {
        var $trigger = $(".header");
        if ($trigger !== event.target && !$trigger.has(event.target).length) {
            $(".listsDrop").slideUp("fast");
        }
    });

});

// product listing start
$('.clickslide').click(function () {
    $('.res_slidedown').slideToggle();
});
// product listing end
$(document).ready(function () {

    $('.myAccount').click(function (event) {
        event.stopPropagation();
        $('.accountDrop').slideToggle();
    })
    $('.accountDrop a').click(function () {
        var listing = $(this).text();
        $(this).parents('.accountDrop').prev('.loc_link').children('a').find('span').text(listing);
        // $(this).parents('.accountDrop').slideUp();
    });

    $(document).click(function () {
        $('.accountDrop').slideUp();
    });
});

// $('.myAccount').click(function () {
//     $('.accountDrop').slideDown();
// })
// $('.accountDrop a').click(function() {
//     var listing = $(this).text();
//     $(this).parents('.accountDrop').prev('.loc_link').children('a').find('span').text(listing);
//     // $(this).parents('.accountDrop').slideUp();
// });

// $(document).on("click", function (event) {
//     var $trigger = $(".header");
//     if ($trigger !== event.target && !$trigger.has(event.target).length) {
//         $(".accountDrop").slideUp("fast");
//     }
// });
$('.loaction').click(function () {
    $('.sidenav .styleInner1').slideToggle(500);
});

$('.navlistclick').click(function () {
    $('.sidenav .nav_list').slideToggle(500);
});



$(".movesA").hide();
$(".movesa").show();
$(".pro_tabs a").click(function () {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".pro_tabs a").removeClass("active");
    $(this).addClass("active");
});
$('.pro_fist li').click(function () {
    var prolist = $(this).children('img').attr('src')
    $('.pro_img').children('img').attr('src', prolist);
    $('.pro_fist li').removeClass('active')
    $(this).addClass('active');

});



$('.searchsh').click(function () {
    $('.searchhd').toggleClass('expanded');
    $('.searchsh').hide();
});

// $('.icon').click(function () {
//     $('.searchhd').toggleClass('expanded');
// });



if ($(window).width() <= 767) {
    $('.slider-resp').slick({
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: false
    });
};

$(window).scroll(function () {
    if ($(window).scrollTop() >= 5) {
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

$('.forget a').click(function () {
    $('.ultra_hide').show();
    $('.ultra_show').hide();
});

$('.CONTINUE a').click(function () {
    $('.eseller_hide').show();
    $('.eseller_show').hide();
});

if ($(window).width() <= 991) {
    $('.profile_per').addClass('tabsclick')
}
if ($(window).width() <= 991){
$('.tabsclick').click(function () {
    $('.profile_tabs').slideToggle();
});
$('.profile_tabs .inner_tab li a').click(function () {
    $('.profile_tabs').slideUp();
});
}
$('.droplist li').click(function () {
    var listval = $(this).text();
    $(this).parents('.droplist').prev('.forcolor').children('span').text(listval);
    $(this).parents('.droplist').slideUp();
});
$('.forcolor').click(function () {
    $('.droplist').slideToggle();
});
$(".AccA").hide();
$(".Acca").show();
$(".inner_tab a").click(function () {
    var type = $(this).data("type");
    $(".AccA").hide();
    $(".Acc" + type).fadeIn();
    $(".inner_tab a").removeClass("active");
    $(this).addClass("active");
});
$('.order_detiail').click(function () {
    $(this).siblings('.newaddress').slideToggle();
});
$('.controlpadding').keyup(function () {
    if ($(this).val().length >= 1) {
        $(this).siblings('.checkspan').show();
    } else {
        $(this).siblings('.checkspan').hide();
    }
});
$('.show_inner').click(function () {
    $(this).siblings('.inner_tab').slideToggle();
});

//Faqs

$(document).ready(function () {
    $(".set > a").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".content").slideUp(500);
            $(".set > a i").removeClass("fa-angle-down rotate").addClass("fa-angle-down");
        } else {
            $(".set > a i").removeClass("fa-angle-down rotate").addClass("fa-angle-down");
            $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-down rotate");

            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".content").slideUp(500);
            $(this).siblings(".content").slideDown(500);
        }
    });
});
/*Dropdown start*/
$('.dropdown').click(function () {
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
});

$(document).on("click", function (event) {
    var $trigger = $(".dropdown");
    if ($trigger !== event.target && !$trigger.has(event.target).length) {
        $(".dropdown-menu").slideUp("fast");
        $('.dropdown').removeClass('active');
    }
});

$(document).ready(function(){
  $(".new_address").click(function(){
    $(".form_open").slideToggle();
  });
});

/*Dropdown end*/


var $slider = $('.slider');

if ($slider.length) {
    var currentSlide;
    var slidesCount;
    var sliderCounter = document.createElement('div');
    sliderCounter.classList.add('slider__counter');

    var updateSliderCounter = function (slick, currentIndex) {
        currentSlide = slick.slickCurrentSlide() + 1;
        slidesCount = slick.slideCount;
        $(sliderCounter).text(currentSlide)
    };

    $slider.on('init', function (event, slick) {
        $slider.append(sliderCounter);
        updateSliderCounter(slick);
    });

    $slider.on('afterChange', function (event, slick, currentSlide) {
        updateSliderCounter(slick, currentSlide);
    });

    $slider.slick();
}

$('.recommend_slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
});
// $('.modalshift').click(function(){
//     $('.header ').css('margin-right','17px');
// });
$('.signin').click(function() {
    $('.login').css('display', 'block');
    $('.registerform').css('display', 'none');
});
$('.sidenav ul li a.ourserv').click(function() {
    $('.dropdown_menu').slideToggle();
});
$('.sidenav ul li a.ourservinner').click(function() {
    $('.dropdown_innermenu').slideToggle();
});
$('.head_lft li a.listshow').click(function() {
    $('.droplist').slideToggle();
});
$(window).scroll(function() {
    if ($(window).scrollTop() >= 45) {
        $('.header').addClass('fixed_header');
    } else {
        $('.header').removeClass('fixed_header');
    }
});
var forEach = function(t, o, r) {
    if ("[object Object]" === Object.prototype.toString.call(t))
        for (var c in t)
            Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
    else
        for (var e = 0, l = t.length; l > e; e++)
            o.call(r, t[e], e, t)
};

var hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
    forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
            this.classList.toggle("is-active");
        }, false);
    });
}

$('.hamburger').click(function() {

    if ($(this).hasClass('is-active')) {
        $('#mySidenav').css('top', '0px');
    } else {
        $('#mySidenav').css('top', '-300px');
    }
});
$('.sideclosed').click(function() {
    $('#mySidenav').css('top', '-300px');
    $('.hamburger').removeClass('is-active');
});
$('.myslider').slick({
    dots: true,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 2,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,

        }
    }]
});

$('.tab').click(function() {
    if ($(this).hasClass('active')) {
        $('.tab').find('span').removeClass('color');
        $('.tab').find('.fa').removeClass('fa-chevron-up').addClass('fa-chevron-down');
        $('.tab').removeClass('active');
        $('.tabs').slideUp();
    } else {
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

$('.slider_img').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 1000,
    slidesToScroll: 1,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [{
        breakpoint: 767,
        settings: {
            slidesToShow: 1,

        }
    }]
});

function slickPause() {
    $('.slider_img').slick('slickPause');
}

slickPause();

$('.slider_img').mouseenter(function() {
    $('.slider_img').slick('slickPlay')
});

$('.slider_img').mouseleave(function() {
    slickPause();
});

$('.filDrop_btn').click(function() {
    $('.filDrop_content').slideToggle(300);
})

$('.filDrop_content a').click(function() {
    $(this).parents('div.filDrop_content').slideUp(300);
})

$('.filDrop_content a').click(function() {
    var elmTxt = $(this).text();
    $(this).parents('div.filDrop_content').siblings('button.filDrop_btn').find('span').text(elmTxt);
});

// $(document).ready(function() {
//     $('.unstyled_1 li:hidden').slice(0, 2).show();
//     $('.unstyled_2 li:hidden').slice(0, 3).show();
//     $('.unstyled_3 li:hidden').slice(0, 4).show();
//     $('.unstyled_4 li:hidden').slice(0, 2).show();
//     $('.unstyled_5 li:hidden').slice(0, 3).show();
//     $('.unstyled_6 li:hidden').slice(0, 4).show();

//     $('.clk').click(function() {
//         $(this).prev('ul').find('li:hidden').slice(0, 3).slideDown();
//         if ($(this).prev('ul').find('li:hidden').length === 0) {
//             $(this).fadeOut();
//         }
//     });
// });


$(document).ready(function() {
    $('.show_d').mouseenter(function() {
        $(this).next('.hover_bx').show();
        $(this).hide();
        //        $(this).next('.hover_bx').find('.pdt_img_sec').children('.hover_wish').addClass('slider_img');
    });

    $('.hover_bx').mouseleave(function() {
        $(this).prev('.show_d').show();
        $(this).hide();
    });

    $('.slickrefresh').mouseenter(function() {
        $(this).next('.hover_bx').find('.pdt_img_sec').children('.slider_img')[0].slick.refresh();
    });
});

$('.carddropbtn').click(function() {
    $(this).next('.card_drop_menu').slideToggle();
    $(this).children('.rotate').toggleClass('rotatearrow');
});

$('.card_drop_menu_s1 li a').click(function() {
    var elms = $(this).text();
    $('.carddropbtn1 span').text(elms);
    $(this).parents('.card_drop_menu').slideUp();
});
$('.card_drop_menu_s li a').click(function() {
    var elmss = $(this).text();
    $('.carddropbtn2 span').text(elmss);
    $(this).parents('.card_drop_menu').slideUp();
});


// cart

$(".plus_btn").click(function() {
    var $n = $(this).parent(".vaulebox").find(".qty");
    $n.val(Number($n.val()) + 1);
});

$(".minus_btn").click(function() {
    var $n = $(this).parent(".vaulebox").find(".qty");
    var amount = Number($n.val());
    if (amount > 0) {
        $n.val(amount - 1);
    }
});

// product detail
$('.slides_food li').click(function() {
    var elmL = $(this).find('img').attr('src');
    $('.slide_img img').hide();
    $('.slide_img img').attr('src', elmL);
    $('.slide_img img').fadeIn();
});
$('.slides button.arrow_up').click(function() {
    var cP = $('.slides').height();
    var eP = $('.slides ul').height();
    var lH = $('.slides ul li').height() + 10;
    //    var pos = (cP - eP) ;
    $('.slides ul').css('transform', 'translateY(' + -(lH) + 'px)');
});

$('.slides button.arrow_down').click(function() {
    var cP = $('.slides').height();
    var eP = $('.slides ul').height();
    var lH = $('.slides ul li').height() - 10;
    $('.slides ul').css('transform', 'translateY(' + lH + 'px)');
});


$('.pro_drop').click(function() {
    $('.pro_drop_menu').slideToggle();
    $('.pro_drop .rotate').toggleClass('rotatearrow');
});

$('#rd2').click(function() {
    $('.form_sec').slideUp();
});
$('#rd1').click(function() {
    $('.form_sec').slideDown();
});


// order history start
$(document).on('click', '.tabs_menu a', function() {
    $('.tabs_menu a').removeClass('active');
    $(this).addClass('active');
});

$('.filter_menu a').click(function() {
    $('.filter_menu a').removeClass('active');
    $(this).addClass('active');
});

$('.tabs_menu a').click(function() {
    var tag_id = $(this).attr('data-tag');
    //    $('.commTabC').addClass('hideSec');
    $('.commTabC').hide();
    $('#' + tag_id).removeClass('hideSec');
    $('#' + tag_id).fadeIn(700);
});

// review & rating start
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

$(".head_lft li a.show_div").click(function() {
    $(".drop_sec").toggle();
});

$(".arr_im1").click(function() {
    $(".kids_div").css('left', '0');
});


$('.sideclosed').click(function() {
    $('.kids_div').css('left', '-100%');
    $('.categ_menu').css('left', '-100%');
});

$('.caretLft').click(function() {
    $(".categ_menu2").css('left', '-100%');
})

$('.arra_ac_k').click(function() {
    $(".categ_menu2").css({
        'left': '0'
    });

});

$('.arro_close2 img').click(function() {
    $('.kids_div').css('left', '-100%');
});

$(document).ready(function() {
    $('.all').hide();
    $('.all1').show();
    $('.clickme').click(function() {
        var type = $(this).data('type');
        $('.all').hide();
        $('.all' + type).fadeIn();
        $('.clickme').removeClass('active');
        $(this).addClass('active');
    });
});

$(".movesA").hide();
$(".movesa").show();
$(".cate_left ul li  a").click(function() {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".cate_left ul li  a").removeClass("active");
    $(this).addClass("active");
});
$(".movesA").hide();
$(".movesa").show();
$(".side_p  a").click(function() {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".side_p  a").removeClass("active");
    $(this).addClass("active");
});

// shipping start
$('.edit_btn').click(function() {
    $('.tick_sh_rd1').hide();
    $('.ship_con').show();
});
$('.edit_btn1').click(function() {
    $('.tick_sh_rd2').hide();
    $('.ship_con1').show();
});
$('#ship_rd2').click(function() {
    $('.ship_con').slideUp();
    $('.tick_sh_rd1').show();
});
$('#ship_rd1').click(function() {
    $('.ship_con1').slideUp();
    $('.tick_sh_rd2').show();
});
// shipping end

// product side start

$('.clk').click(function() {
    $('.wrapper').css('left', '0');
})

$('.sideclosed1').click(function() {
    $('.wrapper').css('left', '-100%');
});

// pproduct side end


$('.frsttb').click(function(){
$('.border_left').show();
});
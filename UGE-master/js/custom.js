$(document).ready(function() {
    if ($(window).width() <= 415) {
$('.allPat').slick({
	dots: true,
	arrows: false,
	autoplay: false,
	autoplaySpeed: 3000,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	adaptiveHeight: false,



});
	}
});

$('.gameSlidIn').slick({
	dots: false,
	arrows: true,
	autoplay: false,
	autoplaySpeed: 3000,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	adaptiveHeight: false,

    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
				dots: true,
            }
        },

        {
            breakpoint: 561,
            settings: {
                slidesToShow: 1,
				dots: true,
            }
        },

    ]

});



$(document).ready(function() {
    if ($(window).width() <= 991) {
$('.pressestAl').slick({
	dots: false,
	arrows: true,
	autoplay: false,
	autoplaySpeed: 3000,
	infinite: true,
	speed: 1000,
	slidesToShow: 2,
	adaptiveHeight: false,

	responsive: [{
			breakpoint: 561,
			settings: {
				slidesToShow: 1,
			}
        },
				 		{
			breakpoint: 415,
			settings: {
				slidesToShow: 1,
				dots: true,
			}
        },

    ]

});
	}
});

// Fixed Header Start

$(window).scroll(function () {

	if ($(window).scrollTop() >= 1) {
		$('.header').addClass('fixedHeader');
	} else {
		$('.header').removeClass('fixedHeader');
	}
});

// Fixed Header Start






//   Sidebar Start

$('.navbar-toggler').click(function () {
	if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
		$('.navbar-expand-md .navbar-collapse').css('top', '-113%');
	} else {
		$('.navbar-expand-md .navbar-collapse').css('top', '0px');
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


//   Navbar Button Style End






$('.gameSlidIn2').slick({
	dots: false,
	arrows: true,
	autoplay: false,
	infinite: true,
	speed: 1000,
	slidesToShow: 3,
	adaptiveHeight: false,

	responsive: [{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}
        },

		{
			breakpoint: 670,
			settings: {
				slidesToShow: 1,
			}
        },

		{
			breakpoint: 561,
			settings: {
				slidesToShow: 1,
			}
        },
				 		{
			breakpoint: 414,
			settings: {
				slidesToShow: 1,
				dots: true,
			}
        },

    ]

});
$('.newsSlider').slick({
	dots: false,
	fade: false,
	infinite: true,
	speed: 1000,
	arrow: true,
	slidesToShow: 3,
	slidesToScroll: 1,
	adaptiveHeight: false,
	autoplay: false,
	responsive: [
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			}
},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
	
			}
}
]
});

//jyoti js start

var inputs = document.querySelectorAll('.file-input')

for (var i = 0, len = inputs.length; i < len; i++) {
	customInput(inputs[i])
}

function customInput(el) {
	const fileInput = el.querySelector('[type="file"]')
	const label = el.querySelector('[data-js-label]')

	fileInput.onchange =
		fileInput.onmouseout = function () {
			if (!fileInput.value) return

			var value = fileInput.value.replace(/^.*[\\\/]/, '')
			el.className += ' -chosen'
			label.innerText = value
		}
}


//jyoti js end

$(document).on('click', '.dropInput', function () {
	$('.dropList').slideDown();
});
$(document).on('click', '.dropList ul li a', function () {
	var city = $(this).text();
	document.getElementById('demo').innerHTML = city;
	$('.dropList').slideUp();
});

document.addEventListener("mousedown", function (event) {
	if (event.target.closest(".dropList ,.dropInput"))
		return;
	$('.dropList').slideUp();
});


//route code start
$(document).on('click','.dropList ul li a' ,function(){
	var id =$(this).data('id');
	$(".knowLeft, .dropContent").removeClass('active');
	$(".routeContent"+ id +", .mapChange"+id).addClass('active');
});
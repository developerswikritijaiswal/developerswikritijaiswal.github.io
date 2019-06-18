
window.carousel = {
    $countries: document.getElementById('countries'),
    totalWidth: 0,
    rightMargin: 0,
    speed: 50,
    init: function () {
        this.originalLength = this.$countries.children.length;

        for (var i = 0; i < this.originalLength; i++) {
            this.totalWidth +=
                this.$countries.children[i].offsetWidth + this.rightMargin;
            this.$countries.appendChild(this.$countries.children[i].cloneNode(true));
        }
        this.originalWidth = this.totalWidth;

        this.$countries.addEventListener('mouseover', this.pause.bind(this))
        this.$countries.addEventListener('mouseleave', this.resume.bind(this))

        this.scroll();
    },
    pause: function () {
        TweenLite.to(this.scrollRef, 1, { timeScale: 0.2 });
    },
    resume: function () {
        TweenLite.to(this.scrollRef, 1, { timeScale: 1 });
    },
    scroll: function () {
        this.scrollRef = TweenLite.to(this.$countries, this.speed, {
            x: this.originalWidth * -1,
            ease: Linear.easeNone,
            force3D: true,
            onCompleteScope: this,
            onComplete: function () {
                // jump back to starting position and restart the scroll in 1 frame
                TweenLite.to(this.$countries, 0, {
                    x: 0,
                    lazy: true,
                    onCompleteScope: this,
                    onComplete: function () {
                        this.scroll();
                    }
                })
            }
        })
    },
}

carousel.init();

$(window).scroll(function () {
    if ($(window).scrollTop() >= 45) {
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
$(".movesA").hide();
$(".movesa").show();
$(".app_left a").click(function () {
    var type = $(this).data("type");
    $(".movesA").hide();
    $(".moves" + type).fadeIn();
    $(".app_left a").removeClass("active");
    $(this).addClass("active");
});

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    clock.style.display = 'block';
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');


    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML =  ('1' + t.days) - 9;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            var live = document.getElementById('live');
            clearInterval(timeinterval);
            clock.style.display = 'none';
            if (clock.style.display == 'none') {
                live.style.display = 'block';
            }
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

// $(document).ready(function() {
//     $('.days').prepend("<g>0</g>");
// });

var schedule = [
    ['May 28 2019 1:00:00 am EDT', 'May 29 2019 10:00:00 pm EDT'],
    ['May 30 2019 1:00:00 am EDT', 'May 31 2019 10:00:00 pm EDT'],
    ['June 1 2019 1:00:00 am EDT', 'June 3 2019 10:00:00 pm EDT'],
    ['June 4 2019 1:00:00 am EDT', 'June 5 2019 10:00:00 pm EDT'],
    ['June 6 2019 1:00:00 am EDT', 'June 7 2019 10:00:00 pm EDT'],
    ['June 8 2019 1:00:00 am EDT', 'June 8 2019 2:00:00 pm EDT'],
    ['June 8 2019 6:00:10 pm EDT', 'June 10 2019 10:00:00 pm EDT'],
    ['June 11 2019 1:00:00 am EDT', 'June 12 2019 10:00:00 pm EDT'],
    ['June 13 2019 1:00:00 am EDT', 'June 14 2019 10:00:00 pm EDT'],
    ['June 15 2019 1:00:00 am EDT', 'June 15 2019 2:00:00 pm EDT'],
    ['June 15 2019 6:00:00 pm EDT', 'June 17 2019 10:00:00 pm EDT'],
];
// iterate over each element in the schedule
for (var i = 0; i < schedule.length; i++) {
    var startDate = schedule[i][0];
    var endDate = schedule[i][1];

    // put dates in milliseconds for easy comparisons
    var startMs = Date.parse(startDate);
    var endMs = Date.parse(endDate);
    var currentMs = Date.parse(new Date());

    // if current date is between start and end dates, display clock
    if (endMs > currentMs && currentMs >= startMs) {
        initializeClock('clockdiv', endDate);
    }
}


$(window).load(function(){        
  setTimeout(function() {
    $('#pop_frm').modal('show');

  },1000);
}); 

     $('.btnul ul li:nth-child(1)').click(function() {
        $('html,body').animate({
            scrollTop:$('.discount_section').offset().top
        },500)
     });

     $('.btnul ul li:nth-child(2)').click(function() {
        $('html,body').animate({
            scrollTop:$('.lucky_section').offset().top - 80
        },500)
     });

     $('.btnul ul li:nth-child(3)').click(function() {
        $('html,body').animate({
            scrollTop:$('.service_home').offset().top - 100
        },500)
     });
     $('.clientslider').slick({
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 1000,
        slidesToScroll: 1,
        slidesToShow: 2,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
    
                }
            }]
    });
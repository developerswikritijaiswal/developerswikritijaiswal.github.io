function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            var img = $(input).parent("div").siblings('.avatar-preview').children('div');
//            alert((img).attr("id"))
            $(img).css('background-image', 'url('+e.target.result +')');
            $(img).hide();
            $(img).fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
$(document).on('change', " #imageUpload", function() {
    readURL(this);
});


$(document).ready(function(){
$(".dash_lower ul li").click(function(){
$("ul li ").removeClass("add_active");
    $(this).addClass("add_active");
});   
});

$(document).ready(function(){
$(".in_rig_inner a").click(function(){
$("a ").removeClass("new_active");
    $(this).addClass("new_active");
});   
});
$(document).ready(function(){
$(".invo_dtl ul li a").click(function(){
$("a ").removeClass("tab_active");
    $(this).addClass("tab_active");
});   
});
$(document).ready(function(){
$(".slide_box ul li a").click(function(){
$("a ").removeClass("slide_acitve");
    $(this).addClass("slide_acitve");
});   
});

$(document).ready(function () {
    $('.payDtl').hide();
    $('.payDtl1').show();
    $('.clicktab').click(function () {
        var type = $(this).data('type');
        $('.payDtl').hide();
        $('.payDtl' + type).fadeIn();
        $('.clicktab').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function () {
    $('.listDtl').hide();
    $('.listDtl1').show();
    $('.clicktab1').click(function () {
        var type = $(this).data('type');
        $('.listDtl').hide();
        $('.listDtl' + type).fadeIn();
        $('.clicktab1').removeClass('active');
        $(this).addClass('active');
    });
});

$(document).ready(function () {
    $('.listdlt').hide();
    $('.payDtl3').show();
    $('.clicktab1').click(function () {
        var type = $(this).data('type');
        $('.listdlt').hide();
        $('.listdlt' + type).fadeIn();
        $('.clicktab1').removeClass('active');
        $(this).addClass('active');
    });
});
// tab end

 $(document).ready(function(){
  $(".slide_up").click(function(){
    $(".slide_box").hide();
    $(this).siblings('.slide_box').toggle();
  });
});
document.addEventListener("mousedown",function(event){
    if(event.target.closest(".slide_up , .slide_box"))
       return;
    $('.slide_box').slideUp();
});

  $('.sideproduct ul').hide();
$(".sideproduct a").click(function () {
  $(this).parent(".sideproduct").children("ul").slideToggle("100");
  $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});
  // sidenav dropdown end



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

$(document).ready(function(){
    $(".select_box label").click(function(){
       if($(this).hasClass('check_active'))
        {
            $(this).removeClass('check_active')                          
        }
        else
        {
            $(this).addClass('check_active')  
        }
    });
});

$(document).ready(function(){
    $(".profi_btn button").click(function(){
        $(".profi_btn button").removeClass("btn_active");
        $(this).addClass("btn_active");
    });
});

$(document).ready(function(){
$(".profile_tem .tem_inner").click(function(){
$(".tem_inner").removeClass("sl_acitve");
    $(this).addClass("sl_acitve");
});   
});


//window.onload = function() {
//    $(".cov_line").animate({
//      background: '#8d66db',
//      height: '4px',
//      width: '24%'
//    });
//});



function sortTable(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++;      
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}


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

document.addEventListener("mousedown",function(event){
    if(event.target.closest(".dropdown , .dropdown-menu"))
       return;
    $('.dropdown-menu').slideUp();
});

/*Dropdown end*/


$(document).ready(function(){
    $(".invo_fir").click(function(){
     $('.search_inner').hide(); 
          $(this).siblings('.search_inner').toggle();
    });
});

document.addEventListener("mousedown",function(event){
    if(event.target.closest(".invo_fir , .search_inner"))
       return;
    $('.search_inner').hide();
});




 $('#basic').flagStrap();

$('.select-country').flagStrap({
	countries: {
		"US": "USD",
		"AU": "AUD",
		"CA": "CAD",
		"SG": "SGD",
		"GB": "GBP",
	},
	buttonSize: "btn-sm",
	buttonType: "btn-info",
	labelMargin: "10px",
	scrollable: false,
	scrollableHeight: "350px"
});

$('#advanced').flagStrap({
	buttonSize: "btn-lg",
	buttonType: "btn-primary",
	labelMargin: "20px",
	scrollable: false,
	scrollableHeight: "350px"
});

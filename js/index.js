$(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 10) {
	    $(".navbar").css("background" , "#fff");
        $("ul li .nav-link").css("color" , "#000");
        $("#navbartoggler").removeClass("navbar-dark").addClass("navbar-light");
          
	  }

	  else{
		  $(".navbar").css("background" , "rgba(0, 0, 0, 0)"); 
          $("ul li .nav-link").css("color" , "#fff");
           $("#navbartoggler").removeClass("navbar-light").addClass("navbar-dark");
	  }
     
  });
/*$(window).scroll(function() {
		var scrollDistance = $(window).scrollTop();
         
		$('section').each(function(i) {
            if($(this).attr("id") != undefined)
                {
                     console.log($(this).attr("id"));
                }
            
				if ($(this).position().top <= scrollDistance) {
                   
						$('ul li .nav-link').removeClass('active');
						$('ul li .nav-link').eq(i).addClass('active');
                   
                }              
		       
})
          
		}).scroll(); */

var nav = $('.navbar')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var scrolltop = $(this).scrollTop();
  
  $('section').each(function() {

    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (scrolltop >= top-1 && scrolltop <= bottom) {
      nav.find('a').removeClass('active');      
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
             
});

     var counters = $(".counter");
                  var countersQuantity = counters.length;
                  var counter = [];

                 for (i = 0; i < countersQuantity; i++) {
                    counter[i] = parseInt(counters[i].innerHTML);
                  };

                  var count = function(start, value, id) {
                    var localStart = start;
                  var inter = setInterval(function() {
                      if (localStart < value) {
                        localStart++;
                        counters[id].innerHTML = localStart;
                      }
                    }, 100);
                  };

                  for (j = 0; j < countersQuantity; j++) {
                    count(0, counter[j], j);
                  };
       
   

nav.find('a').on('click', function () {
  var id = $(this).attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 800);
  
  return false;
});

$(document).ready(function(){

$(".navbar ul li .nav-link").click(function(){
        $(".navbar ul li .nav-link").removeClass("active");
        $(this).addClass("active");
    });
 
var $grid =$('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    columnWidth: '.grid-item'
  }
})
$('.nav-tabs').on( 'click', 'a', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });  
});

$('.responsive').slick({
    autoplay: true,
    autoplaySpeed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
          autoplay: true,
          autoplaySpeed: 1000,
           arrows: false,
    focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 600,
      settings: {
          autoplay: true,
          autoplaySpeed: 1000,
           arrows: false,
    focusOnSelect: true,
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
           autoplay: true,
          autoplaySpeed: 1000,
           arrows: false,
    focusOnSelect: true,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
});
    
$('.center').slick({
  centerMode: true,
  centerPadding:'0px',
  slidesToShow:5,
    arrows: false,
    focusOnSelect: true,
  responsive: [
    {
      breakpoint: 768,
      focusOnSelect: true,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow:3,
        focusOnSelect: true
      }
    },
    {
      breakpoint: 480,
         focusOnSelect: true,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
        slidesToShow: 2,
        focusOnSelect: true
      }
    }
  ]
});
$(".spinner").fadeOut(6000,function(){
    
 document.getElementById("spinner").style.display = "none";
document.querySelector("body").style.overflow = "auto";
   
    });
   
/*    
$(".cogs .togg").click(function(){
    $(".options").toggle(500);
});
$(".plus").click(function(){
    if($("p").css("fontSize")< "25px")
        {
    console.log($("p").css("fontSize","+=1px"));
        }
});
$(".minus").click(function(){
        console.log("ssd");
    if($("p").css("fontSize") > "14px")
        {
    console.log($("p").css("fontSize","-=1px"));
    }
});*/
  
});
$(window).bind('beforeunload', function (e) {
        $("html,body").animate({scrollTop:'0'},0);
        
});


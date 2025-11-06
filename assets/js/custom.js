// (function($) {

// 	$(document).ready(function() {
// 	  $('body').addClass('js');
// 	  var $menu = $('#menu'),
// 	    $menulink = $('.menu-link');
	  
// 	$menulink.click(function() {
// 	  $menulink.toggleClass('active');
// 	  $menu.toggleClass('active');
// 	  return false;
// 	});});


// 	videoPopup();


// 	$('.owl-carousel').owlCarousel({
// 	    loop:true,
// 	    margin:30,
// 	    nav:true,
// 	    autoplay:true,
// 		autoplayTimeout:5000,
// 		autoplayHoverPause:true,
// 	    responsive:{
// 	        0:{
// 	            items:1
// 	        },
// 	        550:{
// 	            items:2
// 	        },
// 	        750:{
// 	            items:3
// 	        },
// 	        1000:{
// 	            items:4
// 	        },
// 	        1200:{
// 	            items:5
// 	        }
// 	    }
// 	})


// 	$(".Modern-Slider").slick({
// 	    autoplay:true,
// 	    autoplaySpeed:10000,
// 	    speed:600,
// 	    slidesToShow:1,
// 	    slidesToScroll:1,
// 	    pauseOnHover:false,
// 	    dots:true,
// 	    pauseOnDotsHover:true,
// 	    cssEase:'fade',
// 	   // fade:true,
// 	    draggable:false,
// 	    prevArrow:'<button class="PrevArrow"></button>',
// 	    nextArrow:'<button class="NextArrow"></button>', 
// 	});


// 	$("div.features-post").hover(
// 	    function() {
// 	        $(this).find("div.content-hide").slideToggle("medium");
// 	    },
// 	    function() {
// 	        $(this).find("div.content-hide").slideToggle("medium");
// 	    }
// 	 );


// 	$( "#tabs" ).tabs();


// 	(function init() {
// 	  function getTimeRemaining(endtime) {
// 	    var t = Date.parse(endtime) - Date.parse(new Date());
// 	    var seconds = Math.floor((t / 1000) % 60);
// 	    var minutes = Math.floor((t / 1000 / 60) % 60);
// 	    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
// 	    var days = Math.floor(t / (1000 * 60 * 60 * 24));
// 	    return {
// 	      'total': t,
// 	      'days': days,
// 	      'hours': hours,
// 	      'minutes': minutes,
// 	      'seconds': seconds
// 	    };
// 	  }
	  
// 	  function initializeClock(endtime){
// 	  var timeinterval = setInterval(function(){
// 	    var t = getTimeRemaining(endtime);
// 	    document.querySelector(".days > .value").innerText=t.days;
// 	    document.querySelector(".hours > .value").innerText=t.hours;
// 	    document.querySelector(".minutes > .value").innerText=t.minutes;
// 	    document.querySelector(".seconds > .value").innerText=t.seconds;
// 	    if(t.total<=0){
// 	      clearInterval(timeinterval);
// 	    }
// 	  },1000);
// 	}
// 	initializeClock(((new Date()).getFullYear()+1) + "/1/1")
// 	})()

// })(jQuery);


(function($) {

  // run when DOM is ready
  $(document).ready(function() {
    $('body').addClass('js');

    // menu toggle
    var $menu = $('#menu'),
        $menulink = $('.menu-link');

    $menulink.click(function(e) {
      e.preventDefault();
      $menulink.toggleClass('active');
      $menu.toggleClass('active');
      return false;
    });
  });

  // keep existing video popup init (assumes videoPopup is defined elsewhere)
  if (typeof videoPopup === 'function') {
    try { videoPopup(); } catch (e) { console.warn('videoPopup error:', e); }
  }

  // owl carousel init (keeps your original settings)
  if ($.fn.owlCarousel) {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 30,
      nav: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        550: { items: 2 },
        750: { items: 3 },
        1000: { items: 4 },
        1200: { items: 5 }
      }
    });
  }

  // slick slider init (keeps your original settings)
  if ($.fn.slick) {
    $(".Modern-Slider").slick({
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      dots: true,
      pauseOnDotsHover: true,
      cssEase: 'fade',
      draggable: false,
      prevArrow: '<button class="PrevArrow"></button>',
      nextArrow: '<button class="NextArrow"></button>'
    });
  }

  // features-post hover toggle
  $("div.features-post").hover(
    function() {
      $(this).find("div.content-hide").stop(true,true).slideToggle("medium");
    },
    function() {
      $(this).find("div.content-hide").stop(true,true).slideToggle("medium");
    }
  );

  // jquery ui tabs (if included)
  if ($.fn.tabs) {
    $("#tabs").tabs();
  }

  // ------- countdown (6 days) -------
  (function initCountdown() {

    function pad(num) {
      return String(num).padStart(2, '0');
    }

    function getTimeRemaining(endtime) {
      var t = Date.parse(endtime) - Date.parse(new Date());
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      var days = Math.floor(t / (1000 * 60 * 60 * 24));
      return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
    }

    function initializeClock(endtime) {
      // try to get elements (use querySelectorAll fallback for older templates)
      var daysEl = document.querySelector(".days .value"),
          hoursEl = document.querySelector(".hours .value"),
          minutesEl = document.querySelector(".minutes .value"),
          secondsEl = document.querySelector(".seconds .value"),
          counterEl = document.querySelector(".counter");

      function update() {
        var t = getTimeRemaining(endtime);

        if (daysEl) daysEl.innerText = pad(Math.max(0, t.days));
        if (hoursEl) hoursEl.innerText = pad(Math.max(0, t.hours));
        if (minutesEl) minutesEl.innerText = pad(Math.max(0, t.minutes));
        if (secondsEl) secondsEl.innerText = pad(Math.max(0, t.seconds));

        // when time finishes
        if (t.total <= 0) {
          clearInterval(timeinterval);
          // set zeros for all
          if (daysEl) daysEl.innerText = "00";
          if (hoursEl) hoursEl.innerText = "00";
          if (minutesEl) minutesEl.innerText = "00";
          if (secondsEl) secondsEl.innerText = "00";

          // optional: replace counter with a message
          if (counterEl) {
            counterEl.innerHTML = '<h5 class="text-center">registration closed</h5>';
          }
        }
      }

      // update immediately then every second
      update();
      var timeinterval = setInterval(update, 1000);
    }

    // set deadline to exactly 6 days from now
    var deadline = new Date(Date.parse(new Date()) + 6 * 24 * 60 * 60 * 1000);
    initializeClock(deadline);

  })();

})(jQuery);

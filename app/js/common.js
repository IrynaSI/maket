(function($) {
	/*slider*/
	$(document).ready(function(){
		$('#slider-items').slick({
		  slidesToShow: 4,
		  slidesToScroll: 1,
		  arrows: true,
		  prevArrow: '<div class="left-arrow"></div>',
		  nextArrow: '<div class="right-arrow"></div>',
		  dots: false,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 4,
		        slidesToScroll: 1,
		      }
		    },

		    
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 440,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		  ]
		});
	});

    /*fancybox*/
	$('[data-fancybox="images"]').fancybox();
    
    /*UP button*/
    $(window).scroll(function (){
		if ($(this).scrollTop() !=0){
			$('.top-button').fadeIn();
		}else{
			$('.top-button').fadeOut();
		}
	});
    $('.top-button').click(function(){
    	$('body,html').animate({scrollTop:0},800);
    });

    /*fb*/
    (function(d, s, id) {
		    var js, fjs = d.getElementsByTagName(s)[0];
		    if (d.getElementById(id)) return;
		    js = d.createElement(s); js.id = id;
		    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
		    fjs.parentNode.insertBefore(js, fjs);
		  }(document, 'script', 'facebook-jssdk'));
    
    /*menu link scrolling*/
    $(document).ready(function(){
    	$("a.topLink").click(function(){
    		$("html, body").animate({
    			scrollTop:$($(this).attr("href")).offset().top + "px"
    		},{
    			duration:500
    		});
    		return false;
    	});
    });
})(jQuery);



//SMOOTH PAGE SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


  $("#owl-carousel").owlCarousel({
 
      autoPlay: 3000, //Set AutoPlay to 3 seconds
 
      items : 4,
      pagination: false,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

  $("#owl-slider").owlCarousel({
      navigation : false,
      pagination : false, 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });




$(document).ready(

  function() { 

    $("html").niceScroll({
    	cursorcolor:"#000",
    	scrollspeed :"30",
    	cursorborder:"1px solid #000",
    	horizrailenabled: "false",
    	cursorborderradius: "0px"
    });
    
    // portfolio filtering

    $(".project-wrapper").mixItUp();
      
});

new WOW().init();

    
/*Preloader*/
//<![CDATA[
$(window).load(function() { // makes sure the whole site is loaded
  $('#status').fadeOut(); // will first fade out the loading animation
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
  $('body').delay(350).css({'overflow':'visible'});
  $('.navbar.navbar-default.navbar-fixed-top').delay(350).css({'visibility':'visible'});
  $('.navbar-right').delay(350).css({'visibility':'visible'});
})
//]]>


// copy email

$(document).ready(function() {
	
	// Add class to mailto link
	// Needed to separate the disabling of the default action AND copy email to clipboard
	$('a[href^=mailto]').addClass('mailto-link');

	var mailto = $('.mailto-link');
	var messageCopy = 'Click to copy';
	var messageSuccess = 'Email copied <i class="fa fa-smile-o" aria-hidden="true"></i>';
	
	mailto.append('<span class="mailto-message"></span>');
	$('.mailto-message').append(messageCopy);
	
	// Disable default action (opening your email client. yuk.)
	$('a[href^=mailto]').click(function() {
		return false; 
	})
	
	// On click, get href and remove 'mailto:'
	// Store email address in a variable.
	mailto.click(function() {
		var href = $(this).attr('href');
		var email = href.replace('mailto:', '');
		copyToClipboard(email);
		$('.mailto-message').empty().append(messageSuccess);
		setTimeout(function() {
			$('.mailto-message').empty().append(messageCopy);}, 2000); 
	});
	
});

// Grabbed this from Stack Overflow.
// Copies the email variable to clipboard
function copyToClipboard(text) {
    var dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.setAttribute('value', text);
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
}
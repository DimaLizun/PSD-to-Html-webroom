$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	//carousel header
	$('.owl-carousel').owlCarousel({
		items: 1,
		loop:true,
		nav:true,
		slideSpeed : 900,
		navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
	});


	//mobile menu
	var $menu = $("#my-menu").mmenu({
   //   options
	});
	var $icon = $("#my-icon");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
	   API.open();
	});

	API.bind( "opened", function() {
	   setTimeout(function() {
	      $icon.addClass( "is-active" );
	   }, 100);
	});
	API.bind( "closed", function() {
	   setTimeout(function() {
	      $icon.removeClass( "is-active" );
	   }, 100);
	});


	// scroll
  $('a[href^="#"]').click(function () {
			event.preventDefault();
			var id  = $(this).attr('href'),
			top = $(id).offset().top;
			
			$('body,html').animate({scrollTop: top}, 1500);
  });

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

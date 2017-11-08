$(function() {
	var $menu = $("#my-menu").mmenu({
	offCanvas: {
	position: 'right'
	},	
	extensions: ['theme-black', 'pagedim-black', "fx-panels-slide-up", "fx-listitems-slide"],
	navbar: {
		title: '<img src="img/logo/webaliance.png">'
		}
	});
	var api = $menu.data( "mmenu" );
	$(".hamburger").on( "click", function() {
		api.open();
	});
	$(".hamburger").on( "click", function() {
		api.close();
	});
		api.bind( "open:start", function() {
			$(".hamburger").addClass( "is-active" );
		});
		api.bind( "close:finish", function() {
			$(".hamburger").removeClass( "is-active" );
		});


		document.body.onload = function(){
			var preloader = document.getElementById('page-preloader');
			if(!preloader.classList.contains('done'))
			{
				preloader.classList.add('no-preloader');
			}
		}

		$(window).scroll(function(){
			
			var parallax = $(this).scrollTop();
			$('.header-text').css({
				"transform" : "translate(0px, " + parallax/6 + "%"
			});
		});

		
		$(window).scroll(function() {
			api.close()
		});	
		setTimeout(function() {
		    $('#displayNone').css('display','block');
		}, 100);





		$('.workers-slider').slick({
		  slidesToShow: 4,
		  arrows: false,
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
				autoplay: true,
  				autoplaySpeed: 1500,
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 993,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '65px',
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 720,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '50px',
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '35px',
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 660,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '25px',
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 630,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '135px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
			{
		      breakpoint: 600,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '120px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 560,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '100px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 525,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '85px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		   {
		      breakpoint: 428,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '70px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 388,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '50px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 351,
		      settings: {
		      	autoplay: true,
  				autoplaySpeed: 1500,
		      	centerMode: true,
        		centerPadding: '35px',
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }		  ]
		});

		$('.portfolio-slider').slick({
		  autoplay: true,
		  autoplaySpeed: 2000,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  arrows: false,
		  responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 700,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        centerMode: true,
  				variableWidth: true
		      }
			}
		]
	});


	$('.website-popup').magnificPopup({
		type: 'inline',
		focus: '#name'
	});
	$('.photo-popup').magnificPopup({
		type: 'inline',
		focus: '#name'
	});
	$('.application-popup').magnificPopup({
		type: 'inline',
		focus: '#name'
	});
	$('.styling-popup').magnificPopup({
		type: 'inline',
		focus: '#name'
	});

	//E-mail Ajax Send
	$("#footer-feedback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.sent-form').css('display','block');
			$('#footer-feedback').css('display','none');
			setTimeout(function() {
				$('.sent-form').css('display','none');
				$('#footer-feedback').css('display','block');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
	$(".prise-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$('.sent-prise').css('display','block');
			$('.prise-form').css('display','none');
			setTimeout(function() {
				$('.sent-prise').css('display','none');
				$('.prise-form').css('display','block');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
});
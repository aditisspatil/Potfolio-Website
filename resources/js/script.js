/* To repeat animations */
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd() {
      node.classList.remove(`${prefix}animated`, animationName);
      node.removeEventListener('animationend', handleAnimationEnd);

      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
 });
	

$(document).ready(function() {
	
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
	window.addEventListener('resize', () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	});

	
	/* For the Sticky Navigation Bar*/
	$('.js--sticky-nav').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}		
	}, {
		offset: '60px;'
	});
	
	/* Navigation Anchors */
	$('a[href^="#"]').click(function() {
        var target = $(this.hash);
        $('html, body').stop().animate({
            scrollTop:  target.offset().top - 40
        }, 600, function () {
			closeMobileNav();
		}
		);
		return false;
    });
	
	/* Mobile Navigation */
	$('.js--nav-icon').mouseup(function(e) {
		var nav = $('.js--main-nav');
		
		if ( nav.hasClass('js--nav-open') && nav.width() > 0 ) { //Already opened Nav
			closeMobileNav();
		}
		else if ( !nav.hasClass('js--nav-open') ) {
			nav.animate({width: 'toggle'}, 
			200,
			function() {
					nav.addClass('js--nav-open');
			});
		}

	});
	
	// Hide nav menu on click outside
    $(document).mouseup(function(e){
		var icon = $('.js--nav-icon')
		if ( !icon.is(e.target) ) {
			closeMobileNav();	
		}
    });
	
	/* Button Clicks */
	$('.js--tech-button').click(function() {
		var techBox = $('.js--tech-box');
		var button = $('.js--tech-button')		
		
		if (techBox.hasClass('tech-desc-box-small')) {
			button.text('Hide Details');
			techBox.addClass('tech-desc-box-expanded');
			techBox.removeClass('tech-desc-box-small');
			animateCSS('.wp-8', 'fadeIn');
		} else {
			button.text('Show Details');
			techBox.addClass('tech-desc-box-small');
			techBox.removeClass('tech-desc-box-expanded');
			animateCSS('.wp-8', 'fadeIn');
		}
	});
	
	/* Animations */
	
	//Roll in 
	$('.wp-1').waypoint(function(direction){
		$('.wp-1').addClass('animate__animated animate__rollIn');
	},{ offset: '80%' }
	);
	
	$('.wp-2').waypoint(function(direction){
		$('.wp-2').addClass('animate__animated animate__rollIn');
	},{ offset: '80%' }
	);
	
	$('.wp-3').waypoint(function(direction){
		$('.wp-3').addClass('animate__animated animate__rollIn');
	},{ offset: '80%' }
	);
	
	$('.wp-1').waypoint(function(direction){
		if (direction == 'down') {
			animateCSS('.wp-1', 'rollOut');
		}
	},{ offset: '10%' }
	);
	
	// Roll out
	$('.wp-1').waypoint(function(direction){
		if (direction == 'down') {
			animateCSS('.wp-1', 'rollOut');
		}
	},{ offset: '10%' }
	);
	$('.wp-2').waypoint(function(direction){
		if (direction == 'down') {
			animateCSS('.wp-2', 'rollOut');
		}
	},{ offset: '10%' }
	);
	$('.wp-3').waypoint(function(direction){
		if (direction == 'down') {
			animateCSS('.wp-3', 'rollOut');
		}
	},{ offset: '10%' }
	);
	
	//Fade in Left-Right
	$('.wp-4').waypoint(function(direction){
		$('.wp-4').addClass('animate__animated animate__fadeInLeft');
	},{ offset: '80%'
	});
	
	$('.wp-5').waypoint(function(direction){
		$('.wp-5').addClass('animate__animated animate__fadeInRight');
	},{ offset: '80%'
	});
	
	$('.wp-6').waypoint(function(direction){
		$('.wp-6').addClass('animate__animated animate__fadeInLeft');
	},{ offset: '80%'
	});
	
	$('.wp-7').waypoint(function(direction){
		$('.wp-7').addClass('animate__animated animate__fadeInRight');
	},{ offset: '80%'
	});
	
	$('.wp-9').waypoint(function(direction){
		$('.wp-9').addClass('animate__animated animate__fadeIn');
	},{ offset: '50%'
	});
	
	// Nested Animation
	$('.wp-10').waypoint(function(direction){
		var delay = 150;
		
		setTimeout(function() {
				animateSocialIcons('.wp-10');
			}, delay
		);		setTimeout(function() {
				animateSocialIcons('.wp-11');
			}, 2*delay
		);
		setTimeout(function() {
				animateSocialIcons('.wp-12');
			}, 3*delay
		);
		setTimeout(function() {
				animateSocialIcons('.wp-13');
			}, 4*delay
		);
		setTimeout(function() {
				animateSocialIcons('.wp-14');
			}, 5*delay
		);
	},{ offset: '80%'
	});
	
	function animateSocialIcons(element) {
		var animation = 'fadeInUp';
		animateCSS(element, animation);
	}

});	

function closeMobileNav() {
	var nav = $('.js--main-nav');
    if ( nav.hasClass('js--nav-open') ) {
		nav.animate({width: 'toggle'},
		'fast',
		function() {
			nav.removeClass('js--nav-open');
		}
		);	
	}
}


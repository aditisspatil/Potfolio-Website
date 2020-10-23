/* To repeat animations */
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);
	node.classList.remove('hidden');
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
			selectNavItem('about');
		} else {
			$('nav').removeClass('sticky');
			removeNavigationSelection();
		}		
	}, {
		offset: '60px;'
	});
	
	/* Navigation Anchors */
	$('a[href^="#"]').mousedown(function() {
        var target = $(this.hash);
        $('html, body').stop().animate({
            scrollTop:  target.offset().top - 40
        }, 600, function () {
			closeMobileNav();
		}
		);
		return false;
    });
	
	$('a[href^="#"]').mouseup(function() {
        var target = $(this.hash);
		target.blur();
		
		setTimeout(function() {
				selectNavItem(target.attr('id'));
			}, 600
		);
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
	
	/* Focused Navigation Item */
	$('.js--about-section').waypoint(function(direction) { //about - page up
		if (direction == 'up') {
			selectNavItem('about');
		}
	},{  offset: '10%;' }
	);
	$('.js--about-section').waypoint(function(direction) { //about - page down
		if (direction == 'down') {
			selectNavItem('about');
		}
	},{  offset: '80%;' }
	);
	
	$('.js--portfolio-section').waypoint(function(direction) { //portfolio - page up
		if (direction == 'up') {
			selectNavItem('portfolio');
		}
	},{ offset: '20%;' }
	);
	$('.js--portfolio-section').waypoint(function(direction) { //portfolio - page down
		if (direction == 'down') {
			selectNavItem('portfolio');
		} else {
			selectNavItem('about');
		}
	},{ offset: '80%;' }
	);
	
	$('.js--technologies-section').waypoint(function(direction) { //tech - page up
		if (direction == 'up') {
			selectNavItem('technologies');
		}
	},{ offset: '20%;' }
	);
	$('.js--technologies-section').waypoint(function(direction) { //tech - page down
		if (direction == 'down') {
			selectNavItem('technologies');
		} else {
			selectNavItem('portfolio');
		}
	},{ offset: '80%;' }
	);
	
	$('.js--contact-section').waypoint(function(direction) { //contact - page up
		if (direction == 'up') {
			selectNavItem('contact');
		}
	},{ offset: '20%;' }
	);
	$('.js--contact-section').waypoint(function(direction) { //contact - page down
		selectContact(direction);
	},{ offset: '60%;'}
	);
	$('.js--contact-section').waypoint(function(direction) { //contact - page down
		selectContact(direction);
	},{ offset: '80%;'}
	);
	$('.js--contact-section').waypoint(function(direction) { //contact - page down
		selectContact(direction);
	},{ offset: '90%;'}
	);
	
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
		$('.wp-1').removeClass('hidden');
		$('.wp-1').addClass('animate__animated animate__rollIn');
	},{ offset: '80%' }
	);
	
	$('.wp-2').waypoint(function(direction){
		$('.wp-2').removeClass('hidden');
		$('.wp-2').addClass('animate__animated animate__rollIn');
	},{ offset: '80%' }
	);
	
	$('.wp-3').waypoint(function(direction){
		$('.wp-3').removeClass('hidden');
		$('.wp-3').addClass('animate__animated animate__rollIn');
	},{ offset: '80%' }
	);
	
	//Fade in Left-Right
	$('.wp-4').waypoint(function(direction){
		$('.wp-4').removeClass('hidden');
		$('.wp-4').addClass('animate__animated animate__fadeInLeft');
	},{ offset: '80%'
	});
	
	$('.wp-5').waypoint(function(direction){
		$('.wp-5').removeClass('hidden');
		$('.wp-5').addClass('animate__animated animate__fadeInRight');
	},{ offset: '80%'
	});
	
	$('.wp-6').waypoint(function(direction){
		$('.wp-6').removeClass('hidden');
		$('.wp-6').addClass('animate__animated animate__fadeInLeft');
	},{ offset: '80%'
	});
	
	$('.wp-7').waypoint(function(direction){
		$('.wp-7').removeClass('hidden');
		$('.wp-7').addClass('animate__animated animate__fadeInRight');
	},{ offset: '80%'
	});
	
	$('.wp-9').waypoint(function(direction){
		$('.wp-9').addClass('animate__animated animate__fadeIn');
	},{ offset: '50%'
	});
	
	// Nested Animation
	$('.wp-10').waypoint(function(direction){
		if (direction == 'down') {
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
		}
	},{ offset: '80%'
	});
	
	function animateSocialIcons(element) {
		var animation = 'fadeInUp';
		animateCSS(element, animation);
	}
	
	$('.wp-10').waypoint(function(direction){
		if (direction == 'up') {
			$('.wp-10').addClass('hidden');
			$('.wp-11').addClass('hidden');
			$('.wp-12').addClass('hidden');
			$('.wp-13').addClass('hidden');
			$('.wp-14').addClass('hidden');
		}
	},{ offset: '95%' }
	);

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

function selectContact(direction) {
	if (direction == 'down') {
		var contactBottom = $('.js--contact-section').offset().top + $('.js--contact-section').innerHeight();
		var bottom = $(window).scrollTop() + $(window).height();

		if ( contactBottom <= bottom ) {
			selectNavItem('contact');
		}
	}
}

function selectNavItem(navItem) {
	removeNavigationSelection();
	
	if (navItem == 'about') {
		$('.js--about-nav').addClass('nav-selected');
	}
	else if (navItem == 'portfolio') {
		$('.js--portfolio-nav').addClass('nav-selected');
	}
	else if (navItem == 'technologies') {
		$('.js--technologies-nav').addClass('nav-selected');
	}
	else if (navItem == 'contact') {
		$('.js--contact-nav').addClass('nav-selected');
	}
}

function removeNavigationSelection () {
	$('.js--about-nav').removeClass('nav-selected');
	$('.js--portfolio-nav').removeClass('nav-selected');
	$('.js--technologies-nav').removeClass('nav-selected');
	$('.js--contact-nav').removeClass('nav-selected');
}

function isSectionInFocus(elem) {
    var top = $(window).scrollTop();
    var bottom = docViewTop + $(window).height() *0.7;
    var elemTop = $(elem).offset().top;
    return ((elemTop <= bottom) && (elemTop >= top));
  }
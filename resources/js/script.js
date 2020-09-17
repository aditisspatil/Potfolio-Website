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
            scrollTop:  target.offset().top - 10
        }, 300, function() {
			if (target.attr('id') == 'about') {
				animateCSS('.js--about', 'pulse');
			} else if (target.attr('id') == 'portfolio') {
				animateCSS('.js--portfolio', 'pulse');
			} else if (target.attr('id') == 'technologies') {
				animateTechnologies();
			} else if (target.attr('id') == 'contact') {
				animateCSS('.js--contact', 'pulse');
			}
		}
		);
		return false;
    });
	
	/* Mobile Navigation */
	$('.js--nav-icon').click(function() {
		var nav = $('.js--main-nav');
		var icon = $('.js--nav-icon i');
		
		nav.slideToggle(200);
		if (icon.hasClass('ion-navicon-round')) {
			icon.addClass('ion-chevron-left');
			icon.removeClass('ion-navicon-round');
		} else {
			icon.addClass('ion-navicon-round');
			icon.removeClass('ion-chevron-left');
		}
	});
	
	
});	
	
function animateTechnologies() {
	animateCSS('.js--technologies', 'pulse');
	animateCSS('.js--wp-1', 'fadeInDown');
	animateCSS('.js--wp-2', 'fadeIn');
	animateCSS('.js--wp-3', 'fadeInUp');
}
	

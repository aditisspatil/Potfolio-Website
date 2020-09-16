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
            scrollTop:  target.offset().top - 50
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
	
});	
	
function animateTechnologies() {
	animateCSS('.js--technologies', 'pulse');
	animateCSS('.js--wp-1', 'fadeInDown');
	animateCSS('.js--wp-2', 'fadeIn');
	animateCSS('.js--wp-3', 'fadeInUp');
}
	

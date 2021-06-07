'use strict';

$(document).ready(function () {


	window.onscroll = function () {
		myFunction();
	};
	const navbar = document.querySelector('.navigation');
	const sticky = navbar.offsetTop;

	function myFunction() {
		if (window.pageYOffset >= sticky) {
			navbar.classList.add('sticky');
		} else {
			navbar.classList.remove('sticky');
		}
	}

	$('.js--scroll').click(function () {
		$('html, body').animate({scrollTop: $('.js--section').offset().top}, 1000);
	});


	let status = false;
	$('.js--menu_btn').click(function () {
		if (status === false) {
			$('.navigation__link').css('display', 'block');
			status = true;
		} else {
			$('.navigation__link').css('display', 'none');
			status = false;
		}
	});

});
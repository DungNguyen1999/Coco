// POPUP

$(document).ready(function () {
	$(window).scroll(function () {
		var scrollPosition = $(window).scrollTop();

		if (scrollPosition > 0) {
			$('.header-nav').addClass('scrolled');
		} else {
			$('.header-nav').removeClass('scrolled');
		}
	});
	var mobileMenuVisible = false;

	$('.fa-bars, .fa-x, .nav-mobile').on('click', function (event) {
		event.stopPropagation();

		$('.mobile-menu-popup').slideToggle(200);

		mobileMenuVisible = !mobileMenuVisible;
	});

	$(document).on('click', function (event) {
		if (mobileMenuVisible && $(window).width() <= 650) {
			$('.mobile-menu-popup').slideUp(200);
			mobileMenuVisible = false;
		}
	});

	$('.mobile-menu-popup').on('click', function (event) {
		event.stopPropagation();
	});
});

// OPTION LANGUAGE

const languageOption = document.querySelector('.language-text');
const dropdown = document.querySelector('.language-list');
const icon = document.querySelector('.icon-down');

languageOption.addEventListener('click', () => {
	dropdown.classList.toggle('open');
	icon.classList.toggle('rotate');
});

const languageName = document.querySelector('.language-name');
const languageOptions = document.querySelectorAll(
	'.language-list .language-item'
);

function handleLanguageSelection(option) {
	const selectedValue = option.getAttribute('data-value');
	languageName.textContent = selectedValue;
	dropdown.classList.remove('open');
	icon.classList.remove('rotate');

	languageOptions.forEach((item) => {
		item.classList.remove('active');
		item.querySelector('span').style.color = '#858997';
	});

	option.classList.add('active');
	option.querySelector('span').style.color = '#FFF';
}

languageOptions.forEach((option) => {
	option.addEventListener('click', () => {
		handleLanguageSelection(option);
	});
});

document.addEventListener('DOMContentLoaded', () => {
	const defaultLanguageItem = document.querySelector(
		'.language-list .language-item[data-value="ENG"]'
	);

	defaultLanguageItem.classList.add('active');

	defaultLanguageItem.querySelector('span').style.color = '#FFF';

	languageName.textContent = 'ENG';

	// Scroll Top

	const scrollButton = document.querySelector('.scroll-top');

	scrollButton.addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	// Nav header

	const navList = document.querySelector('.nav-list-scroll');

	navList.addEventListener('click', function (e) {
		if (e.target.tagName === 'A') {
			e.preventDefault();
			const targetId = e.target.getAttribute('href').substring(1);
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth' });
			}
		}
	});
});

// Slick slider

// $(document).ready(function () {
// 	if ($(window).width() < 400) {
// 		$('.love-list').slick({
// 			slidesToShow: 1,
// 			slidesToScroll: 1,
// 			dots: true,
// 			arrows: false,
// 			customPaging: function (slider, i) {
// 				return '<button class="dot"></button>';
// 			},
// 		});
// 	}
// });

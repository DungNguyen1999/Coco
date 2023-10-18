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
	// Kiểm tra trạng thái hiển thị của popup
	var mobileMenuVisible = false;

	// Khi click vào icon X
	$('.fa-bars, .fa-x, .nav-mobile').on('click', function (event) {
		event.stopPropagation(); // Ngăn chặn sự kiện click kế tiếp lan ra ngoài

		// Toggle hiển thị mobile-menu-popup
		$('.mobile-menu-popup').slideToggle(200);

		// Cập nhật mobileMenuVisible
		mobileMenuVisible = !mobileMenuVisible;
	});

	// Ẩn popup khi click ra ngoài
	$(document).on('click', function (event) {
		if (mobileMenuVisible && $(window).width() <= 650) {
			$('.mobile-menu-popup').slideUp(200);
			mobileMenuVisible = false;
		}
	});

	// Ngăn chặn sự kiện click của popup lan ra ngoài và ẩn nó đi
	$('.mobile-menu-popup').on('click', function (event) {
		event.stopPropagation();
	});
});

// OPTION LANGUAGE

const languageOption = document.querySelector('.language-text');
const dropdown = document.querySelector('.language-list');
const icon = document.querySelector('.icon-down'); // Chọn biểu tượng

// Mở hoặc đóng option khi click vào "language-option"
languageOption.addEventListener('click', () => {
	dropdown.classList.toggle('open');
	icon.classList.toggle('rotate');
});

// Xử lý khi người dùng chọn một ngôn ngữ

const languageName = document.querySelector('.language-name');
const languageOptions = document.querySelectorAll(
	'.language-list .language-item'
);

function handleLanguageSelection(option) {
	const selectedValue = option.getAttribute('data-value');
	languageName.textContent = selectedValue;
	dropdown.classList.remove('open');
	icon.classList.remove('rotate');

	// Đảm bảo biểu tượng trở lại trạng thái ban đầu cho tất cả các ngôn ngữ
	languageOptions.forEach((item) => {
		item.classList.remove('active');
		item.querySelector('span').style.color = '#858997';
	});

	// Đặt class 'active' cho ngôn ngữ tương ứng
	option.classList.add('active');
	option.querySelector('span').style.color = '#FFF';
}

languageOptions.forEach((option) => {
	option.addEventListener('click', () => {
		handleLanguageSelection(option);
	});
});

// Xử lý khi tải trang

document.addEventListener('DOMContentLoaded', () => {
	// Tìm "language-item" có nội dung là "English - ENG"
	const defaultLanguageItem = document.querySelector(
		'.language-list .language-item[data-value="ENG"]'
	);

	// Gán class 'active' cho ngôn ngữ mặc định
	defaultLanguageItem.classList.add('active');

	// Màu cho ngôn ngữ mặc định
	defaultLanguageItem.querySelector('span').style.color = '#FFF';

	// Đặt ngôn ngữ mặc định
	languageName.textContent = 'ENG';

	// Scroll Top

	const scrollButton = document.querySelector('.scroll-top');

	scrollButton.addEventListener('click', function () {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	// Nav header

	const navList = document.querySelector('.nav-list');

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
// 				return '<button class="dot"></button>'; // Thay thế số bằng dấu chấm
// 			},
// 		});
// 	}
// });

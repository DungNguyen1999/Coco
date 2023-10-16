const languageOption = document.querySelector('.language-option');
const dropdown = document.querySelector('.dropdown');

// Mở hoặc đóng dropdown khi click vào "language-option"
languageOption.addEventListener('click', () => {
	dropdown.classList.toggle('open');
});

// Xử lý khi người dùng chọn một ngôn ngữ
const languageName = document.querySelector('.language-name');
const languageOptions = document.querySelectorAll('.dropdown li');

languageOptions.forEach((option) => {
	option.addEventListener('click', () => {
		const selectedValue = option.getAttribute('data-value');
		languageName.textContent = selectedValue;
		dropdown.classList.remove('open');
	});
});

// Đóng dropdown khi click ra ngoài
document.addEventListener('click', (event) => {
	if (!languageOption.contains(event.target)) {
		dropdown.classList.remove('open');
	}
});

const btn = document.querySelector('.btn')
const toggleNav = document.querySelector('.toggle-nav')

btn.addEventListener('click', () => {
	const visible = toggleNav.getAttribute('data-toggle');

	if (visible === 'false') {
		toggleNav.setAttribute('data-toggle', true);
		btn.setAttribute('data-status', 'close')
	} else {
		toggleNav.setAttribute('data-toggle', false);
		btn.setAttribute('data-status', 'open')
	}

});

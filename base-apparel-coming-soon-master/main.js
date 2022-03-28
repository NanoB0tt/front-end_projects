const email = document.querySelector('input');
const form = document.querySelector('form');


form.addEventListener('submit', (e) => {
	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailFormat)) {
		alert('Your email was accepted');
	} else {
		const para = document.createElement('p');
		para.textContent = 'Please enter a valid email';
		para.className = 'info';
		form.appendChild(para);
		const warningDiv = document.createElement('div');
		warningDiv.className = 'warning-error';
		form.appendChild(warningDiv);
		e.preventDefault();
	}
})


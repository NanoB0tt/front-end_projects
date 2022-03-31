const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('usermail');
const passw = document.getElementById('passw');
const hiddenDiv = document.getElementsByClassName('hidden-div')
const button = document.querySelector('button');


button.addEventListener('click', (e) => {
	if (firstName.value === '') {
		hiddenDiv[0].classList.remove('hidden-label');
		hiddenDiv[0].classList.add('error-msg');
		firstName.classList.add('error');	
		e.preventDefault();
	} 
	if (lastName.value === '') {
		hiddenDiv[1].classList.remove('hidden-label');
		hiddenDiv[1].classList.add('error-msg');
		lastName.classList.add('error');	
		e.preventDefault();
	}
	if (passw.value === '') {
		hiddenDiv[3].classList.remove('hidden-label');
		hiddenDiv[3].classList.add('error-msg');
		passw.classList.add('error');	
		e.preventDefault();
	}

	const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (!email.value.match(mailFormat || email.value === '')) {
		hiddenDiv[2].classList.remove('hidden-label');
		hiddenDiv[2].classList.add('error-msg');
		email.classList.add('error');	
		e.preventDefault();
	}
});


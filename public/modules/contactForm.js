const validateForm = (event) => {
	const text = `Form Submitted! Time stamp: ${event.timeStamp}`;

	console.log(text);

	for (let formField of document.forms['contact-form']) {
		console.log(formField);
		console.log(formField.value);
		console.log(formField.checkValidity());
		if (formField.value == '') {
			console.log(formField.labels[0].textContent);
			formField.setCustomValidity('youaregay');
			formField.reportValidity();
		} else {
			formField.setCustomValidity('');
			formField.reportValidity();
		}

	}

	event.preventDefault();
};

const handleSend = (event) => {
	console.log('foo');
	document.querySelector('#contact-form').setCustomValidity('');
	document.querySelector('#contact-form').reportValidity();

}

export { validateForm, handleSend };

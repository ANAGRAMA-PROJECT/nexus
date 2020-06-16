const validateForm = (event) => {
	const text = `Form Submitted! Time stamp: ${event.timeStamp}`;

	console.log(text);

	for (let formField of document.forms['contact-form']) {
		console.log(formField);
		console.log(formField.value);
		console.log(formField.checkValidity());
		if (formField.value == '') {
		} else {
		}

	}

	event.preventDefault();
};

const handleSend = (event) => {
	console.log('foo');
	document.querySelector('#contact-form').reportValidity();

}

export { validateForm, handleSend };

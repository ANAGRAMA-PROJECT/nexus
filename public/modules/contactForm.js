const validateForm = (event) => {
	const text = `Form Submitted! Time stamp: ${event.timeStamp}`;
	console.log(text);

	const fname = document.forms['contact-form']['fname'].value;
	const lname = document.forms['contact-form']['lname'].value;

	for (let formField of document.forms['contact-form']) {
		console.log(formField);
        console.log(formField.value);
        if(formField.value == ""){
            console.log(formField.labels[0].textContent);
        }
	}

	event.preventDefault();
};

export { validateForm };

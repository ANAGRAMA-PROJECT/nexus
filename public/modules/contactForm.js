const validateForm = (event) => {
    const text = `Form Submitted! Time stamp: ${event.timeStamp}`;
    console.log(text);

    const fname = null;
    const lname = null;

    const formData = {
        fname: fname,
        lname: lname
    };

    event.preventDefault();
};

export { validateForm };

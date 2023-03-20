const SERVER_URL = 'http://localhost:3001/contacts';

window.onload = () => {
    console.log('ONLOAD');

    function _handleSubmitButton() {
        console.log('_handleSubmitButton');
        const name = document.querySelector('#full-name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const message = document.querySelector('#textarea').value;

        const newContact = {
            name,
            email,
            phone,
            message
        };
        
        console.log(newContact);

        _saveContatData(newContact);
    }

    function _saveContatData(contact) {
        fetch(SERVER_URL, {
            method: 'POST',
            headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
        .then(response => response.json())
        .then(response => console.log(JSON.stringify(response)))
    }

    function _bindEvents() {
        const submitButton = document.querySelector('.submit-btn');

        submitButton.addEventListener('click', _handleSubmitButton);

    }

    _bindEvents();
}
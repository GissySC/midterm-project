const SERVER_URL = 'http://localhost:3001/contacts';

window.onload = () => {
    console.log('ONLOAD');

    function _handleSubmitButton() {
        const nameInput = document.querySelector('#full-name');
        const name = nameInput.value.trim();
        
        if (!name) {
            alert('Full name is required.');
            return;
          } 

        if (name.toLowerCase() === 'ironhack') {
          alert('You cannot be Ironhack, because I am Ironhack.');
          return;
        }
    
        const emailInput = document.querySelector('#email');
        const email = emailInput.value.trim();
    
        if (email && !/\S+@\S+\.\S+/.test(email)) {
          alert('Please enter a valid email address.');
          return;
        }
    
        const messageInput = document.querySelector('#textarea');
        const message = messageInput.value.trim();
    
        if (message.length > 500) {
          alert('Your message cannot be longer than 500 characters.');
          return;
        }
    
        const newContact = {
          name,
          email,
          phone: document.querySelector('#phone').value,
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
        .then(response => { 
            console.log(JSON.stringify(response));
            alert('Your data has been sent successfully. We will be in touch soon :)');
        })
        .catch(err => console.error(err));
    }

    function _bindEvents() {
        const submitButton = document.querySelector('.submit-btn');

        submitButton.addEventListener('click', _handleSubmitButton);

    }

    _bindEvents();
}
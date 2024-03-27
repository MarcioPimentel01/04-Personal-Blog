const submitEl = document.querySelector(`#submit-btn`);
const userInput = document.querySelector('#userName');
const titleInput = document.querySelector('#title');
const submissionResponseEl = document.querySelector('#content');

function showResponse(event) {
    // Prevent default action
    event.preventDefault();
    console.log(event);
    const response =
      'Thank you for your submission ' +
      userInput.value +
      '! We will reach out to you at ' +
      submissionResponseEl.value +
      '.';
    submissionResponseEl.textContent = response;
}

// Add listener to submit element
submitEl.addEventListener('click', showResponse);
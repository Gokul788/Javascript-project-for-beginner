// Select all elements with the class 'options'
const choice = document.querySelectorAll('.options');

// Select the container where the feedback will be displayed
const contaier = document.querySelector('.container');

// Select the submit button
const submitButton = document.querySelector('button');

// Default selected feedback value
let selectedFeedback = 'good';

// Track whether a selection has been made
let CheckSelection = false;

// Loop through each choice and add a click event listener
choice.forEach((items) => {
    items.addEventListener('click', (event) => {
        // Toggle the class 'options2' when an option is clicked
        items.classList.toggle('options2');

        // Set the selected feedback to the text content of the next sibling (feedback text)
        selectedFeedback = event.target.nextElementSibling.textContent;
        
        // Mark that a selection has been made
        CheckSelection = true;
    });
});

// Add a click event listener to the submit button
submitButton.addEventListener('click', () => {
    // Check if a selection has been made
    if (CheckSelection) {
        // Update the container's inner HTML with a thank you message and the selected feedback
        contaier.innerHTML = `
            <p class="heart">💖</p>
            <strong>Thank You! </strong>
            <br>
            <strong>Feedback: ${selectedFeedback} </strong>
        `;
        console.log('success');
    } else {
        // If no selection was made, log an error
        console.error("Select one please");
    }
});

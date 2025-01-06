// Select all elements with the ID 'box'
const containers = document.querySelectorAll('#box');

// Select the body element to change the background color
const body = document.querySelector('body');

// Loop through each container and add a click event listener
containers.forEach((btn) => {
    btn.addEventListener('click', () => {
        // Get the value of the clicked button
        numbers = btn.value;

        // Call the function to change the background color based on the button value
        backgroundColorChange(numbers);
    });
});

// Function to change the background color based on the selected value
function backgroundColorChange(numbers) {
    console.log(numbers);  // Log the selected color to the console

    // Change the background color of the body based on the button value
    if (numbers == 'green') {
        body.style.backgroundColor = "green";
    } else if (numbers == 'blue') {
        body.style.backgroundColor = 'blue';
    } else if (numbers == 'red') {
        body.style.backgroundColor = 'red';
    } else if (numbers == 'black') {
        body.style.backgroundColor = 'black';
    }
}

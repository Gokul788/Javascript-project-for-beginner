const numberOne = document.getElementById('number_one');
const numberTwo = document.getElementById('number_two');
const result = document.querySelector('.Result'); // Assuming one result element
const sign = document.getElementById('signs');
const btn = document.querySelector('.btn'); // Assuming one button element

let num1 = 0;
let num2 = 0;
let signUse = '';
let answer = 0;

// Update num1 when input changes
numberOne.addEventListener('input', (event) => {
    num1 = event.target.value; // Use value to get the entire input
});

// Update num2 when input changes
numberTwo.addEventListener('input', (event) => {
    num2 = event.target.value; // Use value to get the entire input
});

// Update sign when input changes
sign.addEventListener('input', (event) => {
    signUse = event.target.value; 
    console.log(signUse)// Get the selected sign
});


// Calculate and display result when button is clicked
btn.addEventListener('click', () => {
    switch (signUse) {
        case 'plus': // Use string values
            answer = Number(num1) + Number(num2);
            break;
        case 'sub':
            answer = Number(num1) - Number(num2);
            break;
        case 'mul':
            answer = Number(num1) * Number(num2);
            break;
        case 'div':
            answer = num2 != 0 ? Number(num1) / Number(num2) : 'Error: Division by zero';
            break;
        default:
            answer = 'Invalid Operation';
    }
    result.textContent = answer; // Update result
});

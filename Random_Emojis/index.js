// Array of emojis to choose from
const emojiArray = [
  "😆", "😅", "🤣", "😂", "😀", "🤑", "🤨", "🙂", "😊", "😗", 
  "😛", "😏", "🤥", "😴", "🥺", "😧", "😇", "😳", "🙃", "🥴", 
  "🧐", "🤨", "😒", "🤔", "🤭", "🥰", "🤐", "😄", "🤔", "🤪", 
  "🥲", "😃", "😁", "😬"
];

// Select the container element where the emoji will be displayed
let container = document.querySelector('.emoji_container');

// Select the button element to trigger the emoji change
let button = document.querySelector('button');

// Function to generate a random emoji
const generateEmoji = () => {
  // Generate a random index number to pick an emoji
  const randomNumber = Math.floor(Math.random() * emojiArray.length);

  // Update the container's text content to the random emoji
  container.textContent = emojiArray[randomNumber];
}

// Add a click event listener to the button to generate a random emoji when clicked
button.addEventListener('click', generateEmoji);

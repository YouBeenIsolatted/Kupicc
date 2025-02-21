// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get the header element
    const header = document.querySelector('header');

    // Create a button to change the text color
    const button = document.createElement('button');
    button.textContent = 'Change Header Color';
    button.style.padding = '10px 20px';
    button.style.margin = '20px';
    button.style.fontSize = '16px';
    button.style.cursor = 'pointer';

    // Append the button below the header
    header.appendChild(button);

    // Add an event listener to the button
    button.addEventListener('click', function () {
        // Generate a random color
        const randomColor = getRandomColor();
        
        // Change the header text color to the random color
        header.style.color = randomColor;
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color =

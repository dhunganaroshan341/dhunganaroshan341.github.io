 // Define the text to be animated
 const text = "Hello My name is roshan Dhungana";

 // Get the element where the text will be displayed
 const textElement = document.getElementById("text");

 // Split the text into an array of characters
 const characters = text.split("");

 // Create a variable to keep track of the current character index
 let index = 0;

 // Use setInterval to display each character one at a time
 const intervalId = setInterval(() => {
   // Add the current character to the text element
   textElement.textContent += characters[index];

   // Move to the next character index
   index++;

   // If we've displayed all the characters, clear the interval
   if (index >= characters.length) {
     clearInterval(intervalId);
   }
 }, 100);

 // Add a blinking cursor after the text
 const cursorElement = document.createElement("span");
 cursorElement.id = "cursor";
 textElement.appendChild(cursorElement);

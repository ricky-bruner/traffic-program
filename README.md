# A simple traffic program?

 I wanted to test myself to 'think' through the process of making a simple app that will generate questions and respond to the user clicking a submit button.

 So, I hate traffic. I hate Interstate 24. I travel this road twice a day, at the worst time of day. Life is super fair like that 😂😂😂

 An idea came to me to make a sarcastic app that quizzes the user on their driving quirks related to traffic scenarios, and no matter what, tell the user to get off the road during rush hour. It seemed funny at the time.

 Then came the code...

 ## Other Challenges!

 During the course of constantly breaking and reorganizing this program, I also wanted to challenge myself to make re-usable code. I discovered early on that I was using a function for E.V.E.R.Y.T.H.I.N.G.

 So why not try to make the code dry as well? So I came up with these to be used throughout the code repeatedly:
 ```javascript
 function addElement(element) {
    let newElement = document.createElement(element);
    mainContent.appendChild(newElement);
}
```
this makes basic html elements and adds them to a div I hardcoded into the index.html
```javascript
function addText(element, text, index) {
    const getElement = document.querySelectorAll(element)[index]
    getElement.textContent += text;
}
```
This one adds text to the buttons and h1 elements
```javascript
function addClass(element, index, className){
    let grabElement = document.querySelectorAll(element);
    grabElement[index].setAttribute('class', className);
}
```
And that final function adds CSS classes to my generated elements.

### Hopes and Dreams

Currently, the code will generate new questions. I hope in the near future to solve the placement of the conditional to get it working and make the app functions how originally envisioned! Thanks for checking it out, pleasemjust regard this as a simple representation of where my ubderstanding of Javascript is at week 2 of NSS!
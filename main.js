const mainQuestions = [
    "Do you slow down to look at accidents on the other side of the interstate?",
    "Do you weave in and out of other drivers with less than a foot of space between you?",
    "Do you leave more than 3 car lengths of space between you and the car in front of you during stop and go?",
    "Do you wait 5 seconds after a traffic light turns green to start accelerating?",
    "Do you drive a very large S.U.V. as if it were a small sedan?",
    "Do you clutch your phone in your hand during your drive?",
    "Do you text while driving?",
    "Do you believe that the turn signal is optional?",
    "Do you believe that lane markings are more of a 'suggestion' than a rule?",
    "Do you believe that it is okay pass others in the shoulder?"
];
const answer = "NO, YOU SHOULD NOT BE DRIVING DURING RUSH HOUR!";
const bestAnswer = "Good Job! But you still shouldn't be driving during rush hour!"
const mainContent = document.querySelector("#place-content")
const makeButton = document.createElement("button");

function addElement(element) {
    let newElement = document.createElement(element);
    mainContent.appendChild(newElement);
}
function addTypeElement(element, parameter) {
    let newElement = document.createElement(element);
    newElement.type = parameter;
    mainContent.appendChild(newElement);
}
function addText(element, text, index) {
    const getElement = document.querySelectorAll(element)[index]
    getElement.textContent += text;
}
function removeElement(element, index){
    let removeElement = document.querySelectorAll(element)[index]
    mainContent.removeChild(removeElement);
}
addTypeElement("button", "submit");
addText("button", "Take Quiz", 0);
const button = document.querySelector("button");
button.addEventListener('click', generateQuestion);
function generateQuestion() {
    removeElement("button",0);
    addElement("h1");
    addText("h1",mainQuestions[0],0)
    addTypeElement("input", "radio");
    addElement("p");
    addTypeElement("input", "radio");
    addElement("p");
    addTypeElement("button", "submit");
    addText("p", "Yes", 0);
    addText("p", "No", 1);
    addText("button", "Submit", 0)
}
// const p = document.querySelector("p");




function askQuestion(array) {
    let question;
    for (let i = 0; i < array.length; i++) {
        question = array[i];
        console.log(question);
    }
    return question;
}
askQuestion(mainQuestions);
let getQuestion = askQuestion(mainQuestions);
addText("h1", getQuestion, 0);

function askNextQuestion() {
    generateQuestion();
}

button.addEventListener('click', askNextQuestion);

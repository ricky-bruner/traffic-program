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
const mainContent = document.querySelector("#place-content")
const makeButton = document.createElement("button");
// const input = document.createElement("input");
// input.type = "radio"
function addElement(element){
    let newElement = document.createElement(element);
    mainContent.appendChild(newElement);
}
function addTypeElement(element, parameter){
    let newElement = document.createElement(element);
    newElement.type = parameter;
    mainContent.appendChild(newElement);
}
addElement("h1");
addTypeElement("input", "radio");
addTypeElement("input", "radio");
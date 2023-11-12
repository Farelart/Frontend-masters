const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "blue";
console.log(redSquare.classList);
const elementsToChange = document.querySelectorAll(".js-target");
console.log(elementsToChange);
for (let i = 0; i < elementsToChange.length; i++) {
    const currentElement = elementsToChange[i];
    currentElement.innerHTML = "Modified by JavaScript";
}
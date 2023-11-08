let character = "f";
let timesToRepeat = 5;
let word = "";
for(let i=0; i<timesToRepeat; i++) {
    word += character;
}
console.log(word);
console.log("".padStart(timesToRepeat,character));
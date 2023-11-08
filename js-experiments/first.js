const firstName = "Farel";
const lastName = "Ganlaky";
let isFarelCool = true;

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`
console.log(sentence);
console.log(sentenceWithTemplate);
console.log(isFarelCool);

const skyIsBlue = true;

if(skyIsBlue) {
    console.log("yay")
    console.log("The sky is blue!");
} else {
    console.log("The sky is ... not blue?");
}

if(2+2 === 4) {
    console.log(
        "Oh thank God, the fundamental principles of mathematics still hold true."
    );
} else {
    console.log("Uh, panic?");
}
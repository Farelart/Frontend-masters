function addTwo(number) {
    return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);

function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName}! I'm extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));

const myHomeCity = "Seattle";
const myHomeState = "Washington";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
    console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);

function bark() {
    console.log("woof");
}

const meow = function() {
    console.log("meeoow");
}

const chirp = () => {
    console.log("chirp chirp");
}

bark();
meow();
chirp();
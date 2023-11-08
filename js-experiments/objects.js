const person = {
    name: "Brian Holt",
    city: "Seattle",
    state: "WA",
    favoriteFood: "🌮",
    wantsTacosRightNow: true,
    numberOfTacosWanted: 100
};

console.log(person);
console.log(person.name);
console.log(person["name"]); // same as the line above; prefer using the other one

const person1 = {
    name: "Angie",
    ageRange: "25-35"
};

const person2 = {
    name: "Francesca",
    ageRange: "65-75"
};

function suggestMusic(person) {
    if (person.ageRange === "25-35") {
        console.log("We think you will like Daft Punk.");
    } else if (person.ageRange === "65-75") {
        console.log("You are obviously going to like Johnny Cash.");
    } else {
        console.log("Uh, maybe try David Bowie? Everyon likes David Bowie, right?");
    }
}

suggestMusic(person1);
suggestMusic(person2);

const dog = {
    name: "Luna",
    speak() {
        console.log("woof woof");
    }
};
dog.speak();

const me = {
    name: {
        first: "Brian",
        last: "Holt",
    },
    location: {
        streetNumber: 500,
        street: "Fakestreet",
        city: "Seattle",
        state: "WA",
        zipCode: 55555,
        country: "USA"
    },
    getAddress() {
        return `${this.name.first} ${this.name.last} ${this.location.streetNumber} ${this.location.street} ${this.location.city} ${this.location.state} ${this.location.zipCode} ${this.location.country}`;
    }
};

console.log(me.name.first);
console.log(me.location.state);
console.log(me.getAddress());
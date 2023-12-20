// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs

let animal = {
    name: "Dogerson",
    kind: "Dog",

    speak: function (greet) {
        console.log(`${this.kind} says: ${greet}`);
    }
}

let button = document.getElementById("sendGrit")

button.addEventListener("click", function() {
    let greet = document.getElementById("greeting").value
    animal.speak(greet);
})



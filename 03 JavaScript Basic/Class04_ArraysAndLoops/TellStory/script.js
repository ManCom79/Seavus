// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console

//---Get and check user input---
let userInput = prompt('Enter name, mood and activity a person is doing. Please provide the words separated by a comma. Ex: John, happy, walking');
let argumets = userInput.split(',')

console.log(userInput)
if (/([a-zA-Z])$/.test(userInput) != true) {
    console.log('You have not provided valid input. Your input should be three string arguments and should be ending with a letter. Please try again.')
}

if (argumets.length != 3) {
    console.log('You have not provided valid input. Your input should be three string arguments (name, mood and activity), separated by comma. Please try again.')
}

function tellStory (storyWords) {
    let story = `${storyWords[0]} is ${storyWords[1]}. He/She really enjoys ${storyWords[2]}.`
    console.log(story)
}

tellStory(argumets);

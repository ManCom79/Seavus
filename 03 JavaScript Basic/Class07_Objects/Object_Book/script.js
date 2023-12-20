// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML


let button = document.getElementById("submitButton")

button.addEventListener("click", function() {
    let bookTitleInput = document.getElementById("title").value
    let bookAuthorInput = document.getElementById("author").value
    let bookStatusInput = document.getElementById("readingStatus").checked
    let bookRecord = new bookStatus(bookTitleInput, bookAuthorInput, bookStatusInput)
    console.log(bookRecord.infoOnBook());
})


// Constructor function
function bookStatus(
    title,
    author,
    readingStatus
) {
    this.title = title;
    this.author = author;
    this.readingStatus = readingStatus

    this.infoOnBook = function () {
        if (this.readingStatus === true) {
            console.log(`Already read ${this.title} by ${this.author}`);
        }
        else {
            console.log(`You still need to read ${this.title} by ${this.author}`);
        }
    };
}
let playMovies = document.getElementById("playMovies");
let playTvshows = document.getElementById("playTvshows");
let keyboard = document.getElementById("keyboard");
let categoryDiv = document.getElementById("categoryDiv");
let livesCount = document.getElementById("lives");
let hintButton = document.getElementById("hintButton")
let playAgainButton = document.getElementById("playAgainButton")
let usedLetters = [];
let guessTitles = []; //will store the titles of the movies or tv shows, based on user's choice
let result = "";
let title = "";
let lives = 10;
let hints = []
let category = "";
let wordRow = document.getElementById("row");
let hintCounter = 0

let movies = [
  { title: "top gun", hint1: "Goose", hint2: "Tom Cruise" },
  { title: "fight club", hint1: "Tyler Durden", hint2: "Brad Pitt" },
  {
    title: "casablanca",
    hint1:
      "Of all the gin joints in all the towns in all the world, she walks into mine",
    hint2: "Humphrey Bogart",
  },
];

let tvShows = [
  { title: "friends", hint1: "Unagi", hint2: "Chandler" },
  {
    title: "two and a half man",
    hint1: "Charlie Sheen",
    hint2: "Ashton Kutcher",
  },
  { title: "big bang theory", hint1: "Sheldon", hint2: "Bazinga" },
];

//Enable keyboard and fill in the array of movies titles
playMovies.addEventListener("click", function () {
  category = "Movies";
  categoryDiv.innerText = `The chosen category is ${category}`;
  playMovies.style.visibility = "hidden";
  playTvshows.style.visibility = "hidden";
  keyboard.style.visibility = "visible";
  console.log(movies.length);
  for (let i = 0; i < movies.length; i++) {
    guessTitles.push(movies[i].title);
  }
  console.log(guessTitles);
  getWordToGuess();
});

//Enable keyboard and fill in the array of tv shows titles
playTvshows.addEventListener("click", function () {
  category = "TV Shows";
  categoryDiv.innerText = `The chosen category is ${category}`;
  playMovies.style.visibility = "hidden";
  playTvshows.style.visibility = "hidden";
  keyboard.style.visibility = "visible";
  console.log(tvShows.length);
  for (let i = 0; i < tvShows.length; i++) {
    guessTitles.push(tvShows[i].title);
  }
  console.log(guessTitles);
  getWordToGuess();
});

// Show dashes for each letter of the title the screen and filles in hints array for the title
function getWordToGuess() {
  let selectRandomTitle = Math.floor(Math.random() * movies.length);
  randomTitle = guessTitles[selectRandomTitle];
  if (category === "Movies") {
    hints.push(movies[selectRandomTitle].hint1)
    hints.push(movies[selectRandomTitle].hint2)
  }
  if (category === "TV Shows") {
    hints.push(tvShows[selectRandomTitle].hint1)
    hints.push(tvShows[selectRandomTitle].hint2)
  }
  console.log(`Random title is ${randomTitle}`);
  for (let i = 0; i < randomTitle.length; i++) {
    if (randomTitle[i] !== " ") {
      wordRow.innerHTML += `<td id="${i}">-</td>`;
    } else {
      wordRow.innerHTML += `<td>&nbsp</td>`;
    }
  }
  return randomTitle;
}

//catch event and process logic on clicked letters from app keyboard
letterclick = addEventListener(
  "click",
  function (event) {
    let result = event.target.innerHTML;
    if (result.length == 1) {
      if (!usedLetters.includes(result)) {
        for (let i = 0; i < randomTitle.length; i++) {
          if (randomTitle[i] === result) {
            let line = this.document.getElementById(`${i}`);
            line.innerText = result;
          }
        }
        let unresolvedLetters = [];
        for (let i = 0; i < randomTitle.length; i++) {
          let catchDash = document.getElementById(`${i}`);
          if (catchDash !== null) {
            if (catchDash.innerText === "-") {
              unresolvedLetters.push(catchDash.innerText);
            }
          }
        }
        if (unresolvedLetters.length === 0) {
          this.setTimeout(function() {alert("Victory!")}, "10");
        }
        if (randomTitle.includes(result) === false) {
          if (lives > 0) {
            console.log(`${result} is not in the ${randomTitle}`);
            lives = lives - 1;
            livesCount.innerText = `You have ${lives} lives left`;
            console.log(`${lives} lives remaining`);
          } else {
            this.alert("GAME OVER!!!");
          }
        }
      }
      usedLetters.push(result);
      console.log(usedLetters);
    } else {
      console.log(`${result} is already in array ${usedLetters}`);
    }
  }  
);

//Showing hints when Hints button is clicked
hintButton.addEventListener("click", function(){
  let hintBox = document.getElementById("hintBox")
  if (hintCounter === 0) {
    hintBox.innerText = hints[0]
    hintCounter = hintCounter + 1
  }
  else if (hintCounter === 1) {
      hintBox.innerText = hints[1]
      hintCounter = hintCounter + 1
  }
  else {
    hintBox.innerText = "No more hints!"
  }
  }
)

//Reload the page to start over
playAgainButton.addEventListener("click", function() {
  location.reload()
})
let playMovies = document.getElementById("playMovies");
let playTvshows = document.getElementById("playTvshows");
let keyboard = document.getElementById("keyboard");
let categoryDiv = document.getElementById("categoryDiv");
let livesCount = document.getElementById("lives");
let gameStatus = "Playing";

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
  { title: "Friends", hint1: "Unagi", hint2: "Chandler" },
  {
    title: "Two and a half man",
    hint1: "Charlie Sheen",
    hint2: "Ashton Kutcher",
  },
  { title: "Big bang theory", hint1: "Sheldon", hint2: "Bazinga" },
];

let usedLetters = [];

let guessTitles = []; //will store the titles of the movies or tv shows, based on user's choice
let result = "";
let title = "";
let lives = 10;
let category = "";
let wordRow = document.getElementById("row");

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

// Show dashes for each letter of the title of the show on the screen
function getWordToGuess() {
  let selectRandomTitle = Math.floor(Math.random() * movies.length);
  randomTitle = guessTitles[selectRandomTitle];
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

letterclick = addEventListener("click", function (event) {
  let result = event.target.innerHTML;
  if (result.length == 1) {
    if (!usedLetters.includes(result)) {
      for (let i = 0; i < randomTitle.length; i++) {
        if (randomTitle[i] === result) {
          let line = this.document.getElementById(`${i}`);
          line.innerText = result;
        }
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
});

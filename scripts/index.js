// Do not change the import statement
// This statement imports the exported file so it's contents are accessible to us.
// this makes the "placeholderQuestions" act like a variable essentially. 
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
console.log({ placeholderQuestions });
console.log(placeholderQuestions[0])
// When I need a question/Answer I can iterate over the array

//? API URLS
const url = "https://jservice.io/api/categories?count=100"
let buildURL = 
// categoryAPI = "/api/categories";
// questionAPI = "{"id":1189,"answer":"Brylcreem","question":"It was claimed of this product \"a little dab'll do ya\"","value":300,"airdate":"1984-10-04T19:00:00.000Z","created_at":"2022-12-30T18:38:06.972Z","updated_at":"2022-12-30T18:38:06.972Z","category_id":20,"game_id":5243,"invalid_count":null,"category":{"id":20,"title":"trivia","created_at":"2022-12-30T18:37:38.723Z","updated_at":"2022-12-30T18:37:38.723Z","clues_count":92}}
// "
// finalAPI = "/api/final"



// * Player Array
// let gamePlayer = ["playerOne", "playerTwo"];

//* Global classes 
let button = document.getElementsByClassName("button");
let footer = document.getElementsByClassName("footer");
let playersTurn = document.getElementsByClassName("players-turn");
//playersTurn = gamePlayer
let gridContainer = document.getElementsByClassName("gridContainer");
let gridCategory = document.getElementsByClassName("gridCategory");
let gridItem = document.getElementsByClassName("gridItem");
let playerScore = document.getElementsByClassName("playerScore");
let playerScore1 = document.getElementsByClassName("playerScore1");
let playerScore2 = document.getElementsByClassName("playerScore2");
let answerInput = document.getElementsByClassName("answerInput");
let answerButton = document.getElementsByClassName("answerButton");

//? INDEX.HTML 
//* index.html variables (id)
let openingMessage = document.getElementById("opening_message");

let playButton = document.getElementById("play_button");

let openingImage = document.getElementById("opening_image");


//* index.html click function to send players to round-1.html

playButton.addEventListener("click", (event) => {
    document.location.href = ".round-1.html"
   
})

//Append Elements 
body.appendChild(playButton);

//! "return data" for json file
//? ROUND-1.HMTL
//* round-1.html variables (id)
let roundOnePlayer = document.getElementById("round-one-player");

// find event that works when page loads... try: "load", "pageshow"
roundOnePlayer.addEventListener("load", (e) => {
   roundOnePlayer.textContent = `${gamePlayer[0]} ` ;
   // disable answerButtons
   document.answerButton.disabled = true;
})

// Append Elements
h2.appendChild(playersTurn);
h2.appendChild(roundOnePlayer);
div.appendChild(answerButton);

//! FUNCTIONS

// ONLY ONE QUESTION FUNCTION

// FETCH QUESTION FUNCTION

// ANSWER QUESTION- CORRECT OR INCORRECT - GUESS OR PASS - IF/ELSE?

// CHANGE SCORE FUNCTION - SCORE = POINTS ON CARD

//? ROUND-2.HTML

//? FINAL-JEOPARDY.HTML
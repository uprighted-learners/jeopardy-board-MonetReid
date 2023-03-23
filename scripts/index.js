// Do not change the import statement
// This statement imports the exported file so it's contents are accessible to us.
// this makes the "placeholderQuestions" act like a variable essentially. 
import placeholderQuestions from "./placeholder-questions.js";
// Is an object who's contents are the files data
console.log({ placeholderQuestions });
console.log(placeholderQuestions[0])
// When I need a question/Answer I can iterate over the array


// Function to grab questions on click



// * Player Array
 let gamePlayer = ["PLAYER ONE", "PLAYER TWO"];

//* Global classes 
let button = document.getElementsByClassName("button");
let footer = document.getElementsByClassName("footer");
let playersTurn = document.getElementsByClassName("players-turn");

//* Global Game Container Variables
let gridContainer = document.getElementsByClassName("gridContainer");
let gridCategory = document.getElementsByClassName("gridCategory");
let gridItemN = document.getElementsByClassName("gridItemN");
let gridItemA = document.getElementsByClassName("gridItemA");
let gridItemC = document.getElementsByClassName("gridItemC");
let gridItemM = document.getElementsByClassName("gridItemM");
let gridItemH = document.getElementsByClassName("gridItemH");
let gridItemG = document.getElementsByClassName("gridItemG");
let gridItem = document.getElementsByClassName("gridItem");
// Make array for our for loop of categories
let categoryArray = [gridItemN, gridItemA, gridItemC, gridItemM, gridItemH, gridItemG];
let categoryIteration = 0;
let skipThruCat = 0;

//* Global Score Variables
let playerScore = document.getElementsByClassName("playerScore");
let playerScore1 = document.getElementsByClassName("playerScore1");
let playerScore2 = document.getElementsByClassName("playerScore2");
let guessAttempts = 0;

playerScore1 = 0; // beginning scores are 0
playerScore2 = 0; // beginning scores are 0

//* Global Answer Input Variables
let answerInput = document.getElementsByClassName("answerInput");
let answerButton = document.getElementsByClassName("answerButton");

//? INDEX.HTML 
//* index.html variables (id)
let openingMessage = document.getElementById("opening_message");

let playButton = document.getElementById("play_button");

let openingImage = document.getElementById("opening_image");
let roundOnePlayer = document.getElementById("roundOnePlayer");
let roundTwoPlayer = document.getElementById("roundTwoPlayer");
let finalRoundPlayer = document.getElementById("finalRoundPlayer");


//* index.html click function to send players to round-1.html

// playButton.addEventListener("click", (event) => {
//     console.log(document.location)
//     document.location.href = "./round-1.html" // do I need "."?

   
// })

//Append Elements 
//body.appendChild(playButton);

//! "return data" for json file
//? ROUND-1.HMTL
// find event that works when page loads... try: "load", "pageshow"
window.addEventListener("load", (e) => {
    //console.log("trying to run load")
   roundOnePlayer.innerHTML = `<i>READY</i> ${gamePlayer[0]} ` ;
   // disable answerButtons
   document.answerButton.disabled = true;
})

window.addEventListener("load", (e) => {
    //console.log("trying to run load")
   roundTwoPlayer.innerHTML = `<i>READY</i> ${gamePlayer[1]} `;
   // disable answerButtons
   document.answerButton.disabled = true;
})

window.addEventListener("load", (e) => {
    //console.log("trying to run load")
    //* make it player who has highest score turn
   finalRoundPlayer.innerHTML = `<i>READY</i> ${gamePlayer[0]} ` ;
   // disable answerButtons
   document.answerButton.disabled = true;
})

// Append Elements
h2.appendChild(playersTurn);
h2.appendChild(roundOnePlayer);
div.appendChild(answerButton);

//! FUNCTIONS

//? .JSON file fetch
// variable
let json = "scripts/questions.json";
let questionIteration = 0;


// Function to grab categories from json file 
function fetchCategory() {
    fetch(json)
    .then((res) => res.json())
    .then((data) => {
      let members = data.placeholderQuestions;
      while  (categoryIteration < 6) {
        categoryArray[categoryIteration].textContent[skipThruCat].category;
        categoryIteration++;
        skipThruCat = skipThruCat + 10;  
      }
    })
    //The catch() method of a Promise object schedules a function to be called when the promise is rejected. It immediately returns an equivalent Promise object, allowing you to chain calls to other promise methods.
      .catch((err) => console.error(err));
}

fetchCategory(); // not sure if this is necessary here.

// create for loop for questions 
let testJSON = JSON.parse(json)

gridContainer.addEventListener("click", (e) => {
    if (e == gridContainer.gridItemN) {
        getCatQuestion(0-10);
    } else if ( e == gridContainer.gridItemA) {
        getCatQuestion(11-20);
    } else if (e == gridContainer.gridItemC ) {
        getCatQuestion(21-30);
    } else if (e == gridContainer.gridItemM) {
        getCatQuestion(31-40);
    } else if (e == gridContainer.gridItemH) {
        getCatQuestion(41-50);
    } else if (e == gridContainer.gridItemG) {
        getCatQuestion(51-60);
    } else { console.error("error")}

})

function getCatQuestion() {
    fetch(json)
      .then((res) => res.json())
      .then((data) => {
   let  membersQ = data.placeholderQuestions[1]
      }
  )}

gridCategory.appendChild(gridItem);
// FETCH QUESTION FUNCTION

// ANSWER QUESTION- CORRECT OR INCORRECT - GUESS OR PASS - IF/ELSE?

//* CHANGE SCORE FUNCTION - SCORE = POINTS ON CARD
// feed "click" the .innertext of card value into score if correct
gridItem.addEventListener("click", (event) => {
    if (answerInput.value == data.answer) {
        addPoints();
    } else { subtractPoints();}
    
   
})
// catch (err) {
//     console.error(err);
// }
//Function to add points
function addPoints() {

}

// Function to take away points
function subtractPoints() {

}
// parse

//? ROUND-2.HTML

//? FINAL-JEOPARDY.HTML
// Assign variables for elements in HTML
let readyTimer = document.getElementById("ready_timer");
let startTimeout = document.getElementById("start_timeout");
let timeoutDisplay = document.getElementById("timeout_display");
let startInterval = document.getElementById("start_interval");
let intervalDisplay = document.getElementById("interval_display");


startTimeout.addEventListener("click", (event) => {
     timeoutDisplay.textContent = "Getting Ready";
   
    setTimeout(() => {
        timeoutDisplay.textContent = "READY!" }, 5000);
    //
   //console.log("I clicked the button");
    //call another function
    //Append new element
})

startInterval.addEventListener("click", (event) => {
   //let count = 5;
   let intervalID = setInterval((startCountdown())
    //intervalDisplay.textContent = intervalID
    //intervalDisplay.textContent = startCountdown();
   )
})

// Find a way to make "go" post on website.
function startCountdown() {
   let x = 6;
    while (x >= 2) {
    x-= 1;
    console.log(x);
    } if (x == 1) {
        console.log("GO!")
    }
}

body.appendChild(timeoutDisplay);
body.appendChild(startInterval);
body.appendChild(intervalDisplay);

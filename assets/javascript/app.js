
let userGuess;
let correctAnswers = 0;
let wrongAnswers = 0;
let unanswered = 0;
let images;
let counter = 10;
let gameCounter;
let startButton = $('#startButton');
// let nextQuestion = $('<button class="btn btn-info">').text("Next Question");
let questions = $('#question');
let options = $('#options');
let timer = $('#timer');
let count = 0;



let triviaQuestions = [{
    question: "Which account allows you to withdraw your contributions both tax and penalty free, at any time?",
    options: ["Traditional IRA", "Step-Up IRA", "Roth IRA", "Tax-Free IRA"],
    realAnswer: 2
}, {
    question: "The NAV is the price of a ________",
    options: ["Stock", "Bond", "Portfolio", "Mutual Fund"],
    realAnswer: 3
}, {
    question: "When a private company first sells shares of stock to the public, this process is known as an _______",
    options: ["IBO", "IPO", "IPA", "IRA"],
    realAnswer: 1
}, {
    question: "You can purchase stock by purchasing:",
    options: ["Shares", "Dollar Values", "Shares and Dollar Values"],
    realAnswer: 0
}];


// setTimeout(timeUp, 1000 * 2); 

function timeUp() {
    questions.hide();
    options.hide();
    timer.hide();
    $('#timeUp').html("You ran outta time!");
    questionTwo();
    // nextQuestion();
}

function questionTwo() {
    // setTimeout(timeUp, 1000 * 2);
    // $('<div id="questions">').append(triviaQuestions[1].question);
    setTimeout(function () { insertQuestion(); }, 2000);
    console.log("new");
    questions.append(triviaQuestions[1].question);
    questions.show();

}

// function nextQuestion() {

//     // TODO: Increment the count by 1.
//     count++;

//     // TODO: Show the loading gif in the "image-holder" div.
//     questions.append(triviaQuestions[2].question);
//     questions.show();
//     options.show();

//     // TODO: Use a setTimeout to run displayImage after 1 second.
//     setTimeout(nextQuestion, 1000);

//     // TODO: If the count is the same as the length of the image array, reset the count to 0.
//     if (count === triviaQuestions.length) {
//         count = 0;
//     }
// }



function startTime() {
    gameCounter = setInterval(function() {
        console.log(counter);
        timer.html("Time Remaining: " + counter);
        counter--
        if (counter === 0) {
            console.log("No Mo Time Yo");
            clearInterval(gameCounter);
            timeUp();
        }
    }, 500);
};


function insertQuestion() {
    questions.append(triviaQuestions[0].question);
}

function insertAnswer() {
    for (let i = 0; i < triviaQuestions[0].options.length; i++) {
        let newDiv = $("<button class='btn btn-info'>").text(
          triviaQuestions[0].options[i]
        );
        options.append(newDiv);
    }
    console.log(triviaQuestions[0].options);
}


startButton.on('click', function(e){
    startButton.hide();
    startTime();
    insertQuestion();
    insertAnswer();
});

// nextQuestion.on('click', function(e) {
//     nextQuestion.hide();
//     text.hide();
//     startTime();
//     newScreen();
// });




function newScreen() {
    insertQuestion();
    insertAnswer();
}


function checkIfUserWon() {
    if ($yourGuess === triviaQuestions.realAnswer) {
        correctAnswers++;
    } else {
        wrongAnswers++;
    }
}










// When you run out of time, clear interval, and setTimeout for three seconds. Alert they got it wrong, wait three secs, go to next. 
// Use setInterval and then clearInterval on the slide. Then move to setTimeout for the next screen. 
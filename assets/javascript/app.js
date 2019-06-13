
$(document).ready(function () {
    $(".divWrapper").hide();

    let counter = 30;

    let triviaQuestions = {
      questions: [
        {
          question:
            "Which account allows you to withdraw your contributions both tax and penalty free, at any time?",
          options: [
            "   Traditional IRA    ",
            "   Step-Up IRA    ",
            "   Roth IRA   ",
            "   Tax-Free IRA   "
          ],
          id: "question-one",
          realAnswer: 2
        },
        {
          question: "The NAV is the price of a ________",
          options: ["   Stock   ", "    Bond    ", "    Portfolio   ", "    Mutual Fund "],
          id: "question-two",
          realAnswer: 3
        },
        {
          question:
            "When a private company first sells shares of stock to the public, this process is known as an _______",
          options: ["   IBO ", "    IPO ", "    IPA ", "    IRA "],
          id: "question-three",
          realAnswer: 1
        },
        {
          question: "You can only purchase stock by purchasing:",
          options: ["   Shares  ", "    Dollar Values   ", "    Shares and Dollar Values    "],
          id: "question-four",
          realAnswer: 0
        },
        {
            question: "You can only place an 'exchange order' on which security?",
            options: ["   Mutual Fund  ", "    Stock   ", "    ETF    "],
            id: "question-five",
            realAnswer: 0
        }
      ]
    };


    $(".startGame").on("click", function () {
        $('.fartPot').hide();
        $(".divWrapper").show();
        $(this).hide();
        run();
        decreaseTime();
    });


    function run() {
        count = setInterval(decreaseTime, 1000);
    };

    function stop() {
        clearInterval(count);
    };

    function decreaseTime() {
        counter--;
        $('#timeLeft').html('<h2>' + "Time Remaining: " + counter + '</h2>');
        if (counter === 0) {
            stop();
            $('#endButton').hide();
            $(".message").html("You ran outta time!");
            checkAnswers();
        }
    };

    function makePage(data) {
        let questionOption = "<form id='questionOne'>" + data.question + "<br>";
        let options = data.options;

        for (let i = 0; i < options.length; i++) {
            let optionOne = options[i];

            questionOption = questionOption + "<input type='radio' name='" + data.id + "' value=" + i + ">" + optionOne;
        }
        return questionOption + "</form>";
    };

    window.makePage = makePage;


    function showQuestions() {
        let questionHTML = '';
        for (let i = 0; i < triviaQuestions.questions.length; i++) {
            questionHTML = questionHTML + makePage(triviaQuestions.questions[i]);
        }
        $('#questionsSection').append(questionHTML);
    };

    function isCorrect(question) {
        let answers = $('[name=' + question.id + ']');
        let correct = answers.eq(question.realAnswer);
        let isChecked = correct.is(":checked");
        return isChecked;
    };

    showQuestions();

    // function resultsTemplate(question) {
    //     let htmlBlock = "<div>";
    //     htmlBlock = htmlBlock + question.question + ': ' + isChecked;
    //     return htmlBlock + "</div>";
    // };

    function checkAnswers() {
        let correct = 0;
        let incorrect = 0;
        let unAnswered = 0;

        for (let i = 0; i < triviaQuestions.questions.length; i++) {
            if (isCorrect(triviaQuestions.questions[i])) {
                correct++;
            } else {
                if (checkAnswered(triviaQuestions.questions[i])) {
                    incorrect++;
                } else {
                    unAnswered++;
                }
            }
        }
        $('.results').html('Number Correct: ' + correct + "<br>" + 'Times to Try Again: ' + incorrect + "<br>" + 'Number Skipped: ' + unAnswered);
    };


    function checkAnswered(question) {
        let anyAnswered = false;
        let answers = $('[name=' + question.id + ']');

        for (let i = 0; i < answers.length; i++) {
            if (answers[i].checked) {
                anyAnswered = true;
            }
        }

        return anyAnswered;
    };

    $("#endButton").on("click", function () {
        $("#endButton").hide();
        checkAnswers();
        stop();
        $("#messageDiv").html("Game Over!");
    });

});
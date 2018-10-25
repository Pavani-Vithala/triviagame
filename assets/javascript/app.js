var wins = 0;
var loses = 0;
var intervalId = 30;
var timeText1 = "Time Remaining: ";
var timeText2 = "Seconds";
var counter = 0;
var answer;
var track = 0;

// var score = 0;
// JavaScript function that wraps everything
var questions = [["Question one?", "Option1", "Option2", "Option3", "Answer1"],
["Question Two?", "Option1", "Option2", "Option3", "Answer2"],
["Question Three?", "Option1", "Option2", "Option3", "Answer3"],
["Question Four?", "Option1", "Option2", "Option3", "Answer4"],
["Question Five?", "Option1", "Option2", "Option3", "Answer5"]

]

$(document).ready(function () {

    console.log("Entering main function:");
    //console.log("The question selected is "+questions[0][0]);


    $("#start").on("click", function () {
        console.log("Clicked Start button:");
        $("#start").hide();
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        checkForm();
        if(counter<questions.length)
        {
        var timerId = setInterval(countdown, 1000);
        console.log("The timerid is"+timerid);
        }         


function countdown() {
    //track = 0;
    if (intervalId == 0) {
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        clearTimeout(timerId);
        /*track = 1;
        if (track === 0) {
            checkForm();
            var timerId = setInterval(countdown, 1000);
        } else {
            if (track === 1 && counter < questions.length) {
                checkForm();
                var timerId = setInterval(countdown, 1000);
            } else {
                if (track === 1 && counter < questions.length) {
                    console.log("Time to print wins:");
                }
            }
        }
        //checkForm();*/

    } else {
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        intervalId--;
    }

}

});

});

function populateForm(x) {
    console.log("Entered createForm function:");
    console.log("Question asked is:" + questions[x][0]);
    var Option1 = questions[x][1];
    var option2 = questions[x][2];
    var option3 = questions[x][3];
    var Answer = questions[x][4];
    $("#myForm").text(questions[x][0]);
    $("#myForm").append("<br>");
    $("#myForm").append("<br>");
    $("#myForm").append("<input type = 'radio' name = 'choices' value = 'A'>" + Option1 + "<br>");
    $("#myForm").append("<input type = 'radio' name = 'choices' value = 'B'>" + option2 + "<br>");
    $("#myForm").append("<input type = 'radio' name = 'choices' value = 'C'>" + option3 + "<br>");
    console.log($("#myForm").val());
    counter++;
    return (Answer);
}

function checkForm() {
    if (counter < questions.length) {
        answer = populateForm(counter);
        console.log("The answer is:" + answer);

    }
}











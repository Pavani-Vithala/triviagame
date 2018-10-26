var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var intervalId = 30;
var timeText1 = "Time Remaining: ";
var timeText2 = "Seconds";
var track = 0;
var Answer = [];
var userChoice = [];

var questions = [["What is the largest Continent?", "Asia", "Africa", "North America", "Asia"],
["What is the biggest ocean?", "Arcitic Ocean", "Indian Ocean", "Pacific Ocean", "Pacific Ocean"],
["When is Christmas Celebrated?", "6th August", "25th December", "30th June", "25th December"],
["How many bones are in a human body?", "300", "350", "206", "206"],
["What is the most colorful season?", "Winter", "Fall", "Summer", "Fall"]

]

$(document).ready(function () {

    $("#start").on("click", function () {
        $("#start").hide();
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);

        for (var i = 0; i < questions.length; i++) {
            Answer[i] = populateForm(i);

        }
        $("#Done").show();
        $("#myform").append("$(#Done)");

        var timerId = setInterval(countdown, 1000);

        $("#Done").on("click", function () {
            
            track = 1;
        });



        function countdown() {

            if (parseInt(intervalId) == 0 || track == 1) {
                $("#myForm").hide();
                $("#Done").hide();
                clearInterval(timerId);
                displayResults();



            }
            else {
                intervalId--;
                $("#timerText").text(timeText1 + intervalId + " " + timeText2);

            }

        }


        function displayResults() {

            var str = "All Done!";
            var bool = 0;

            for (var j = 0; j < questions.length; j++) {
                if (!$('input[name=choice' + j + ']:checked').val()) {
                    bool = 1;

                }
                userChoice[j] = $('input[name=choice' + j + ']:checked').attr('value');
                
                if (Answer[j] == userChoice[j]) {
                    correctAnswers++;
                } else {
                    if (bool == 1) {
                        unAnswered++;
                    }
                    else
                        incorrectAnswers++;
                }
              
               
                $("#QArea  ").append("<br>" + "<br>" + "<br>");
                $("#QArea").text(str)
                $("#QArea").append("<br>");
                $("#QArea").append("Correct Answers: " + correctAnswers + "<br>");
                $("#QArea").append("Incorrect Answers: " + incorrectAnswers + "<br>");
                $("#QArea").append("Unanswered Questions: " + unAnswered);
            }
        }


    });


    function populateForm(x) {
       
        var option1 = questions[x][1];
        var option2 = questions[x][2];
        var option3 = questions[x][3];
        var Answer = questions[x][4];
        $("#myForm").append("<strong>"+questions[x][0]+"</strong>");
        $("#myForm").append("<br>");
        $("#myForm").append("<input type='radio' id='Opt1" + x + "' name='choice" + x + "' value='" + option1 + "'>" + option1 +"</input>");
        $("#myForm").append("<input type='radio' id='Opt2" + x + "' name='choice" + x + "' value='" + option2 + "'>" +   option2    +"</input>");
        $("#myForm").append("<input type='radio' id='Opt3" + x + "' name='choice" + x + "' value='" + option3 + "'>" +   option3    +"</input>" + "<br>" + "<br>");
        return (Answer);
    }
}); 

var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var intervalId = 30;
var timeText1 = "Time Remaining: ";
var timeText2 = "Seconds";
var answer;
var track = 0;
var userChoice = 0;
var Answer = [];
var userChoice = [];
// var score = 0;
// JavaScript function that wraps everything
var questions = [["What is the largest Continent?", "Asia", "Africa", "North America", "Asia"],
["What is the biggest ocean?", "Arcitic Ocean", "Indian Ocean", "Pacific Ocean", "Pacific Ocean"],
["When is Christmas Celebrated?", "6th August", "25th December", "30th June", "25th December"],
["How many bones are in a human body?", "300", "350", "206", "206"],
["What is the most colorful season?", "Winter", "Fall", "Summer", "Fall"]

]

$(document).ready(function () {
    
    console.log("Entering main function:");
    //console.log("The question selected is "+questions[0][0]);


    $("#start").on("click", function () {
        console.log("Clicked Start button:");
        console.log("The value of track before clicking Done is"+track);
        $("#start").hide();
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        
        for(var i=0;i<questions.length;i++)
        {
            Answer[i] = populateForm(i);
            console.log(Answer[i]);
        }
        $("#Done").show();
        $("#myform").append("$(#Done)");
        
        var timerId = setInterval(countdown, 1000);
               
   
    
    $("#Done").on("click", function () {
        console.log("Clicked Done button");
        track = 1;
       // var m = 0;
        console.log("The value of track after clicking Done is"+track);
        var selValue = $('input[name=choice1]:checked').attr('id');
        var choice = $("#selValue").val();

        console.log("The clicked button is "+selValue);
        console.log("The clicked button text is "+choice);
    });    
 


function countdown() {
    
    if (parseInt(intervalId) == 0 || track == 1) {
        $("#myForm").hide();
        $("#Done").hide();
        var str = "All Done!";
        $("#QArea").text(str)
        $("#QArea").append("<br>");
        clearInterval(timerId);
           displayResults();
                      
         }
     else {
        intervalId--;
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        
    }
  
}

 
function displayResults()
{   
    console.log("Entered DisplayResults function:"); 
    var choice="";
        for (var j =0;j<questions.length;j++)
        {
            console.log("Entered for loop");
            if($("#Opt"+"j").checked)
            {
                choice = $("#Opt"+"j").val();
                console.log("The choice of the user is"+choice);
            }
   
        }
    $("#QArea").append("Correct Answers: "+correctAnswers+"<br>");
    $("#QArea").append("Incorrect Answers: "+incorrectAnswers+"<br>");
    $("#QArea").append("Unanswered Questions: "+unAnswered);
}      
  


});


function populateForm(x) {
   // console.log("Entered createForm function:");
   // console.log("Question asked is:" + questions[x][0]);
    var option1 = questions[x][1];
    var option2 = questions[x][2];
    var option3 = questions[x][3];
    var Answer = questions[x][4];
    $("#myForm").append(questions[x][0]);
    $("#myForm").append("<br>");
    //$("#myForm").append("<br>");
    
    
    $("#myForm").append("<input type='radio' id='Opt1'" + x + " name='choice'" + x + " value='A'>" + option1 + "</input>");
    $("#myForm").append("<input type='radio' id='Opt2'" + x + " name='choice'" + x + " value='B'>" + option2 + "</input>");
    $("#myForm").append("<input type='radio' id='Opt3'" + x + " name='choice'" + x + " value='C'>" + option3 + "</input>"+"<br>"+"<br>");

    console.log("The value of x is "+x);
    console.log("The text of the first button is:"+ $("#Opt1"+x).text());
    console.log("The text of the second button is:"+ $("#Opt2"+x).text());
    console.log("The text of the third button is:"+ $("#Opt3"+x).text());
   
    //++counter;
   return (Answer);
}
}); 

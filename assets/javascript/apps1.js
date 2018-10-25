var wins = 0;
var loses = 0;
var intervalId = 30;
var timeText1 = "Time Remaining: ";
var timeText2 = "Seconds";
var counter = 0;
var answer;
var track = 0;
var userChoice = 0;

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
        
        //checkForm();
       
        answer = populateForm(counter);
        var timerId = setInterval(countdown, 1000);
        //var timerId = setInterval(countdown, 1000);
        function reset()
        { 
            console.log("Entered Reset Function:");       
            checkForm();
            clearTimeout(timerId);
            timerId = setInterval(countdown,1000);
         
        }  
        
       // console.log("The timerid is"+timerId);
       function checkForm() {
          
            answer = populateForm(counter);
        
            
            
        //      console.log("Time to print Wins and losses:");

        }
        
        $("#myForm").on("click", function () {
            userChoice = 1;
            var choice = document.querySelector('input[name="choices"]:checked').parentElement.textContent;;
            console.log("The user choice is "+choice);
            console.log("Choice done"); 
        });   
       
        
                   

function countdown() {
    
    if (parseInt(intervalId) == 0 || userChoice == 1) {
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        
         reset();
        
        
         //timerId = setInterval(countdown, 1000);
         }
     else {
        intervalId--;
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        
    }
  //console.log("Timerid is"+timer);
}



});

});

function populateForm(x) {
    console.log("Entered createForm function:");
    console.log("Question asked is:" + questions[x][0]);
    var option1 = questions[x][1];
    var option2 = questions[x][2];
    var option3 = questions[x][3];
    var Answer = questions[x][4];
    $("#myForm").text(questions[x][0]);
    $("#myForm").append("<br>");
    $("#myForm").append("<br>");
    $("#myForm").append("<input type = 'radio' name = 'choices' value = 'A'>" + option1 + "<br>");
    $("#myForm").append("<input type = 'radio' name = 'choices' value = 'B'>" + option2 + "<br>");
    $("#myForm").append("<input type = 'radio' name = 'choices' value = 'C'>" + option3 + "<br>");
   // console.log($("#myForm").data(choices));
    ++counter;
    return (Answer);
}






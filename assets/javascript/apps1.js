var wins = 0;
var loses = 0;
var intervalId = 30;
var timeText1 = "Time Remaining: ";
var timeText2 = "Seconds";
//var counter = 0;
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
        $("#start").hide();
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        
        for(var i=0;i<questions.length;i++)
        {
            Answer[i] = populateForm(i);
            console.log(Answer[i]);
        }
        $("#Done").show();
        
        var timerId = setInterval(countdown, 1000);
               
         $(".choices").on("click", function () {
            
            userChoice[track] = retreiveChoice();
             

            
        });  
        console.log("The value of track is"+track);
        for(var i=0;i<=track;i++) 
        console.log("The choices are"+userChoice[i]);
    });    
        
 function retreiveChoice()
 {
     var choice = "";
     console.log("Entered retreive choice:");
    if(document.getElementById('#Opt1').checked) {
        choice = $("#Opt1").text;
        console.log("User's choice is "+choice);
        
    }else
    {
        if(document.getElementById('choice').checked) {
            choice = $("#Opt2").text;
            console.log("User's choice is "+choice);
    }else
    {
        if(document.getElementById('Opt2').checked) {
            choice = $("#Opt3").text;
            console.log("User's choice is "+choice);
    }
}
}
 
    track = track+1;
    return(choice);
}

function countdown() {
    
    if (parseInt(intervalId) == 0) {
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);          
           displayResults();
        
         }
     else {
        intervalId--;
        $("#timerText").text(timeText1 + intervalId + " " + timeText2);
        
    }
  
}
function displayResults()
{
  /* for(var j =0;j<questions.length;j++)
      {
          userChoice[j] = retreiveChoice();
               if(Answer[j] == userChoice[j])
               {
                        wins++;
                        console.log("The wins are"+wins);
               }else{
                      loses++;
                      console.log("The loses are"+loses);
               }*/
               console.log("Entered display function");
}





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
    $("#myForm").append("<input type = 'radio' id='Opt1' class = 'choice'"+x+" value = 'A'>" + option1+" ");
    $("#myForm").append("<input type = 'radio' id='Opt2' class = 'choice'"+x+" value = 'A'>" + option2+ " ");
    $("#myForm").append("<input type = 'radio' id='Opt3' class = 'choice'"+x+" value = 'A'>" + option3 +"<br>"+"<br>");
   // console.log($("#myForm").data(choices));
    //++counter;
   return (Answer);
}
}); 

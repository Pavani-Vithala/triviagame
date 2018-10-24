  var wins=0;
  var loses=0;
 // var score = 0;
  // JavaScript function that wraps everything
  var questions =[ ["Question one?","Option1","Option2","Option3","Answer1"],
                    ["Question Two?","Option1","Option2","Option3","Answer2"],
                    ["Question Three?","Option1","Option2","Option3","Answer3"],
                    ["Question Four?","Option1","Option2","Option3","Answer4"],
                    ["Question Five?","Option1","Option2","Option3","Answer5"]
   
 ]

 $(document).ready(function() { 
  
  console.log("Entering main function:");
  //console.log("The question selected is "+questions[0][0]);
  
   
   $("#start").on("click", function() {
       console.log("Clicked Start button:");
       $("#start").hide();
     
    for(var i=0;i<questions.length;i++)
    {
        calcTime();
        populateForm(i);
    }
    //console.log("The questions to print is:"+questions[0].prompt);
    
   // $("#QArea").append(questions[0].prompt);
    
    
  });



});


  function calcTime()
    {
        console.log("Entered Calc fucntion:");
        var h2 = "Time Remaining: 28Secs";
        
        console.log("The header 2 is"+h2);
        $("#timerText").text(h2);
        console.log("Have set the timer string:");
    }
    function populateForm(x) {
        console.log("Entered createForm function:");
        var Option1 = questions[x][1];
        var option2 = questions[x][2];
        var option3 = questions[x][3];
        $("#myForm").text(questions[x][0]);
        $("#myForm").append("<br>");
        $("#myForm").append("<br>");
        $("#myForm").append("<input type = 'radio' name = 'choices' value = 'A'>"+Option1+"<br>");
        $("#myForm").append("<input type = 'radio' name = 'choices' value = 'A'>"+option2+"<br>");
        $("#myForm").append("<input type = 'radio' name = 'choices' value = 'A'>"+option3+"<br>");
    } 

      
       
     

      



  

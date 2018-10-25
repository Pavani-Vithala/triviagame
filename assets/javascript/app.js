  var wins=0;
  var loses=0;
  var intervalId = 30;
  var h2 = "Time Remaining: ";
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
       $("#timerText").text(h2 +  intervalId);
       for(var i=0;i<1/*questions.length*/;i++)
       {
           console.log("Entered for loop:");
            populateForm(i);
            setInterval(decrement,1000); 
       }
  });



});


 /* function calcTime(time)
    {
        console.log("Entered Calc fucntion:");
        
        
       // console.log("The interval id is"+intervalId);
        do
        {   
            
            console.log("Interval Id is do While loop is" +intervalId);
           
             
        }while(intervalId >= 0) 
        //console.log("Have set the timer string:");
    }*/
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
    
    /*function timer()
    {
        console.log("Entered timer function:");
        setTimeout(decrement,2000);

    }*/
    
    function decrement() {
        
        //  Decrease number by one.
        console.log("entered decrement function:");
        clearInterval(intervalId);
        //var intervalId = 30;
        while(parseInt(intervalId)>0)        
        {   
            
            intervalId = parseInt(intervalId) - 1;
            console.log("The value of intervalId is:" + intervalId);
            if(parseInt(intervalId) > 0)
            {
                console.log("Entered if");
                
                $("#timerText").text(h2 +  intervalId);
                setTimeout(decrement,10000);
              }
             else  
             { 
                $("#timerText").text(h2 +  intervalId);
                setTimeout(decrement,10000);
                break;
              }
                
            
        } 
          
        //  Show the number in the #show-number tag.
        
      }
    
     

      



  

$(document).ready(function(){

    var sanguin = 0
    var choleric = 0
    var phlegmatic = 0
    var melancholic = 0
    var userName
    
    function myUser(userName){
        this.user = userName
        this.vacationQuestion
        this.workQuestion
        this.natureQuestion
        this.colorQuestion
        this.gameQuestion
    }

    myUser.prototype.vacationQuestion = function(){
        var vacayChoice = $("input.vacation-question:checked").val()
        if(vacayChoice === "phlegmatic"){
            return phlegmatic++
        }else if(vacayChoice === "melancholic"){
            return melancholic++
        }else if(vacayChoice === "choleric"){
            return choleric++
        }else{
            return sanguin++
        }
    }

    myUser.prototype.colorQuestion = function(){
        var colorChoice = $("input.color-question:checked").val()
        if(colorChoice === "phlegmatic"){
            return phlegmatic++
        }else if(colorChoice === "melancholic"){
            return melancholic++
        }else if(colorChoice === "choleric"){
            return choleric++
        }else{
            return sanguin++
        }
    }

    myUser.prototype.gameQuestion = function(){
        var gameChoice = $("input.game-question:checked").val()
        if(gameChoice === "phlegmatic"){
            return phlegmatic++
        }else if(gameChoice === "melancholic"){
            return melancholic++
        }else if(gameChoice === "choleric"){
            return choleric++
        }else{
            return sanguin++
        }
    }

    myUser.prototype.workQuestion = function(){
        var workChoice = $("input.work-question:checked").val()
        if(workChoice === "phlegmatic"){
            return phlegmatic++
        }else if(workChoice === "melancholic"){
            return melancholic++
        }else if(workChoice === "choleric"){
            return choleric++
        }else{
            return sanguin++
        }
    }

    myUser.prototype.natureQuestion = function(){
        var selectedChoice = $("input.nature-question:checked").val()
        if(selectedChoice === "phlegmatic"){
            return phlegmatic++
        }else if(selectedChoice === "melancholic"){
            return melancholic++
        }else if(selectedChoice === "choleric"){
            return choleric++
        }else{
            return sanguin++
        }
    }
    $("form#quiz-form").submit(function(event){
        event.preventDefault()
        
        userName = $("input#user-name").val()

        var newUser = new myUser(userName)
        vacationChoice = newUser.vacationQuestion()
        workQuestion = newUser.workQuestion()
        natureQuestion = newUser.natureQuestion()
        colorQuestion = newUser.colorQuestion()
        gameQuestion = newUser.gameQuestion()

        if(sanguin > melancholic && sanguin > phlegmatic && sanguin > choleric){
            $("div#sanguin-result").show()
            $("div#quiz-section").hide()
            $("#contact").hide()
            alert(`Hey ${userName}, You are a Sanguin`)
        }else if(melancholic > sanguin && melancholic > phlegmatic && melancholic > choleric){
            alert(`Hey ${userName}, You are a Melancholic`)
            $("div#melancholic-result").show()
            $("#contact").hide()
        }else if(phlegmatic > sanguin && phlegmatic > choleric && phlegmatic > melancholic){
            alert(`Hey ${userName}, You are a Phlegmatic`)
            $("div#phlegmatic-result").show()
            $("#contact").hide()
        }else{
            alert(`Hey ${userName}, You are a Choleric`)
            $("div#choleric-result").show()
            $("#contact").hide()
        }

        console.log(`My name is ${userName}`)
        console.log("Sanguin", sanguin)
        console.log("Melancholic", melancholic)
        console.log("Choleric", choleric)
        console.log("Phlegmatic", phlegmatic)
    })
    

    /*code to hide quiz until start test button is clicked*/
    $("#start-test").click(function(){
        $("#quiz-name").show();
        $("#start-test").hide()
        $("#start-test2").hide()
        $("#About-Us").hide()
        $("#traits-desc").hide()
        $("#contact").hide()
        $("#landing-section").hide()
        $("#quiz-submit").hide()
    });

    /*code to hide quiz until the second start test button is clicked*/
    $("#start-test2").click(function(){
        $("#quiz-name").show();
        $("#start-test").hide()
        $("#start-test2").hide()
        $("#About-Us").hide()
        $("#traits-desc").hide()
        $("#contact").hide()
        $("#landing-section").hide()
        $("#quiz-submit").hide()
    });

    /* Next btn hide and show different questions */
        $("#show-vacation-quiz").click(function(){
            $("#quiz-name").hide()
            $("#quiz-vacation").show();
        })

        $("#show-work-quiz").click(function(){
            $("#quiz-vacation").hide()
            $("#quiz-work").show()
        })

        $("#show-color-quiz").click(function(){
            $("#quiz-work").hide()
            $("#quiz-color").show()
        })

        $("#show-nature-quiz").click(function(){
            $("#quiz-color").hide()
            $("#quiz-nature").show()
        })

        $("#show-game-quiz").click(function(){
            $("#quiz-nature").hide()
            $("#quiz-game").show()
            $("#quiz-submit").show()
        })

    /* Adding functionality to Scroll button */
    const scrollButton=document.getElementById("scrollButton");
    const goToTop=document.body.scrollTop;
    window.onscroll=()=>{
        if(goToTop>100 || document.documentElement.scrollTop>100){
            scrollButton.style.display="block";
        }else{
            scrollButton.style.display="none"
        }
     };

     scrollButton.onclick=()=>{
        document.body.scrollTop=0;
        document.documentElement.scrollTop=0;
    }

    //$(window).scrollTop($('a#quiz-form').position().top);

    //Toogle cards
    let cardTotalNumber =($(".card").toArray().length);
    
    for(let cardNumber = 1; cardNumber<=cardTotalNumber;cardNumber++ ){
        $(`.card${cardNumber}`).click(function() {
            $(`.card-show${cardNumber}`).toggle(400);
            $(`.card-hidden${cardNumber}`).toggle(400);
        });
  }
      

});
    
  


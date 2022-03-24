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
        if($(".game-question").is(":checked")){

            userName = $("input#user-name").val()

            var newUser = new myUser(userName)
            vacationChoice = newUser.vacationQuestion()
            workQuestion = newUser.workQuestion()
            natureQuestion = newUser.natureQuestion()
            colorQuestion = newUser.colorQuestion()
            gameQuestion = newUser.gameQuestion()

            if(sanguin > melancholic && sanguin > phlegmatic && sanguin > choleric){
                $("#quiz-game").hide()
                $("#sanguin-result").show()
                document.getElementById("user-name-sanguin").innerHTML = userName
            }else if(melancholic > sanguin && melancholic > phlegmatic && melancholic > choleric){
                $("div#melancholic-result").show()
                $("#quiz-game").hide()
                document.getElementById("user-name-melancholic").innerHTML = userName
            }else if(phlegmatic > sanguin && phlegmatic > choleric && phlegmatic > melancholic){
                $("div#phlegmatic-result").show()
                $("#quiz-game").hide()
                document.getElementById("user-name-phlegmatic").innerHTML = userName
            }else{
                $("div#choleric-result").show()
                $("#quiz-game").hide()
                document.getElementById("user-name-choleric").innerHTML = userName
            }

            console.log(`My name is ${userName}`)
            console.log("Sanguin", sanguin)
            console.log("Melancholic", melancholic)
            console.log("Choleric", choleric)
            console.log("Phlegmatic", phlegmatic)
        }else{
            alert("Pick your favourite childhood game.")
        }
    })
    

    /*code to hide quiz until start test button is clicked*/
    $("#start-test").click(function(){
        $("#home-section").removeClass("header")
        $("#home-section").addClass("header-quiz")
        $("ul#nav-links").removeClass("nav__links")
        $("ul#nav-links").addClass("nav__links_2")
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
        $("#home-section").removeClass("header")
        $("#home-section").addClass("header-quiz")
        $("ul#nav-links").removeClass("nav__links")
        $("ul#nav-links").addClass("nav__links_2")
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
            if($("#user-name").val() !== ""){
                $("#quiz-name").hide()
                $("#quiz-vacation").show();
            }else{
                alert("User name cannot be empty.")
            } 
        })

        $("#show-work-quiz").click(function(){
            if($(".vacation-question").is(":checked")){
                $("#quiz-vacation").hide()
                $("#quiz-work").show()
            }else{
                alert("You did not choose a vacation destination of your choice!")
            }
        })

        $("#show-color-quiz").click(function(){
            if($(".work-question").is(":checked")){
                $("#quiz-work").hide()
                $("#quiz-color").show()
            }else{
                alert("Select a choice.")
            }
        })

        $("#show-nature-quiz").click(function(){
            if($(".color-question").is(":checked")){
                $("#quiz-color").hide()
                $("#quiz-nature").show()
            }else{
                alert("Pick a color.")
            }
            
        })

        $("#show-game-quiz").click(function(){
            if($(".nature-question").is(":checked")){
                $("#quiz-nature").hide()
                $("#quiz-game").show()
                $("#quiz-submit").show()
            }else{
                alert("Select a choice")
            }
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

/*Give submit button functionality */

function sendMessage(){
    let name1=document.getElementById("name1").value;
    let email1=document.getElementById("email1").value;
    let textarea1=document.getElementById("textarea1").value;

    if(name1 !="" && email1 !="" && textarea1 !=""){
        alert(`We have recieved your feedback ${name1} `)
    }else{
        alert("Please fill all the fields")
    }
    // document.querySelector("contact-form").reset();
}

function refreshPage(){
    location.reload()
}
    
  


$(document).ready(function(){

    var sanguin = 0
    var choleric = 0
    var phlegmatic = 0
    var melancholic = 0
    
    function myUser(userName){
        this.user = userName
        this.vacationChoice
        this.workQuestion
        this.natureQuestion
        this.colorQuestion
        this.gameQuestion
    }

    myUser.prototype.vacationChoice = function(){
        // Vacation Melancholic-Beach, Phlegmatic-Camping, Choleric-Mountains, Sanguins-Roadtrip
        $("img#beach").click(function(){melancholic++})
        $("img#camping").click(function(){phlegmatic++})
        $("img#mountains").click(function(){choleric++})
        $("img#sanguins").click(function(){sanguin++})    
    }

    myUser.prototype.colorQuestion = function(){
        $("img#yellow").click(function(){sanguin++}) 
        $("img#green").click(function(){phlegmatic++})
        $("img#red").click(function(){choleric++})
        $("img#blue").click(function(){melancholic++}) 
    }

    myUser.prototype.gameQuestion = function(){
        $("img#gaming").click(function(){melancholic++})
        $("img#scrabble").click(function(){phlegmatic++})
        $("img#twister").click(function(){sanguins++})
        $("img#chess").click(function(){cholerics++})
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
        
        var userName = $("input#user-name").val()

        var newUser = new myUser(userName)
        vacationChoice = newUser.vacationChoice()
        workQuestion = newUser.workQuestion()
        natureQuestion = newUser.natureQuestion()
        colorQuestion = newUser.colorQuestion()
        gameQuestion = newUser.gameQuestion()

        console.log("Sanguin", sanguin)
        console.log("Melancholic", melancholic)
        console.log("Choleric", choleric)
        console.log("Phlegmatic", phlegmatic)
        alert(userName)
    })

    $("img").click(function(){
        alert("Selected")
    })

    /*code to hide quiz until start test button is clicked*/
    $("#start-test").click(function(){
        $("#quiz-name").show();
        $("#contact").hide()
        $("#landing-section").hide()
        $("#start-test").hide()
        //$(window).scrollTop($('a#quiz-form').position().top);
    });

    /* Next btn hide and show different questions */
    $("#show-vacation-quiz").click(function(){
        $("#quiz-name").hide()
        $("#quiz-vacation").show()
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
})




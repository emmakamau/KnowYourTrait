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

<<<<<<< HEAD
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
        $("img#gaming").click(function(){
            melancholic++ 
            alert("what the hell")
        })
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
=======
    $("form#quiz-form").submit(function(event){
        event.preventDefault()
        
        var userName = $("input#user-name").val()
        alert(userName)
    })

    /*code to hide quiz until start test button is clicked*/
    $("#start-test").click(function(){
        $("#quiz-form").show();
       

    });

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
>>>>>>> 542e36933bd4ce9b79219eb9a562fa02f7f3ad1c

    $('#quiz-work').click(function(){alert("Clicked me")})

    $("form#quiz-form").submit(function(event){
        event.preventDefault()
        
        var userName = $("input#user-name").val()

<<<<<<< HEAD
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
    })
})


=======
>>>>>>> 542e36933bd4ce9b79219eb9a562fa02f7f3ad1c

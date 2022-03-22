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
    }

    myUser.prototype.vacationChoice = function(){
        // Vacation Melancholic-Beach, Phlegmatic-Camping, Choleric-Mountains, Sanguins-Roadtrip
        $('img#beach').click(function(){return melancholic++ })  
        $('img#camping').click(function(){return phlegmatic++})
        $('img#mountains').click(function(){return choleric++})
        $('img#roadtrip').click(function(){return sanguin++})
            
    }

    myUser.prototype.workQuestion = function(){
        var selectedChoice = $("input.work-question:checked").val()
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

    myUser.prototype.natureQuestion = function(){
        
    }

    $('#quiz-work').click(function(){alert("Clicked me")})

    $("form#quiz-form").submit(function(event){
        event.preventDefault()
        
        var userName = $("input#user-name").val()

        var newUser = new myUser(userName)
        vacationChoice = newUser.vacationChoice()
        workQuestion = newUser.workQuestion()

        console.log("Sanguin", sanguin)
        console.log("Melancholic", melancholic)
        console.log("Choleric", choleric)
        console.log("Phlegmatic", phlegmatic)
    })
})



$(document).ready(function(){
    function user(userName, userTrait){
        this.user = userName
        this.trait = userTrait
    }

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




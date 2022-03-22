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












})
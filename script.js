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
       

        $(window).scrollTop($('a#quiz-form').position().top);

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




$(document).ready(function () {

    //Submit button function

    $("button#addburger").on("click", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        console.log("Submit clicked");
        var textArea = $("textarea#userinput");

        if (textArea.val()===null){
            console.log("Type burger you would like to eat");
            return;
        }

        const burger = {
            burger_name: textArea.val().trim(),
            devoured: false,
            noteaten: true
        };

        $.post("/api/burgers", burger, function(){
            textArea.val("");
            location.reload();
        });

    });




$("button#devourbtn").on("click", function(e){
    e.preventDefault();
    var burger = $(this);
    var id = burger.attr("data-burger-id");   
    console.log(id);
    $.ajax({
        method: "PUT",
        url: `/api/burgers/${id}`        
    }).then(function(resp){
        console.log(resp);
        if(resp.success === true ){
            location.reload();
        }  
    });
 })



})
$(document).ready(function () {

    var textArea = $("textarea#userinput");
    
    var $burgerContainer = $("li.new-item");




    initializeRows = () => {
        $burgerContainer.empty();
        var rowstoAdd = [];
        for (var i = 0; i < burgers.length; i++) {
            rowstoAdd.push(burgers[i]);
            // console.log(rowstoAdd)
            console.log(burgers[i].burger_name)
            // let newList = burgers[i].burger_name;
            // $burgerContainer.append(newList)
        }

        
    }

    //Submit button function

    $("button#addburger").on("click", function () {

        console.log("Submit clicked");
        insertBurger();
        getBurgers();


    })


    /*Get burgers**//////////////////////////
    getBurgers = () => {
        $.get("/api/burgers", function (data) {
            burgers = data;
            initializeRows();
        })
    };
    /**Insertin burger function partially working, blank values are eneterd though */
    function insertBurger() {
        let burger = {
            burger_name: textArea.val().trim(),
            devoured: false
        };

        $.post("/api/burgers", burger, getBurgers)
        textArea.val("")

    }




    /***************************************************** */
    // function getBurgers() {
    //     $.get("/api/burgers", function(data) {
    //       todos = data;
    //       initializeRows();
    //     });
    //   }


    // insertBurger =(event)=>{
    // event.preventDefault();
    // let burger = {
    //     burger_name: $textArea.val().trim(),
    //     devoured: false
    // };
    // $.post("/api/burgers", burger, getBurgers)
    //     $textArea.val("")
    // }

})
$(document).ready(function () {
    var global1 = 0;
   // var global2 = (Math.floor(Math.random() * 101 + 19)};

   //i need a random integer between 19 and 120
    var global3 = function randomIntFromInterval(19, 120) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
    var global4 = 0;
    // ##### Option 1 Game design notes
    // * The random number shown at the start of the game should be between 19 - 120.
    // * Each crystal should have a random hidden value between 1 - 12.
    var global5 = [];
    // We begin by expanding our array to include four options. (12)
    var global6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var global7 = [];
    var global8 = "";
    var global9 = "";
    var global10 = "";
    //how do i establish the initial random number shown at the start?
    //somethinng like this:

   // var targetNumber = ;

    $("#trashtoguess").text(global3);
    console.log(global3);


    //i think that will work




    //here i want to assign an attribute to the images of cyrstals, something about a random hidden value between one and twelve.
    function function1() {
        //imageCrystal.attr("data-crystalvalue", numberOptions[i]);
        //$("img").attr("width", "500");
        //$(selector).attr(attribute, function (index, currentvalue));
        document.getElementById("trashcrystal1").setAttribute("trashvalue", (Math.floor(Math.random() * 10) + 2));

    };
    function function2() {
        document.getElementById("trashcrystal2").setAttribute("trashvalue", (Math.floor(Math.random() * 10) + 2));

    };
    function function3() {
        document.getElementById("trashcrystal3").setAttribute("trashvalue", (Math.floor(Math.random() * 10) + 2));

    };
    function function4() {
        document.getElementById("trashcrystal4").setAttribute("trashvalue", (Math.floor(Math.random() * 10) + 2));

    };
    function function5() {

    };
    function function6() {

    };
    function function7() {

    };
    function function8() {

    };
    function function9() {

    };
    // find this class, replace teh text with the value of global1
    $("#trashtoguess").text(global1);

    //an un-non-reset function-adjacent concept
    function function10() {
        var global1 = 0;
        var global2 = 0;
        var global3 = 0;
        var global4 = 0;
        var global5 = [];
        var global6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        var global7 = [];
        var global8 = "";
        var global9 = "";
        var global10 = "";

    };

    //this can be spoken of as an "on-click event" those words are a direct quote, stolen from whoever coined the phrase. i gues i should also say that this code is stolen from the example activites that we were shown in class.
    //it will give an alert
    //this is calledjQuery, it does not belong to me.
    //an onclickevent that should give a useless alert and establish a local variable
    $(".col-3").on("click", function () {
        alert("did you leave your stove on?");
        var trashvalue

    });

    //people will probably call this a "for loop", but those are not my words
    for (var i = 0; i < 5; i++) {
        var local1 = 0;


    }

});
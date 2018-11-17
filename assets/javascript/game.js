var  game = {
    wins: 0,
    losses: 0,
    mainRandomNum: 0, //the random generated number in the beggining of the game to match it equally
    blueRupee: Math.floor(Math.random() * 12) + 2,     //
    greenRupee: Math.floor(Math.random() * 12) + 2,    //the clicking buttons i am using to add the main points
    purpleRupee: Math.floor(Math.random() * 12) + 2,   //
    redRupee: Math.floor(Math.random() * 12) + 2,      //
    main_Points: 0   //this is the point is the bottom of the page. the main point
};

game.mainRandomNum = Math.floor(Math.random() * 101) + 19  ;
var showBeginningNum = game.mainRandomNum;
document.getElementById("mainRandomNum").innerHTML = showBeginningNum;
console.log(game.mainRandomNum);
var newMainPoints;
var myVar;
var clear_my_var;
var sound1 = new Audio('LTTP_Secret.wav'); 
var sound2 = new Audio('Oracle_Boss_Explode.wav');

var playAudio = function playRubee(){
    x.play();
}

function stupidfunct() {
    
    if(newMainPoints === game.mainRandomNum){
        game.wins += 1;
        $("#winOrLose").text("You won!!");
        $("#wins").text(game.wins);
        //var myVar;
        /*function myFunction() {
            myVar = setInterval(alertFunc, 300);
            clear_my_var = clearInterval(myVar);
        }
        //myFunction();
        function alertFunc() {
            $("#win_or_lose").text("YOU WIN!!");
            setTimeout(clear_my_var, 3000);
        }*/
        var myVar = $("#win_or_lose").text("YOU WIN!!");
        setInterval(myVar, 2000);
        
        newMainPoints = 0;
        game.main_Points = 0;
        game.mainRandomNum = Math.floor(Math.random() * 101) + 19;
        showBeginningNum = game.mainRandomNum;
        game.blueRupee = Math.floor(Math.random() * 12) + 2;     //
        game.greenRupee = Math.floor(Math.random() * 12) + 2;    //the clicking buttons i am using to add the main points
        game.purpleRupee = Math.floor(Math.random() * 12) + 2;   //
        game.redRupee = Math.floor(Math.random() * 12) + 2;
        document.getElementById("mainRandomNum").innerHTML = showBeginningNum;
        document.getElementById("points").innerHTML = "0";
        //$("#winSound")[0].play();
        sound1.play();
    } 
    if(newMainPoints > game.mainRandomNum){
        game.losses += 1;
        $("#winOrLose").text("YOU LOSE!!");
        $("#losses").text(game.losses);
        /*function myFunction() {
            myVar = setInterval(alertFunc, 300);
            clear_my_var = clearInterval(myVar);
        }
        //myFunction();
        function alertFunc() {
            $("#win_or_lose").text("YOU LOSE!!");
            setTimeout(clear_my_var, 3000);
        }*/
        var myVar = $("#win_or_lose").text("YOU LOSE!!");
        setInterval(myVar, 2000);
        newMainPoints = 0;
        game.main_Points = 0;
        game.mainRandomNum = Math.floor(Math.random() * 101) + 19;
        showBeginningNum = game.mainRandomNum;
        game.blueRupee = Math.floor(Math.random() * 12) + 2;     //
        game.greenRupee = Math.floor(Math.random() * 12) + 2;    //the clicking buttons i am using to add the main points
        game.purpleRupee = Math.floor(Math.random() * 12) + 2;  //
        game.redRupee = Math.floor(Math.random() * 12) + 2;
        document.getElementById("mainRandomNum").innerHTML = showBeginningNum;
        document.getElementById("points").innerHTML = "0";
        //$("#lossSound")[0].play();
        sound2.play();
    }
}
    
    $(document).ready(function(){
        $("#blueRupee").click(function(){
            $("#rupeeSound")[0].play();
            $("#win_Or_lose").text("");
            game.main_Points += game.blueRupee;
            newMainPoints = game.main_Points;
            document.getElementById("points").innerHTML = newMainPoints;
            console.log(game.blueRupee);
            clearInterval(myVar);
            stupidfunct();

        });
        $("#greenRupee").click(function(){
            $("#greenSound")[0].play();
            $("#win_or_lose").text("");
            game.main_Points += game.greenRupee;
            newMainPoints = game.main_Points;
            document.getElementById("points").innerHTML = newMainPoints;
            console.log(game.greenRupee);
            clearInterval(myVar);
            stupidfunct();
           
        });
        $("#purpleRupee").click(function(){
            $("#purpleSound")[0].play();
            $("#win_or_lose").text("");
            game.main_Points += game.purpleRupee;
            newMainPoints = game.main_Points;
            document.getElementById("points").innerHTML = newMainPoints;
            console.log(game.purpleRupee);
            clearInterval(myVar);
            stupidfunct();
        });
        $("#redRupee").click(function(){
            $("#redSound")[0].play();
            $("#win_or_lose").text("");
            game.main_Points += game.redRupee;
            newMainPoints = game.main_Points;
            document.getElementById("points").innerHTML = newMainPoints;
            console.log(game.redRupee);
            clearInterval(myVar);
            stupidfunct();
        });
       // if(newMainPoints > mainRandomNum){
            //$("#winOrLose").text("YOU LOSE!")

        //}
       
        
    });


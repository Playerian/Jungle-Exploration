//Var declare
var Food = 10;
var CC = 0;
var WD = 1;
var X = 0;
var Y = 0;

//Function declare
    //Shortcuts
function Say(word){
    $("#word").show();
    $("#word").html(word);
}

function Murmur(puns){
    $("#wiseword").show();
    $("#wiseword").html(puns);
}

function GainFood(fooding){
    Food += fooding;
}

    //Events
function Shrub(){
    Say("You found a shrub from a tree, get 2 foods");
    GainFood(2);
}

function Herb(){
    Say("You picked a flower from the ground and eat it. Mmm, tasty. (get 1 food)");
    GainFood(1);
}

function Compass(){
    Say("You picked up one compass component");
    CC ++;
}


//Clicking
    //North
$("#b1").click(function(){
});

    //West
$("#b2").click(function(){
});

    //East
$("#b3").click(function(){
});

    //South
$("#b4").click(function(){
});

//Everystep you take
$(".B").click(function(){
    GainFood(-1);
    $("#Food").html("Food: "+Food);
    $("#CC").html("Compass Component: "+CC);
    $("#WD").html("Weapon Endurance: "+WD);
    
    if (Food < 0){
        Food = 0;
        $(".B").hide();
        Say("You starve to death!");
    }
});


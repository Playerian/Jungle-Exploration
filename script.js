//Var declare
var Food = 10;
var CC = 0;
var WD = 1;
var X = 0;
var Y = 0;
var Step = 0;

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

function Randoming(min, max) { // Random Integer Generator
    return Math.floor(Math.random() * (max + 1 - min) ) + min;
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

function Wilding(){
    Say("The sun is too hot for you to continue walking. You have to eat one more food.");
    GainFood(-1);
}

function Monkey(){
    if ( WD === 0){ // Got Stole
    Say("A monkey lunge at you, you fall onto the ground, and the monkey steal one of your food.")
    Food --;
    }

    if ( WD>=1 && WD<=4 ){ // Block off
    Say("A monkey lunge at you, you block him off with your weapon")
    WD --;
    }
    
    if ( WD>=5 ){
    Say("A monkey lunge at you, you swing your weapon and kill it. Then you cook it fresh and easy, but your weapon lose some endurance.");
    WD -= 2;
    Food += 3;
    }
}

function Sharpen(){
    if (WD === 0){
    Say("You pick up a blade. It's shining under the sunlight. It looks broke, but still usable.");
    }
    if (WD > 0){
    Say("You sharpen your blade on a sharp stone.");
    }
    WD ++;
}

function Compass(){
    Say("You picked up one compass component");
    CC ++;
}

//Gathering of Events

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
    Step ++;
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


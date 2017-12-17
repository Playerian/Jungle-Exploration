//Var declare
var Food = 10;
var CC = 0;
var WD = 1;
var X = 0;
var Y = 0;
var Step = 0;
var Randomer = 0;
var BeastStep = false;
var BeastFind = false;
var BeastHealth = 5;
var BeastX = NaN;
var BeastY = NaN;
var BeastDirection = NaN;
var Plane = false;
var Dialogue = 0;
var TombA = false;
var TombB = false;
var TombC = false;


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

function Image(lol){
    $("#image").show();
    if (lol === "tombA"){
    $("#image").html("<img src='https://rawgit.com/Playerian/Jungle-Exploration/master/MapA.png' >");
    }
    if (lol === "tombB"){
    $("#image").html("<img src='https://rawgit.com/Playerian/Jungle-Exploration/master/MapB.png' >");
    }
    if (lol === "tombC"){
    $("#image").html("<img src='https://rawgit.com/Playerian/Jungle-Exploration/master/MapC.png' >");
    }
}

function GainFood(fooding){
    Food += fooding;
}

function Randoming(min, max) { // Random Integer Generator
    return Math.floor(Math.random() * (max + 1 - min) ) + min;
}

    //Events
function Nothing(){
    Randomer = Randoming(0,100);
    Food ++;
    if (Randomer <= 25){
        Say("The night makes you feel happier, you don't need to eat food today.");
    } else if (Randomer <= 50 && Randomer >= 26) {
        Say("You eat some peanuts from the ground, sounds good, get 1 food.");
    } else if (Randomer <= 75 && Randomer >= 51) {
        Say("You try to skip a meal, and its a success.");
    } else if (Randomer <= 100 && Randomer >= 76) {
        Say("You eat some dirt, and it tastes horrible.");
    }
}

function Shrub(){
    Randomer = Randoming(0,100);
    if (Randomer <=50){
    Say("You found a shrub from a tree, get 3 foods");
    } else if (Randomer < 75){
    Say("You found some berries from the shrub, get 3 foods");
    } else{
    Say("You found some high-quality fruit from the ground, get 3 foods");
    }
    GainFood(3);
}

function Herb(){
    Randomer = Randoming(0,100);
    if (Randomer <= 25){
    Say("You picked a flower from the ground and eat it. Mmm, tasty. (get 2 food)");
    } else if (Randomer > 25 && Randomer <=50) {
    Say("You picked up a nicely looking plant, get 2 food.");
    } else if (Randomer > 50 && Randomer <=75) {
    Say("A nut is on the ground, so you pick it up and eat"); //pun you could say this is nut-thing and eating it to last you a whole day is a little nuts.
    } else {
    Say("An apple falls onto your head, so you just simply eat it while ignoring the pain.");
    }
    GainFood(2);
}

function Wilding(){
    Randomer = Randoming(0,100);
    if (Randomer <= 50){
    Say("The sun is too hot for you to continue walking. You have to eat one more food.");
    } else {
    Say("Your food has been stolen by a naughty squirrel.");
    }
    GainFood(-1);
}

function Monkey(){
    if ( WD === 0){ // Got Stole
    Say("A monkey lunges at you, you fall onto the ground, and the monkey steals one of your food.");
    Food --;
    }

    if ( WD>=1 && WD<=4 ){ // Block off
    Say("A monkey lunge at you, you block him off with your weapon");
    WD --;
    }
    
    if ( WD>=5 ){
    Say("A monkey lunges at you, you swing your weapon and kill it. Then you cook it fresh and easy, but your weapon loses some endurance.");
    WD -= 2;
    Food += 3;
    }
}

function Sharpen(){
    Randomer = Randoming(0,10);
    if (WD === 0){
        if (Randomer < 3){
        Say("You pick up a blade. It's shining under the sunlight. It looks broke, but still usable.");
        }   
        if (Randomer >= 3 && Randomer <=6){
        Say("A useful stick is lying on the ground, you pick it up and use it as your weapon.");
        }
        if (Randomer >= 7){
        Say("You found a big log, you use your hand to shape out a sword.");
        }
    }
    
    if (WD > 0){
        if (Randomer < 3){
        Say("You sharpen your blade on a sharp stone.");
        }
        if (Randomer >= 3 && Randomer <= 6){
        Say("You found a tree, so you try your sword's sharpness on the tree. The sword gets sharper.");
        }
        if (Randomer >= 7){
        Say("You found some sticks and bundle them up with your weapon.");
        }
    }
    WD += 2;
}

function Compass(){
    Randomer = Randoming(0,100);
    if (Randomer <= 20){
    Say("You picked up one compass component");
    CC ++;
    } else {
    Say("You saw one compass component, but was soon being eaten by a naughty squirrel, but it dies afterward, so you eat the squirrel.");
    Food ++;
    }
}

function Origin(){
    Say("You look around, its the same place where you started!");
}

function FertileLand(){
    Say("You found fertile land, you plant all your food, and they are doubled up.");
    Food *= 2;
}

function Tomba(){
    Say("You found a round grave, nothing was written on it. It's like someone just buried this person as quick as possible. You found a broken piece of a map on the top of the grave.");
    Image("tombA");
}

function Tombb(){
    Say("You found a sqaure grave with a cross on top. Something was written on it: Farewell, my friend. You found a broken piece of a map inside the grave's cross.");
    Image("tombB");
}

function Tombc(){
    Say("You found a magnificent grave, with dead flower all over the place. It looks like there used to be an important person buried here, but no one is coming afterward. A coffin is placed on the grave. You found a broken piece of a map on bottom of the coffin. You also found a compass component on the ground.");
    CC ++;
    Image("tombC");
}

//Randomly execute(function) Events
function Events(){
    eval(arguments[Randoming(0,arguments.length-1)]+"()");
}

//Everystep you take before
$(".B").click(function(){
    $("#wiseword").hide();
    $("#image").hide();
    Step ++;
});

//Clicking
    //North
$("#b1").click(function(){
    Y ++;
});

    //West
$("#b2").click(function(){
    X --;
});

    //East
$("#b3").click(function(){
    X ++;
    if (Randoming(0,10) < 1 && BeastFind === false){
    Murmur("If you go east you will encounter the beast!");
    }
});

    //South
$("#b4").click(function(){
    Y --;
});

//Everystep you take after
$(".B").click(function(){
    //Normal Events
    if ( (X !== 0 || Y !== 0) && Step !== 10 && !(BeastFind === false && X >= 100) && !(BeastX === X && BeastY === Y) &&  
       !((X > 20 || X < -20) && (Y > 20 || Y < -20) && Plane === false) && !(BeastStep === false && X >= 35) && !(TombA === false && X === -27 && Y <= 10) &&
       !(TombB === false && X >= 10 && Y === 36) && !(TombC === false && X === -27 && Y === 36)  ){
    Events("Nothing","Nothing","Nothing","Shrub","Shrub","Herb","Herb","Wilding","Wilding","Monkey","Monkey","Sharpen","Sharpen","Compass");
        //Total of 14
        return;
    }
    //Back to the square
    if (X === 0 && Y === 0){
    Origin();
    }
    //Fertile Land
    if (Step === 10){
    FertileLand();
        return;
    }
    //Plane Crush site
    if ( (X > 20 || X < -20) && (Y > 20 || Y < -20) && Plane === false ){
        Plane = true;
        Say("You saw a empty land with a crushing plane that has smoke coming out. You decided to go in and search for some valuables. You get some food and 1 compass component.");
        Food += 20;
        CC += 1;
        return;
    }
    //TombA
    if (TombA === false && X === -27 && Y <= 10){
        TombA = true;
        Tomba();
        return;
    }
        
    //TombB
    if (TombB === false && X >= 10 && Y === 36){
        TombB = true;
        Tombb();
        return;
    }
    
    //TombC
    if (TombC === false && X === -27 && Y === 36){
        TombC = true;
        Tombc();
        return;
    }
    
    //Beast Step
    if (BeastStep === false && X >= 35){
        BeastStep = true;
        Say("You found some footsteps, looks like those footsteps are pointing to the east!");
    }
    
    //Beast encounter
    if (BeastFind === false && X >= 50){
    BeastFind = true;
        if (WD > 5){
        Say("You encounter the beast! You manage to fight the beast with your nice weapon, and the beast escapes to the east!");
        WD -= 2;
        } else {
        Say("You encounter the beast! You try to fight the beast, but the beast is too strong, so you fling your weapon at the beast, and it escapes to the east! You also drop some food.");
        WD = 0;
        Food -= 4;
        }
        BeastX = X + 5;
        BeastY = Y;
        Murmur("Like I told ya, if you go east, you can encounter the beast!");
    }
    
    //Beast Tracking
    if (BeastX === X && BeastY === Y){
        //Randoming Escape Direction
        Randomer = Randoming(0,3);
        if (Randomer === 0){
            BeastDirection = "north";
            BeastY += 5;
        }
        if (Randomer === 1){
            BeastDirection = "west";
            BeastX -= 5;
        }
        if (Randomer === 2){
            BeastDirection = "east";
            BeastX += 5;
        }
        if (Randomer === 3){
            BeastDirection = "south";
            BeastY -= 5;
        }
        //Beast Escaping
        if (WD > 1){
        Say("You hit the beast! The beast has between escape to the "+BeastDirection+"!");
        BeastHealth -= 1;
        WD -= 2;
        } else {
        Say("You got no weapon to fight the beast! The beast saw you and run away to the "+BeastDirection);
        }
        
        if (BeastHealth <= 0){
        Say("You have slain the beast! You get tons of fresh meat, and you found some compass components inside the beast's body!");
        BeastX = NaN;
        BeastY = NaN;
        BeastDirection = NaN;
        Food += 50;
        CC += 3;
        }
    }
});

$(".B").click(function(){
    GainFood(-1);
    $("#Food").html("Food: "+Food);
    $("#CC").html("Compass Component: "+CC);
    $("#WD").html("Weapon Durability: "+WD);
    
    //Dialogue
    if (Randoming(0,10) === 0){
        Dialogue ++;
        if (Dialogue === 1){
            Murmur("Well, You asked who am I, and why I come to this jungle?");
        }
        if (Dialogue === 2){
            Murmur("Well, this land is ancient, once you walk in, you can never get out.");
        }
        if (Dialogue === 3){
            Murmur("That's why I'm trapped here.");
        }
        if (Dialogue === 4){
            Murmur("As you can see, my plane crashes, only me survive.");
        }
        if (Dialogue === 5){
            Murmur("Um... You are so curious about me?");
        }
        if (Dialogue === 6){
            Murmur("I don't want to tell you too much, but I'm searching for a ruin.");
        }
        if (Dialogue === 7){
            Murmur("You too? How lucky am I?!");
        }
        if (Dialogue === 8){
            Murmur("I'll tell you some more then");
        }
        if (Dialogue === 9){
            Murmur("You know the Roman Empire right? The vast kingdom that fell about 2000 years ago.");
        }
        if (Dialogue === 10){
            Murmur("Yes, located right there.");
        }
        if (Dialogue === 11){
            Murmur("I gathered information about it, from small town to big city, from college professor to village commoner.");
        }
        if (Dialogue === 12){
            Murmur("You asked for the connection to the jungle?");
        }
        if (Dialogue === 13){
            Murmur("The main point is, I have enough evidence to believe that there is a ruin from the Roman Empire in this jungle.");
        }
        if (Dialogue === 14){
            Murmur("I want to know where too, but I can't, I've been searching for a few year, if not more.");
        }
        if (Dialogue === 15){
            Murmur("Compass? That's your clue? I saw some scatter around the jungle, but I never bother to pick them up.");
        }
        if (Dialogue === 16){
            Murmur("OK, we got this, now what do we do?");
        }
        if (Dialogue === 17){
            Murmur("Wow...");
        }
        if (Dialogue === 18){
            Murmur("Vast, so vast!");
        }
        if (Dialogue === 19){
            Murmur("This must be the ruin!");
        }
        if (Dialogue === 20){
            Murmur("A beast! Time to show you my skill!");
        }
        if (Dialogue === 21){
            Murmur("What are you doing? Help me!");
        }
        if (Dialogue === 22){
            Murmur("(Dead silent...)");
        }
        if (Dialogue === 23){
            Murmur("You... Who are you?");
        }
        if (Dialogue === 24){
            Murmur("I should have noticed it.");
        }
        if (Dialogue === 25){
            Murmur("Now... kill me... as fast as you can...");
        }
    }
    
    //Victory?
    if (CC > 9){
    $("Body").html("You have voyaged out of the jungle!");
    }
    
    //Death For Sure
    if (Food < 0){
        Food = 0;
        $("#Food").html("Food: "+Food);
        $(".B").hide();
        Say("You starve to death!");
    }
});

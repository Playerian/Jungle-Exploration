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
var BeastKilled = false;
var Plane = false;
var Dialogue = 0;
var TombA = false;
var TombB = false;
var TombC = false;
var Origing = 0;
var InFog = false;
var TomatoFood = 0;
var TomatoSatis = false;
var Reinhardt = false;
var Snowman = false;
var SnowmanRescue = 0;
var InRabbit = false;
var RabbitSaved = 0;
var RabbitCooked = 0;
var RabbitMet = 0;
var DroppedSupply = false;
var BeastCave = false;
var BeastDeter = false;
var Caveman = "Nothing";
var CaveOutcome1 = false;
var CaveOutcome2 = false;
var CavemanStep = 0;
var InDeep = false;
var SnakeKilled = 0;
var MonkeyKilled = 0;

//Function declare
    //Shortcuts
function Say(word){
    $("#word").show();
    $("#word").html(word);
}

function Murmur(puns){
    $("#wiseword").css("font-size" , "10px");
    $("#wiseword").css("border" , "5px solid black");
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
        Say("The calm night had made you feel happier, you don't need to eat food today.");
    } else if (Randomer <= 50 && Randomer >= 26) {
        Say("You ate some peanuts from the ground, tasted good, got 1 food.");
    } else if (Randomer <= 75 && Randomer >= 51) {
        Say("You decided to skip a meal, and it was a success.");
    } else if (Randomer <= 100 && Randomer >= 76) {
        Say("You ate some dirt, and it tasted horrible.");
    }
}

function Shrub(){
    Randomer = Randoming(0,100);
    if (Randomer <=50){
    Say("You found a shrub, got 3 foods");
    } else if (Randomer < 75){
    Say("You found some berry from the shrub, got 3 foods.");
    } else{
    Say("You found some high-quality fruit from the ground, got 3 foods.");
    }
    GainFood(3);
}

function Herb(){
    Randomer = Randoming(0,100);
    if (Randomer <= 25){
    Say("You picked a flower from the ground and ate it. Mmm, tasty. (get 2 food)");
    } else if (Randomer > 25 && Randomer <=50) {
    Say("You picked up a nicely looked plant, get 2 food.");
    } else if (Randomer > 50 && Randomer <=75) {
    Say("A nut is on the ground, so you picked it up and ate it."); //pun you could say this is nut-thing and eating it to last you a whole day is a little nuts.
    } else {
    Say("An apple fell on your head, so you just simply eat it while ignoring the pain.");
    }
    GainFood(2);
}

function Wilding(){
    Randomer = Randoming(0,100);
    if (Randomer <= 50){
    Say("The sun is too hot for you to continue walking. You have to eat one more food.");
    } else {
    Say("Your food had been stole by a naughty squirrel.");
    }
    GainFood(-1);
}

function Monkey(){
    if ( WD === 0){ // Got Stole
    Say("A monkey lunged at you, you fell onto the ground, and the monkey stole one of your food.");
    Food --;
    }

    if ( WD>=1 && WD<=4 ){ // Block off
    Say("A monkey lunged at you, you block him off with your weapon");
    WD --;
    }
    
    if ( WD>=5 ){
    Say("A monkey lunge at you, you swung your weapon and killed it. Then you proceed to cook it fresh and easy. However your weapon lose some endurance.");
    WD -= 2;
    Food += 4;
    MonkeyKilled += 1;
    }
}

function Sharpen(){
    Randomer = Randoming(0,10);
    if (WD === 0){
        if (Randomer < 3){
        Say("You pick up a blade. It's shining under the sunlight. It looks broke, but still usable.");
        }   
        if (Randomer >= 3 && Randomer <=6){
        Say("A useful stick lying on the ground, you pick it up and use it as your weapon.");
        }
        if (Randomer >= 7){
        Say("You found a big log, you use your hands to shape out a sword.");
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
        Say("You found some sticks and bundle up them with your weapon.");
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
    if (Randomer <= 60){
    Say("You saw one compass component, but soon being eaten by a naughty squirrel, but it dies afterward, so you eat the squirrel.");
    Food ++;
    }
    if (Randomer > 60){
    Say("You though you saw a compass component, but found out it's only a scrap of wood.");
    }
    }
}
    //Fog Events
function Foggy(){
    Say("It's too foggy, you can't even see the road ahead.");
}

function Bump(){
    Say("You bump onto a tree and drop some food, when you try to pick it up, you find out they're gone already.");
    Food -= 1;
}

function SmallTree(){
    Say("You see a small tree out of the large trees, you try to shake it, and it drops some food.");
    Food += 2;
}

function Slip(){
    Say("You accidentally step onto a slippery stick, you fall onto the ground.");
}

function Bear(){
    if (WD >= 9) {
        Say("You encounter a big bear! You fight it with all of your strength, and you kill it and eat its meat, but your weapon also get more broken.");
        WD -= 3;
        Food += 10;
    } else {
        Say("You encounter a big bear! It attacks you and you can't defend it! You lost some food!");
        Food -= 5;
    }
}

function Pee(){
    Say("You decided to take a pee, because nothing can sees you in the fog.");
    Murmur("You are so nasty, I'm watching you.");
}

function Banana(){
    Say("You see a big yellow thing coming out of the fog. It's a banana, so you eat it.");
    Food += 1;
    Murmur("What kind of thing is that.");
}

function Weaponing(){
    if (WD > 0){
        Say("You get some tall grass and bound them into your weapon.");
        WD += 1;
    } else {
        Say("You pick up one great broadsword from the ground. It doesn't looks like a sword that is made on Earth. Something was written on it: Use my blade as you see fit.");
        WD = 5;
    }
}

function SnowmanR(){
    Say("You step onto something soft, so you look down and see some soft dirt. You dig it up and see a broken snowman, do you want to restore its shape?");
    $(".B").hide();
    $("#b5").show();
    $("#b6").show();
    $("#b5").html("Restore");
    $("#b6").html("Don't Restore");
    Murmur("Can you ...?");
}

function Rabbit(){
    Say("You see a rabbit lying on the ground, injured. Do you want to save it?");
    $(".B").hide();
    $("#b5").show();
    $("#b6").show();
    $("#b7").show();
    $("#b5").html("Rescue");
    $("#b6").html("Cook");
    $("#b7").html("Ignore");
    InRabbit = true;
    RabbitMet += 1;
}

    //Deep Jungle Events
function ThickWood(){
    Say("The trees are too thick, you can't go through it, so you use your weapon to clean one way up");
    WD --;
}

function BigLog(){
    if (WD === 0){
    Say("You found a big log! You think it is a very good material for a weapon!");
    } else {
    Say("You sharpen your weapon on the big log. It is so good!");
    }
     WD += 3;
}

function Snake(){
    if (WD >= 3){
    Say("A snake attempt to attack you, you block it off with a weapon and finish it off.");
    Food += 1;
    SnakeKilled ++;
    } else {
    Say("A snake attacks you, you are injured, so you rested and eat some food during your rest");
    Food -= 2;
    }
}

function BlackOut(){
    Say("The woods are too thick, you can't see the road ahead");
}

function Swimming(){
    Say("You see a river in the deep jungle, you decided to relax and swim.");
    Food ++;
}

function Gathering(){
    Say("You gather some fruits and vegetables from the deep jungle.");
    Food += 4;
}

function Vine(){
    Say("The vines from the tree is too thick, you decided to cut some down with your weapon.");
    WD --;
}   

function EatLeaf(){
    Say("You eat some leave because they're blocking your eyesight.");
    Food ++;
}

function SharpStone(){
    Say("You sharpen your blade on a sharp stone, it gets very, very sharp!");
    WD += 3;
}

    //Uncommon Events
function Origin(){
    Origing ++;
    $("#wiseword").css("font-size" , "10px");
    $("#wiseword").css("border" , "5px solid black");
    Say("You look around, its the same place that you started! So you decided to get some supply from nearby.");
    Food += 1;
    if (Origing === 3){
    Murmur("You think it's funny walking to the same place huh?");
    }
    if (Origing === 6){
    Murmur("Maybe you should get going, you don't have much time left.");
    }
    if (Origing === 9){
    Murmur("So, you want me to say something before you go out of this little paradise?");
    }
    if (Origing === 12){
    Murmur("You don't have to know about me, just voyage around the jungle and see what happen.");
    }
    if (Origing === 15){
    Murmur("Hmm... did you know something about me already?");
    }
    if (Origing === 18){
    Murmur("Well... I came here by plane, if that satisfy you.");
    }
    if (Origing === 21){
    Murmur("Maybe, just maybe, you know that I will say something?");
    }
    if (Origing === 24){
    Murmur("Fine, I'll say that you are going to find the compass components and get to that mystery ruin.");
    }
    if (Origing === 27){
    Murmur("You stil doing that? I thought that is enough information already.");
    }
    if (Origing === 30){
    Murmur("Just go north, its where the ruin lays, but you'll never find it unless you get the compass.");
    }
    if (Origing === 33){
    Murmur("But, you can get into the coliseum, left to the ruin, north-east to the dangerous wild.");
    }
    if (Origing === 36){
    Murmur("I think, my grave is somewhere in the jungle. Haha, I wonder that guy will or will not give me a grave.");
    }
    if (Origing >= 39 && Origing < 60){
    Murmur("Nothing more I can tell.");
    }
    if (Origing === 60){
    Murmur("Watch out for the king, really the last thing I can tell.");
    }
    if (Origing > 60 && Origing < 100){
    Murmur("Really nothing more I can tell.");
    }
    if (Origing === 100){
    Murmur("VERY VERY LAST thing that I'm going to say, where the two tomb cross at the direction of the first two, the third tomb is in the way.");
    }
    if (Origing >= 1000){
    Murmur("Your confidence and determination has give me the knowledge that you should go to bed.");
    }
}

function FertileLand(){
    Say("You found a fertile land, you plant all your food, and they are double up.");
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
    Say("You found a magnificent grave, with dead flower all over the place. It's like there used to be an important person buried here, but no one is coming afterward. A coffin is placed on the grave. You found a broken piece of a map on bottom of the coffin. You also found a compass component on the ground.");
    CC ++;
    Image("tombC");
}

function TomatoMan(){
    if (TomatoFood < 200){
    Say("You see a person with red skin and green hair with a unnaturally big smile. He sees your food and stole tons of it, your blade has no use against him. You just watch him run away.");
    TomatoFood += Math.round(Food / 2);
    Food = Math.round(Food / 2);
    } else {
    Say("You see a person with red skin and green hair with a unnaturally big smile. He says: I'm full! Thank you for the food! I'll tell you a secret: in the place with thick trees block the fog, a new road opens in front of you. ");
    TomatoSatis = true;    
    }
}

//Randomly execute(function) Events
function Events(){
    eval(arguments[Randoming(0,arguments.length-1)]+"()");
}

//Events List (If you want to add event, add to the bottom of this function, on top of Fog Events. Remember to add return to the bottom of the event, or else it will not work)
function EventList(){
    //Fertile Land
    if (Step === 10){
    FertileLand();
        return;
    }
    //Back to the square
    if (X === 0 && Y === 0){
    Origin();
        return;
    }
    //Plane Crush site
    if ( Math.pow(X-5, 2)+Math.pow(Y-15,2) <= 20 && Plane === false ){
        Plane = true;
        Say("You saw a empty land with a crashed small plane that has dust all over the place. You decided to go in and search for some valuables. You found some food and 1 compass component.");
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
    
    //TomatoMan
    if (Food > 100 && TomatoSatis === false){
        TomatoMan();
        return;
    }
    
    //Go into the Fog!
    if (InFog === false && Y <= -75){
        Say("You come into a foggy area, you can't even see the road ahead or the leaves above you.");
        InFog = true;
        return;
    }
    
    //I'm Out!
    if (InFog === true && Y > -75){
        Say("You are out from the foggy area, you look behind, you hope you never go in there again.");
        InFog = false;
        return;
    }
    
    //Go into the Deep!
    if (InDeep === false && X <= -100){
        Say("You come into an area that has thicker tree than before, you think this is the deep jungle.");
        InDeep = true;
        return;
    }
    
    //I'm Out again!
    if (InDeep === true && X > -100){
        Say("You are out from the deep jungle.");
        InDeep = false;
        return;
    }
    
    //Reinhardt
    if (X === 23 && Y === 4 && Reinhardt === false){
        Reinhardt = true;
        Say("you found a mysterious blue covered book near the remain of a dead horse. upon opening the book, two lightnings strikes appear before you. before you realized what you had done. Suddenly, you hear someone shouted: magic is everything! You got blown fly out. Now you know, this thing should not be touched, because its not made on Earth. ");
        Food -= 10;    
        return;
    }
    
    //DroppedSupply
    if (DroppedSupply === false && Math.pow(3*X+10, 2)+Math.pow(Y-3,2) <= 12){
        Say("You tripped. Then you see a yellow crate lying on the ground with some dust cover on it. You open the crate up, there is some supplies inside, so you take it.");
        Food += 10;
        DroppedSupply = true;
        return;
    }
    
    //Beast Step
    if (BeastStep === false && X >= 35){
        BeastStep = true;
        Say("You found some footprints, looks like those footprints are pointing to the east!");
        return;
    }
    
    //Beast encounter
    if (BeastFind === false && X >= 50){
    BeastFind = true;
        if (WD > 5){
        Say("You encounter the beast! You swung your shapened weapon and striked it on the head! The beast let out a lound roar and escaped to the east!");
        WD -= 2;
        } else {
        Say("You encounter the beast! You try to fight the beast, but the beast is too strong, so you fling your weapon at the beast, and the beast escape to the east! You also drop some food.");
        WD = 0;
        Food -= 10;
        }
        BeastX = X + 5;
        BeastY = Y;
        $("#wiseword").css("border" , "5px solid black");
        Murmur("Told Ya, if go east, you encounter the beast!");
        return;
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
        Say("You hits the beast! The beast had escape to the "+BeastDirection+"!");
        BeastHealth -= 1;
        WD -= 2;
        } else {
        Say("You got no weapon to fight the beast! The beast saw you weaponless and stole some food! Then the beast run away to the "+BeastDirection);
        Food -= 4;
        }
        
        //Beast Killing
        if (BeastHealth <= 0){
        Say("You slain the beast! You got tons of fresh meat, and you found some compass component inside the beast's body!");
        BeastX = NaN;
        BeastY = NaN;
        BeastDirection = NaN;
        BeastKilled = true;
        Food += 50;
        CC += 3;
        }
        return;
    }
    
    //Beast Cave
    if (BeastCave === false && X >= 100){
        Say("You see a cave and you get in it, inside, you found some totally black people. Indicated by the footprints, you know that this is the cave of the beast. What do you want to do?");
        BeastCave = true;
        BeastDeter = true;
        $(".B").hide();
        $("#b5").show();
        $("#b6").show();
        $("#b7").show();
        $("#b5").html("Give them food and rescue them");
        $("#b6").html("Ignore them and get out");
        $("#b7").html("Kill them and cook their flesh.");
        return;
    }
    
    //Beast Cave Outcome1
    if (BeastCave === true && CaveOutcome1 === false && X <= 50 && Caveman==="Rescue"){
        CaveOutcome1 = true;
        if (BeastKilled === true){
            Say("You saw some totally black people walking toward south, looks like the group that you has been released! They have the same destination, that's what you observed. One of them talk with you: There is a place that you can find the lost king in the west, that's what I heard from someone.");
            } else {
            Say("You see the beast slaughtering the totally black people! You are mad, so you get up and kill the beast. Although the beast dies, tons of totally black people are dead.");
            Food += BeastHealth * 15;
            BeastX = NaN;
            BeastY = NaN;
            BeastDirection = NaN;
            BeastKilled = true;
            }
        return;
    }
    
    //Beast Cave Outcome2
    if (BeastCave === true && CaveOutcome2 === false && X === 100 && CavemanStep >= 20 && BeastKilled === false){
        CaveOutcome2 = true;
        Say("You see the beast's cave again, but inside, all totally black people are dead.");
        if (Caveman !== "Ignore"){
            Murmur("You, you never did that right?");
        }
        return;
    }
    
    //Black Village
    if( X === 50 && Y === -30 ){
    Say ("You have encountered the Black Village, a place where the shadows of the past take form.....    You trade with them and can get weapons in exchange for food."); 
    //button to exchange if want to.... your choice if you want it
        return;
    }
    //Fog Events
    if (InFog === true && Y <= -75){
        //Snowman Or Not?
        Randomer = Randoming(0,100);
        if (Randomer < 8 && Snowman === false){
            Snowman = true;
            SnowmanR();
        } else {
            Events("Foggy","Bump","SmallTree","Slip","Bear","Pee","Banana","Weaponing","Rabbit");
        }
        return;
    }
    //Deep Jungle Events
    if (InDeep === true && X <= -100){
            Events("ThickWood","BigLog","Snake","BlackOut","Swimming","Gathering","Vine","EatLeaf","SharpStone");
        return;
    }
    //Normal Events
    Events("Nothing","Nothing","Nothing","Shrub","Shrub","Herb","Herb","Wilding","Wilding","Monkey","Monkey","Sharpen","Sharpen","Compass");
        //Total of 14
        return;
}

//Everystep you take before
$(".B").click(function(){
    $("#wiseword").hide();
    $("#image").hide();
    Step ++;
    if (Caveman === "Ignore"){
    CavemanStep ++;
    }
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
    $("#wiseword").css("font-size" , "10px");
    $("#wiseword").css("border" , "5px solid black");
    Murmur("If you go east you will encounter the beast!");
    }
});

    //South
$("#b4").click(function(){
    Y --;
}); 

//Other Buttons
    //Button 5
    $('#b5').click(function(){
        //Snowman Function -- Restore
        if (Snowman === true && SnowmanRescue === 0){
            SnowmanRescue = true;
            $(".B").show();
            Say("You reshape the snowman, it looks like it's smiling at you!");
           $("#b5").hide();
           $("#b6").hide();
            Murmur("Thank you!");
        }
        //Rabbit Function -- Rescue
        if (InRabbit === true){
            Say("You feed some food to the rabbit, looks like its healing up!");
            Food -= 1;
            RabbitSaved += 1;
            $(".B3").hide();
            $(".B").show();
            InRabbit = false;
        }
        ///Beast Cave Function -- Rescue
        if (BeastDeter === true){
            Say("You feed them a lots of food, they happily eat it and escape the beast's cave.");
            BeastDeter = false;
            Food /= 2.5;
            Food = Math.round(Food);
            $(".B3").hide();
            $(".B").show();
            Caveman = "Rescue";
            Murmur("That's a high cost you have pay, don't ever think you deserve something back, that's not good.");
        }
    });
    //Button 6
    $("#b6").click(function(){
        //Snowman Function
        if (Snowman === true && SnowmanRescue === 0){
            SnowmanRescue = false;
            $(".B").show();
            Say("You ignore the snowman, looks like the snowman doesn't like you anymore.");
            $("#b5").hide();
            $("#b6").hide();
            Murmur("...");
        }
        //Rabbit Function
        if (InRabbit === true){
            Say("You cook the rabbit and eat it! Delicious!");
            Food += 3;
            RabbitCooked += 1;
            $(".B3").hide();
            $(".B").show();
            InRabbit = false;
        }
        ///Beast Cave Function -- Ignore
        if (BeastDeter === true){
            Say("You ignore them and get out from the cave, looks like the people no longer has the strength to get out.");
            BeastDeter = false;
            $(".B3").hide();
            $(".B").show();
            Caveman = "Ignore";
            Murmur("Maybe you should treat them as real people.");
        }
    });
    //Button 7
    $("#b7").click(function(){
        //Rabbit Function
        if (InRabbit === true){
            Say("You ignore the rabbit and continue to explore the foggy jungle.");
            $(".B3").hide();
            $(".B").show();
            InRabbit = false;
        }
        ///Beast Cave Function -- Slaughter
        if (BeastDeter === true){
            Say("You kill them all without mercy. Then you cook them fresh and alive!");
            BeastDeter = false;
            Food += 80;
            $(".B3").hide();
            $(".B").show();
            Caveman = "Killed";
            Murmur("You are so into the way of cannibalism, they are human too.");
        }
    });

//Everystep you take after
$(".B").click(function(){
    EventList();
});



$(".B2").click(function(){
    GainFood(-1);
    $("#Food").html("Food: "+Food);
    $("#CC").html("Compass Component: "+CC);
    $("#WD").html("Weapon Durability: "+WD);
    
    //Dialogue
    if (Randoming(0,10) < 2 && (X !== 0 && Y !== 0) && Dialogue < 25  ){
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
            Murmur("As you can see, my plane crashed, only me survive.");
        }
        if (Dialogue === 5){
            Murmur("Um... You so curious about me?");
        }
        if (Dialogue === 6){
            Murmur("I don't want to tell you too much, but I'm searching for a ruin.");
        }
        if (Dialogue === 7){
            Murmur("You too? How lucky I am!");
        }
        if (Dialogue === 8){
            Murmur("I'll tell you some more then");
        }
        if (Dialogue === 9){
            Murmur("You know Roman Empire right? The vast kingdom that fell about 2000 years ago.");
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
            Murmur("The main point is, I have enough evidence to believe that there is a ruin of Roman Empire in this jungle.");
        }
        if (Dialogue === 14){
            Murmur("I want to know where too, but I can't, I've been searching for few year, if not more.");
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
            Murmur("A beast! time to show you my skill!");
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
            Murmur("I should have notice it.");
        }
        if (Dialogue === 25){
            Murmur("Now... kill me... as fast as you can...");
        }
        $("#wiseword").css("font-size" , "15px");
        $("#wiseword").css("border" , "5px dotted black");
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
        $("Body").append("You starve to death!");
    }
});

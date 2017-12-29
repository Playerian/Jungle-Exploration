//Var declare
var Food = 10;
var CC = 0; // Compass Component
var WD = 1; // Weapon Stuff
var X = 0;
var Y = 0;
var Step = 0;
var Randomer = 0;
var BeastStep = false; // The beast's movement
var BeastFind = false; // Check if found beast
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
var Origing = 0; // Check the times you have been in origin
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
var WalkVillage = false;
var VFriendly = 0;
var ChiefHouse = false;
var ChiefTalking = 0;
var EventsMet = 0;
var DevHut = false;
var PlayerianTalk = 0;
var PlayerianInTalk = false;
var Lostking = false;
var King = false;
var Church = false;
var InChurch = false;
var penguin = false;
var VillageRed = false;
var VillageSlaughter = false;
var FogGuardian = false;
var GuardianCount = 0;
var GuardianKilled = false;
var KingWord = false;
var Lcrate = false;
var TOL = false;
var TreeE = false;
var InBattle = false;
var Battling = 0;
var InColiseum = false;
var ColiseumE = 0;
var enemy;
var health;
var ColiseumLeave = false;
var BoldFriend = false;
var STFriend = false;
var InWild = false;

//Function declare area
    //Shortcuts
function Say(word){
    $("#word").css("font-weight", "normal");
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
    if (lol === "V1"){
    $("#image").html("<img src='https://rawgit.com/Playerian/Jungle-Exploration/master/BlackVillager1.png' >");
    }
    if(lol === "V2" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/BlackVillager2.png' >");
    }
     if(lol === "V3" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/BlackVillager3.png' >");
    }
    
     if(lol === "V4" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/BlackVillager4.png' >");
    }
    
    if(lol === "V5" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/BlackVillager5.png' >");
    }
    
    if(lol === "V6" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/BlackVillager6.png' >");
    }
    
    if(lol === "Vfake" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/BlackVillagerFake.png' >");
    }
    
    if(lol === "DevHut" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/DeveloperHut.png' >");
    }
    
    if(lol === "P1" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/Playerian.png' >");
    }
    
    if(lol === "P2" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/Playerian2.png' >");
    }
    
    if(lol === "P3" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/Playerian3.png' >");
    }
    
    if(lol === "P4" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/Playerian4.png' >");
    }
    
    if(lol === "P5" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/Playerian5.png' >");
    }
    
    if(lol === "PR" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/PlayerianRock.png' >");
    }
    
    if(lol === "PP" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/PlayerianPaper.png' >");
    }
    
    if(lol === "PS" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/PlayerianScissor.png' >");
    }
    if(lol === "TOL" ){
        $("#image").html("<img src= 'https://rawgit.com/Playerian/Jungle-Exploration/master/TreeOfLife.png' >");
    }
}

function GainFood(fooding){
    Food += fooding;
}

function Randoming(min, max) { // Random Integer Generator
    return Math.floor(Math.random() * (max + 1 - min) ) + min;
}

function Battle(enemy2, health2){
        enemy = enemy2;
        health = health2;
        InBattle = false;
        //Enemy Determination
        if (enemy === ColiseumE){
            Randomer = Randoming(0,3);
            if (Randomer === 0){
            enemy = "Wolf";
            }
            if (Randomer === 1){
            enemy = "Bear";
            }
            if (Randomer === 2){
            enemy = "Pig";
            }
            if (Randomer === 3){
            enemy = "Spicy Chicken";
            }
        }
        //Initiate the Battle
        InBattle = true;
        $(".B").hide();
        $("#b5").show();
        $("#b6").show();
        $("#b5").html("Left");
        $("#b6").html("Right");
        Say(enemy+" is standing infront of you!");
        
        //Before Battle
        $("#b5, #b6").click(function(){
            if (InBattle === true){
            Battling = Randoming(0,1);
            }
        });
        //Checking who will win

        
        //After Battle
        $("#b5, #b6").click(function(){
            if (InBattle === true){
                //If you lose
                if (Food <= 1 && InColiseum === true){
                    Say("Hey, young man, you should get prepared before you challenge our challengers! I'll give you some food before you leave!");
                    Food = 20;
                    health = NaN;
                    InBattle = false;
                    Coliseum();
                }
                //If you win
                if (health <= 0){
                    InBattle = false;
                    Say("You defeated "+enemy+"!");
                    if (enemy === "nothing"){
                    $(".B2").hide();
                    $(".B").show();
                    }
                    if (InColiseum === true){
                        if (ColiseumE === 1){
                        $("#word").append("<p>That person walks toward you again, and say: "+"<div style='text-decoration: line-through;'>Well done! You are really good at this! You can continue to fight or leave now, the spectators are impressed. Forgot to mention, my name is Strikethrough.</div></p>");
                            health = NaN;
                        } else {
                            if (ColiseumE % 3 === 0){
                                $("#word").append("<p style='text-decoration: line-through;'>Nice! You get some food for your participaton in the coliseum!</p>");
                                Food += 30;
                            } 
                            if (ColiseumE === 8){
                                $("#word").append("<p style='text-decoration: line-through;'>Wow! You have already defeated 8 enemies! Get this compass component!</p>");
                            } else if (ColiseumE === 10){
                                $("#word").append("<p style='text-decoration: line-through;'>Wow! You are really good! Now I want to be your friend now!</p>");
                                STFriend = true;
                            } else if (ColiseumE === 11){
                                $("#word").append("<p style='text-decoration: line-through;'>Um... Now we are friends now. What should we do?</p>");
                            } else if (ColiseumE === 12){
                                $("#word").append("<p style='text-decoration: line-through;'>I haven't decided yet, but I would give you some advice because you are so good!<br>I actually means food!</p>");
                                Food += 10;
                            } else if (ColiseumE === 13){
                                $("#word").append("<p style='text-decoration: line-through;'>There's a dangerous place in southwest call the wild! Don't go there!</p>");
                            } else if (ColiseumE === 14){
                                $("#word").append("<p style='text-decoration: line-through;'>(I don't know other things about the jungle. What should I do...)</p>");
                            } else if (ColiseumE === 15){
                                $("#word").append("<p style='text-decoration: line-through;'>I will tell you some story about the coliseum. I have been the manager for coliseum for a long time. I don't know since when, but it is a long time for sure.</p>");
                            } else if (ColiseumE === 16){
                                $("#word").append("<p style='text-decoration: line-through;'>We, the managers, also recruit people to come into the coliseum. I usually find them in the edge of the wild</p>");
                            } else if (ColiseumE === 17){
                                $("#word").append("<p style='text-decoration: line-through;'>Then I pass around some offer paper on the ground, hope for people to pick it up.</p>");
                            } else if (ColiseumE === 18){
                                $("#word").append("<p style='text-decoration: line-through;'>Well, that's pretty much it. Want some hammerburgers?</p>");
                                Food += 100;
                            } else if (ColiseumE % 2 === 0 && ColiseumE > 18){
                                $("#word").append("<p style='text-decoration: line-through;'>Get some hammerburger! My friend!");
                                Food += 100;
                            } else if (ColiseumE % 7 === 0 && ColiseumE > 20){
                                $("#word").append("<p style='text-decoration: line-through;'>Also try this new, freshly cooked spicy chicken burger! My friend!");
                                Food += 300;
                            } else {
                                $("#word").append("<p style='text-decoration: line-through;'>Nice! Continue Fighting? You have defeated "+ColiseumE+" Enemy! You may get some prizes if you defeat more!</p>");
                            }
                            health = NaN;
                        }
                    ColiseumE ++;
                    Coliseum();
                    }
                }
            }
        });
}

    //Function of Events
function Nothing(){
    Randomer = Randoming(0,200);
    Food ++;
    if (Randomer <= 25){
        Say("The calm of night makes you feel happier, you don't need to eat food today.");
    } else if (Randomer <= 50 && Randomer >= 26) {
        Say("You ate some peanuts from the ground, tasted good, got 1 food.");
    } else if (Randomer <= 75 && Randomer >= 51) {
        Say("You decided to skip a meal, and it was a success.");
    } else if (Randomer <= 100 && Randomer >= 76) {
        Say("You ate some dirt, and it tasted horrible.");
    } else if (Randomer <= 125 && Randomer >= 101) {
        Say("You think you are a brave person, so you eat a mushroom on the ground.");
    } else if (Randomer <= 150 && Randomer >= 126) {
        Say("You skip breakfast, thinking about lunch.");
    } else if (Randomer <= 175 && Randomer >= 151) {
        Say("You skip lunch, thinking about dinner.");
    } else if (Randomer <= 200 && Randomer >= 176) {
        Say("You skip dinner because you have skipped breakfast and lunch.");
    }
}

function Shrub(){
    Randomer = Randoming(0,125);
    if (Randomer <= 25){
    Say("You found a shrub, got 3 foods");
    }
    if (Randomer > 25 && Randomer <= 50){
    Say("You found some berries from the shrub, got 3 foods.");
    } 
    if (Randomer > 50 && Randomer <= 75){
    Say("You found some high-quality fruit from the ground, got 3 foods.");
    }
    if (Randomer > 75 && Randomer <= 100){
    Say("You eat some fruits, they feel very, very tasty.");
    }
    if (Randomer > 100 && Randomer <= 125){
    Say("You are starving, so you gather yourself some extensively nice fruits and veggies.");
    }
    GainFood(3);
}

function Herb(){
    Randomer = Randoming(0,100);
    if (Randomer <= 25){
    Say("You picked a flower from the ground and ate it. Mmm, tasty. (get 2 food)");
    } else if (Randomer > 25 && Randomer <=50) {
    Say("You picked up a nice looking plant, get 2 food.");
    } else if (Randomer > 50 && Randomer <=75) {
    Say("A nut is on the ground, so you picked it up and ate it."); //pun you could say this is nut-thing and eating it to last you a whole day is a little nuts.
    } else {
    Say("An apple fell on your head, so you just simply eat it while ignoring the pain.");
    }
    GainFood(2);
}

function Wilding(){
    Randomer = Randoming(0,100);
    if (Randomer <= 25){
    Say("The sun is too hot for you to continue walking. You have to eat one more food.");
    } else if (Randomer <= 50) {
    Say("Your food had been stole by a naughty squirrel.");
    } else if (Randomer <= 75) {
    Say("Your food dries under the hot sun, you decided to throw it out.");
    } else if (Randomer <= 100) {
    Say("Your food got snatched by a hanging monkey.");
    }
    GainFood(-1);
}

function Monkey(){
    if ( WD === 0){ // Got Stole
    Say("A monkey lunged at you, you fell onto the ground, and the monkey stole one of your food.");
    Food --;
    }

    if ( WD>=1 && WD<=4 ){ // Block off
    Say("A monkey lunged at you, you block him off with your weapon.");
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
        Say("You found some sticks and bundle them up with your weapon.");
        }
    }
    WD += 2;
}

function Compass(){
    Randomer = Randoming(0,100);
    if (Randomer <= 20){
    Say("You picked up one compass component.");
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
    if (WD >= 10) {
        Say("You encounter a big bear! You fight it with all of your strength, and you kill it and eat its meat, but your weapon took some damage.");
        WD -= 5;
        Food += 20;
    } else {
        Say("You encounter a big bear! It attacks you and you can't defend againdt it! You lost some food!");
        Food -= 5;
    }
}

function Pee(){
    Say("You decided to take a pee, because nothing can see you in the fog.");
    Murmur("You are so nasty, I'm watching you.");
}

function Banana(){
    Say("You see a big yellow thing coming out of the fog. It's a banana, so you eat it.");
    Food += 1;
    Murmur("What kind of thing is that.");
}

function Weaponing(){
    if (WD > 0){
        Say("You get some tall grass and bound them together your weapon.");
        WD += 1;
    } else {
        Say("You pick up one great broadsword from the ground. It doesn't looks like a sword that was made on Earth. Something was written on it: Use my blade as you see fit.");
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
    if (WD > 0){
    Say("The trees are too thick, you can't go through it, so you use your weapon to clean the way up");
    WD --;
    } else {
    Say("You stomped onto a tree and lost some food, you thought some squirrel stole them.");
    Food --;
    }
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
    Food += 2;
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
    Say("You see a river in the deep jungle, you decided to relax and swim. You also caught some fish.");
    Food += 3;
}

function Gathering(){
    Say("You gather some fruits and vegetables from the deep jungle.");
    Food += 4;
}

function Vine(){
    if (WD > 0){
    Say("The vines from the tree are too thick, you decided to cut some down with your weapon.");
    WD --;
    } else {
    Say("You get stuck in the vines and can't get out, you had to tear them down with your bare hand. You feel exhausted, so you eat one more food");
    Food --;
    }
}   

function EatLeaf(){
    Randomer = Randoming(0,10);
    if (Randomer <= 5){
    Say("You eat some leaves because they're blocking your eyesight.");
    Food ++;
    } else {
    Say("You eat some leaves that are blocking your eyesight, they are disgusting and you throw up.");
    }
    if (Randomer <= 3){
    Say("You eat some leaves, they are tasty. You found out that this tree's leaves are actually pretty edible");
    Food ++;
    }
    if (Randomer === 0){
    Say("You eat some leaves, then you found out that this is the best thing you can eat in the deep jungle, so you eat some more.");
    Food ++;
    Murmur("I regret that I didn't try this when I was voyaging here.");
    }
}

function SharpStone(){
    Say("You sharpen your blade on a sharp stone, it gets very, very sharp!");
    WD += 3;
}

function Strawberries(){
    Say("You saw some strawberries so you picked them and ate them. They are so tasty.");
    Food += 2;
}

    //Uncommon Events
function Origin(){
    Origing ++;
    $("#wiseword").css("font-size" , "10px");
    $("#wiseword").css("border" , "5px solid black");
    Say("You look around, its the same place that you started! So you decided to get some supplies from nearby.");
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
    Murmur("Well... I came here by plane, if that satisfies you.");
    }
    if (Origing === 21){
    Murmur("Maybe, just maybe, you know that I will say something?");
    }
    if (Origing === 24){
    Murmur("Fine, I'll say that you are going to find the compass components and get to that mystery ruin.");
    }
    if (Origing === 27){
    Murmur("You stil doing that? I thought that was enough information already.");
    }
    if (Origing === 30){
    Murmur("Just go north, its where the ruin lays, but you'll never find it unless you get the compass.");
    }
    if (Origing === 33){
    Murmur("But, you can get into the coliseum, left to the ruin, north-east to the dangerous wild.");
    }
    if (Origing === 36){
    Murmur("I think, my grave is somewhere in the jungle. Haha, I wonder if that guy will give me a grave.");
    }
    if (Origing === 39){
    Murmur("You can also get to the black village from southeast, just go south after you encounter the beast. Hope you don't get killed.");
    }
    if (Origing >= 42 && Origing < 60){
    Murmur("Nothing more I can tell.");
    }
    if (Origing === 60){
    Murmur("Watch out for the king in the ruin, really the last thing I can tell.");
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
    Say("You see a person with red skin and green hair with a unnaturally big smile. He sees your food and stole tons of it, your blade has no use against him. You just watched him run away.");
    TomatoFood += Math.round(Food / 2);
    Food = Math.round(Food / 2);
    } else {
    Say("You see a person with red skin and green hair with a unnaturally big smile. He says: I'm full! Thank you for the food! I'll tell you a secret: in the place with thick trees block the fog, a new road opens in front of you. ");
    TomatoSatis = true;    
    }
}

function DevHutMenu(){
        DevHut = true;
        PlayerianInTalk = false;
        $("#b5").show();
        $("#b5").html("Leave the Developer's Hut");
        $("#b6").show();
        $("#b6").html("Talk with a Tomato guy");
        $("#b7").show();
        $("#b7").html("Talk with a penguin");
        $(".B").hide();
        Image("DevHut");
}

function Coliseum(){
        InColiseum = true;
        if (ColiseumE === 0){
            Say("You see a magnificant building standing in the jungle, you walk in and realize this is the coliseum.");
            $("#word").append("<p>A person walk towards you and say: "+"<div style='text-decoration: line-through;'>You are the new gladiator right? Come here, our first show is ready to begin!</div><br>Then you got pull into the coliseum.</p>");
            $(".B").hide();
            $("#b5").show();
            $("#b5").html("Fight!");
            ColiseumE ++;
        } else {
            
            $(".B").hide();
            $("#b5").show();
            $("#b5").html("Fight!");
            $("#b6").show();
            $("#b6").html("Leave");
        }
        $("#b5").click(function(){
            
        });
}

//Randomly execute(function) Events
function Events(){
    eval(arguments[Randoming(0,arguments.length-1)]+"()");
}

//Events List (If you want to add event, add to the bottom of this function, on top of Fog Events. Remember to add return to the bottom
//of the event, or else it will not work. Use if with constrains in order to develop your event.)
function EventList(){
    //Developer's Hut
    if (X <= -100 && Y <= -75){
        Say("You see a small wooden house in the thick trees that is covered by the fog. A sign above the wooden house is a sign: Developer's Hut");
        DevHutMenu();
        return;
    }
    //Fertile Land
    if (Step === 10){
    FertileLand();
        EventsMet += 1;
        return;
    }
    //Back to the square
    if (X === 0 && Y === 0){
    Origin();
        return;
    }
    //Noticing Same Place
    if (Step >= 15 && Step <= 20 && X <= 3 && X >= -3 && Y >= -3 && Y <= 3){ 
        Murmur("You should not walking around in a circle, that's not how you can find a way to escape a big jungle.");
    }
    //Plane Crush site
    if ( Math.pow(X-5, 2)+Math.pow(Y-15,2) <= 20 && Plane === false ){
        Plane = true;
        EventsMet += 1;
        Murmur("Well, how could I forgot there is this thing?");
        Say("You saw a empty land with a crashed small plane that has dust all over the place. You decided to go in and search for some valuables. You found some food and 1 compass component.");
        $("#word").append(" Inside the plane you found a small journal in the cabin. You decided to read a few pages.");
        $("#word").append("<p>Front Cover: <i>Dr.Italic</i><br>Title: <i>Journal</i></p>");
        $("#word").append("<p><i>I have decided to go on this exploration, in The Jungle that stay ignorant to human. Well, I was honored by having my long time friend Bold going with me and professer Underline serve as my pilot. Our first destination is the Roman ruin that locates at the north, after we get past the fog in the south. Now, I think this trip will go pretty well, I can foresee it in the future.</i></p>");
        Food += 20;
        CC += 1;
        return;
    }
    //TombA
    if (TombA === false && X === -27 && Y <= 10){
        TombA = true;
        EventsMet += 1;
        Tomba();
        return;
    }
        
    //TombB
    if (TombB === false && X >= 10 && Y === 36){
        TombB = true;
        EventsMet += 1;
        Tombb();
        return;
    }
    
    //TombC
    if (TombC === false && X === -27 && Y === 36){
        TombC = true;
        EventsMet += 1;
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
        Say("You are out from the foggy area, you look behind, you hope that you could never go in there again.");
        InFog = false;
        return;
    }
    
    //Go into the Deep!
    if (InDeep === false && X <= -100){
        Say("You come into an area that has thicker trees than before, you think this is the deep jungle.");
        InDeep = true;
        return;
    }
    
    //I'm Out again!
    if (InDeep === true && X > -100){
        Say("You are out of the deep jungle.");
        InDeep = false;
        return;
    }
    
    //Reinhardt
    if (X === 23 && Y === 4 && Reinhardt === false){
        Reinhardt = true;
        Say("You found a mysterious blue-covered book near the remains of a dead horse. upon opening the book, two lightnings strikes appeared before you. Before you realized what you had done. Suddenly, you hear someone shouted: magic is everything! You got blown fly out. Now you know, this thing should not be touched, because its not made on Earth. ");
        Food -= 10;    
        return;
    }
    
    //DroppedSupply
    if (DroppedSupply === false && Math.pow(3*X+10, 2)+Math.pow(Y-3,2) <= 12){
        Say("You tripped. Then you see a yellow crate lying on the ground with some dust cover on it. You open the crate up, there is some supplies inside, so you take it.");
        Food += 10;
        EventsMet += 1;
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
        EventsMet += 1;
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
        Say("You have no weapon to fight the beast! The beast saw you weaponless and stole some food! Then the beast ran away to the "+BeastDirection);
        Food -= 4;
        }
        
        //Beast Killing
        if (BeastHealth <= 0){
        Say("You have slain the beast! You got tons of fresh meat, and you found some compass component inside the beast's body!");
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
        EventsMet += 1;
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
            if (Y <= -30){
                Say("You saw some totally black people walking toward north, looks like the group that you has been released! They have the same destination, that's what you observed. One of them talk with you: There is a fog area in the south, looks pretty dangerous.");
                } else {
                Say("You saw some totally black people walking toward south, looks like the group that you has been released! They have the same destination, that's what you observed. One of them talk with you: There is a place that you can find the lost king in the west, that's what I heard from someone.");
                }
        } else {
            Say("You see the beast slaughtering the totally black people! You are mad, so you get up and kill the beast. Although the beast dies, tons of totally black people are dead.");
            Food += BeastHealth * 15;
            BeastX = NaN;
            BeastY = NaN;
            BeastDirection = NaN;
        }
        return;
    }
    
    //Beast Cave Outcome2
    if (BeastCave === true && CaveOutcome2 === false && X === 100 && CavemanStep >= 20 && BeastKilled === false){
        CaveOutcome2 = true;
        Say("You see the beast's cave again, but inside, all of the totally black people are dead.");
        if (Caveman !== "Ignore"){
            Murmur("You, you never did that right? You must be hacking.");
        }
        return;
    }
    
    //Black Village
    if( X === 50 && Y === -30 ){
        if (King === true){
            Say ("You have encountered the Black Village, a place where the shadows of the past life take form.....  Villagers greet you as the king of Rome when you walk into the village.");
        } else {
            Say ("You have encountered the Black Village, a place where the shadows of the past life take form.....  A villager say hi to you when you walk into the village.");
        }
        if (VillageSlaughter === false){
            $("#b8").show();
            $("#b8").html("Trade with the Black Village people");
            $("#b9").show();
            $("#b9").html("Do not trade with them");
            $("#b10").show();
            $("#b10").html("Walk around the village");
            $("#b11").show();
            $("#b11").html("exit the village");
            $(".B").hide();
            Image("V1");
        } else {
            Say("You see the ruin of the black village");
            $(".B").hide();
            $("#b11").show();
            $("#b11").html("exit the village");
        }
            WalkVillage = true;
            EventsMet += 1;
        return;
    }
    
    //Lost King
    if(Math.pow(2*X+120,2)+Math.pow(3*Y,2)<=100 && Lostking === false){
        Lostking = true;
        if (Step > 200){
            Say("Young man.... Can you please... Become the king of Rome...");
            $("#word").prepend("<p>You encounter a very old man that looks weak and is ready to die./p>");
        } else {
            Say("You know me, right? I'm Julius Caesar, emperor of Rome. After a long period of waiting, I get a thought, of not living anymore. At first, it's only a small thought, but as time progress, it gets bigger and bigger. Now, I'm near the edge of being blacken. I have always in regrets of one things, the building of the Roman Aura, it keeps people who should be dead alive. Its very bad, very very bad. Only one thing I can be sure, I'll be blacken in a few day, so, young man, if you want, do you want to be the king of Rome?");
            $("#word").prepend("<p>You encounter a very old man that live in a tent. He starts to speak to you.</p>");
        }
        
        //show and hide
        $(".B").hide();
        $("#b5").show();
        $("#b6").show();
        $("#b7").show();
       //button
        $("#b5").html("accept");
        $("#b6").html("reject");
        $("#b7").html("ignore");
        //click function
    $("#b5").click(function(){
        if (Step > 200){
        Say("You made a wise choice young man...");
        $("#word").append("<p>You see him falling onto the ground. Then, a black figure stands up from the fallen body.</p>");
        } else {
        Say("Thank you, I know its hard for you, but being a king is no joke, its more like you bear all the responsibility for protecting the citizens, but remember, the most important thing for a king is its citizen. Good luck, young man. Also, if you have a chance, can you destroy the Roman Aura for me? I don't want to live more, no one wants to live more.");
        }
        King = true;
        $("#b5").hide();
        $("#b6").hide();
        $("#b7").hide();
        $(".B").show();
        });
    $("#b6").click(function(){
        if (Step > 200){
            Say("You... made a... bad choice.....");
            $("#word").append("<p>You see him falling onto the ground. Then, a black figure stands up from the fallen body.</p>");
        } else {
            Say("Have I not suffer enough? Well, you made your choice.");
        }
        $("#b5").hide();
        $("#b6").hide();
        $("#b7").hide();
        $(".B").show();
    });
    $("#b7").click(function(){
        if (KingWord === false && Step <= 70){
            KingWord = true;
            Say("Wait, don't go yet! I can tell you some of my story before you make your consideration. My, uh, relatives, they built a tomb for me somewhere in the jungle after I leave the Roman palace. I don't know where is it, but, I believe you will find it if you become the king of Rome, so please, ok?");
        } else {
        Say("You ignore the powerless emperor and walked away.");
        $("#b5").hide();
        $("#b6").hide();
        $("#b7").hide();
        $(".B").show();
        }
    });
        return;
    }
    
    //Church 
    if (Church === false && Math.pow(X-5,2)+Math.pow(Y+3,2) < 7){
        Say("You thought see a glorious church, but you look around, all you see is a ruin. There is a small room that is still standing in this wild jungle. You enter that room");
        $(".B").hide();
        $("#b5").show();
        $("#b5").html("Go In");
        InChurch = true;
        Church = true;
        return;
        }
    
    //Locked Crate
    if(X===0 && Y===20 && Lcrate === false){
        Say("You found a half buried crate that have a lock on it.");
        $(".B").hide();
        $("#b5").show();
        $("#b6").show();
        $("#b7").show();
        $("#b5").html("Examine lock");
        $("#b6").html("Break lock with weapon");
        $("#b7").html("Leave");
        $("#b5").click(function(){
           Say("Upon closer examination you realized the lock prevents you from accessing whatever is within the crate..");
           $("#b5").hide();
           });
        $("#b6").click(function(){
            if(WD>1){
                Food += 5;
                WD -= 2;
                $(".B3").hide();
                $(".B").show();
                Say("You broke the lock with your weapon and within the crate you found some food.");
                Lcrate=true;
                }
            else{
                if (WD === 0){
                    Say("You want to break the lock open with your weapon, but then you find out you didn't even have a weapon.");
                } else {
                    Say("You hit the lock with your weapon. Nothing happened.");
                }
                $(".B3").hide();
                $(".B").show();
                }
            });
        $("#b7").click(function(){
            $(".B3").hide();
            $(".B").show();
            });
        return;
        }
    
    //Fog Guardian
    if ( FogGuardian === false && Math.abs(X-30)+Math.abs(2*Y+170) < 15){
        if (GuardianCount === 0){
            Say("You see a black figure walking in the jungle, when he sees you, he shouted.");
            $("#word").append("<p>You! Don't get into the fog, this place is dangerous!</p>");
        }
        if (GuardianCount === 1){
            Say("He comes closer");
            $("#word").append("<p>Can you hear me? This place is dangerous!</p>");
        }
        if (GuardianCount === 2){
            Say("The black figure stands next to you, you see it clear now, he has some armors and weapons on him.");
            $("#word").append("<p>I could bring you to black village in the north, just leave now, it's very dangerous.</p>");
            $(".B").hide();
            $("#b5").show();
            $("#b6").show();
            $("#b5").html("Go to Black Village with him");
            $("#b6").html("Say: I am fine.");
            if (King === true){
                $("#b7").show();
                $("#b7").html("Kill Him");
            }
        }
        GuardianCount ++;
        return;
    } else {
    if (GuardianCount > 0){
        FogGuardian = true;
        GuardianCount = 0;
        Say("You leave the area.");
        return;
    }
    }
    
    //Tree of Life
    if (TOL === false && Math.abs(X+120)+Math.abs(Y+10)<5 ){
        TOL = true;
        TreeE = true;
        Say("You saw a sign that said 'Tree of Life'. But all you see is a small bush.");
        $(".B").hide();
        $("#b5").show();
        $("#b5").html("Examine");
        return;
    }
    
    //Coliseum
    if (InColiseum === false && Math.pow(2*X+80,2)+Math.pow(4*Y-400,2)<150 ){
        Say("You see the coliseum standing in the deep jungle.");
        Coliseum();
        return;
    }

    //Fog Events
    if (InFog === true && Y <= -75){
        //Snowman Or Not?
        Randomer = Randoming(0,100);
        if (Randomer < 8 && Snowman === false){
            EventsMet += 1;
            Snowman = true;
            SnowmanR();
        } else {
            Events("Foggy","Bump","SmallTree","Slip","Bear","Pee","Banana","Weaponing","Rabbit");
        }
        return;
    }
    //Deep Jungle Events
    if (InDeep === true && X <= -100){
            Events("ThickWood","BigLog","Snake","BlackOut","Swimming","Gathering","Vine","EatLeaf","EatLeaf","SharpStone","Strawberries");
        return;
    }
    //Normal Events
    Events("Nothing","Nothing","Nothing","Shrub","Shrub","Herb","Herb","Wilding","Wilding","Monkey","Monkey","Sharpen","Sharpen","Compass");
        //Total of 14
        return;
}

//Everystep you take before event initiate
$(".B").click(function(){
    Step ++;
    if (Caveman === "Ignore"){
    CavemanStep ++;
    }
});

//Every time you click a button
$(".B2").click(function(){
    $("#wiseword").hide();
    $("#image").hide();
});

//Clicking
    //North
$("#b1").click(function(){
    Y ++;
    if (Y > 150){
    Y = -150;
    }
});

    //West
$("#b2").click(function(){
    X --;
    if (X < -150){
    X = 150;
    }
});

    //East
$("#b3").click(function(){
    X ++;
    if (Randoming(0,10) < 1 && BeastFind === false){
    $("#wiseword").css("font-size" , "10px");
    $("#wiseword").css("border" , "5px solid black");
    Murmur("If you go east you will encounter the beast!");
    }
    if (X > 150){
    X = -150;
    }
});

    //South
$("#b4").click(function(){
    Y --;
    if (Y < -150){
    Y = 150;
    }
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
            Murmur("That's a high cost you have pay, don't ever think you deserve something back, that's not a good ideology.");
        }
        
        //Black Village
        if (WalkVillage === true){
            //Slaghter
            if (VillageRed === true){
            $("#word").css("color","black");
            Say("You kill off all the villagers.");
            $(".B2").hide();
            $("#b11").show();
            VillageSlaughter = true;
            Food += 100;
            VillageRed = false;
            return;
            }
            //Chief
            if (ChiefTalking === 0){
            Say("You go into the house, and you see a totally black person.");
            $("#b5").html("Talk with him");
            }
            if (ChiefTalking === 1){
            Say("Hello, my name is Bold.");
                if (King === true){
                Say("Hello, my name is Bold, nice to meet you, young king of Rome.");
                }
            Murmur("Is that really him? Too long no see.");
            $("#b5").html("Talk with Bold");
            }
            if (ChiefTalking === 2){
            Say("Usually, a chief has no name, because we all forgot what we used to be, but the pendant that I always carry has BOLD on it, so I think my name is Bold.");
            }
            if (ChiefTalking === 3){
            Say("Well, I would like to give you a prediction for your future, since you had help the village.");
                if (King === true){
                Say("Well, I would like to give our young king a prediction for your future, since you had help the village and you are the king of rome.");
                }
            }
            if (ChiefTalking === 4){
                Say("");
                if (King === true){
                $("#word").append("<p>As a king of Rome, you have lots of responsibility.</p>");
                }
                if (EventsMet <= 4){
                $("#word").append("<p>The jungle is way bigger than you think, explore more.</p>");
                }
                if (Lostking === true && King === false){
                $("#word").append("<p>I can see that you made a wrong choice.</p>");
                }
                if (TombC === true && (TombA === false || TombB === false)){
                $("#word").append("<p>You should notice that you got a good luck</p>");
                }
                if (Reinhardt === true){
                $("#word").append("<p>You encounter something you shouldn't have.</p>");
                }
                if (DroppedSupply === true && Plane === true){
                $("#word").append("<p>You get the help from someone, who is always by your side.</p>");
                    if (Origing >= 15){
                        $("#word").append("<p>You also make that person mad by doing ridiculous stuff. Is it because you know his way of thinking?</p>");
                        }
                } else if (Origing >= 30){
                        $("#word").append("<p>You should learn to get help more, don't give up!</p>");
                           }
                if (RabbitSaved === RabbitMet && RabbitMet > 0){
                    $("#word").append("<p>You are too kind to yourself, sometimes you don't need to.</p>");
                } else if (RabbitSaved + RabbitCooked < RabbitMet / 2){
                           $("#word").append("<p>Are you too lazy to do anything? Or just too scare for any outcome?</p>");
                } else if (RabbitCooked > RabbitMet / 2 + RabbitSaved){
                           $("#word").append("<p>Do some good stuffs, maybe?</p>");
                }
                if (SnowmanRescue === true){
                    $("#word").append("<p>You are too kind</p>");
                } else if (SnowmanRescue === false) {
                    $("#word").append("<p>Someone will be sad by your action, too.</p>");
                           }
                
                if (Caveman === "Rescue"){
                $("#word").append("<p>You are a nice person, atleast you try to be one.</p>");
                }
                if (Caveman === "Ignore"){
                    if (King === true){
                        $("#word").append("<p>I would like to see our new king being more responsible to its citizens.</p>");
                    } else {
                        $("#word").append("<p>You are a person who takes benefit for yourself.</p>");
                    }
                }
                if (Caveman === "Killed"){
                $("#word").append("<p>Maybe you should keep your inner beast in check.</p>");
                    if (King === true){
                        $("#word").append("<p>Just because you are the king doesn't mean you can do that.</p>");
                    }
                $("#word").append("<p>You ask why?</p>");
                $("#word").append("<p style='color:red;'>ASK YOURSELF</p>");
                }
            
            }
            if (ChiefTalking === 5){
                if (Caveman === "Killed"){
                Say("Now, if you please, can you get out from here?");
                $("#b5").hide();
                $("#b8").show();
                $("#b9").show();
                $("#b10").show();
                $("#b11").show();
                } else {
                Say("OK, you looks like a nice person, come here, let me show you some custom of the black village.");
                $("#b5").html("Go with Bold");
                }
            }
            if (ChiefTalking === 6){
                Say("This is where the lineage of black village chief lay, from the first one, the creator of black village, Claudius, to me, the thirteen chief, Bold. Everyone get promoted to be chief, then they work as a chief, until they lost the will to move, they close their eyes, and let the time flow. This is what we consider as a 'slumber'. They never wake up, do they? I have never seen one, and I don't think there will be one.");
                $("#b5").html("Continue");
            }
            if (ChiefTalking === 7){
                Say("Well, this is all I have to say, farewell!");
                $("#b5").hide();
                $("#b8").show();
                $("#b9").show();
                $("#b10").show();
                $("#b11").show();
            }
            $("#word").css("font-weight", "bold");
            if (ChiefTalking === 0){
            $("#word").css("font-weight", "normal");
            } else {
            $("#word").prepend("<p>Bold:</p>");
            }
            ChiefTalking ++;
        }
        //Developer's Hut -- Leave
        if (DevHut === true){
            Say("You leave the Developer's Hut");
            $(".B3").hide();
            $(".B").show();
            DevHut = false;
            X = -100;
            Y = -75;
        }
        //Church - Inside
        if (InChurch === true){
            Say("You see some statues of Roman gods, they looks old. On the wall, there are some text you can read: As the emperor gets the holy branch of the life tree in the deep jungle in the west, the whole tree shrink in a second... The words after that is shredded off.");
            $("#b5").hide();
            $(".B").show();
            InChurch = false;
        }
        //Fog Guardian 
        if (GuardianCount === 3){
            Say("Here we go!");
            $("#word").html("In a matter of hours, you get to the black village's south door.");
            X = 50;
            Y = -31;
            FogGuardian = true;
            GuardianCount = 0;
            $(".B3").hide();
            $(".B").show();
            InFog = false;
        }
        //Tree of Life
        if (TreeE === true){
            TreeE = false;
            Say("You look at the center of 'Tree of Life', there is a hole in the center of it, looks like something is missing.");
            $(".B2").hide();
            $(".B").show();
            Image("TOL");
        }
        //Battle
        if (InBattle === true){
            if (Battling === 0){
                health -= 1;
                Say("You hit "+enemy+" in the face!<br> "+enemy+" has "+health+" health left!");
            } else {
                Say(enemy+" dodge it and return a blow!<br>"+enemy+" has "+health+" health left!");
                Food --;
            }
            }
        //Coliseum enter battle
        if (InBattle === false && InColiseum === true){
                Battle(ColiseumE,ColiseumE*3);
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
        //Developer's Hut -- Playerian
        if (DevHut === true){
            if (PlayerianTalk === 0){
                PlayerianInTalk = true;
                Say("A tomato guy has speak to you.");
                if (TomatoSatis === true){
                $("#word").append("<p>Really thank you for your food! I have been starving for weeks. Forget to mention, my name is Playerian. This is the developer's hut, enjoy yourself here!</p>");
                } else if (TomatoFood > 0){
                $("#word").append("<p>Hey, I know you, you are the person who gave me food! That really helps me a lot, now I don't need to eat food now! I acutally forget, my name is Playerian. This is the developer's hut, enjoy yourself here!</p>");
                TomatoSatis = true;
                } else {
                $("#word").append("<p>Nice to meet you! My name is Playerian. This is the developer's hut, enjoy yourself here.</p>");
                TomatoSatis = true;
                }
                Image("P2");
                $(".B2").hide();
                $("#b6").show();
                $("#b6").html("Talk with Playerian(He actually prevents you from accessing other button. Maybe through hacking.)");
            }
            if (PlayerianTalk === 1){
                Say("Playerian asks you would you like some drinks. Then he shows you some green juices.");
                Image("P3");
                $("#b6").html("OK");
                $("#b7").show();
                $("#b7").html("No Thanks");
            }
            if (PlayerianTalk === 2){
                Say("Playerian says: You are so nice! Many people don't want to drink it, I don't know why.");
                $("#word").append("<p>You feel that this liquid has some ridiculous taste, so you just sip a little bit.</p>");
                Food += 10;
                Image("P4");
                $("#b6").html("Can I talk to other people?");
                $("#b7").hide();
            }
            if (PlayerianTalk === 3){
                Say("Well, I would not let you go so easily! First, you have to prove yourself fit, and to prove yourself fit, you need to win me in rock-paper-scissor!");
                $("#b6").html("Rock");
                $("#b7").show();
                $("#b7").html("Paper");
                $("#b8").html("Scissor");
                $("#b8").show();
                Image("P1");
            }
            if (PlayerianTalk >= 4 && PlayerianTalk <= 8){
                Image("PP");
                Say("He uses paper, you lose.");
            }
            if (PlayerianTalk === 8){
            $(".B3").hide();
            $("#b6").show();
            $("#b6").html("Gun");
            }
            if (PlayerianTalk === 9){
                Say("Wow, you cheater! Fine, I'll let you go.");
                $(".B3").hide();
                DevHutMenu();
                Image("P5");
            }
            if (PlayerianTalk >= 10){
                Image("P1");
                Randomer = Randoming(0,5);
                if (Randomer === 0){
                Say("You want more drink of mine? Sorry, I don't have any left.");
                }
                if (Randomer === 1){
                Say("You say I cheat during the game? OK, I admit I did, but it is just a game, isn't it? That's what people usually say, 'just a game'. But, what matter the most is your feeling right?");
                }
                if (Randomer === 2){
                Say("It's fun running in the jungle, I must say, but I always starve to death.");
                }
                if (Randomer === 3){
                Say("I used to voyage in a jungle and see a black village with white houses. You can get to there by walking east 50 times and south 30 times after you get to the center of the jungle.");
                }
                if (Randomer === 4){
                Say("There is a dangerous wild in northwest of the origin. I escaped by disguise as a tomato.");
                }
                if (Randomer === 5){
                Say("Didn't you want to talk to others, now you remember I'm a good guy uh?");
                }
            }
            if (PlayerianTalk === 15){
                Image("P1");
                Say("Well, you know me, if you talk with me enough times, you get some important information. (I wouldn't tell you that I'm good at doing this.)");
            }
            if (PlayerianTalk === 20){
                Image("P1");
                Say("Do you want me to spill some secret stuff?");
            }
            if (PlayerianTalk === 30){
                Image("P1");
                Say("I already know that you talk with me because you want some secret stuff, but not really likes me.");
            }   
            if (PlayerianTalk === 40){
                Image("P1");
                Say("Take this compass component, it helps you.");
                CC ++;
            }
            if (PlayerianTalk === 50){
                Image("P1");
                Say("You should really get to bed now.");
            }
            if (PlayerianTalk === 60){
                Image("P1");
                Say("I can't spill everything on you, that should be discover by yourself.");
            }
            if (PlayerianTalk === 61){
                Image("P1");
                Say("So yeah, nothing more, nothing less.");
            }
            if (PlayerianTalk === 62){
                Image("P1");
                Say("Isn't that the fun of the game? Discovering stuff?");
            }
            if (PlayerianTalk === 100){
                Image("P1");
                Say("You've tried, I can see your hard job. Well, follow your heart is sometimes really hard to do, because there are outside forces that is constantly changing you. Food, compass components, your valuable weapon, did you ever make it to here without those stuffs? No, you may want to spare a monkey or two, but you can't, this is what you do to live. All things depend on other things to live, this can't be changed. What you can change, is the choices that are given to you. That's all I have to say.");
            }
            if (PlayerianTalk > 100){
                Image("P1");
                Say("I'm just gonna keep smiling at you.");
            }

            PlayerianTalk ++;
        }
        //Fog Guardian
        if (GuardianCount === 3){
            Say("Fine, I'll leave you alone.");
            GuardianCount = 0;
            FogGuardian = true;
            $(".B3").hide();
            $(".B").show();
        }
        //Battle
        if (InBattle === true){
            if (Battling === 1){
                health -= 1;
                Say("You hit "+enemy+" in the face!<br> "+enemy+" has "+health+" health left!");
            } else {
                Say(enemy+" dodge it and return a blow!<br>"+enemy+" has "+health+" health left!");
                Food --;
            }
            }
        //Coliseum leave
        if (InBattle === false && InColiseum === true){
            ColiseumLeave = true;
            Say("which way do you want to leave?");
            $(".B2").hide();
            $("#b7").show();
            $("#b8").show();
            $("#b9").show();
            $("#b10").show();
            $("#b7").html("North");
            $("#b8").html("West");
            $("#b9").html("East");
            $("#b10").html("South");
            $("#b7").click(function(){
                if (ColiseumLeave === true){
                    X = -40;
                    Y = 104;
                }
            });
            $("#b8").click(function(){
                if (ColiseumLeave === true){
                    X = -47;
                    Y = 100;
                }
            });
            $("#b9").click(function(){
                if (ColiseumLeave === true){
                    X = -33;
                    Y = 100;
                }
            });
            $("#b10").click(function(){
                if (ColiseumLeave === true){
                    X = -40;
                    Y = 96;
                }
            });
            $("#b7, #b8, #b9, #b10").click(function(){
                if (ColiseumLeave === true){
                    ColiseumLeave = false;
                    $(".B2").hide();
                    $(".B").show();
                    InColiseum = false;
                }
            });
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
        //Dev's Hut Playerian -- Say no to drink
        if (PlayerianTalk === 2 && PlayerianInTalk === true){
                Say("Playerian says: Well, many people don't like it, you are not the only one.");
                $("#word").append("<p>You feel lucky that you didn't drink that, because Playerian threw it in the trash.</p>");
                Image("P5");
                PlayerianTalk ++;
                $("#b6").html("Can I talk to other people?");
                $("#b7").hide();
            }
        //Dev's Hut Playerian -- When you go paper
        if (DevHut === true && PlayerianInTalk === true){
        if (PlayerianTalk >= 4 && PlayerianTalk < 8){
                Say("He uses scissor, you lose.");
                Image("PS");
            }
        if (PlayerianTalk === 8){
            $(".B3").hide();
            $("#b6").show();
            $("#b6").html("Gun");
        }
        PlayerianTalk ++;
        }
        //Dev's Hut Penguin guy
        if (DevHut === true && PlayerianInTalk === false){
            Say("Hi, I am Eeerrrf and I usually like to wing it. That is all I am going to say because I am shy.");
            $("#word").append("<p> <img class='penguin' src='https://a-z-animals.com/media/animals/images/original/penguin2.jpg'> </p>");
        }
        //FogGuardian
        if (GuardianCount === 3){
            Say("You mercilessly kill the fog guardian.");
            GuardianCount = 0;
            FogGuardian = true;
            GuardianKilled = true;
            $(".B3").hide();
            $(".B").show();
        }
    });

    //Button 8
    $("#b8").click(function(){
        //Village trade
        if (WalkVillage === true){
        Say("The villager thanks you for your kindness to trade, but you don't have enough food.");
        }
        if (WalkVillage === true && Food > 3){
        Food -= 3;
        WD += 5;
        VFriendly += 1;
        if (VFriendly > -5){
            VillageRed = false;
            $("#b5").hide();
            $("#b5").css("color","black");
        }
        if (VFriendly <= 0){
        Say("The villagers have changed the way they think about you.");
        }
        if (VFriendly === 1){
        Say("The villager likes you.");
            if (King === true){
            Say("The villagers think this king is good");
            }
        }
        if (VFriendly === 2){
        Say("The villager likes you very much.");
            if (King === true){
            Say("The villagers spread the words that this king is good.");
            }
        }
        if (VFriendly >= 3){
        Say("The villagers think you are a friend of the black village.");
            if (King === true){
            Say("The villagers serve loyally to their king.");
            }
        }
        if (VFriendly === 4 && ChiefHouse === false){
        Say("The villagers take you to a big, totally white house, state that this is the chief's house.");
        ChiefHouse = true;
        $(".B3").hide();
        $("#b5").show();
        $("#b5").html("Go into the chief's house");
        }
        if (VFriendly >= 5){
        Say("The villagers are appreciating you and give you 1 food.");
        Food ++;
            if (King === true){
            Say("The villagers think this king is amazing and give you 2 food.");
            Food ++;
            }
        }
        if (VFriendly === 10){
        Say("Bold is talking to you.");
        $("#word").append("<h1>Bold:<br><br>I really appreciate your help to the black village, I think we could be friends.</h1>");
        BoldFriend = true;
        }
        if (VFriendly === 100){
        Say("The villagers have hail you as their god. They give you a lots of compass components.");
        CC += 4;
            if (King === true){
            Say("The villagers now really believe that this king is the descendant of the god, so they give you lots of food and compass components.");
            Food += 300;
            }
        }
        }
        //Dev's Hut -- You uses scissor
        if (DevHut === true){
        if (PlayerianTalk >= 4 && PlayerianTalk < 8){
                Image("PR");
                Say("He uses rock, you lose.");
            }
        if (PlayerianTalk === 8){
            $(".B3").hide();
            $("#b6").html("Gun");
            $("#b6").show();
            
        }
            PlayerianTalk ++;
        }
}); 

//Button 9
$("#b9").click(function(){
        //Village doesn't trade
    if (WalkVillage === true){
            VFriendly -= 1;
            if (King === true && VFriendly <= -5){
                $("#b5").show();
                $("#b5").css("color","red");
                $("#b5").html("Slaghter all the Villagers");
                VillageRed = true;
            } else {
            VillageRed = false;
            }
        if (King === true){
            if (VFriendly <= 0)
            {
            Say("The villagers say that this king is annoying.");
            }
            if (VFriendly <= -3)
            {
            Say("The villagers say that this king is bringing us doom.");
            }
            if (VFriendly <= -5)
            {
            Say("The villagers say that this king is the worst of all.");
            }
        }
        if (King === false){
            Randomer = Randoming(0,10);
            if (Randomer === 0){
            Say("The villager doesn't like you.");
            }
            if (Randomer === 1){
            Say("The villager give you a white eye.");
            }
            if (Randomer === 2){
            Say("The villager walk back.");
            }
            if (Randomer === 3){
            Say("The villager think you are a bad person.");
            }
            if (Randomer === 4){
            Say("Why are you asking to trade when you don't want to trade? a villager asked.");
            }
            if (Randomer === 5){
            Say("The villager think you're funny.");
            }
            if (Randomer === 6){
            Say("The villager looks at you, looks offended");
            }
            if (Randomer === 7){
            Say("The villager looks at you, think you're funny.");
            }
            if (Randomer === 8){
            Say("The villager think you are dumb.");
            }
            if (Randomer === 9){
            Say("The villager doesn't like you.");
            }
            if (Randomer === 10){
            Say("LOL. Said the villager");
            }
        }
            
        }
}); 

    //Button 10
    $("#b10").click(function(){
        if (WalkVillage === true){
            Randomer = Randoming(0,15);
            if (Randomer <= 1){
            Say("You see a black villager sitting on a stone, thinking about something.");
            Image("V2");
            }
            if (Randomer >= 2 && Randomer <= 3){
            Say("You talk with a black villager. He says something about that black villager can't leave the black village unless approved by the chief.");
            }
            if (Randomer >= 4 && Randomer <= 5){
            Say("You walk around the black village, and you see some totally white building.");
            }
            if (Randomer >= 6 && Randomer <= 7){
            Say("You try to talk with one villager, he doesn't understand what you are talking about.");
            Image("V3");
            }
            if (Randomer >= 8 && Randomer <= 9){
            Say("You accidentally bump into one villager, he looks mad.");
            Image("V5");
            }
            if (Randomer >= 10 && Randomer <= 11){
            Say("You see 2 villagers talking with each other, they are talking about something that there is a fog area on the south.");
            Image("V6");
            }
            if (Randomer >= 12 && Randomer <= 13){
                if (Caveman === "Rescue" && BeastKilled === true){
                Say("You see a villager. He thanks you for rescue the villagers in the beast's cave.");
                } else {
                Say("You see a villager. He also sees you. He tells you that his friend has been captured by the beast to the east, to the beast's cave.");
                }
            }
            if (Randomer >= 14 && Randomer <= 15){
            Say("You see 2 villagers talking with each other, a villager says he has been to the deep jungle on the west. The other villager is impressed.");
            Image("V6");
            }
        }
    });
                    
//Button 11
$("#b11").click(function(){
    if (WalkVillage === true){
        WalkVillage = false;
        $(".B3").hide();
        $(".B").show();
        Say("You leave the black village.");
    }
});

//Initiate the events. Activate everytime you click any direction button
$(".B").click(function(){
    EventList();
    GainFood(-1);
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
});



$(".B2").click(function(){
    $("#Food").html("Food: "+Food);
    $("#CC").html("Compass Component: "+CC);
    $("#WD").html("Weapon Durability: "+WD);
    
    //Victory?
    if (CC > 9){
    $("Body").html("You have voyaged out of the jungle!");
    }
    
    //Death For Sure
    if (Food < 0){
        Food = 0;
        $("#Food").html("Food: "+Food);
        $(".B2").hide();
        $("#word").append("<p>You starved to death!</p>");
    }
});

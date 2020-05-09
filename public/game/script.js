
let cnv;
let clickable = true;

// variable stores which scene player is at
let scene = 0;
let current = 0;

// characters
let pierre;
let pierre_face;
let player;
let player_face;
let shadow;
let dragon_face;

// sound effects
let bruh_sfx;
let forest_bgm;
let haunted_forest_bgm;
let dragon_bgm;
let counter = 0;

// images
let bg1;
let bg2;
let bg3;
let bg4;
let bg4_2;
let ending1bg;
let dragon_breath;
let fall;

function preload(){
    // sound effect
    bruh_sfx = loadSound("../assets/bruh_sfx.mp3");
    forest_bgm = loadSound("../assets/forest_bgm.mp3");
    haunted_forest_bgm = loadSound("../assets/haunted_forest_bgm.mp3");
    dragon_bgm = loadSound("../assets/dragon_bgm.mp3");

    // player
    player = loadImage("../assets/slime.png");
    player_face = loadImage("../assets/slime_face.png");
    
    // pierre
    pierre = loadImage("../assets/pierre.gif");
    pierre_face = loadImage("../assets/pierre_face.png");

    //shadow
    shadow = loadImage("../assets/shadow.gif");

    //dragon
    dragon_face = loadImage("../assets/dragon_face.png");

    // bg 1
    bg1 = loadImage("../assets/bg1.jpg");
    bg2 = loadImage("../assets/bg2.png");
    bg3 = loadImage("../assets/bg3.jpg");
    bg4 = loadImage("../assets/bg4.jpg");
    bg4_2 = loadImage("../assets/bg4-2.png");
    fall = loadImage("../assets/falling.gif");
    dragon_breath = loadImage("../assets/dragon_breath.gif");
    ending1bg = loadImage("../assets/ending_1.jpg");
}

function setup(){
    cnv = createCanvas(1000, 750);
    cnv.parent('myContainer');

    forest_bgm.setVolume(0.2);
    haunted_forest_bgm.setVolume(0.2);
    dragon_bgm.setVolume(0.2);
}

function draw(){
    background(0);
    textSize(24);
    fill(255);

    if ( scene == 0 ){
        openingScene();
    }

    if ( scene == 1 ){
        secondScene();
    }

    if ( scene == 2 ){
        thirdScene();
    }

    if ( scene == 3 ){
        fourthScene();
    } 

    if ( scene == 4 ){
        fifthScene();
    }

    if ( scene == 5 ){
        ending1Scene();
    }
    
}

function fifthScene(){
    if(current == 0){
        text('You got knocked out when your head hits the hard ground.', 120, 530);
        text('After an amount of time you find yourself slowly waking up.', 120, 555);
        text('click to continue', 810, 725);
    }
}

// this is an ending scene
function ending1Scene(){
    if(current == 0){
        image(ending1bg, 0, -225);
        image(player, 200, 350);
        text('You continue to wander through and out the forest somehow arriving at a', 120, 530);
        text('desert. You wander for what seems to be eons', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 1){
        image(ending1bg, 0, -225);
        image(player, 200, 350);
        clickable = false;
        text('Without the cube of death your soul was forced to wander throughout the', 120, 530);
        text('desert for all of eternity. You tried to go back and find the forest', 120, 555);
        text('but you never managed to find the forest ever again', 120, 580);
        text('Probably should\'ve taken the cube of death...', 120, 630);
        text('press \'r\' to restart the game', 810, 725);
    }
}

function fourthScene(){
    if(current == 0){
        text('You got knocked out when your head hits the hard ground.', 120, 530);
        text('After an amount of time you find yourself slowly waking up.', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 1){
        playDragonBGM();
        image(bg4, 0, -50);
        image(player, 200, 371);
        text('You find yourself waking up to -- HOLY *&@Y#!!!!!', 120, 540);
        text('IS THAT A DRAGON?!?!, WHAT IS THIS SHYT?', 120, 565);
        text('THAT TIME I GOT REINCARNATED AS A SLIME?!?!!!', 120, 590);
        text('click to continue', 810, 725);
    }

    if(current == 2){
        image(bg4, 0, -50);
        image(player, 150, 371);
        text('Okay. okay. don\'t make a sound, just back away slowly-', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 3){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('...', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 4){
        image(bg4_2, 0, -50);
        image(dragon_breath, 50, 50);
        image(player, 150, 371);
        text('AAAAAAAAAAAAAAAAAAAAAAAHHHHHHHHHHHH!', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 5){
        image(bg4_2, 0, -50);
        image(dragon_breath, 50, 50);
        image(player, 150, 371);
        text('OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 6){
        image(bg4_2, 0, -50);
        image(dragon_breath, 50, 50);
        image(player, 150, 371);
        text('EEEEEEEEEEEEEHHHHHHHHHHHHHHHHHHHHHH', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 7){
        if(dragon_bgm.isPlaying()){
            dragon_bgm.stop(); counter=0;
            playHauntedForestBGM();
        }
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Wait hold up. How come you aint dying?!?', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 8){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(player_face, 25, 425);
        text('Uh... your right, I guess it might be because im', 320, 555);
        text('already dead.', 320, 580);
        text('click to continue', 810, 725);
    }

    if(current == 9){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Wait hol up. You\'re dead too?', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 10){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(player_face, 25, 425);
        text('Yes sir, that is correct. You too?', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 11){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Then you must have been sent by pierre as well.', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 12){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(player_face, 25, 425);
        text('Huh? how\'d you know?', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 13){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Many many years ago, like im talkin', 120, 540);
        text('centuries. I too was sent by pierre to', 120, 565);
        text('these woods', 120, 590);
        text('click to continue', 810, 725);
    }

    if(current == 14){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('After so many years traversing through', 120, 540);
        text('this accursed place I found out that you', 120, 565);
        text('need two items to get outta this place.', 120, 590);
        text('click to continue', 810, 725);
    }

    if(current == 15){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('The first is the cube of death-', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 16){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(player_face, 25, 425);
        text('SERIOUSLY?!?! Bruh, I should\'ve taken that thing!!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 17){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('OKAY DAAAMN BRO. LIKE, CAN A DRAGON', 120, 540);
        text('FINISH HIS STORY?!', 120, 565)
        text('click to continue', 810, 725);
    }

    if(current == 18){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(player_face, 25, 425);
        text('O my bad bro. Please continue.', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 19){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Thank you. Gaawd. So as I was sayin-', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 20){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Wait hold up did you say the cube of death?', 120, 540);
        text('Are you saying you found the cube of death?!?', 120, 565);
        text('click to continue', 810, 725);
    }

    if(current == 21){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(player_face, 25, 425);
        text('Yeah I saw a shadow monster carrying it around.', 320, 555);
        text('It offered to give it to me. But I decided not to', 320, 580);
        text('take it.', 320, 605);
        text('click to continue', 810, 725);
    }

    if(current == 22){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('You idiot you need that item to get out', 120, 540);
        text('of the forest!!', 120, 565);
        text('click to continue', 810, 725);
    }

    if(current == 23){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(player_face, 25, 425);
        text('WELL HOW AM I SUPPOSE TO KNOW!!!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 24){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('BRUH! -_- ', 120, 540);
        text('click to continue', 810, 725);
    }
    
    if(current == 25){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Don\'t you think an item that LOOKS', 120, 540);
        text('important, is ACTUALLY important!!!', 120, 565);
        text('click to continue', 810, 725);
    }

    if(current == 26){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Fine whatever, okay long story short.', 120, 540);
        text('You need the cube of death and you', 120, 565);
        text('also need the orb of life', 120, 590);
        text('click to continue', 810, 725);
    }

    if(current == 27){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('You see that thing over on the left?', 120, 540);
        text('That is called the orb of life. I', 120, 565);
        text('managed to find it while wandering', 120, 590);
        text('this accursed place for eons.', 120, 615);
        text('click to continue', 810, 725);
    }

    if(current == 28){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Only by combining the orb of life and', 120, 540);
        text('the cube of death can you create the portal', 120, 565);
        text('that leads to the place where pierre is. Once', 120, 590);
        text('you get to pierre, you\'ve won his sick twisted', 120, 615);
        text('game.', 120, 640);
        text('click to continue', 810, 725);
    }

    if(current == 29){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('As soon as I found the orb of life I', 120, 540);
        text('immediately was entrapped in this ice.', 120, 565);
        text('I\'ve been gaurding this place ever since.', 120, 590);
        text('click to continue', 810, 725);
    }

    if(current == 30){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        image(dragon_face, 600, 400);
        text('Now, please help me! We can work together', 120, 540);
        text('and find the cube of death. Then escape', 120, 565);
        text('this vile place once and for all.', 120, 590);
        text('click to continue', 810, 725);
    }

    if(current == 31){
        image(bg4_2, 0, -50);
        image(player, 150, 371);
        clickable = false;
        text('(a) help the poor sod', 320, 540);
        text('(b) Take the orb of life and run', 320, 610);
    }

    if(current == 32){
        scene = 4;
        current = 0;
        counter = 0;
        haunted_forest_bgm.stop();
    }

    if(current == 33){
        if(clickable){
            scene = 6;
            current = 0;
            counter = 0;
            haunted_forest_bgm.stop();
        }  else{
            image(bg4_2, 0, -50);
            image(player, 150, 371);
            text('Okay seriously, stop being such a wuss', 320, 540);
            text('you\'re seriously gonna just take that thing', 320, 565);
            text('and run?', 320, 590);
            text('press \'a\'', 810, 725);
        }
    }

    if(current == 34){
        current = 31;
    }
}

function thirdScene(){
    playHauntedForestBGM();

    if(current == 0){
        image(bg3, 0, -225);
        image(player, 200, 350);
        text('You arrived in a strange location in the forest. You notice strange', 120, 530);
        text('puss filled boils on the trees of the forest.', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 1){
        image(bg3, 0, -225);
        image(player, 200, 350);
        text('Suddenly, you hear a ruffling sound coming from the nearby bushes', 120, 530);
        text('and you see a figure slowly emerge from the shadows', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 2){
        image(bg3, 0, -225);
        image(shadow, 500, 150);
        image(player, 200, 350);
        text('...', 120, 530);
    }

    if(current == 3){
        image(bg3, 0, -225);
        image(player, 200, 350);
        image(shadow, 500, 150);
        image(player_face, 25, 425);
        text('Um... might you be so kind as to tell me who you-', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 4){
        image(bg3, 0, -225);
        image(player, 200, 350);
        image(shadow, 500, 150);
        text('Would you like for me to give you the cube of death?', 120, 530);
        text('Would you like for me to give you the cube of death?', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 5){
        image(bg3, 0, -225);
        image(player, 200, 350);
        image(shadow, 500, 150);
        image(player_face, 25, 425);
        text('Im not sure if that sounds like something I would want', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 6){
        image(bg3, 0, -225);
        image(shadow, 500, 150);
        image(player, 200, 350);
        text('...', 120, 530);
    }

    if(current == 7){
        image(bg3, 0, -225);
        image(player, 200, 350);
        image(shadow, 500, 150);
        text('Would you like for me to give you the cube of death?', 120, 530);
        text('Would you like for me to give you the cube of death?', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 8){
        image(bg3, 0, -225);
        image(player, 200, 350);
        image(shadow, 500, 150);
        image(player_face, 25, 425);
        text('Uh...', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 9){
        image(bg3, 0, -225);
        image(player, 200, 350);
        clickable = false;
        image(shadow, 500, 150);
        text('(a) Take the cube of death', 320, 540);
        text('(b) refuse offer', 320, 610);
        text('(c) turn the other way and run', 320, 685);
    }

    if(current == 10){
        image(bg3, 0, -225);
        image(player, 200, 350);
        clickable = false;
        text('When you decide to take the cube of death from the shadow your', 120, 530);
        text('soul ends up getting engulfed in the shadows of death.', 120, 555);
        text('You died.', 120, 605);
        text('press \'r\' to restart the game', 810, 725);
    }

    if(current == 11){
        scene = 5;
        current = 0;
        counter = 0;
        clickable = true;
        if(haunted_forest_bgm.isPlaying()){haunted_forest_bgm.stop();}
    }

    if(current == 12){
        image(fall, 250, 100);
        clickable = true;
        text('You turn around and begin to run towards the place you entered the', 120, 530);
        text('forest from. As you run, you end up taking the wrong step and end', 120, 555);
        text('up plummiting down a hole', 120, 580);
        text('click to continue', 810, 725);
    }

    if(current == 13){
        scene = 3;
        current = 0;
        counter = 0;
        if(haunted_forest_bgm.isPlaying()){haunted_forest_bgm.stop();}
    }
}

function secondScene(){
    image(bg2, 0, -100);
    playForestBGM();

    if(current == 0){
        text('Wha- what in the world? Where in the world am I now?', 120, 530);
        text('click to continue', 810, 725);
    }

    if(current == 1){
        text('You get transported to some random forest. You take', 120, 530);
        text('a moment to gather yourself when you realize', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 2){
        text('That you are not alone in this forest. You feel a', 120, 530);
        text('shiver trickle down your spine as you realize that you', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 3){
        text('are being watched', 120, 530);
        text('click to continue', 810, 725);
    }

    if(current == 4){
        clickable = false;
        text('This feeling of being watched comes further within the forest', 120, 530);
        textStyle(BOLDITALIC);
        text('(a) go further', 120, 600);
        text('(b) run away like a wuss', 120, 650);
        textStyle(NORMAL);
    }

    if(current == 5){
        clickable = true;
        text('You decided to go further inside the forest', 120, 530);
        text('click to continue', 810, 725);
    }

    if(current == 6){
        if(clickable){
            scene = 2;
            current = 0;
            counter = 0;
            forest_bgm.stop();
        }  else{
            text('Seriously?! you wanna run away?!?', 120, 530);
            text('Quit being such a wuss.', 120, 555);
            text('press \'a\'', 810, 725);
        }
    }

    if(current == 7){
        current = 4;
    }
}

function openingScene(){
    image(bg1, -100, -200);
    image(player, 500, 300);

    if(current == 0){
        image(player_face, 25, 425);
        text('What in the world? Where am I?', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 1){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('Yo wuz good! I’m Pierre, how ya feelin?', 250, 630);
        text('click to continue', 810, 725);
    }

    if(current == 2){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('Who? I don’t understand, I was outside going from', 320, 630);
        text('store to store trying to find some toilet paper and', 320, 655);
        text('then boom!!!! Next thing I remember is waking up in', 320, 680);
        text('this place.', 320, 705);
        text('click to continue', 810, 725);
    }

    if(current == 3){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('Yeah so… about that…', 250, 630);
        text('you see the thing is…', 250, 655);
        text('click to continue', 810, 725);
    }

    if(current == 4){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('your dead.', 250, 630);
        text('click to continue', 810, 725);
    }

    if(current == 5){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('WHAT?!?!! HOW!??! THIS DOESN’T MAKE SENSE', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 6){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('You were killed by a hitman…', 250, 630);
        text('click to continue', 810, 725);
    }

    if(current == 7){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('NANI??!?!?!?!', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 8){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('But the thing is, you weren’t the target.', 250, 630);
        text('The hitman was a new guy and it was his', 250, 655); 
        text('first time on the job and he mixed up his target.', 250, 680);
        text('click to continue', 810, 725);
    }

    if(current == 9){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('It’s not anything new it actually happens', 250, 630); 
        text('all the time.', 250, 655);
        text('click to continue', 810, 725);
    }

    if(current == 10){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('BRAAHHH!!!', 320, 630);
        playBruh();
        text('click to continue', 810, 725);
    }

    if(current == 11){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('Yeah... he thought you were a human', 250, 630);
        text('for some reason', 250, 655);
        counter = 0;
        text('click to continue', 810, 725);
    }

    if(current == 12){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('BRAAHHH!!!', 320, 630);
        playBruh();
        text('click to continue', 810, 725);
    }

    if(current == 13){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('Apparently, he forgot to put his glasses', 250, 630);
        text('on. He\'s near sighted.', 250, 655);
        counter = 0;
        text('click to continue', 810, 725);
    }

    if(current == 14){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('BRAAHHH!!!', 320, 630);
        playBruh();
        text('click to continue', 810, 725);
    }

    if(current == 15){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('But it\'s okay I, the deity of clowns, will', 250, 630);
        text('give you a second chance at life and I', 250, 655);
        text('will resurrect you.', 250, 680);
        counter = 0;
        text('click to continue', 810, 725);
    }

    if(current == 16){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('OMG!!! Thank you so much kami-sama!!', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 17){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('But, you\'ll have to beat this nonlinear', 250, 630);
        text('narrative game first.', 250, 655);
        text('click to continue', 810, 725);
    }

    if(current == 18){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('Only then will I resurrect you', 250, 630);
        text('click to continue', 810, 725);
    }

    if(current == 19){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('But that\'s not fair! It was the hitman\'s mistake!', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 20){
        image(pierre, 750, 200);
        image(pierre_face, 680, 250);
        text('Okay im gonna transfer you into the', 250, 630);
        text('game now. good luck~', 250, 655);
        text('click to continue', 810, 725);
    }

    if(current == 21){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('wait hol up', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 22){
        image(player_face, 25, 425);
        image(pierre, 750, 200);
        text('WOOOOOAAAAHHH', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 23){
        current = 0;
        scene = 1;
        counter = 0;
    }
}

function keyPressed(){
    if(key == 'a'){
        current += 1;
    }
    if(key == 'b'){
        current += 2;
    }
    if(key == 'c'){
        current += 3;
    }
    if(key == 'r'){
        clickable = true;
        current = 0;
        scene = 0;
        counter = 0;
        if(forest_bgm.isPlaying()){
            forest_bgm.stop();
        }
        if(haunted_forest_bgm.isPlaying()){
            haunted_forest_bgm.stop();
        }
        if(dragon_bgm.isPlaying()){
            dragon_bgm.stop();
        }
    }
}

function mouseClicked(){
    if(clickable){
        current += 1;
    }
}

function playHauntedForestBGM(){
    if(counter == 0){
        haunted_forest_bgm.play();
        counter++;
    }
}

function playHauntedForestBGM(){
    if(counter == 0){
        haunted_forest_bgm.play();
        counter++;
    }
}

function playForestBGM(){
    if(counter == 0){
        forest_bgm.play();
        counter++;
    }
}

function playDragonBGM(){
    if(counter == 0){
        dragon_bgm.play();
        counter++;
    }
}

function playBruh(){
    if(counter == 0){
        bruh_sfx.play();
        counter++;
    }
}
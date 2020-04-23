
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

// sound effects
let bruh_sfx;
let forest_bgm;
let haunted_forest_bgm;
let nani;
let counter = 0;

// images
let bg1;
let bg2;
let bg3;
let fall;

function preload(){
    // sound effect
    bruh_sfx = loadSound("../assets/bruh_sfx.mp3");
    forest_bgm = loadSound("../assets/forest_bgm.mp3");
    haunted_forest_bgm = loadSound("../assets/haunted_forest_bgm.mp3");
    nani = loadSound("../assets/nani.mp3");

    // player
    player = loadImage("../assets/slime.png");
    player_face = loadImage("../assets/slime_face.png");
    
    // pierre
    pierre = loadImage("../assets/pierre.gif");
    pierre_face = loadImage("../assets/pierre_face.png");

    //shadow
    shadow = loadImage("../assets/shadow.gif");

    // bg 1
    bg1 = loadImage("../assets/bg1.jpg");
    bg2 = loadImage("../assets/bg2.png");
    bg3 = loadImage("../assets/bg3.jpg");
    fall = loadImage("../assets/falling.gif");
}

function setup(){
    cnv = createCanvas(1000, 750);
    cnv.parent('myContainer');

    forest_bgm.setVolume(0.2);
    haunted_forest_bgm.setVolume(0.2);
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
}

function fourthScene(){
    
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
        text('Would you like for me to give you the cube of death? Would you like', 120, 530);
        text('for me to give you the cube of death?', 120, 555);
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
        image(player, 200, 350);
        image(shadow, 500, 150);
        text('Would you like for me to give you the cube of death? Would you like', 120, 530);
        text('for me to give you the cube of death?', 120, 555);
        text('click to continue', 810, 725);
    }

    if(current == 7){
        image(bg3, 0, -225);
        image(player, 200, 350);
        image(shadow, 500, 150);
        image(player_face, 25, 425);
        text('Uh...', 320, 630);
        text('click to continue', 810, 725);
    }

    if(current == 8){
        image(bg3, 0, -225);
        image(player, 200, 350);
        clickable = false;
        image(shadow, 500, 150);
        text('(a) Take the cube of death', 320, 540);
        text('(b) refuse offer', 320, 610);
        text('(c) turn the other way and run', 320, 685);
    }

    if(current == 9){
        image(bg3, 0, -225);
        image(player, 200, 350);
        text('When you decide to take cube of death from the shadow your soul ends', 120, 530);
        text('up getting engulfed in the shadows of death.', 120, 555);
        text('You died.', 120, 580);
        text('press \'r\' to restart the game', 810, 725);
    }

    if(current == 10){
        image(bg3, 0, -225);
        image(player, 200, 350);
        text('Without the cube of death your soul was forced to wander throughout the', 120, 530);
        text('forest for all of eternity. You tried to go back to find the shadow', 120, 555);
        text('to retrieve the cube of death but you never managed to find him ever again', 120, 580);
        text('press \'r\' to restart the game', 810, 725);
    }

    if(current == 11){
        image(fall, 250, 100);
        clickable = true;
        text('You turn around and begin to run towards the place you entered the', 120, 530);
        text('forest from. As you run, you end up taking the wrong step and end', 120, 555);
        text('up plummiting down a hole', 120, 580);
        text('click to continue', 810, 725);
    }

    if(current == 12){
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
        text('(b) run away like a coward', 120, 650);
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

function playBruh(){
    if(counter == 0){
        bruh_sfx.play();
        counter++;
    }
}

let cnv;
let clickable = true;

// variable stores which scene player is at
let scene = 0;
let current = 0;

// characters
let pierre;
let pierre_face;
let player;
let god_player;
let god_player_face;
let player_face;
let shadow;
let dragon;
let dragon_face;
let dragon_face_2;
let dragon_fly;

// sound effects
let bruh_sfx;
let forest_bgm;
let haunted_forest_bgm;
let dragon_bgm;
let callofsilence_bgm;
let counter = 0;

// images
let bg1;
let bg2;
let bg3;
let bg4;
let bg4_2;
let bg4_3;
let bg5;
let bg6;
let ending1bg;
let portal;
let dragon_breath;
let fall;
let warp;
let octopunch;
let yasakani;
let heat_blast;
let darkfog;

function preload(){
    // sound effect
    bruh_sfx = loadSound("../assets/bruh_sfx.mp3");
    forest_bgm = loadSound("../assets/forest_bgm.mp3");
    haunted_forest_bgm = loadSound("../assets/haunted_forest_bgm.mp3");
    dragon_bgm = loadSound("../assets/dragon_bgm.mp3");
    callofsilence_bgm = loadSound("../assets/callofsilence.mp3");

    // player
    player = loadImage("../assets/slime.png");
    player_face = loadImage("../assets/slime_face.png");
    god_player = loadImage("../assets/slime-2.png");
    god_player_face = loadImage("../assets/slime_face_2.png");
    
    // pierre
    pierre = loadImage("../assets/pierre.gif");
    pierre_face = loadImage("../assets/pierre_face.png");

    //shadow
    shadow = loadImage("../assets/shadow.gif");

    //dragon
    dragon = loadImage("../assets/dragon.png");
    dragon_face = loadImage("../assets/dragon_face.png");
    dragon_fly = loadImage("../assets/dragon_fly.png");
    dragon_face_2 = loadImage("../assets/dragon_face_2.png");

    // bg 1
    bg1 = loadImage("../assets/bg1.jpg");
    bg2 = loadImage("../assets/bg2.png");
    bg3 = loadImage("../assets/bg3.jpg");
    bg4 = loadImage("../assets/bg4.jpg");
    bg4_2 = loadImage("../assets/bg4-2.png");
    bg4_3 = loadImage("../assets/bg4-3.png");
    bg5 = loadImage("../assets/bg5.jpg");
    bg6 = loadImage("../assets/bg6.jpg");
    fall = loadImage("../assets/falling.gif");
    warp = loadImage("../assets/warp.gif");
    portal = loadImage("../assets/portal.gif");
    dragon_breath = loadImage("../assets/dragon_breath.gif");
    ending1bg = loadImage("../assets/ending_1.jpg");
    heat_blast = loadImage("../assets/heat_breath.gif");
    yasakani = loadImage("../assets/yasakani.gif");
    octopunch = loadImage("../assets/fist-enrage.gif");
    darkfog = loadImage("../assets/darkfog.gif");
}

function setup(){
    cnv = createCanvas(1000, 750);
    cnv.parent('myContainer');

    forest_bgm.setVolume(0.2);
    haunted_forest_bgm.setVolume(0.2);
    dragon_bgm.setVolume(0.2);
    callofsilence_bgm.setVolume(0.4);
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

    if ( scene == 6){
        ending2Scene();
    }

    if ( scene == 7 ){
        fightScene();
    }
    
}

function fightScene(){
    if(!callofsilence_bgm.isPlaying()){
        counter = 0;
        playCallofSilence();
    }

    if(current == 0){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('Good! That was a really good choice.', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 1){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('Now you must fight me for it', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 2){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(player_face, 25, 425);
        text('WHAT!?! I THOUGHT YOU SAID NO TRICKS', 320, 555);
        text('click to continue', 810, 725);
    }
    
    if(current == 3){
        image(bg1, -100, -200);
        image(player, 500, 300); //image(god_player, 420, 218);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('I mean tbh. You should know me by now.', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 4){
        text('And so you and the dragon fight against pierre. You guys', 230, 555);
        text('fought for three days and three nights with neither side', 230, 580);
        text('getting one over the other', 230, 605);
        text('click to continue', 810, 725);
    }

    if(current == 5){
        image(heat_blast, 150, -10);
        image(dragon_face_2, 0, 425);
        text('HEAT BREATH!', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 6){
        image(yasakani, 110, 100);
        image(pierre_face, 680, 250);
        text('YASAKANI NO MAGATAMA!', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 7){
        image(player_face, 25, 425);
        image(octopunch, 150, 200);
        text('OCTOPUNCH!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 8){
        image(player_face, 25, 425);
        text('wait how am I doing this?', 320, 555);
        text('I ain\'t got no arms', 320, 580);
        text('click to continue', 810, 725);
    }

    if(current == 9){
        image(yasakani, 110, 100);
        image(pierre_face, 680, 250);
        text('YASAKANI NO MAGATAMA!', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 10){
        image(dragon_face_2, 0, 425);
        text('DAMN! WE\'RE GONNA LOSE AT THIS RATE', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 11){
        image(player_face, 25, 425);
        text('Wait I have an idea! Distract him for me', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 12){
        image(dragon_face_2, 0, 425);
        text('OKAY I\'LL TRY MY BEST', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 13){
        image(darkfog, 250, 150);
        image(dragon_face_2, 0, 425);
        text('DARK FOG!', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 14){
        image(pierre_face, 680, 250);
        text('DAMN THE LIGHTNING BLINDED ME!', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 15){
        image(player_face, 25, 425);
        text('HERE GOES NOTHING', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 16){
        text('You threw the cube of death towards pierre.', 200, 555);
        text('It hit him square in the chest and the cube begins to', 200, 580);
        text('suck his vitality out of him', 200, 605);
        text('click to continue', 810, 725);
    }

    if(current == 17){
        image(pierre_face, 680, 250);
        text('AAAAAAAAAAAAAAAHHHHHHHHHHH!', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 18){
        image(pierre_face, 680, 250);
        text('DO YOU THINK THATS ENOUGH', 250, 555);
        text('TO STOP ME?!?', 250, 580);
        text('click to continue', 810, 725);
    }

    if(current == 19){
        image(player_face, 25, 425);
        text('NOW!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 20){
        image(heat_blast, 150, -10);
        image(dragon_face_2, 0, 425);
        text('HEAT BREATH!', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 21){
        image(player_face, 25, 425);
        image(octopunch, 150, 200);
        text('OCTOPUNCH!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 22){
        image(pierre_face, 680, 250);
        text('AAAAAAAAAAAAAAAHHHHHHHHHHH!', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 23){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(dragon, -75, 40);
        text('click to continue', 810, 725);
    }

    if(current == 24){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(dragon, -75, 40);
        image(dragon_face_2, 0, 425);
        text('Is it done? Is it finally over?', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 25){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(dragon, -75, 40);
        image(player_face, 25, 425);
        text('Yeah, I think so. He\'s finally been defeated', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 26){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(dragon, -75, 40);
        text('Suddenly, you feel a strange power start to swell inside you', 200, 555);
        text('click to continue', 810, 725);
    }

    if(current == 27){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(dragon, -75, 40);
        image(player_face, 25, 425);
        text('UGH!!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 28){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(dragon, -75, 40);
        image(dragon_face_2, 0, 425);
        text('Whats wrong? You good?', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 29){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(dragon, -75, 40);
        image(player_face, 25, 425);
        text('AAAAAAAAAAAAHHHHHH!!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 30){
        image(player_face, 25, 425);
        text('AAAAAAAAAAAAAAAAAAAAAAAAAAAHHHHHH!!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 31){
        text('click to continue', 810, 725);
    }

    if(current == 32){
        image(bg1, -100, -200);
        image(god_player, 500, 265);
        image(dragon, -75, 40);
        text('click to continue', 810, 725);
    }

    if(current == 33){
        image(bg1, -100, -200);
        image(god_player, 500, 265);
        image(dragon, -75, 40);
        image(dragon_face_2, 0, 425);
        text('Woah, what happened?', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 34){
        image(bg1, -100, -200);
        image(god_player, 500, 265);
        image(dragon, -75, 40);
        image(god_player_face, -10, 360);
        text('I think I just ascended into a god', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 35){
        image(bg1, -100, -200);
        image(god_player, 500, 265);
        image(dragon, -75, 40);
        image(dragon_face_2, 0, 425);
        text('SWEEEEEEEEETTTTT', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 36){
        image(bg1, -100, -200);
        image(god_player, 500, 265);
        image(dragon, -75, 40);
        text('And so, you and the dragon ruled over this world as', 200, 555);
        text('all-powerful gods.', 200, 580);
        text('click to continue', 810, 725);
    }

    if(current == 37){
        clickable = false;
        text('Congratz. You beat the game and become a god.', 200, 555);
        text('Thanks so much for playing. Try playing again', 200, 580);
        text('with different choices and unlock different endings.', 200, 605);
        text('press \'r\' to restart', 810, 725);
    }
}

function ending2Scene(){
    if(!callofsilence_bgm.isPlaying()){
        counter = 0;
        playCallofSilence();
    }

    if(current == 0){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        text('There lies before them the being who started it all', 250, 555);
        text('Pierre', 250, 605);
    }

    if(current == 1){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('Well well well, props to you two', 250, 555);
        text('for figuring out how to get out', 250, 580);
        text('click to continue', 810, 725);
    }

    if(current == 2){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(player_face, 25, 425);
        text('We\'ve had enough of your bull shyt!', 320, 555);
        text('We want to get outta here! RIGHT NOW!', 320, 580);
        text('click to continue', 810, 725);
    }

    if(current == 3){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('Come now, hold your horses. You guys', 250, 555);
        text('are actually the first people to figure', 250, 580);
        text('out how to get out.', 250, 605);
        text('click to continue', 810, 725);
    }

    if(current == 4){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('That being said, I have a proposition', 250, 555);
        text('for you guys. If you prove yourselves', 250, 580);
        text('worthy I\'ll allow you two to rule over', 250, 605);
        text('this world as gods.', 250, 630);
        text('click to continue', 810, 725);
    }

    if(current == 5){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('Whadya say? Sound fun right?', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 6){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(dragon_face_2, 0, 425);
        text('Do not be fooled by his trickery!', 415, 555);
        text('click to continue', 810, 725);
    }

    if(current == 7){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('No tricks, no gimmicks.', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 8){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        text('Whadya say?', 250, 555);
        text('click to continue', 810, 725);
    }

    if(current == 9){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        clickable = false;
        text('(a) choose to live like gods', 320, 555);
        text('(b) choose to be resurrected', 320, 635);
    }

    if(current == 10){
        current = 0;
        scene = 7;
        clickable = true;
    }

    if(current == 11){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        image(pierre_face, 680, 250);
        clickable = true;
        text('Seriously?!? Alright fine', 250, 555);
        text('go the sucky route.', 250, 580);
        text('click to continue', 810, 725);
    }

    if(current == 12){
        image(bg1, -100, -200);
        image(player, 500, 300);
        image(pierre, 750, 200);
        image(dragon, -75, 40);
        text('Your soul and the dragon\'s soul dissipate. It', 250, 555);
        text('doesn\'t feel bad at all, rather it feels calm.', 250, 580);
        text('The next thing you hear is the crying of a baby.', 250, 605);
        text('You have been reborn.', 250, 630);
        text('click to continue', 810, 725);
    }

    if(current == 13){
        clickable = false
        text('Congratulations for finishing the game. You\'ve been', 250, 555);
        text('reborn and will get a chance to live a new life.', 250, 580);
        text('I can\'t believe you actually didn\'t choose to become', 250, 605);
        text('a god. But to each his own... wuss', 250, 630);
        text('press \'r\' to restart', 810, 725);
    }
}

function fifthScene(){
    
    if(current == 0){
        playDragonBGM();
        text('You help out the dragon and release it from its seal.', 120, 530);
        text('He streches his wings out immediately letting out a huge', 120, 555);
        text('roar!', 120, 580);
        text('click to continue', 810, 725);
    }

    if(current == 1){
        image(bg4_3, 0, -50);
        image(player, 200, 371);
        image(dragon_face, 600, 400);
        text('Thank you so much for freeing me', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 2){
        image(bg4_3, 0, -50);
        image(player, 200, 371);
        image(dragon_face, 600, 400);
        text('Now lets get out of here', 120, 540);
        text('click to continue', 810, 725);
    }

    if(current == 3){
        text('You jump on his head and he grabs the orb of life. After grabbing', 120, 540);
        text('the orb of life it seems that the orb of life increased his vitality.', 120, 565);
        text('click to continue', 810, 725);
    }

    if(current == 4){
        image(dragon_face, 600, 400);
        text('This thing is incredible! Simply holding it is', 120, 540);
        text('giving me a power up. Sort of like mario\'s', 120, 565);
        text('mushroom.', 120, 590);
        text('click to continue', 810, 725);
    }

    if(current == 5){
        image(dragon_fly, 50, 0);
        image(player, 460, 350);
        text('click to continue', 810, 725);
    }

    if(current == 6){
        text('The dragon flys up through the hole which you fell through.', 120, 540);
        text('Very quickly you see a bright light at the top of the hole', 120, 565);
        text('click to continue', 810, 725);
    }

    if(current == 7){
        text('You fly straight out of the hole and you have to cover your', 120, 540);
        text('eyes from the glare. You slowly open your eyes and you see', 120, 565);
        text('click to continue', 810, 725);
    }

    if(current == 8){
        image(bg5, 0, -80);
        image(player_face, 25, 425);
        if(dragon_bgm.isPlaying()){
            dragon_bgm.stop(); counter = 0;
            playCallofSilence();
        } else {playCallofSilence();}
        text('OMG!! This view is amazing!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 9){
        image(bg5, 0, -80);
        text('You look below and you see an amazing view of the world', 120, 540);
        text('You see a desert on your left and to the far right you see the forest', 120, 565);
        text('click to continue', 810, 725);
    }

    if(current == 10){
        image(bg5, 0, -80);
        text('The dragon then procceds to fly towards the forest and tells you to', 120, 540);
        text('keep an eye out for the shadow monster.', 120, 565);
        text('click to continue', 810, 725);
    }

    if(current == 11){
        image(bg6, 0, -80);
        text('As the dragon flys over the forest you scan the area looking for the shadow', 120, 550);
        text('monster. Both of you searched for hours until you managed to catch a', 120, 575);
        text('glimpse of the the shadow\'s flicker from the corner of your eye.', 120, 600);
        text('click to continue', 810, 725);
    }

    if(current == 12){
        image(bg6, 0, -80);
        image(player_face, 25, 425);
        text('LOOK!! He\'s over there!', 320, 555);
        text('click to continue', 810, 725);
    }

    if(current == 13){
        image(bg6, 0, -80);
        text('The dragon lets out a huge roar and attacks the shadow monster.', 120, 550);
        text('click to continue', 810, 725);
    }

    if(current == 14){
        image(bg6, 0, -80);
        image(dragon_face, 600, 400);
        text('HEAT BREATH!!', 120, 600);
        text('click to continue', 810, 725);
    }

    if(current == 15){
        image(bg6, 0, -80);
        text('The dragon releases a huge heat breath immediately incenerating the shadow', 120, 550);
        text('monster as well as the surrounding area.', 120, 575);
        text('click to continue', 810, 725);
    }

    if(current == 16){
        image(bg6, 0, -80);
        text('The dragon then grabs the cube of death into its other hand', 120, 550);
        text('click to continue', 810, 725);
    }

    if(current == 17){
        image(bg6, 0, -80);
        image(dragon_face, 600, 400);
        text('AAAAAAHHHH!!!! WHAT IS THIS THING!!??!', 120, 550);
        text('THIS ACCURSED CUBE IS OBSORBING', 120, 575);
        text('MY VITALITY!!', 120, 600);
        text('click to continue', 810, 725);
    }

    if(current == 18){
        image(bg6, 0, -80);
        image(dragon_face, 600, 400);
        text('If it wasn\'t for the cube of life restoring', 120, 550);
        text('my vitality. Id\'ve been a goner.', 120, 575);
        text('click to continue', 810, 725);
    }

    if(current == 19){
        image(bg6, 0, -80);
        image(dragon_face, 600, 400);
        text('Okay now lets merge them togther and create the', 120, 550);
        text('portal!! PIERRE!!! I\'M COMING FOR YOU', 120, 575);
        text('click to continue', 810, 725);
    }

    if(current == 20){
        image(bg6, 0, -80);
        text('The dragon smacks the cube of death and the orb of life', 120, 550);
        text('into each other. A huge explosion occurs and a portal', 120, 575);
        text('tears open at the merging of the cube and the orb', 120, 600);
        text('click to continue', 810, 725);
    }

    if(current == 21){
        image(dragon_face, 600, 400);
        image(portal, 390, 150);
        text('Look! The portal is open! Quickly!!', 120, 550);
        text('Lets traverse through it', 120, 575);
        text('click to continue', 810, 725);
    }

    if(current == 22){
        image(warp, 200, 150);
        text('They traversed through the portal and on the other side', 120, 550);
        text('they found themselves at the start. Where it all began.', 120, 575);
        text('click to continue', 810, 725);
    }

    if(current == 23){
        current = 0;
        scene = 6;
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
        text('But as soon as I found the orb of life I', 120, 540);
        text('immediately got trapped in this ice.', 120, 565);
        text('I\'ve been gaurding this place ever since.', 120, 590);
        text('That\'s actually the reason why I attacked you.', 120, 615);
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
        clickable = true;
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
        text('soul ends up getting engulfed in the cube of death.', 120, 555);
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
        image(fall, 270, 100);
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

function playCallofSilence(){
    if(counter == 0){
        callofsilence_bgm.play();
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
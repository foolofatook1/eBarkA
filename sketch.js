var Font;
//make profile rect
var rectX;
var rectY;
var rectL;
var rectH;
//make profile counter
var makeProfile;
//make profile picture
var makePic;
//choose profile picture
var picX;
var picY;
var picL;
var picH;
//background for start page
var startPage;
//background for profile page
var profilePage;
//*images for corgi*\\
var corgi1, corgi2, corgi3, corgi4;
//*images for ibizan*\\
//brown
var iEar1B, iEar2B, iEar3B, iEar4B;
//grey
var iEar1G, iEar2G, iEar3G, iEar4G;
//musstard
var iEar1M, iEar2M, iEar3M, iEar4M;
//white
var iEar1W, iEar2W, iEar3W, iEar4W;
//*images for shepherd*\\
//brown
var sEye1B, sEye2B, sEye3B, sEye4B;
//black
var sEye1BL, sEye2BL, sEye3BL, sEye4BL;
//gray
var sEye1G, sEye2G, sEye3G, sEye4G;
//white
var sEye1W, sEye2W, sEye3W, sEye4W;
//*pug*\\
var pug1, pug2, pug3, pug4, pug5, pug6, pug7, pug8;
//likes
var rain, sleep, milk, squir, steak, tulip
    //dislikes
var bath, choc, pepper, yell, spider, thunder
    //status input
var input, button;
//dog position
var dogx, dogy;
//profile pages\\
var corgi1_p, corgi2_p, corgi3_p, corgi4_p, ibizan1_p, ibizan2_p, ibizan3_p, ibizan4_p, pug1_p, pug2_p, pug3_p, pug4_p, shep1_p, shep2_p, shep3_p, shep4_p;
//integer for choosing different avatar\\
var corgi1_s, corgi2_s, corgi3_s, corgi4_s, ibizan1_s, ibizan2_s, ibizan3_s, ibizan4_s, pug1_s, pug2_s, pug3_s, pug4_s, shep1_s, shep2_s, shep3_s, shep4_s;
//goes to the next question in chat
var nextQ, nextQc, nextQs, nextQb, nextQd, nextQm;
//points for each dog date
var miloPoints, chouChouPoints, soupPoints, baguettePoints, demitriPoints, maxPoints;
//page change increments for the different dogs
var miloP, chouchouP, souP, baguetteP, demitriP, maxP;
//score array
var scores;
//switches to pong
var pong_s;
///PONG VARIABLES\\\
var paddle_x, paddle_y;
var paddle_w, paddle_h;
var paddle_step;
var paddle_step_y;
var paddle2_y;
var paddle3_x, paddle3_y;
var paddle3_w, paddle3_h;
var paddle4_x;
var ball_x, ball_y;
var ball_r;
var ball_x_step, ball_y_step;
var x;
var y;
/////////preload/////////
function preload() {
    //font
    Font = loadFont('assets/coders_crux.ttf');
    //welcome page
    startPage = loadAnimation('assets/textures/webPage/startPage.png');
    //profile page
    profilePage = loadAnimation('assets/textures/webPage/profilePage.png');
    //dog avatar sprites
    //*corgi*\\
    corgi1 = loadAnimation('assets/textures/dogSprites/corgi_1.gif');
    corgi2 = loadAnimation('assets/textures/dogSprites/corgi_2.gif');
    corgi3 = loadAnimation('assets/textures/dogSprites/corgi_3.gif');
    corgi4 = loadAnimation('assets/textures/dogSprites/corgi_4.gif');
    //*ibizan*\\
    //brown
    iEar2B = loadAnimation('assets/textures/dogSprites/ibizan_ear2_brown.gif');
    //grey
    iEar3G = loadAnimation('assets/textures/dogSprites/ibizan_ear3_grey.gif');
    //mustard
    iEar4M = loadAnimation('assets/textures/dogSprites/ibizan_ear4_mustard.gif');
    //white
    iEar1W = loadAnimation('assets/textures/dogSprites/ibizan_ear1_white.gif');
    //*shepherd*\\
    //brown
    sEye1B = loadAnimation('assets/textures/dogSprites/shep_eye1B.png');
    //black
    sEye1BL = loadAnimation('assets/textures/dogSprites/shep_eye1BL.png');
    //gray
    sEye3G = loadAnimation('assets/textures/dogSprites/shep_eye3G.png');
    //white
    sEye2W = loadAnimation('assets/textures/dogSprites/shep_eye2W.png');
    //*pug*\\
    pug1 = loadImage('assets/textures/dogSprites/pug1.png');
    pug2 = loadImage('assets/textures/dogSprites/pug2.png');
    pug6 = loadImage('assets/textures/dogSprites/pug6.png');
    pug7 = loadImage('assets/textures/dogSprites/pug7.png');
    //loading the profile pages\\
    corgi1_p = loadImage('assets/textures/avatars/corgi_1.png');
    corgi2_p = loadImage('assets/textures/avatars/corgi_2.png');
    corgi3_p = loadImage('assets/textures/avatars/corgi_3.png');
    corgi4_p = loadImage('assets/textures/avatars/corgi_4.png');
    ibizan1_p = loadImage('assets/textures/avatars/ibizan_1.png');
    ibizan2_p = loadImage('assets/textures/avatars/ibizan_2.png');
    ibizan3_p = loadImage('assets/textures/avatars/ibizan_3.png');
    ibizan4_p = loadImage('assets/textures/avatars/ibizan_4.png');
    pug1_p = loadImage('assets/textures/avatars/pug_1.png');
    pug2_p = loadImage('assets/textures/avatars/pug_2.png');
    pug3_p = loadImage('assets/textures/avatars/pug_3.png');
    pug4_p = loadImage('assets/textures/avatars/pug_4.png');
    shep1_p = loadImage('assets/textures/avatars/shepard_3.png');
    shep2_p = loadImage('assets/textures/avatars/shepard_1.png');
    shep3_p = loadImage('assets/textures/avatars/shepard_4.png');
    shep4_p = loadImage('assets/textures/avatars/shepard_2.png');
    //loading the dogs you can date\\
    //datedog1 profile
    date1 = loadImage('assets/textures/dateProfiles/profile_1.png');
    //datedog1 Sprite
    date1s = loadImage('assets/textures/dateSprites/date_dog_1.gif');
    //poodle profile
    date2 = loadImage('assets/textures/dateProfiles/profile_2.png');
    //poodle sprite
    date2s = loadImage('assets/textures/dateSprites/poodle.gif');
    //chihuahua profile
    date3 = loadImage('assets/textures/dateProfiles/profile_3.png');
    //chihuahua sprite
    date3s = loadImage('assets/textures/dateSprites/chihuaha.gif');
    //shiba inu profile
    date4 = loadImage('assets/textures/dateProfiles/profile_4.png');
    //shiba inu sprite
    date4s = loadImage('assets/textures/dateSprites/shiba_inu_1.gif');
    //maltese profile
    date5 = loadImage('assets/textures/dateProfiles/profile_5.png');
    //maltese sprite
    date5s = loadImage('assets/textures/dateSprites/maltese_1.gif');
    //creepy dude profile
    date6 = loadImage('assets/textures/dateProfiles/profile_6.png');
    //creepy dude sprite
    date6s = loadImage('assets/textures/dateSprites/creepy_dude_1.png');
    //PONG PRELOAD\\
    dog1 = loadImage("p5-dog/assets/date_dog.gif");
    dog2 = loadImage("p5-dog/assets/pd_player.gif");
    frisbee = loadImage("p5-dog/assets/frisb.gif");
    park = loadImage("p5-dog/assets/park.jpg");
    crying = loadAnimation("assets/textures/crying_corgi/crying_corgi_4.png");
    love = loadImage("assets/textures/winScreen.gif");
    loser = loadImage("assets/Loser-Red-Stamp-Picture.jpg");
}

function setup() {
    createCanvas(800, 800);
    background(180);
    //makeprofile box
    rectX = 305;
    rectY = 430;
    rectL = 190;
    rectH = 50;
    //profile picture box
    picX = 40;
    picY = 40;
    picL = 270;
    picH = 295;
    //dog position
    dogx = 250;
    dogy = 250;
    //status input
    //input = createInput();
    //input.position(414, 83);
    //input.size(396, 256);
    //counter that changes to profile choice page
    makeProfile = 0;
    //sets profile image
    profileSet = 0;
    //integer for navigating website\\
    corgi1_s = 0;
    //moves to next question for milo
    nextQ = 0;
    //moves to the next question for chou chou
    nextQc = 0;
    //moves to the next question for soup
    nextQs = 0;
    //moves to the next question for baguette
    nextQb = 0;
    //moves to the next question for demitri
    nextQd = 0;
    //moves to the next question for max
    nextQm = 0;
    //points for each dog date
    miloPoints = 0;
    chouChouPoints = 0;
    soupPoints = 0;
    baguettePoints = 0;
    demitriPoints = 0;
    maxPoints = 0;
    //scores array
    scores = [miloPoints, chouChouPoints, soupPoints, baguettePoints, demitriPoints, maxPoints];
    //increments of page change
    miloP = 100;
    chouchouP = 1000;
    souP = 10000;
    baguetteP = 100000;
    demitriP = 1000000;
    maxP = 10000000;
    //pong switch
    pong_s = 0;
    //PONG VARIABLES\\
    paddle_h = 64;
    paddle_w = 64;
    paddle_x = width / 2;
    paddle_y = height - paddle_h;
    paddle2_y = 32;
    paddle_step = 0;
    ball_r = 13;
    x = 0;
    y = 3;
    reset();
}

function draw() {
    welcomePage();
    if (makeProfile >= 1) {
        chooseProfile();
    }
    if (corgi1_s >= 1) {
        corgi1Profile();
        if (corgi1_s == 0) {
            chooseProfile();
        }
        if (corgi1_s >= 5) {
            corgi1Chosen();
        }
        //options for dogdate1, milo
        if (corgi1_s >= miloP) {
            dogdate1Page();
        }
        if (corgi1_s >= miloP + 200) {
            dogdate1Chat();
        }
        //options for dogdate2, chou chou
        if (corgi1_s >= chouchouP) {
            dogdate2Page();
        }
        if (corgi1_s >= chouchouP + 20) {
            dogdate2Chat();
        }
        //options for dogdate2, soup
        if (corgi1_s >= souP) {
            dogdate3Page();
        }
        if (corgi1_s >= souP + 20) {
            dogdate3Chat();
        }
        if (corgi1_s >= baguetteP) {
            dogdate4Page();
        }
        if (corgi1_s >= baguetteP + 20) {
            dogdate4Chat();
        }
        if (corgi1_s >= demitriP) {
            dogdate5Page();
        }
        if (corgi1_s >= demitriP + 20) {
            dogdate5Chat();
        }
        if (corgi1_s >= maxP) {
            dogdate6Page();
        }
        if (corgi1_s >= maxP + 20) {
            dogdate6Chat();
        }
    } //PONGSWITCH\\
    if (pong_s >= 1) {
        image(park, 0, 0, 800, 800);
        textSize(32);
        textFont("monospace");
        stroke(0);
        strokeWeight(4);
        fill(255);
        //score
        text("Score:", 25, 25);
        text(x, 150, 25);
        //lives
        text("Lives:", 350, 25);
        text(y, 475, 25);
        if (y <= 0) {
            y = 3;
            x = 0;
        }
        // move paddles on X axis
        //paddle_x += (mouseX - paddle_x) * .1;
        paddle_x = paddle_x + paddle_step;
        // hitting paddle1?
        if (ball_y + ball_r > paddle_y) {
            if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
                ball_y_step = -ball_y_step;
                ball_y = paddle_y - ball_r;
                x = x + 1;
                if (x % 5 == 0) {
                    y = y + 1;
                }
            }
            else if (ball_y + ball_r > paddle_y) {
                y = y - 1;
                reset();
            }
        }
        // is the ball hitting the right or left wall?
        if (ball_x - ball_r < 0 || ball_x + ball_r > width) {
            ball_x_step = -ball_x_step;
        }
        // hitting paddle2?
        if (ball_y + ball_r < paddle2_y + paddle_h + ball_r) {
            if (ball_x >= paddle_x && ball_x <= paddle_x + paddle_w) {
                ball_y_step = random(1, 3);
                ball_y = paddle2_y + paddle_h + ball_r;
                x = x + 1;
                if (x % 5 == 0) {
                    y = y + 1;
                }
            }
            else if (ball_y + ball_r < paddle2_y + paddle_h) {
                y = y - 1
                reset();
            }
        }
        // move ball by ball_x_step and ball_y_step
        ball_x = ball_x + ball_x_step;
        ball_y = ball_y + ball_y_step;
        //draw ball
        noStroke();
        fill(196, 0, 0);
        image(frisbee, ball_x, ball_y, ball_r * 2, ball_r * 2);
        // draw paddle
        stroke(24);
        fill(64);
        image(dog1, paddle_x, paddle_y, paddle_w, paddle_h);
        //draw paddle2
        stroke(24);
        fill(64);
        image(dog2, paddle_x, paddle2_y, paddle_w, paddle_h);
        //win condition\\
        if (x >= 5) {
            image(love, 200, 400, 400, 200);
            alert("Congratulations! You find love!");
            noLoop();
        }
        //lose condition\\
        if (y <= 0) {
            image(loser, 0, 0, 800, 800);
            animation(crying, 200, 400, 400, 200);
            text("You lose the game, please refresh the webpage to restart");
            noLoop();
        }
    }
}

function welcomePage() {
    animation(startPage, 400, 400);
    fill(100);
    rect(rectX, rectY, rectL, rectH);
    fill(255, 0, 220);
    textFont(Font, 60);
    textAlign(CENTER);
    text('WELCOME TO eBARK!', 400, 400);
    textFont(Font, 30);
    text('<3 FIND LOVE <3', 400, 460);
    if (mouseIsPressed && mouseX >= rectX && mouseX <= rectX + rectL && mouseY >= rectY && mouseY <= rectY + rectH) {
        makeProfile += 1;
    }
}

function chooseProfile() {
    //background
    animation(startPage, 400, 400);
    //corgi\\
    animation(corgi1, dogx, dogy);
    if (mouseIsPressed && mouseX >= dogx - 50 && mouseX <= dogx + 30 && mouseY >= dogy - 50 && mouseY <= dogy + 20) {
        corgi1_s++;
    }
    textAlign(LEFT);
    textSize(50);
    fill(5, 255, 34);
    //high score
    text('Go on a date with your High Score: ', 10, 450);
    scores = [miloPoints, chouChouPoints, soupPoints, baguettePoints, demitriPoints, maxPoints];
    text(highScore(scores), 675, 450);
    //header
    text('Date Scores: ', 10, 500);
    //milo chart
    text('Milo: ', 10, 525);
    text(miloPoints, 115, 525);
    //chouchou chart
    text('Chou Chou: ', 10, 550);
    text(chouChouPoints, 200, 550);
    //soup chart
    text('Soup: ', 10, 575);
    text(soupPoints, 115, 575);
    //baguette chart
    text('Baguette: ', 10, 600);
    text(baguettePoints, 190, 600);
    //demitri chart
    text('Demitri: ', 10, 625);
    text(demitriPoints, 170, 625);
    //max chart
    text('Max: ', 10, 650);
    text(maxPoints, 90, 650);
    //to play pong
    text('Press space to go on', 400, 500);
    text('a date in the park!', 400, 530);
    //click to see profile
    text('Click on your avatar to see your profile!', 10, 720);
}

function corgi1Profile() {
    image(corgi1_p, 0, 0, 800, 800);
    fill(180);
    rect(650, 776, 125, 100);
    rect(525, 776, 124, 100);
    if (mouseIsPressed && mouseX >= 650 && mouseX <= 775 && mouseY >= 776) {
        corgi1_s--;
    }
    if (mouseIsPressed && mouseX >= 525 && mouseX <= 649 && mouseY >= 776) {
        corgi1_s += 5;
    }
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('choose', 585, 800);
    text('return', 715, 800);
}
//after having chosen an avatar\\
function corgi1Chosen() {
    background(180);
    //top bar\\
    fill(100);
    rect(0, 0, 799, 50);
    //home button\\
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('home', 750, 40);
    line(705, 0, 705, 50);
    //profile button\\
    text('Jean-Pierre Claude III', 495, 40);
    line(285, 0, 285, 50);
    if (mouseIsPressed && mouseX >= 285 && mouseX <= 700 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= 5;
    }
    //header\\
    text('Here are your matches!', 400, 100);
    //matches\\
    //datedog1
    image(date1s, 10, 250, 200, 200);
    if (mouseIsPressed && mouseX >= 10 && mouseX <= 200 && mouseY >= 250 && mouseY <= 445) {
        corgi1_s += miloP;
    }
    //poodle
    image(date2s, 250, 250, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 440 && mouseY >= 250 && mouseY <= 445) {
        corgi1_s += chouchouP;
    }
    //chihuaha
    image(date3s, 500, 250, 200, 200);
    if (mouseIsPressed && mouseX >= 600 && mouseX <= 700 && mouseY >= 250 && mouseY <= 445) {
        corgi1_s += souP;
    }
    //shiba inu
    image(date4s, 10, 500, 200, 200);
    if (mouseIsPressed && mouseX >= 10 && mouseX <= 200 && mouseY >= 450 && mouseY <= 800) {
        corgi1_s += baguetteP;
    }
    //maltese
    image(date5s, 250, 500, 200, 200);
    if (mouseIsPressed && mouseX >= 200 && mouseX <= 440 && mouseY >= 450 && mouseY <= 800) {
        corgi1_s += demitriP;
    }
    //creepy dude
    image(date6s, 500, 500, 200, 200);
    if (mouseIsPressed && mouseX >= 600 && mouseX <= 700 && mouseY >= 450 && mouseY <= 800) {
        corgi1_s += maxP;
    }
}
//dogdate1's profile page
function dogdate1Page() {
    image(date1, 0, 0, 800, 800);
    //text
    textSize(35);
    text('you have a message from Milo!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= miloP;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800) {
        corgi1_s += 200;
    }
}
//if you click on chat for dogdate1
function dogdate1Chat() {
    background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Milo!', 150, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= corgi1_s;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
        nextQb -= nextQb;
        nextQd -= nextQd;
        nextQm -= nextQm;
    }
    //chat points
    textAlign(RIGHT);
    text(miloPoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Hi! Im Milo!', 10, 100);
    text('Whats your ideal first date?', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type a, b, c or d:', 790, 160);
    text('a) a car ride', 790, 190);
    text('b) long walk in the park', 790, 220);
    text('c) butt sniffing', 790, 250);
    text('d) squirrel hunts', 790, 280);
    //when key is pressed
    if (nextQ >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('Cool! Whats your favorite... food?', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('a) milk', 790, 340);
        text('b) biscuits', 790, 370);
        text('c) steak', 790, 400);
        text('d) peanut butter', 790, 430);
        if (nextQ >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('Yumma! Whats your political affiliation?', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('a) Green Grass Party', 790, 490);
            text('b) No-Leash Party', 790, 520);
            text('c) Democatic Party', 790, 550);
            text('d) Working Dogs Party', 790, 580);
            if (nextQ >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('Great talking to you, Jean-Pierre III!', 10, 620);
                text('Maybe we should hang out some time? ;p', 10, 650);
            }
        }
    }
}
//chou chou's profile page
function dogdate2Page() {
    image(date2, 0, 0, 800, 800);
    //text
    textSize(35);
    fill(255, 0, 220);
    text('you have a message from Chou Chou!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= chouchouP;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800) {
        corgi1_s += 20;
    }
}
//chou chou's chat
function dogdate2Chat() {
    background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Chou Chou!', 200, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= corgi1_s;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
        nextQb -= nextQb;
        nextQd -= nextQd;
        nextQm -= nextQm;
    }
    //chat points
    textAlign(RIGHT);
    text(chouChouPoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Hi! Im Chou Chou!', 10, 100);
    text('Whats your favorite activity?', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type e, f, g, or h:', 790, 160);
    text('e) baths', 790, 190);
    text('f) playing in the rain', 790, 220);
    text('g) sleeping', 790, 250);
    text('h) getting treats', 790, 280);
    //when key is pressed
    if (nextQc >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('Oh wow! Whats your current occupation?', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('e) Full-time dog... it can be a lot of work', 790, 340);
        text('f) Squirrel-rights activist... non-profit', 790, 370);
        text('g) Seeing-eye dog', 790, 400);
        text('h) Unemployed', 790, 430);
        if (nextQc >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('Jeez! Do you have a favorite movie?', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('e) Reservoir Dogs', 790, 490);
            text('f) Count Barkula', 790, 520);
            text('g) How to Lose a Dog in 10 Days', 790, 550);
            text('h) Purple Noon', 790, 580);
            if (nextQc >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('Great talking to you, Jean-Pierre III!', 10, 620);
                text('We should get together sometime... perhaps.', 10, 650);
            }
        }
    }
}
//soup's profile page
function dogdate3Page() {
    image(date3, 0, 0, 800, 800);
    //text
    textSize(35);
    fill(255, 0, 220);
    text('you have a message from Soup!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= souP;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800) {
        corgi1_s += 20;
    }
}
//soup's chat
function dogdate3Chat() {
    background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Soup!', 200, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= corgi1_s;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
        nextQb -= nextQb;
        nextQd -= nextQd;
        nextQm -= nextQm;
    }
    //chat points
    textAlign(RIGHT);
    text(soupPoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Hi! Im Soup!', 10, 100);
    text('Whats your favorite activity?', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type i, j, k, or l:', 790, 160);
    text('i) baths', 790, 190);
    text('j) playing in garden', 790, 220);
    text('k) napping', 790, 250);
    text('l) drinking milk', 790, 280);
    //when key is pressed
    if (nextQs >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('Oh wow! What is your favourist state in the US?', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('i) California', 790, 340);
        text('j) My home', 790, 370);
        text('k) Swimming in the sea', 790, 400);
        text('l) None of your business', 790, 430);
        if (nextQs >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('Hey, do you have your favourite TV show?', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('i) Arrow?', 790, 490);
            text('j) I love all soap show', 790, 520);
            text('k) I never watch TV show baby', 790, 550);
            text('l) Sorry, i forgot its name', 790, 580);
            if (nextQs >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('Great talking to you, Jean-Pierre III!', 10, 620);
                text('We should hang out next time！.... really enjoy being with you!', 10, 650);
            }
        }
    }
}
//baguette
function dogdate4Page() {
    image(date4, 0, 0, 800, 800);
    //text
    textSize(35);
    fill(255, 0, 220);
    text('you have a message from Baguette!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= 30;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800) {
        corgi1_s += 20;
    }
}
//Baguette's chat
function dogdate4Chat() {
    background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Baguette!', 200, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= corgi1_s;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
        nextQb -= nextQb;
        nextQd -= nextQd;
        nextQm -= nextQm;
    }
    //chat points
    textAlign(RIGHT);
    text(baguettePoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Hi! Im Baguette!', 10, 100);
    text('What type of coffee you like most?', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type m, n, o, or p:', 790, 160);
    text('m) Caffe Latte', 790, 190);
    text('n) Caffe Mocha', 790, 220);
    text('o) Coconutmilk Mocha Macciato', 790, 250);
    text('p) Water', 790, 280);
    //when key is pressed
    if (nextQb >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('Well, so do you like Frappuccino?', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('m) I never drink iced thing', 790, 340);
        text('n) Of course, i love Unicorn most!', 790, 370);
        text('o) Yeah, Green Tea cream Frappuccino', 790, 400);
        text('p) The Pokemon Go Frappuccino', 790, 430);
        if (nextQb >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('Do you like Trump?', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('m) Who is he?', 790, 490);
            text('n) Very Much!', 790, 520);
            text('o) Of course not', 790, 550);
            text('p) Can i refuse to answer this question?', 790, 580);
            if (nextQb >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('Nice to meet you, Jean-Pierre III!', 10, 620);
                text('I think we have some similar thoughts, see you soon!', 10, 650);
            }
        }
    }
}
//demitri
function dogdate5Page() {
    image(date5, 0, 0, 800, 800);
    //text
    textSize(35);
    fill(255, 0, 220);
    text('you have a message from Demitri!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= 30;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 800) {
        corgi1_s += 20;
    }
}
//demitri chat
function dogdate5Chat() {
    background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Demitri!', 200, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= corgi1_s;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
        nextQb -= nextQb;
        nextQd -= nextQd;
        nextQm -= nextQm;
    }
    //chat points
    textAlign(RIGHT);
    text(demitriPoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Wassup! Im Demitri!', 10, 100);
    text('whats your favorite color?', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type q, r, s or t:', 790, 160);
    text('q) black and white', 790, 190);
    text('r) beige', 790, 220);
    text('s) green', 790, 250);
    text('t) not sure', 790, 280);
    //when key is pressed
    if (nextQd >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('I like baby blue. Are you an athletic doggo?', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('q) Im not like other dogs', 790, 340);
        text('r) frisbee. all day, everyday', 790, 370);
        text('s) fetch!', 790, 400);
        text('t) tail chaser', 790, 430);
        if (nextQd >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('Favorite novel', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('q) where the red ferns grow', 790, 490);
            text('r) marley and me...', 790, 520);
            text('s) old yeller', 790, 550);
            text('t) of mice and men', 790, 580);
            if (nextQd >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('Nice to meet you, Jean-Pierre III!', 10, 620);
                text('Join my book club!', 10, 650);
            }
        }
    }
}
//max's page
function dogdate6Page() {
    image(date6, 0, 0, 800, 800);
    //text
    textSize(35);
    fill(255, 0, 220);
    text('you have a message from Max!', 550, 795);
    //exit box
    fill(180);
    rect(780, 0, 20, 19);
    line(780, 0, 800, 19);
    line(800, 0, 780, 19);
    if (mouseIsPressed && mouseX >= 780 && mouseX <= 800 && mouseY >= 0 && mouseY <= 19) {
        corgi1_s -= 30;
    }
    //mail icon
    fill(250);
    rect(750, 780, 50, 20);
    line(750, 780, 775, 800);
    line(800, 780, 775, 800);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 780 && mouseY <= 700) {
        corgi1_s += 20;
    }
}
//chat with max
function dogdate6Chat() {
    background(250);
    //top bar
    fill(255, 0, 220);
    textFont(Font, 50);
    textAlign(CENTER);
    text('Chat with Max!', 200, 50);
    line(0, 50, 800, 50);
    //exit box
    line(750, 0, 750, 50);
    line(750, 0, 800, 50);
    line(800, 0, 750, 50);
    if (mouseIsPressed && mouseX >= 750 && mouseX <= 800 && mouseY >= 0 && mouseY <= 50) {
        corgi1_s -= corgi1_s;
        nextQ -= nextQ;
        nextQc -= nextQc;
        nextQs -= nextQs;
        nextQb -= nextQb;
        nextQd -= nextQd;
        nextQm -= nextQm;
    }
    //chat points
    textAlign(RIGHT);
    text(maxPoints, 790, 790);
    //opening greeting
    textSize(40);
    fill(25, 249, 0);
    textAlign(LEFT);
    text('Woof woof!', 10, 100);
    text('woof woof!', 10, 130);
    //response options
    fill(0, 66, 249);
    textAlign(RIGHT);
    text('Type u, v, w or x:', 790, 160);
    text('u) what the...', 790, 190);
    text('v) woof?', 790, 220);
    text('w) excuse me?', 790, 250);
    text('x) hi hello!', 790, 280);
    //when key is pressed
    if (nextQm >= 1) {
        //response question
        fill(25, 249, 0);
        textAlign(LEFT);
        text('woof woof!', 10, 310);
        //response options
        fill(0, 66, 249);
        textAlign(RIGHT);
        text('u) okay', 790, 340);
        text('v) woof woof', 790, 370);
        text('w) i beg your pardon?', 790, 400);
        text('x) cheese cake is my favorite as well!', 790, 430);
        if (nextQm >= 2) {
            //final response question
            fill(25, 249, 0);
            textAlign(LEFT);
            text('waroo!', 10, 460);
            //response options
            fill(0, 66, 249);
            textAlign(RIGHT);
            text('u) rude.', 790, 490);
            text('v) waroooooo', 790, 520);
            text('w) alrighty then.', 790, 550);
            text('x) its funny you say that!', 790, 580);
            if (nextQm >= 3) {
                //goodbye
                fill(25, 249, 0);
                textAlign(LEFT);
                text('woof woof!', 10, 620);
            }
        }
    }
}
// points system for each dog//
function keyPressed() {
    //for PONG\\
    if (keyCode == LEFT_ARROW) {
        paddle_step = -3;
    }
    else if (keyCode == RIGHT_ARROW) {
        paddle_step = 3;
    }
    else if (key == ' ') {
        pong_s += 1;
        reset();
    }
    //for milo
    else if (key == 'A' && nextQ == 2) {
        miloPoints++;
        nextQ++;
    }
    else if (key == 'B' && nextQ == 1) {
        miloPoints++;
        nextQ++;
    }
    else if (key == 'C') {
        nextQ++;
    }
    else if (key == 'D' && nextQ == 0) {
        miloPoints++;
        nextQ++;
    }
    //for chou chou
    else if (key == 'E' && nextQc == 1) {
        chouChouPoints++;
        nextQc++;
    }
    else if (key == 'F' && nextQc == 0) {
        chouChouPoints -= 1;
        nextQc++;
    }
    else if (key == 'G') {
        nextQc++;
    }
    else if (key == 'H' && nextQc == 2) {
        chouChouPoints++;
        nextQc++;
    }
    //for Soup
    else if (key == 'I' && nextQs == 1) {
        soupPoints++;
        nextQs++;
    }
    else if (key == 'J' && nextQs == 2) {
        soupPoints++;
        nextQs++;
    }
    else if (key == 'K' && nextQs == 0) {
        soupPoints += 1;
        nextQs++;
    }
    else if (key == 'L') {
        nextQs++;
    }
    //for Baguette
    else if (key == 'M' && nextQb == 0) {
        baguettePoints -= 2;
        nextQb++;
    }
    else if (key == 'N') {
        baguettePoints -= 1;
        nextQb++;
    }
    else if (key == 'O' && nextQb == 1) {
        baguettePoints++;
        nextQb++;
    }
    else if (key == 'P' && nextQb == 2) {
        baguettePoints++;
        nextQb++;
    }
    //for demitri
    else if (key == 'Q' && nextQd == 1) {
        demitriPoints++;
        nextQd++;
    }
    else if (key == 'R' && nextQd == 0) {
        demitriPoints++;
        nextQd++;
    }
    else if (key == 'S' && nextQd == 2 || nextQd == 3) {
        demitriPoints++;
        nextQd++;
    }
    else if (key == 'T' && nextQd == 2 || nextQd == 3) {
        demitriPoints++;
        nextQd++;
    }
    //max
    else if (key == 'U') {
        nextQm++;
        maxPoints++;
    }
    else if (key == 'V') {
        nextQm++;
        nextQd++;
    }
    else if (key == 'W') {
        nextQm++;
        nextQd++;
    }
    else if (key == 'X') {
        nextQm++;
        nextQd++;
    }
    else {
        nextQ++;
        nextQc++;
        nextQs++;
        nextQb++;
        nextQd++;
        nextQm++;
    }
}

function keyReleased() {
    paddle_step = 0;
}

function highScore(input) {
    var l = 0;
    for (i = 0; i <= input.length; i++) {
        if (input[i] > l) {
            l = input[i];
        }
    }
    return l;
}

function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(-3, 3);
    ball_y_step = random(1, 3);
}

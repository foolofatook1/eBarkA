/*
 * Skeleton of a ball bouncing /game/.
 * Keith O'Hara <kohara@bard.edu>
 */
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

function preload() {
    dog1 = loadImage("p5-dog/assets/date_dog.gif");
    dog2 = loadImage("p5-dog/assets/pd_player.gif");
    frisbee = loadImage("p5-dog/assets/frisb.gif");
    park = loadImage("p5-dog/assets/park.jpg");
}

function setup() {
    createCanvas(700, 450);
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
    image(park, 0, 0, 700, 450);
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
}

function reset() {
    ball_x = random(ball_r, width - ball_r);
    ball_y = random(ball_r, height / 2);
    ball_x_step = random(-3, 3);
    ball_y_step = random(1, 3);
    x = 0
    if (y <= 0) {
        alert("You lose the game, please refresh the webpage to restart");
    }
}

function keyPressed() {
    if (keyCode == LEFT_ARROW) {
        paddle_step = -3;
    }
    else if (keyCode == RIGHT_ARROW) {
        paddle_step = 3;
    }
    else if (key == ' ') {
        reset();
    }
}

function keyReleased() {
    paddle_step = 0;
}

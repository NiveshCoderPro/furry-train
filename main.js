canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

 car_image = "car1.png";
 background_image = "racing.jpg";

car_x = 10;
car_y = 10;

car_width = 100;
car_height = 100;

function add() {
    background_imgtag = new Image();
    background_imgtag.onload = uploadbackground;
    background_imgtag.src = background_image;
    car1_ImgTag = new Image();
    car1_ImgTag.onload = uploadcar1;
    car1_ImgTag.src = car_image;
}


function uploadbackground() {
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadcar1() {
    ctx.drawImage(car1_ImgTag,0,0,car_width,car_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keypressed = e.keyCode;

    console.log(keypressed);

    if (keypressed == '38') {
        up();
    }
    if (keypressed == '40') {
        down();
    }
    if (keypressed == '37') {
        right();
    }
    if (keypressed == '39') {
     left();
    }
}

function up() {
    if (car_y >= 0) {
        car_y = car_y-10;
        uploadbackground();
        uploadcar1();
    }
}
function down() {
    if (car_y <= 500) {
        car_y = car_y+10;
        uploadbackground();
        uploadcar1();
    }
}

function right() {
    if (car_x <= 500) {
        car1_x = car_x-10;
        uploadbackground();
        uploadcar1();
    }
}
function left() {
    if (car_x >= 0) {
        car_x = car_x-10;
        uploadbackground();
        uploadcar1();
    }
}
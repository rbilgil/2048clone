function start() {

    for (var i = 0; i < startingNums; i++) {
        generateNum();
    }

    draw();
}

start();

document.onkeydown = function (e) {
    if (e.keyCode == 37) {
        moveLeft();
    } else if (e.keyCode == 38) {
        moveUp();
    } else if (e.keyCode == 39) {
        moveRight();
    } else if (e.keyCode == 40) {
        moveDown();
    }

    generateNum();
    draw();
};




function start() {

    for (var i = 0; i < startingNums; i++) {
        generateNum();
    }

    draw();
}

start();

document.onkeydown = function (e) {
    generateNum();
    if (e.keyCode == 37) {
        pressLeft();
    } else if (e.keyCode == 38) {
        pressUp();
    } else if (e.keyCode == 39) {
        pressRight();
    } else if (e.keyCode == 40) {
        pressDown();
    }
};




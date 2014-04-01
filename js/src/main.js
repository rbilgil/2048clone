function start() {

    for (var i = 0; i < startingNums; i++) {
        generateNum();
    }

    draw();
}

function gameOver() {
    game.over = true;
    context.fillStyle = 'rgba(255,255,255, 0.8)';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.font = 'bold 48px sans-serif';
    context.fillStyle = '#AA3321';
    context.fillText('GAME OVER', canvas.width/2 - 145, canvas.height/2);
}

function isGameOver() {
    return game.over;
}

start();

document.onkeydown = function (e) {

    if (!isGameOver()) {
        
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
    }

};




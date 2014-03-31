function isBoxFull(boxNumber) {

    var isFull = false;

    for (var i = 0; i < activeNums.length; i++) {
        if (activeNums[i].boxNumber === boxNumber) {
            isFull = true;
        }
    }

    return isFull;
}

function moveX(num, x) {

    while ( filledPositions.indexOf(getBoxNumber(x, num.boxY)) !== -1 ) {
        var collisionNum = getNumInBox(getBoxNumber(x, num.boxY));
        if (collisionNum.value === num.value) {
            num.value *= collisionNum.value;
            deactivate(collisionNum);
            break;
        } else if (x > num.boxX) {
            x -= 1;
        } else if (x < num.boxX) {
            x += 1;
        } else {
            break;
        }
    }

    num.setBoxX(x);

}

function moveY(num, y) {

    emptyBox(num.boxNumber);

    while (filledPositions.indexOf(getBoxNumber(num.boxX, y)) !== -1) {
        var collisionNum = getNumInBox(getBoxNumber(num.boxX, y));
        if (collisionNum.value === num.value) {
            num.value += collisionNum.value;
            deactivate(collisionNum);
            emptyBox(collisionNum.boxNumber);
            break;
        } else if (y > num.boxY) {
            y -= 1;
        } else if (y < num.boxY) {
            y += 1;
        } else {
            break;
        }
    }
    num.setBoxY(y);
    fillBox(num.boxNumber);
}

function pressDown() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        moveY(num, boxCount);
        draw();
    }
}

function pressUp() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        moveY(num, 1);
        draw();
    }
}

function pressLeft() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        moveX(num, 1);
        draw();
    }
}

function pressRight() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        moveX(num, boxCount);
        draw();
    }
}
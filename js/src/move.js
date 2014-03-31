function isBoxFull(boxNumber) {

    var isFull = false;

    for (var i = 0; i < activeNums.length; i++) {
        if (activeNums[i].boxNumber === boxNumber) {
            isFull = true;
        }
    }

    return isFull;
}

function handleCollision(boxNumber, num) {
    var collisionNum = getNumInBox(boxNumber);

    if (collisionNum.value === num.value) {
        num.value += collisionNum.value;
        deactivate(collisionNum);
        return true;
    } else {
        return false;
    }
}

function moveX(num, x) {

    var boxNumber;

    while (isBoxFull(boxNumber = getBoxNumber(x, num.boxY))) {

        if (handleCollision(boxNumber, num)) {
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

    var boxNumber;

    while (isBoxFull(boxNumber = getBoxNumber(num.boxX, y))) {

        if (handleCollision(boxNumber, num)) {
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
}

function pressDown() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        moveY(num, boxCount);
    }
}

function pressUp() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        moveY(num, 1);
    }
}

function pressLeft() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        moveX(num, 1);
    }
}

function pressRight() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        moveX(num, boxCount);
    }
}
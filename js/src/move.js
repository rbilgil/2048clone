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

function boxHasAnotherNumber(boxNumber, num) {
    return isBoxFull(boxNumber) && boxNumber !== num.boxNumber;
}

function moveX(num, x) {

    var boxNumber;

    while (boxHasAnotherNumber(boxNumber = getBoxNumber(x, num.boxY), num)) {

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

    while (boxHasAnotherNumber(boxNumber = getBoxNumber(num.boxX, y), num)) {

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
    buttonPress(moveY, boxCount);
}

function pressUp() {
    buttonPress(moveY, 1);
}

function pressLeft() {
    buttonPress(moveX, 1);
}

function pressRight() {
    buttonPress(moveX, boxCount);
}

function buttonPress(move, distance) {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        move(num, distance);
    }
}
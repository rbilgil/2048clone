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

function moveLeft() {
    for (var xPos = 2; xPos <= boxCount; xPos++) {
        movementX(xPos, 1);
    }
}

function moveRight() {
    for (var xPos = boxCount - 1; xPos >= 1; xPos--) {
        movementX(xPos, boxCount);
    }
}

function moveUp() {
    for (var yPos = 2; yPos <= boxCount; yPos++) {
        movementY(yPos, 1);
    }
}

function moveDown() {
    for (var yPos = boxCount - 1; yPos >= 1; yPos--) {
        movementY(yPos, boxCount);
    }
}

function movementX(xPos, startingPos) {

    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        if (num.boxX === xPos) {

            var newXPos = startingPos;
            var boxNumber;

            while (isBoxFull(boxNumber = getBoxNumber(newXPos, num.boxY))) {
                if (newXPos !== num.boxX
                    && handleCollision(boxNumber, num)) {
                    break;
                } else if (newXPos > num.boxX) {
                    newXPos--;
                } else if (newXPos < num.boxX) {
                    newXPos++;
                } else {
                    break;
                }
            }

            num.setBoxX(newXPos);
        }
    }
}

function movementY(yPos, startingPos) {

    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        if (num.boxY === yPos) {

            var newYPos = startingPos;
            var boxNumber;

            while (isBoxFull(boxNumber = getBoxNumber(num.boxX, newYPos))) {
                if (newYPos !== num.boxY
                    && handleCollision(boxNumber, num)) {
                    break;
                } else if (newYPos > num.boxY) {
                    newYPos--;
                } else if (newYPos < num.boxY) {
                    newYPos++;
                } else {
                    break;
                }
            }

            num.setBoxY(newYPos);
        }
    }
}
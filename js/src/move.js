function isBoxFull(boxNumber) {

    var isFull = false;

    for (var i = 0; i < activeNums.length; i++) {
        if (activeNums[i].boxNumber === boxNumber) {
            isFull = true;
        }
    }

    return isFull;
}

function allBoxesFull() {
    for (var i = 1; i < getGridSize(); i++) {
        if (!isBoxFull(i)) {
            return false;
        }
    }

    return true;
}

function getGridSize() {
    return getBoxNumber(boxCount, boxCount);
}

function addNeighboursIfSame(num, neighbour) {

    if (neighbour.value === num.value) {
        num.value += neighbour.value;
        num.setBoxX(neighbour.boxX);
        num.setBoxY(neighbour.boxY);

        deactivate(neighbour);
    }
}

function moveX(xPos, sign) {

    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];

        if (xPos === num.boxX) {
            var newXPos;

            while (
                !isBoxFull(getBoxNumber(newXPos = num.boxX + sign, num.boxY))
                && newXPos >= 1
                && newXPos <= boxCount
                )
            {
                num.setBoxX(newXPos);
            }

            var neighbour = getNumInBox(getBoxNumber(num.boxX + sign, num.boxY));

            addNeighboursIfSame(num, neighbour);
        }
    }
}

function moveY(yPos, sign) {

    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];

        if (yPos === num.boxY) {
            var newYPos;

            while (
                !isBoxFull(getBoxNumber(num.boxX, newYPos = num.boxY + sign))
                    && newYPos >= 1
                    && newYPos <= boxCount
                )
            {
                num.setBoxY(newYPos);
            }

            var neighbour = getNumInBox(getBoxNumber(num.boxX, num.boxY + sign));

            addNeighboursIfSame(num, neighbour);
        }
    }
}

function moveLeft() {
    for (var xPos = 2; xPos <= boxCount; xPos++) {
        moveX(xPos, -1);
    }
}

function moveRight() {
    for (var xPos = boxCount - 1; xPos >= 1; xPos--) {
        moveX(xPos, 1);
    }
}

function moveUp() {
    for (var yPos = 2; yPos <= boxCount; yPos++) {
        moveY(yPos, -1);
    }
}

function moveDown() {
    for (var yPos = boxCount - 1; yPos >= 1; yPos--) {
        moveY(yPos, 1);
    }
}
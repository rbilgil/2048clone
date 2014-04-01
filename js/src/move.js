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

        for (var i = 0; i < activeNums.length; i++) {

            var num = activeNums[i];

            if (xPos === num.boxX) {

                var newXPos;

                while (!isBoxFull(getBoxNumber(newXPos  = num.boxX - 1, num.boxY))
                    && newXPos >= 1) {
                    num.setBoxX(newXPos);
                }

                var collisionNum = getNumInBox(getBoxNumber(num.boxX - 1, num.boxY));

                if (collisionNum.value === num.value) {
                    num.value += collisionNum.value;
                    num.setBoxX(collisionNum.boxX);
                    deactivate(collisionNum);
                }

            }

        }

    }


}
/**
 * Num is what I call a number that appears in a box
 * This is a "class" that represents such a number
 * @param boxX
 * @param boxY
 * @param value
 * @constructor
 */
function Num(boxX, boxY, value) {

    var $this = this;

    initialise(boxX, boxY, value);

    function initialise(boxX, boxY, value) {

        if (validateBoxNum(boxX) && validateBoxNum(boxY)) {
            $this.boxX = boxX;
            $this.boxY = boxY;
            $this.boxNumber = getBoxNumber(boxX, boxY);
            $this.value = value;
        } else {
            throw "Number must be within the grid";
        }
    }

    function validateBoxNum(boxNum) {
        return boxNum <= boxCount;
    }

    this.setBoxX = function (boxX) {
        if (validateBoxNum(boxX)) {
            $this.boxX = boxX;
            $this.boxNumber = getBoxNumber(boxX, $this.boxY);
        }
    }

    this.setBoxY = function (boxY) {
        if (validateBoxNum(boxY)) {
            $this.boxY = boxY;
            $this.boxNumber = getBoxNumber($this.boxX, boxY);
        }
    }
}

/**
 *  Generates a new Num on a random position in the grid
 */
function generateNum() {
    var boxX, boxY;

    do {
        boxX = getRandomCoord();
        boxY = getRandomCoord();
    } while (isBoxFull(getBoxNumber(boxX, boxY)));

    var num = new Num(boxX, boxY, 2);
    activate(num);
}

/**
 * Generates a random box coordinate within the grid
 * @returns {number}
 */
function getRandomCoord() {
    return Math.round(Math.random() * (boxCount - 1) + 1);
}

function getBoxNumber(boxX, boxY) {
    return boxX + (boxY - 1) * boxCount;
}

function activate(num) {
    if (activeNums.indexOf(num) === -1) {
        activeNums.push(num);
    }
}

function deactivate(num) {
    for (var i = 0; i < activeNums.length; i++) {
        if (num === activeNums[i]) {
            activeNums.splice(i, 1);
        }
    }
}

function getNumInBox(boxNumber) {

    for (var i = 0; i < activeNums.length; i++) {
        if (activeNums[i].boxNumber === boxNumber) {
            return activeNums[i];
        }
    }

    return -1;
}

/**
 * Num is a number object that appears in a box
 *
 * @param boxX x-coordinate of the box
 * @param boxY y-coordinate of the box
 * @param value value of the number
 * @constructor
 */
function Num(boxX, boxY, value) {

    var $this = this;

    initialise(boxX, boxY, value);

    /**
     * Initialises the number with an x, y position and a value
     * @param boxX
     * @param boxY
     * @param value
     */
    function initialise(boxX, boxY, value) {

        if (isInGrid(boxX) && isInGrid(boxY)) {
            $this.boxX = boxX;
            $this.boxY = boxY;
            $this.boxNumber = getBoxNumber(boxX, boxY);
            $this.value = value;
        } else {
            throw "Number must be within the grid";
        }
    }

    /**
     * Validates that the box coordinate is inside the grid
     * @param coordinate
     * @returns {boolean}
     */
    function isInGrid(coordinate) {
        return coordinate <= boxCount;
    }

    /**
     * Sets the box x coordinate of the number
     * @param boxX
     */
    this.setBoxX = function (boxX) {
        if (isInGrid(boxX)) {
            $this.boxX = boxX;
            $this.boxNumber = getBoxNumber(boxX, $this.boxY);
        }
    }

    /**
     * Sets the box y coordinate of the number
     * @param boxY
     */
    this.setBoxY = function (boxY) {
        if (isInGrid(boxY)) {
            $this.boxY = boxY;
            $this.boxNumber = getBoxNumber($this.boxX, boxY);
        }
    }
}

/**
 *  Generates a new Num on a random position in the grid
 *  If all boxes are full, declares the game to be over
 *
 */
function generateNum() {
    var boxX, boxY;

    if (!allBoxesFull()) {
        do {
            boxX = getRandomBoxCoordinate();
            boxY = getRandomBoxCoordinate();
        } while (isBoxFull(getBoxNumber(boxX, boxY)));

        var num = new Num(boxX, boxY, 2);
        activate(num);
        draw();

    } else {
        gameOver();
    }
}

/**
 * Generates a random box coordinate within the grid
 * @returns {number}
 */
function getRandomBoxCoordinate() {
    return Math.round(Math.random() * (boxCount - 1) + 1);
}

/**
 * Gets the "box number" of two given box coordinates
 * E.g. x: 2, y:2 in a 4x4 grid means the box number is 6
 * @param boxX
 * @param boxY
 * @returns {*}
 */
function getBoxNumber(boxX, boxY) {
    return boxX + (boxY - 1) * boxCount;
}

/**
 * Declares a Num to be active on the grid
 * Must be used once a Num is generated
 * @param num a Num object
 */
function activate(num) {
    if (activeNums.indexOf(num) === -1) {
        activeNums.push(num);
    }
}

/**
 * Declares a Num to be inactive on the grid
 * Must be used to remove a Num from the grid
 * @param num a Num object
 */
function deactivate(num) {
    for (var i = 0; i < activeNums.length; i++) {
        if (num === activeNums[i]) {
            activeNums.splice(i, 1);
        }
    }
}

/**
 * Returns the Num object residing in a given box, or -1 if not found
 * @param boxNumber
 * @returns {*}
 */
function getNumInBox(boxNumber) {

    for (var i = 0; i < activeNums.length; i++) {
        if (activeNums[i].boxNumber === boxNumber) {
            return activeNums[i];
        }
    }

    return -1;
}

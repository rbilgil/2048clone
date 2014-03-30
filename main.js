var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var boxCount = 4;
var startingNums = 2;
var filledPositions = [];
var activeNums = [];

function drawGrid(XbyX) {

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    var boxSize = canvas.width / XbyX;
    var x = 0;
    for (var i = 0; i < XbyX; i++) {
        var y = 0;
        for (var j = 0; j < XbyX; j++) {
            context.rect(x, y, boxSize, boxSize);
            context.stroke();
            y += boxSize;
        }
        x += boxSize;
    }
}

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

    this.setBoxX = function(boxX) {
        if (validateBoxNum(boxX)) {
            $this.boxX = boxX;
            $this.boxNumber = getBoxNumber(boxX, $this.boxY);
        }
    }

    this.setBoxY = function(boxY) {
        if (validateBoxNum(boxY)) {
            $this.boxY = boxY;
            $this.boxNumber = getBoxNumber($this.boxX, boxY);
        }
    }
}

function assignNumberToBox(num) {
    context.font = "bold 64px sans-serif";

    var boxX = num.boxX;
    var boxY = num.boxY;
    var boxSize = canvas.width / boxCount;
    var x = boxSize * ((boxX - 1) + 1/2) - 18;
    var y = boxSize * ((boxY - 1) + 1/2) + 18;

    context.fillText(num.value, x, y);
}

function start() {

    function getRandomCoord() {
        return Math.round(Math.random() * 3 + 1);
    }

    for (var i = 0; i < startingNums; i++) {
        var boxX, boxY;

        do {
            boxX = getRandomCoord();
            boxY = getRandomCoord();
        } while (filledPositions.indexOf(getBoxNumber(boxX, boxY)) !== -1);

        filledPositions.push(getBoxNumber(boxX, boxY));

        var num = new Num(boxX, boxY, 2);
        activeNums.push(num);
    }

    draw();
}

function draw() {
    drawGrid(boxCount);
    for (var i = 0; i < activeNums.length; i++) {
        assignNumberToBox(activeNums[i]);
    }
}

function getBoxNumber(boxX, boxY) {
    return boxX + (boxY - 1) * boxCount;
}

start();

document.onkeydown = function(e) {
    if (e.keyCode == 40) {
        pressDown();
    }
}

function pressDown() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        num.setBoxY(boxCount);
        draw();
    }
}


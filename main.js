var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var boxCount = 4;
var startingNums = 2;
var filledPositions = [];
var activeNums = [];

function drawGrid(XbyX) {
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

function Num(boxNumber, value) {
    this.boxNumber = boxNumber;
    this.value = value;
}

function assignNumberToBox(num) {
    context.font = "bold 64px sans-serif";

    var boxNum = num.boxNumber;
    var boxSize = canvas.width / boxCount;
    var x = boxSize * ((boxNum - 1) % boxCount + 1/2) - 18;
    var y = boxSize * (Math.floor(boxNum / (boxCount + 1)) + 1/2) + 18;

    context.fillText(num.value, x, y);
}

function start() {
    drawGrid(boxCount);
    var num;

    for (var i = 0; i < startingNums; i++) {
        var boxNum;
        do {
            boxNum = Math.floor(Math.random() * (Math.pow(boxCount, 2) - 1) + 1);
        } while (filledPositions.indexOf(boxNum) !== -1);

        filledPositions.push(boxNum);
        num = new Num(boxNum, 2);
        activeNums.push(num);
        assignNumberToBox(num);
    }
}

start();

function pressDown() {
    for (var i = 0; i < activeNums.length; i++) {
        var num = activeNums[i];
        num.boxNumber = Math.pow(boxCount, 2) - (boxCount - 1) + num.boxNumber % boxCount;

        assignNumberToBox(num);
    }
}

document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 40) {
        pressDown();
    }
    alert("Character typed: " + e.keyCode);
};


function clearGrid() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function drawGrid(XbyX) {
    clearGrid();

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

function draw() {
    drawGrid(boxCount);
    for (var i = 0; i < activeNums.length; i++) {
        assignNumberToBox(activeNums[i]);
    }
}

function assignNumberToBox(num) {
    context.font = "bold 64px sans-serif";

    var boxX = num.boxX;
    var boxY = num.boxY;
    var boxSize = canvas.width / boxCount;
    var x = boxSize * ((boxX - 1) + 1 / 2) - 18;
    var y = boxSize * ((boxY - 1) + 1 / 2) + 18;

    context.fillText(num.value, x, y);
}



function emptyBox(boxNumber) {
    var index = filledPositions.indexOf(boxNumber);
    if (~index) {
        filledPositions.splice(index, 1);
    }
}

function fillBox(boxNumber) {
    filledPositions.push(boxNumber);
}

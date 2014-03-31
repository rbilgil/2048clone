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
            context.fillStyle = "#424242";
            context.fillRect(x, y, boxSize, boxSize);
            context.strokeStyle = "#848484";
            context.lineWidth = 5;
            context.strokeRect(x, y, boxSize, boxSize);

            y += boxSize;
        }
        x += boxSize;
    }
}

function draw() {
    drawGrid(boxCount);
    for (var i = 0; i < activeNums.length; i++) {
        putNumInBox(activeNums[i]);
    }
}

function putNumInBox(num) {
    var size, color, offsetX, offsetY;
    if (num.value < 10) {
        //single digits
        size = 64;
        offsetX = size/3.6;
        offsetY = offsetX;
        color = "#F2EFDC";

    } else if (num.value < 100) {
        //double digits
        size = 64;
        offsetX = size/1.7;
        offsetY = offsetX/2;
        color = '#F2DBA7';

    } else if (num.value < 1000) {
        size = 48;
        offsetX = size/1.2;
        offsetY = offsetX/3.5;
        color = '#F2B47D';

    } else if (num.value < 10000) {
        size = 40;
        offsetX = size * 1.1;
        offsetY = offsetX/4;
        color = '#F28247';
    }

    context.font = "bold " + size + "px sans-serif";

    var boxX = num.boxX;
    var boxY = num.boxY;
    var boxSize = canvas.width / boxCount;
    var x = boxSize * ((boxX - 1) + 1 / 2) - offsetX;
    var y = boxSize * ((boxY - 1) + 1 / 2) + offsetY;

    context.fillStyle = color;
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

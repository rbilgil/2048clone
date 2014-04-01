var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var boxCount = 4;
canvas.width = 450 * boxCount / 4;
canvas.height = 450 * boxCount / 4;
var startingNums = 4;
var activeNums = [];
var game = {
    over: false
};

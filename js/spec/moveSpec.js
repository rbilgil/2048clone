var activeNums = [];
boxCount = 4;

describe("Testing if a box is full", function() {

    var num = new Num(1, 1, 2);

    it("should be full if a number is generated", function() {
        activate(num);
        expect(isBoxFull(1)).toBe(true);
    });

    it("should be empty if number is deactivated", function() {

        deactivate(num);
        expect(isBoxFull(1)).toBe(false);

    });

});


describe("moving in the x axis", function() {

    var num1, num2;

    it("should combine the two numbers when moving right", function() {
        num1 = new Num(1, 1, 2);
        num2 = new Num(4, 1, 2);
        activate(num1);
        activate(num2);

        moveX(num1, 4);

        expect(isBoxFull(1)).toBe(false);
        expect(isBoxFull(4)).toBe(true);

        expect(getNumInBox(4).value).toBe(4);
        expect(activeNums.length).toBe(1);

    });


    it("should stop just before if the numbers aren't the same", function() {
        num1 = new Num(1, 1, 2);
        num2 = new Num(4, 1, 4);
        activate(num1);
        activate(num2);

        moveX(num1, 4);
        expect(isBoxFull(1)).toBe(false);
        expect(isBoxFull(4)).toBe(true);
        expect(isBoxFull(3)).toBe(true);

        expect(getNumInBox(4).value).toBe(4);
        expect(getNumInBox(3).value).toBe(2);
        expect(activeNums.length).toBe(2);
    });

    afterEach(function() {

        deactivate(num1);
        deactivate(num2);

    });

});

describe("moving in the y axis", function() {

    var num1, num2;

    it("should combine the two numbers when moving right", function() {
        num1 = new Num(2, 3, 4);
        num2 = new Num(2, 4, 4);
        activate(num1);
        activate(num2);

        moveY(num1, 4);

        expect(isBoxFull(getBoxNumber(2, 3))).toBe(false);
        expect(isBoxFull(getBoxNumber(2, 4))).toBe(true);

        expect(getNumInBox(getBoxNumber(2, 4)).value).toBe(8);
        expect(activeNums.length).toBe(1);

    });


    it("should stop just before if the numbers aren't the same", function() {
        num1 = new Num(1, 2, 4);
        num2 = new Num(1, 4, 8);
        activate(num1);
        activate(num2);

        moveY(num1, 4);
        expect(isBoxFull(getBoxNumber(1, 2))).toBe(false);
        expect(isBoxFull(getBoxNumber(1, 3))).toBe(true);
        expect(isBoxFull(getBoxNumber(1, 4))).toBe(true);

        expect(getNumInBox(getBoxNumber(1, 3)).value).toBe(4);
        expect(getNumInBox(getBoxNumber(1, 4)).value).toBe(8);
        expect(activeNums.length).toBe(2);
    });

    afterEach(function() {

        deactivate(num1);
        deactivate(num2);

    });

});

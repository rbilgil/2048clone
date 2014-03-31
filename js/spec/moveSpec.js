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

    beforeEach(function() {
        num1 = new Num(1, 1, 2);
        num2 = new Num(4, 1, 2);
        activate(num1);
        activate(num2);
    });

    it("should combine the two numbers when moving right", function() {
        moveX(num1, 4);

        expect(isBoxFull(1)).toBe(false);
        expect(isBoxFull(4)).toBe(true);

        expect(getNumInBox(4).value).toBe(4);
        expect(activeNums.length).toBe(1);

    });

    it("should stop just before if the numbers aren't the same", function() {

    });

});

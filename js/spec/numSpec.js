var boxCount;
var activeNums = [];
var filledPositions = [];

describe("Getting a box number from box coordinates", function() {


    it("should return the correct box number, given x and y", function() {

        boxCount = 4;

        expect(getBoxNumber(1,1)).toBe(1);
        expect(getBoxNumber(1,3)).toBe(9);
        expect(getBoxNumber(4,4)).toBe(16);

    });

    it("should return the correct box number for a bigger grid, given x and y", function() {

        boxCount = 10;

        expect(getBoxNumber(1,1)).toBe(1);
        expect(getBoxNumber(1,3)).toBe(21);
        expect(getBoxNumber(10,10)).toBe(100);

    });

});

describe("Creating a num", function() {


    beforeEach(function() {
        boxCount = 4;
    });

    it("Should create a num at the correct box", function() {

        var num = new Num(1, 3, 2);

        expect(num.boxX).toBe(1);
        expect(num.boxY).toBe(3);
        expect(num.value).toBe(2);
        expect(num.boxNumber).toBe(9);

    });

    it("Should throw an exception when num outside grid", function() {

        expect( function() {
            var num = new Num(2, 6, 2);
        }).toThrow("Number must be within the grid");

    });

});

describe("Setting box coordinates on num", function() {

    it("should update box number on box coordinate change", function() {

        var num = new Num(1, 1, 2);

        num.setBoxY(2);
        expect(num.boxNumber).toBe(5);

        num.setBoxX(4);
        expect(num.boxNumber).toBe(8);

    });
});

describe("getting a random coordinate", function() {

    it("should return a coordinate between 1 and boxCount", function() {

        function coordinateTests() {
            for (var i = 0; i < 10; i++) {
                expect(getRandomCoord()).toBeLessThan(boxCount + 1);
                expect(getRandomCoord()).toBeGreaterThan(0);
            }
        }

        boxCount = 4;
        coordinateTests();

        boxCount = 5;
        coordinateTests();
    });

});

describe("activation and deactivation of a num", function() {

    var num;

    beforeEach(function() {

        num = new Num(1, 1, 2);
        activate(num);

    });

    it("should activate a num by putting it in an array", function() {

        expect(activeNums.indexOf(num)).not.toBe(-1);

    });

    it("should deactivate a num by removing it from array", function() {

        deactivate(num);
        expect(activeNums.indexOf(num)).toBe(-1);

    });

    it("should give the correct num in box", function() {

        expect(getNumInBox(1).boxNumber).toBe(num.boxNumber);
        expect(getNumInBox(1).boxX).toBe(num.boxX);
        expect(getNumInBox(1).boxY).toBe(num.boxY);
        expect(getNumInBox(1).value).toBe(num.value);

    });

});

describe("generating a num", function() {

    boxCount = 4;
    activeNums = [];

    it("should activate a num", function() {

        generateNum();

        expect(activeNums[0]).not.toBeUndefined();

    });

});
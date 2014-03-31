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

describe("Moving", function() {

    var nums;

    beforeEach(function() {
        nums = [];
    });

    function activateAllNums() {
        for (var i = 0; i < nums.length; i++) {
            activate(nums[i]);
        }
    }

    function deactivateAllNums() {
        for (var i = 0; i < nums.length; i++) {
            deactivate(nums[i]);
        }
    }

    it("Should move everything to the very left if clear", function() {

        nums.push(new Num(2, 1, 2));
        nums.push(new Num(1, 2, 4));

        activateAllNums();

        moveLeft();

        expect(nums[0].boxX).toBe(1);
        expect(nums[1].boxX).toBe(1);

    });

    it("Should not move a Num if there is blockage", function() {

        nums.push(new Num(2, 1, 2));
        nums.push(new Num(1, 1, 4));

        activateAllNums();

        moveLeft();

        expect(nums[0].boxX).toBe(2);
        expect(nums[1].boxX).toBe(1);

    });

    it("Should move a Num up to the far left up to a blockage", function() {

        //xoox
        nums.push(new Num(4, 1, 2));
        nums.push(new Num(1, 1, 4));

        //oxxo
        nums.push(new Num(2, 4, 2));
        nums.push(new Num(3, 4, 4));

        //xxox
        nums.push(new Num(1, 3, 2));
        nums.push(new Num(2, 3, 4));
        nums.push(new Num(4, 3, 8));

        activateAllNums();

        moveLeft();

        //xoox
        expect(nums[0].boxX).toBe(2);
        expect(nums[1].boxX).toBe(1);

        //oxxo
        expect(nums[2].boxX).toBe(1);
        expect(nums[3].boxX).toBe(2);

        //xxoo
        expect(nums[4].boxX).toBe(1);
        expect(nums[5].boxX).toBe(2);
        expect(nums[6].boxX).toBe(3);
    });

    it("Should combine two nums that are the same", function() {

        nums.push(new Num(4, 1, 2));
        nums.push(new Num(1, 1, 2));
        nums.push(new Num(3, 3, 4));
        nums.push(new Num(2, 3, 4));

        activateAllNums();
        moveLeft();

        expect(nums[0].boxX).toBe(1);
        expect(nums[0].value).toBe(4);
        expect(nums[2].boxX).toBe(1);
        expect(nums[2].value).toBe(8);


        expect(isBoxFull(4, 1)).toBe(false);
        expect(isBoxFull(1, 1)).toBe(true);
        expect(isBoxFull(3, 3)).toBe(false);
        expect(isBoxFull(2, 3)).toBe(false);
        expect(isBoxFull(1, 3)).toBe(true);

    });

    afterEach( function() {
        deactivateAllNums();
    });

});

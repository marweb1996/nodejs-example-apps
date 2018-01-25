const expect = require("expect");
const utils = require("./utils");

describe("Utils", () => {
    describe("#add", () => {
        it("should add two numbers", () => {
            var result = utils.add(33, 11);
            // if(result !== 44) {
            //     throw new Error(`Expected 44, but got ${result}`);
            // }
        
            expect(result).toBe(44).toBeA("number");
        });
    });
    
    it("should async add two numbers", (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA("number");
            done();
        });
    });
    
    it("should square a number", () => {
        var result = utils.square(3);
        // if(result !== 9) {
        //     throw new Error(`Expected 9, but got ${result}`);
        // }
    
        expect(result).toBe(9).toBeA("number");
    });
    
    it("should async square a number", (done) =>  {
        utils.asyncSquare(5, (result) => {
            expect(result).toBe(25).toBeA("number");
            done();
        });
    });
});

it("should expect some values", () => {
    // expect(12).toNotBe(11);
    // expect({name: "Markus"}).toEqual({name: "Markus"});
    // expect([2,3,4]).toInclude(2);
    // expect([2,3,4]).toExclude(5);
    expect({
        name: "Markus",
        age: "21",
        location: "Graz"
    }).toInclude({
        age: 21
    });
});

it("should set firstName and lastName", () =>{
    var user = {location: "Graz", age: 21};
    var result = utils.setName(user, "Markus Weber");

    expect(user).toInclude({
        firstName: "Markus",
        lastName: "Weber"
    });
});
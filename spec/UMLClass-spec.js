// TEST FILE FOR UML CLASS SOURCE FILE
/*
Using describe() Blocks:
Jasmine uses a built-in describe block (it's actually a JavaScript function) to 
separate entire sets of functionality. The first parameter to the describe() is 
a name for the test "suite", and tells Jasmine (and yourself/other programmers) 
that everything inside this describe block is dealing with that specific part of 
your application.

Using it() Blocks:
Another built-in Jasmine block (function) is the it() block. This block represents 
a single unit test. You can have multiple it() blocks inside of one describe() block, 
which represent multiple unit tests inside of a "test suite." The first parameter to 
the it() block is an explanation of what the function you're testing should do. 
VERY commonly, it reads like a sentence beginning with the word "should"
*/

require('app-module-path').addPath(__dirname + "/../");
var UMLClass = require("m/UMLClass").UMLClass;
var Edge = require("m/Edge").Edge;


//TESTS FOR ADD CASES:
// describe("Tests case for UMLclass.add", function () {
//     it ("should add class using gui add", function() {  
//         //We need to test the add function insertings a name first, seems easiest

//         //UMLClass.instances[name] = newUmlClass;  TESTING INSTANCES use toContain!
//         //TESTING new added class as string, can use Regex toMatch!

//         //UMLClass.add = function (name, vars = "", methods = "")
//         //UMLCLass.add returns newUmlClass

//         // This is the structure of a newUmlClass below
//           //  newUmlClass = new UMLClass(name, newVars, newMethods);

//         // first do the add, then see if instances contains name var we set to add function
//         // var testClass = (UMLClass.add = function(name ="", vars = "", methods = "") {
//         //   var idk = "help";
//         //   return new UMLClass(name, newVars, newMethods); 
//         // });
//         // var result = testClass(name,vars,methods);
//         // expect(UMLClass.add()).toBe(" our test var");
//         //expect(UMLClass.instances).toHaveProperty(our test name);
//         UMLClass.add()
//         var newUmlClass =  UMLClass(name = "weNeedTesting", newVars = [], newMethods = []);
//         expect(UMLClass.instances).toHavePro(newUmlClass);
//        
//     });

//   });    

  // EXAMPLE
  // describe("Stock Portfolio App Tests", function() {
  //   it("calcSideFundInterest() should return a value that is greater than the supplied fund value.", function() {
  //     var calcSideFundInterest = function(fundValue, dailyInt, period) {
  //       return fundValue * (dailyInt * period);
  //     };
  //     var fundValue = 1000, 
  //         dailyInt  = 0.00356, 
  //         period    = 7;
  //     var result = calcSideFundInterest(fundValue, dailyInt, period);
  //     expect(result).toBeGreaterThan(fundValue);
  //   });
  // });

  // Trying to make from EXAMPLE
  // describe("Add test", function() {
  //   it("calcSideFundInterest() should return a value that is greater than the supplied fund value.", function() {
  //     var calcSideFundInterest = function(fundValue, dailyInt, period) {
  //       return fundValue * (dailyInt * period);
  //     };
  //     var fundValue = 1000, 
  //         dailyInt  = 0.00356, 
  //         period    = 7;
  //     var newclass = UMLClass(name, newVars, newMethods);
  //     expect(newclass).toBe(fundValue);
  //   });
  // });

  describe("jasmine.objectContaining", function() {
    //var UMLCLass;
  
    beforeEach(function() {
      UMLClass= {
        name: "test",
        newVars: {},
        newMethods: {}
      };
    });
  
    it("matches objects with the expect key/value pairs", function() {
      expect(UMLClass).toEqual(jasmine.objectContaining({
        name: "test"
      }));
    });
  });
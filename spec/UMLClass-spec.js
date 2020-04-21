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

var /*UMLClass.*/add =require("/Users/quadirahj/Documents/GitHub/2020sp-420-WebWizards/m//UMLClass");
var /*UMLClass.*/destroy=require("//Users/quadirahj/Documents/GitHub/2020sp-420-WebWizards/m//UMLClass");
var /*UMLClass.*/clearData=require("/Users/quadirahj/Documents/GitHub/2020sp-420-WebWizards/m//UMLClass");
var /*Edge.*/add = require("/Users/quadirahj/Documents/GitHub/2020sp-420-WebWizards/m//Edge");
var /*Edge.*/destroy=require("/Users/quadirahj/Documents/GitHub/2020sp-420-WebWizards/m//Edge");

// TESTS FOR ADD CASES:
describe("Tests two cases for UMLclass.add", function () {
    //beforeEach(function() {
    	//spyOn(console, 'log');
    //});

    it ("should add class given empty instance", function() {
    	expect(UMLClass.add("car")).toEqual("car");
    	//expect(console.log).toHaveBeenCalled();
    });

    it ("in the case of duplicates, will not add class again", function() {
		expect(UMLClass.add("car")).toEqual(null);
    });

});

//TESTS FOR DELETE CASES:
describe("Tests two cases for UMLclass.destroy", function () {
   

    it ("if class given exist, will delete it", function() {
    	expect(UMLClass.destroy("car")).toEqual(null);
    });

    it ("if class given doesn't exist", function() {
		expect(UMLClass.destroy("car")).toEqual(null);
    });

    it ("if clear all, then all data should be cleared", function() {
        expect(UMLClass.clearData()).toEqual(false);

    });
});


//TEST FOR RELATIONSHIPS(EDGES):
describe("Tests Relationship(Edge) creations", function() {

    //beforeEach(function() {
        //Edge = Edge(classOne, classTwo;
    //});

    it("should define a relationship between two exisiting classes", function() {
        expect(Edge.add("car carB")).toEqual(Edge("car, carB"));
    });

    it("should delete an exisiting relationship between two exisiting classes", function() {
        expect(Edge.destroy("car carB")).toEqual(null);
    });

});


   

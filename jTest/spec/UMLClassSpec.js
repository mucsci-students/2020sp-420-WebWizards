// TEST FILE FOR UML CLASS SOURCE FILE

// TESTS FOR ADD CASES:
describe("should test for UMLclass.add console ouput", function () {
    //beforeEach(function() {
    	//spyOn(console, 'log');
    //});

    it ("given empty, will add class", function() {
    	expect(UMLClass.add("car")).toEqual("car");
    	//expect(console.log).toHaveBeenCalled();
    });

    it ("in the case of duplicates, will not add class again", function() {
		expect(UMLClass.add("car")).toEqual(null);
    });

});

//TESTS FOR DELETE CASES:
describe("should test for UMLclass.destroy console ouput", function () {
    //beforeEach(function() {
    	//spyOn(console, 'log');
    //});

    it ("if class given exist, will delete it", function() {
    	expect(UMLClass.destroy("car")).toEqual(null);
    	//expect(console.log).toHaveBeenCalled();
    });

    it ("if class given doesn't exist", function() {
		expect(UMLClass.destroy("car")).toEqual(null);
    });
   
});


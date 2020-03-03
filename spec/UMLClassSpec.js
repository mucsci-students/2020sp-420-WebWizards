// TEST FILE FOR UML CLASS SOURCE FILE

<<<<<<< HEAD
// TESTS CONSOLE LOG FOR ADD CASES:
describe("should test for UMLclass.add console ouput", function () {
    beforeEach(function() {
    	spyOn(console, 'log');
    });

    it ("given empty, will add class", function() {
    	expect(UMLClass.add("car")).toBe("car");
    	expect(console.log).toHaveBeenCalled();
    });

    it ("in the case of duplicates, will not add class again", function() {
		expect(UMLClass.add("car")).toBe(null);
    });

});

//TESTS CONSOLE LOG FOR DELETE CASES:
describe("should test for UMLclass.destroy console ouput", function () {
    beforeEach(function() {
    	spyOn(console, 'log');
    });

    it ("if class given exist, will delete it", function() {
    	expect(UMLClass.destroy("car")).toBe(null);
    	expect(console.log).toHaveBeenCalled();
    });

    it ("if class given doesn't exist", function() {
		expect(UMLClass.add("car")).toBe(null);
    });
   
});
=======
describe("classes are added", function () {
    var newClass;
    expect(UMLClass.add(newClass)).toBe(UMLClass.instances[slots.name] = new UMLClass(newClass));
    
    });
>>>>>>> d972c1c490aae2d0402ee4b974287e3dc44c2046

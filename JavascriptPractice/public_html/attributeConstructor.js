/* 
 * Example of a constructor that uses a series of attributes to do its job, 
 * much more efficient than a list of parameters in a constructor. The attribute
 * list is easily extensible and only requires line changes in the constructor 
 * itself, not any ctor calls.
 */

/*
 * Bad ctor: not open to changes (eg. we want an age param) and without an ide
 * or direct reference to the file it is difficult to know what parameters 
 * are which. 
 */
function Person1(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.toString = function() {
        return this.firstName + " " + this.lastName;
    };
}

/*
 * Better ctor: we don't care what exactly "attributes" is, we deal with it
 * inside the ctor. Array definition allows us to name parameters in arbitrary
 * order.
 */
function Person2(attributes) {
    this.firstName = attributes["firstName"];
    this.lastName = attributes["lastName"];
    this.toString = function() {
        return this.firstName + " " + this.lastName;
    };
}

/*
 * Call this on an html document to test.
 */
function showPerson() {
    var p1 = new Person1("Bob", "Dylan");
    var p2 = new Person2({"firstName":"Bob", "lastName":"Dylan"});
}



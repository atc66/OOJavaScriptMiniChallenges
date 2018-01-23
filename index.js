// Exercise 1
// Create an object called Multiplier with two methods: multiply and getCurrentValue. 
// multiply should initially return the number supplied * 1 and from then on whatever 
// the current value is times the number supplied.getCurrentValue should return the 
// last answer returned from multiply.


function Multiplier(){
	this.supplied = 1;
	this.multiply = function(x){
		this.x = x
		return this.supplied = x*this.supplied;
	}
	this.getCurrentValue = function () {
		console.log(this.supplied);
	}
};

var z = new Multiplier();

// Exercise 2

// Implement an object model that allows you to store strings that represent a Photo. 
// Your model should include an Album object that can contain many Photo objects in its photos attribute. 
// Each Album should allow you to add a new photo, list all photos, and access a specific photo by the order it was added. 
// Each Photo should store the photo's file name and the location the photo was taken in as strings. 
// Create instances of each object defined to prove that your object model works.

// function Album (){
// 	this.photos = []
// 	this.addPhoto = function(photo){
// 		let photo = this.photos.length;
// 		this.photos[i] = photo;
// 	}

// 	this.listAllPhotos = function(){
// 		for(i=photo-1; i>=0; i--) {
// 			console.log(this.photos[i].name);
// 		};
// 	}

// 	this.specificPhoto = function(photo_location){
// 		console.log(this.photos[photo_location - 1]);
// 	}
// }

// function Photo (name, location) {
// 	this.name = name;
// 	this.location = location;
// }

// Exercise 3
// Create a prototypical Person object. From this object, extend a Teacher object and a Student object. 
// Each of these objects should have attributes and methods pertinent to what they describe. 
// Also create a School object that should be able to store instances of students and teachers. 
// Make sure to write code afterwards that creates instances of these objects to make sure that what 
// you've written works well and you're able to store the necessary data in each object.

class Person {
	constructor (name, age, location){
		this.name = name;
		this.age = age;
		this.location;
	}
}

class Student extends Person {
	constructor(name, age, location, grade){
		super(name, age, location)
		this.grade = grade
	}
}

class Teacher extends Person {
	constructor(name, age, location, subject){
		super(name, age, location)
		this.subjet = subject
	}
}

var student1 = new Student('Peter Parker', 15, 'Queens, NY', 'Sophmore')
var teacher1 = new Teacher('George Feeny', 60, 'Philadelphia, PA', 'History' )

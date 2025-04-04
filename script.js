//Part 1
console.log("Understanding and Creating Objects\n\n");

//Create an object to represent a student
const darras = {
  name: "Mohammed Darras",
  age: 30,
  enrolled: true,
  courses: ["JavaScript", "Web Programming", "Database", "Algorthims"],
  displayInfo() {
    console.log(`\nMy name is ${this.name}, I am ${this.age} years old.`);
    console.log(
      `Enrollment status: ${this.enrolled ? "Enrolled" : "Not enrolled"}`
    );
    console.log(`Courses: ${this.courses.join(", ")}`);
  },
};

//Use console.log to output, Name age and displayInfo output
console.log("Name", darras.name);
console.log("Age", darras.age);
darras.displayInfo();

console.log("\n================================================");
// Part 2
console.log("Working with JSON");
// Convert the student object into a JSON strin
const darrasJsonString = JSON.stringify(darras, null, 2);
// Log the JSON string to the console.
console.log("JSON String \n", darrasJsonString);
//Convert the JSON string back into a JavaScript object
const darrasObj = JSON.parse(darrasJsonString);
//Log the newly created object and compare it to the original.
console.log("JSON object", darrasObj);
console.log("\n================================================");

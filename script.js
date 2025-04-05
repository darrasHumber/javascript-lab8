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
console.log("Using Destructuring Assignment");
// Part 3
//Use destructuring to extract the name and courses properties from the student object.

const { name, courses } = darras;

console.log("Name:", name);
console.log("Courses:", courses);
// Create an array of scores (e.g., [85, 92, 78, 90]).
//Destructure the first two scores from the array and log them to the console.

const arr = [85, 92, 78, 90];

const [first, second] = arr;
console.log("Array", arr);
console.log("First element", first);
console.log("Second element", second);
console.log("\n================================================");
console.log("The Spread Operator");
// Part 4
//Clone the student object using the spread operator
const darrasCopy = { ...darras };
//Add a new property (e.g., graduationYear) to the cloned object and log it
darrasCopy.graduationYear = 2021;
console.log("darrasCopy", darrasCopy);
//Use the spread operator to combine student.courses with a new array of courses.
const mergedCourses = [...darras.courses, ...darrasCopy.courses];
console.log(mergedCourses);

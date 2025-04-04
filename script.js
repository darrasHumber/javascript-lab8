//Part 1
console.log("Understanding and Creating Objects\n\n");
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

console.log("Name", darras.name);
console.log("Age", darras.age);
darras.displayInfo();

console.log("\n================================================");

// ⭐ LEVEL 1 — Classes & Objects

// Create a Person class with name and age. Create two objects from it.
class Person {
  name = "sahil";
  age = 20;
}
let details = new Person();

// Create a Rectangle class with length and width and a method to calculate area.

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  calculateArea() {
    return this.length * this.width;
  }
}
let rectangle1 = new Rectangle(20, 30);
let rectangle2 = new Rectangle(210, 300);
rectangle1.calculateArea();

// Create a Calculator class with methods: add(), sub(), multiply(), divide().

class Calculator {
  constructor(a, b) {
    this.add = function () {
      return a + b;
    };
    this.sub = function () {
      return a - b;
    };
    this.multiply = function () {
      return a * b;
    };
    this.divide = function () {
      return a / b;
    };
  }
}
let number = new Calculator(30, 50);
number.add();
number.sub();
number.multiply();
number.divide();

// Create a Student class with a marks array and a method to calculate average.
class Student {
  constructor(marks) {
    this.marks = marks;
  }
  average() {
    let total = this.marks.reduce((sum, elem) => sum + elem, 0);
    return total / this.marks.length;
  }
}
marks1 = [55, 43, 65, 45, 67, 87];
marks2 = [34, 54, 64, 75, 76, 54];
let newstudent1 = new Student(marks1);
let newstudent2 = new Student(marks2);
console.log(+newstudent1.average().toFixed(2));
console.log(+newstudent2.average().toFixed(2));

// Create a Car class with start() and stop() methods.
class Car {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  start() {
    return `${this.name} is start and price is ${this.price}`;
  }
  stop() {
    return `${this.name} is stop and price is ${this.price}`;
  }
}
let car1 = new Car("toyota", 1800000);
let car2 = new Car("audi", 20000000);
let car3 = new Car("hyundai", 1500000);

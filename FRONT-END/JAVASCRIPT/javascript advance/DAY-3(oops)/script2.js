class User {
  constructor(name, color, age, roll) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.roll = roll;
  }
}
class Admin extends User {
  constructor(name, color, age, roll, adress) {
    super(name, color, age, roll);
    this.adress = adress;
    this.roll = "admin";
  }
}
let user1 = new User("sahil", "red", 24, 220427273016);
let user2 = new User("haider", "black", 21, 220427273023);
console.log(user1);
let admin1 = new Admin("mohammed", "black", 21, 220427273023, "taltala");
console.log(admin1);

let obj = {
  name: "sahil",
  roll: 22042723016,
  class: "bca",
};
function Abc(a, b, c) {
  console.log(this);
  console.log(a);
  console.log(b);
}
let a = Abc.bind(obj, [1, 2, 3], [2, 32, 342, 34, 34]);
a();

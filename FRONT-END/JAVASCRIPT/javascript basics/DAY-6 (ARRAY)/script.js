let arr = [10, 20, 30];
let newarr = arr.forEach((val, index,a,b) => {
  console.log(a,b,index, val);
});
console.log(newarr);

let h1 = document.querySelector("h1");
let inc = document.querySelector("#increment");
let dec = document.querySelector("#decrement");
let count = 0;
inc.addEventListener("click", () => {
  if (count < 20) {
    count++;
    h1.innerHTML = count;
  }
});
dec.addEventListener("click", () => {
  if (count > 0) {
    count--;
    h1.innerHTML = count;
  }
});

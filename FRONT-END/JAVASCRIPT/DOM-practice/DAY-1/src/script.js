let h1 = document.querySelector("h1");
let win = window;
win.addEventListener("keypress", (elem) => {
  if (elem.key === " ") h1.textContent = "spc";
  else h1.textContent = elem.key;
  console.log(elem.key);
});

let light = document.querySelector("#box");
let btn = document.querySelector("button");
let flag = 0;
btn.addEventListener("click", function () {
  if (flag == 0) {
    light.style.backgroundColor = "yellow";
    btn.textContent="off"
    flag = 1;
  }
  else {
    light.style.backgroundColor = "transparent";
    btn.textContent="onn"
    flag=0

  }
});

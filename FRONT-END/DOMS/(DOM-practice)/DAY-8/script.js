let btn = document.querySelector("button");
let p = document.querySelector("p");
let flag = 0;
btn.addEventListener("click", () => {
  if (flag == 0) {
    p.innerHTML = "friends";
    p.style.color = "green";
    btn.innerHTML = "remove";
    flag = 1;
  } else {
    p.innerHTML = "stranger";
    p.style.color = "red";
    btn.innerHTML = "add friends";
    flag = 0;
  }
});

let main = document.querySelector("main");
let box = document.querySelector(".box");
main.addEventListener("mousemove", (dets) => {
  box.style.left = dets.clientX + "px";
  box.style.top = dets.clientY + "px";
  box.style.transition="all linear 0.1s"
});

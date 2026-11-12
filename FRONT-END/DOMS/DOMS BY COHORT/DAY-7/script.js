let body = document.body;
let cursor = document.getElementById("cursor");
body.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});
let btn = document.querySelector("button");
btn.addEventListener("click", function () {
  console.log("click");
});

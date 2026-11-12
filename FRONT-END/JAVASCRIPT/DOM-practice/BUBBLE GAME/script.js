let pbtm = document.querySelector(".pbtm");
let time = document.querySelector("#time");
let score = document.querySelector("#score");
let hit = document.querySelector("#hit");
let btn = document.createElement("button");
btn.textContent = "reset";
let settime = 0;
let timeval = 60;
let scoreval = 0;
let hitval = 0;

function hitfn() {
  hitval = Math.floor(Math.random() * 10);
  hit.innerHTML = hitval;
}
function scorerfn() {
  scoreval = scoreval + 10;
  score.innerHTML = scoreval;
}

function timerfn() {
  timeval = 60;
  time.textContent = timeval;
  settime = setInterval(() => {
    if (timeval > 0) {
      timeval--;
      time.innerHTML = timeval;
    } else {
      gameOver();
    }
  }, 1000);
}
function bubblefn() {
  let clutter = "";
  for (let i = 1; i <= 162; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }
  pbtm.innerHTML = clutter;
}
function gameOver() {
  pbtm.innerHTML = "<h1>game over</h1>";
  pbtm.appendChild(btn);
}
pbtm.addEventListener("click", (elem) => {
  let click = Number(elem.target.textContent);
  if (click === hitval) {
    scorerfn();
    hitfn();
    bubblefn();
  } else if (!isNaN(click)) {
    clearInterval(settime);
    gameOver();
  }
});
btn.addEventListener("click", () => {
  scoreval = 0;
  score.textContent = 0;

  bubblefn();
  hitfn();
  timerfn();
});
bubblefn();
timerfn();
hitfn();

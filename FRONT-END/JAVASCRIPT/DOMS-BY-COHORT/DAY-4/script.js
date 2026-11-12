let btn = document.querySelector("#button");
let progress = document.querySelector("#progress");
let h2 = document.querySelector("h2");
let percent = document.querySelector("#percent");
let cancel = document.querySelector("#cancel");
let complete = document.querySelector("#complete");
let p = document.querySelector("p");

let count = 0;
let time;

btn.addEventListener("click", () => {
  btn.style.display = "none";
  cancel.style.display = "initial";

  count = 0; // reset
  h2.innerHTML = "downloading...";
  let rantime = Math.floor(Math.random() * 30) + 30;
  console.log("your download time is ", rantime / 10, "second");

  time = setInterval(() => {
    count++;
    progress.style.width = `${count}%`;
    percent.innerHTML = `${count}%`;
    p.innerHTML = `your downloading time is ${rantime / 10} seconds`;
    p.style.display = "initial";

    if (count >= 100) {
      clearInterval(time);
      h2.innerHTML = "download complete";
      percent.style.display = "none";
      complete.style.display = "flex";
      cancel.style.display = "none";
      btn.style.display = "initial";
      btn.innerHTML = "downloaded";
      p.style.display = "none";
    }
  }, rantime); //
});

cancel.addEventListener("click", () => {
  clearInterval(time);
  progress.style.width = `0%`;
  percent.innerHTML = `0%`;
  h2.innerHTML = "download canceled";
  complete.style.display = "none";
  btn.style.display = "initial";
  btn.innerHTML = "retry";
  cancel.style.display = "none";
  p.innerHTML =
    " click the rety button to download again <span>song.mp3</span>";
});

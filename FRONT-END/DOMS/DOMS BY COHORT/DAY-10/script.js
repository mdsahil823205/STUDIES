let paragraph = document.querySelector("p");
let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let text = paragraph.innerText;
let iteration = 0;
function randomval() {
  let ans = text
    .split("")
    .map((char, index) => {
      if (index < iteration) return char;
      return alphabet.split("")[Math.floor(Math.random() * alphabet.length)];
    })
    .join("");
  iteration += 0.25;
  paragraph.innerText = ans;
}
paragraph.addEventListener("mouseenter", (dets) => {
  setInterval(randomval, 100);
  console.log(dets);
});

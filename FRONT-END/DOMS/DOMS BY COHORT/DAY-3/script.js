// create a ball when click on button with a random size and random position
let btn = document.querySelector("button");
let main = document.querySelector("main");

function clickBall() {
  btn.addEventListener("click", () => {
    // random
    let top = Math.random() * 90;
    let left = Math.random() * 90;
    let suaqre = Math.floor(Math.random() * 100) + 10;
    let red = Math.ceil(Math.random() * 255);
    let green = Math.ceil(Math.random() * 255);
    let blue = Math.ceil(Math.random() * 255);

    // create a div when click a button
    let box = document.createElement("div");
    box.style.height = `${suaqre}px`;
    box.style.width = `${suaqre}px`;
    box.style.backgroundColor = `rgb(${red},${green},${blue})`;
    box.style.borderRadius = "50%";
    box.style.position = "absolute";
    box.style.top = `${top}%`;
    box.style.left = `${left}%`;
    console.log(box);
    main.appendChild(box);
  });
}
function clcikname() {
  btn.addEventListener("click", () => {
    let arr = [
      "sahil is great",
      "sahil is genius",
      "sahil is best developer in tha world,sahil is G.O.A.t",
      "sahil is honest man",
      "sahil is best man in the world",
    ];

    let name = Math.floor(Math.random() * arr.length);
    let x = Math.random() * 90;
    let y = Math.random() * 90;
    let rotate = Math.floor(Math.random() * 360);
    // let red = Math.ceil(Math.random() * 255);
    // let green = Math.ceil(Math.random() * 255);
    // let blue = Math.ceil(Math.random() * 255);
    // let font_size = Math.ceil(Math.random() * 30);

    let h1 = document.createElement("h1");
    h1.innerHTML = arr[name];
    h1.style.position = "absolute";
    h1.style.left = `${x}%`;
    h1.style.top = `${y}%`;
    h1.style.rotate = `${rotate}deg`;
    // h1.style.color = `rgb(${red},${green},${blue})`;
    // h1.style.fontSize = `${font_size}px`;

    main.appendChild(h1);
  });
}
// clcikname();
clickBall();

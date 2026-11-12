let piano = document.querySelectorAll(".piano .key");

// KEYBOARD MAP — jiska matlab:
// a → key1.mp3, b → key2.mp3, ... j → key10.mp3
let keyMap = {
  "a": 0,
  "b": 1,
  "c": 2,
  "d": 3,
  "e": 4,
  "f": 5,
  "g": 6,
  "h": 7,
  "i": 8,
  "j": 9
};

// PLAY MUSIC BY INDEX
function playByIndex(index) {
  let audio = new Audio(`audio/key${index + 1}.mp3`);
  audio.play();
}

// CLICK CONTROL
piano.forEach(function (elem, index) {
  elem.addEventListener("click", () => {
    playByIndex(index);
    elem.style.backgroundColor = "rgb(151,151,161)";
    setTimeout(() => {
      elem.style.backgroundColor = "white";
    }, 100);
  });
});

// KEYBOARD CONTROL
document.addEventListener("keydown", (e) => {
  let key = e.key.toLowerCase();
  if (keyMap[key] !== undefined) {
    let index = keyMap[key];
    playByIndex(index);
    piano[index].style.backgroundColor = "rgb(151,151,161)";
  }
});

document.addEventListener("keyup", (e) => {
  let key = e.key.toLowerCase();
  if (keyMap[key] !== undefined) {
    let index = keyMap[key];
    piano[index].style.backgroundColor = "white";
  }
});

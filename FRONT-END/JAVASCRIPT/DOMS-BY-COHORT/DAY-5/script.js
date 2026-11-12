let card = document.querySelector("#card");
let heart = document.querySelector("#heart");

card.addEventListener("dblclick", () => {
  // Reset position before animation
  heart.style.top = "50%";

  // First animation (scale in)
  heart.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
  heart.style.opacity = "1";
  heart.style.transition = "all linear 0.2s";

  setTimeout(() => {
    // Move up animation
    heart.style.top = "0px";
    heart.style.transition = "all linear 0.7s";
  }, 800);

  setTimeout(() => {
    // Fade out + small rotation
    heart.style.opacity = "0";
    heart.style.transform = "translate(-50%, -50%) scale(0) rotate(30deg)";
    setTimeout(() => {
      heart.style.top = "50%";
    }, 700);
    // Reset so next dblclick works perfectly
  }, 1000);
});

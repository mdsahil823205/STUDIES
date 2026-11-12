function createtoaster(config) {
  return function (message) {
    // Create toast
    const div = document.createElement("div");
    div.textContent = message;
    div.className = `toast ${config.theme}`;

    // Get parent container
    const parent = document.querySelector(".parent");

    // Set position class
    parent.className = "parent";
    const posClass = `${config.positionY}-${config.positionX}`;
    parent.classList.add(posClass);

    // Add toast to parent
    parent.appendChild(div);

    // Remove toast with fade effect
    setTimeout(() => {
      div.style.opacity = 0;
      setTimeout(() => div.remove(), 500);
    }, config.duration * 1000);
  };
}

// Create a toaster
const toaster = createtoaster({
  positionX: "right", // left or right
  positionY: "top",   // top or bottom
  theme: "light",     // light or dark
  duration: 3,        // seconds
});

// Show some toasts
toaster("✅ Download completed");
setTimeout(() => {
  toaster("📢 This is Sahil’s pure CSS toaster!");
}, 2000);

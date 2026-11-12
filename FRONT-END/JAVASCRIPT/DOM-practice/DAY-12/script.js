let btn = document.querySelector("button");

// ========= dark or light mode with by default system theme =============
function darkorlight() {
  const darkprefences = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (darkprefences) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    btn.innerText = "Dark Mode";
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    btn.innerText = "Light Mode";
  }
}

// ========== FIX: if theme exists, apply correctly ==============
if (localStorage.getItem("theme")) {
  const savedTheme = localStorage.getItem("theme");
  document.body.classList.add(savedTheme);

  // button text update FIX
  btn.innerText = savedTheme === "dark" ? "Dark Mode" : "Light Mode";
} else {
  darkorlight();
}

// ======= dark or light mode when user click button ========
btn.addEventListener("click", () => {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
    btn.innerText = "Light Mode";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    btn.innerText = "Dark Mode";
    localStorage.setItem("theme", "dark");
  }
});

// ===== System theme change detect ========
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function () {
  // FIX: "theme" typo, tumne "tmeme" likha tha pehle
  if (!localStorage.getItem("theme")) {
    darkorlight();
  }
});

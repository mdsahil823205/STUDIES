let main = document.querySelector("main");
let form = document.querySelector("form");
let input = document.querySelectorAll("input");

form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  let container = document.querySelector(".container");
  if (!container) {
    container = document.createElement("div");
    container.classList.add("container");
    main.appendChild(container);
  }
  let card = document.createElement("div");
  card.classList.add("card");
  let profile = document.createElement("div");
  profile.classList.add("profile");
  let img = document.createElement("img");
  img.setAttribute("src", input[0].value);
  let h1 = document.createElement("h1");
  h1.innerText = input[1].value;
  let h4 = document.createElement("h4");
  h4.textContent = input[2].value;
  let p = document.createElement("p");
  p.textContent = input[3].value;
  main.appendChild(container);
  container.append(card);
  card.append(profile);
  profile.append(img);
  card.append(h1);
  card.append(h4);
  card.append(p);
  input.forEach((inp) => {
    if (inp.type !== "submit") inp.value = "";
  });
});

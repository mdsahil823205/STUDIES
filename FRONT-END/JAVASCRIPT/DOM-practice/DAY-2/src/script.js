let btn = document.querySelector("button");
let inputfile = document.querySelector("input");
let h1 = document.createElement("h1");
h1.innerText = "sahil";
h1.classList.add("h1")
document.querySelector("main").append(h1);
btn.addEventListener("click", () => {
  inputfile.click();
});
inputfile.addEventListener("change", () => {
    h1.innerHTML = inputfile?.files[0]?.name;
  if (inputfile.files[0] === undefined) h1.innerHTML = "not selected";
 
});

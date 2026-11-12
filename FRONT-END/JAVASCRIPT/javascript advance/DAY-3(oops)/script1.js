function CreatePencil(name, color, price) {
  this.name = name;
  this.color = color;
  this.price = price;
}

CreatePencil.prototype.company = "sheryian";

CreatePencil.prototype.write = function (text) {
  let h1 = document.createElement("h1");
  h1.style.color = this.color;
  h1.innerText = text;
  document.body.appendChild(h1);
};

CreatePencil.prototype.erase = function () {
  document.querySelectorAll("h1").forEach((elem) => {
    if (elem.style.color === this.color) {
      elem.remove();
    }
  });
};

let pen1 = new CreatePencil("apsara", "red", 15);
let pen2 = new CreatePencil("natraj", "black", 10);

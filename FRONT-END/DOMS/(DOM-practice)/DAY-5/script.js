let form = document.querySelector("form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let emailerror = document.querySelector("#emailError");
let passerror = document.querySelector("#passwordError");
let errormsg = document.querySelector(".error-msg");
form.addEventListener("submit", (dets) => {
  dets.preventDefault();
  emailerror.textContent = "";
  passerror.textContent = "";
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,}$/;
  let emailtest = emailRegex.test(email.value);
  let passtest = passwordRegex.test(password.value);
  let isvalid = true;
  if (!emailtest) {
    emailerror.textContent = "email is wrong";
    emailerror.style.display = "initial";
    isvalid = false;
  }
  if (!passtest) {
    passerror.textContent = "password is wrong";
    passerror.style.display = "initial";
    isvalid = false;
  }
  if (isvalid) {
    document.querySelector("#resultMsg").textContent = "you login";
  } else
    document.querySelector("#resultMsg").textContent =
      "please enter a correct email or password";
  if (dets.type !== "submit") inp.value = "";
});

let h1 = document.querySelector("h1");
async function abc() {
  let raw = await fetch("https://randomuser.me/api/");
  let real = await raw.json();
  let {
    title: titlename,
    first: firstname,
    last: lastname,
  } = real.results[0].name;
  h1.innerHTML = `Hey- ${titlename} ${firstname} ${lastname}`;
}
abc();

let arr = [
  {
    team: "CSK",
    full_name: "Chennai Super Kings",
    captain: "Dhoni",
    primary: "rgba(200, 156, 13, 1)",
    secondary: "blue",
    trophy: "5-times",
  },
  {
    team: "MI",
    full_name: "Mumbai Indians",
    captain: "Rohit Sharma",
    primary: " rgb(20, 49, 134)",
    secondary: "rgba(200, 156, 13, 1)",
    trophy: "5-times",
  },
  {
    team: "KKR",
    full_name: "Kolkata Knight Riders",
    captain: "Ajinkya Rahane",
    primary: "rgb(50, 1, 68)",
    secondary: "rgba(244, 189, 7, 1)",
    trophy: "3-times",
  },
  {
    team: "SRH",
    full_name: "Sunrises Hyderabad",
    captain: "Pat Cummins",
    primary: "rgb(185, 94, 37)",
    secondary: "rgba(5, 0, 1, 1)",
    trophy: "2-times",
  },
  {
    team: "RR",
    full_name: "Rajasthan Royals",
    captain: "Sanju Samson",
    primary: "rgb(218, 9, 176)",
    secondary: "blue",
    trophy: "1-times",
  },
  {
    team: "RCB",
    full_name: "Royal Challenger Bangaluru",
    captain: "Rajat Patidar",
    primary: "rgb(172, 21, 21)",
    secondary: "rgb(6, 3, 40)",
    trophy: "1-times",
  },
  {
    team: "PBKS",
    full_name: "Punjab Kings",
    captain: "Shreyas Iyer",
    primary: "rgba(245, 65, 80, 1)",
    secondary: "rgba(244, 189, 7, 1)",
    trophy: "0-times",
  },
  {
    team: "DC",
    full_name: "Chennai Super Kings",
    captain: "Axar Patel",
    primary: "rgba(52, 112, 216, 1)",
    secondary: "rgba(192, 21, 21, 1)",
    trophy: "0-times",
  },
];
let main = document.querySelector("main");
let h2 = document.querySelector("h2");
let h1 = document.querySelector("h1");
let btn = document.querySelector("button");
let box = document.querySelector("#box");
let h3 = document.querySelector("h3");
btn.addEventListener("click", () => {
  let ran = arr[Math.floor(Math.random() * arr.length)];
  let { trophy, captain, full_name } = ran;
  h1.innerText = ran.team;
  h3.innerHTML = `full name: ${full_name}<br> Captain: ${captain} <br> trophy: ${trophy}`;
  box.style.backgroundColor = ran.secondary;
  h2.style.display = "initial";
  main.style.backgroundColor = ran.primary;
});

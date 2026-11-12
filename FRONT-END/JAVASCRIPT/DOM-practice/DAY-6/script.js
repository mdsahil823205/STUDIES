//sabse pehle hum progress id ko select kiye
let progress = document.querySelector("#progress");

//phir maine percent id ko select kiye
let percentage = document.querySelector("#percent");
//phir maine download id ko select kiye jisme hum click kar skhe
let downloadbtn = document.querySelector("#download");
//phir h2 ko slect kiya jisme dekha skhe ki downloading......  ya phir download cancel
let h2 = document.querySelector("h2");
//phir maine ek cancel button banaya
let cancel = document.createElement("button");
//phir maine container id  ko select kiya kyu ki hum usme cancel button ko appen kar skhe
let container = document.querySelector(".container");

//phir maine ek time naam ka variable banaya jisme hum  set interval ka value rakh skhe
let time;
// phir mainne download button pe ek event lagaya jab bhi download button click ho toh set interval chle
downloadbtn.addEventListener("click", () => {
  // jaise download pe click kiye wiase hi download now button ko hata diye
  downloadbtn.style.display = "none";
  // download button ke badle hum canncel button leh aaye uske jagh
  container.append(cancel);
  //phir maine woh cancel button main cancel dhaala
  cancel.textContent = "cancel";
  // aur jo maine css main ek class banaya tha .cancel se usko isme add kar diye
  cancel.classList.add("cancel");

  // ab jaise downloading shuru hua waise hi h2 ka download now hatke downloading.... aa gaya
  h2.textContent = "downloading.......";
  //phir maine ek count naam ka variable 0 pe set kardiya
  let count = 0;
  // phir maine yaha time varaible pe set interval function lagaye hai jo ke total  second ke liye chalega
  time = setInterval(() => {
    // maine yaha keh diya agar mera count 99 se chota ya uske barabar hai toh woh aage ka code chalaiye
    if (count <= 99) {
      // aur yaha pe count ka value barte jaaiyega jab tak count 0 se 99 tak se upar na jaaiye
      count++;
      // phir maine progress ka style main jo width 0px pe set hai usko maine count ka value pe set kar diya
      // jaise ki count 1 hoga toh progress ka width 1px hoga aise hi har 5 milisecond main 1 percent width barega
      progress.style.width = `${count}%`;
      // aur maine percent ka text 0 pe set kiya hua html main jaise ki count barte rahega wiase hi percent main count ka value jaaiyega
      percentage.textContent = `${count}%`;
    }
    // agar count ka value 99 se barabar nahi hai toh hum yeh chalaiyenge jaise ki 100 hoga toh yeh sab hoga
    else {
      // h2 ka downloading..... badalke download complete likha aa jaaiyega
      h2.textContent = `Download Complete`;
      // aur jaise count 100 hoga waise cancel hatt jaaiyega remove function se
      cancel.remove();
    }
    // aur yaha pe maine time set kiya hai 5000 ka 5 second /100  har ek count 5 milisecond pe barega
  }, 5000 / 100);
});
// agar hum cancel pe click karte hai toh yeh event chalega
cancel.addEventListener("click", () => {
  // jaise hi click kiye cancel main waise hi set interval ka count jo bhi bara hai woh sab clear ho jaaiyega
  clearInterval(time);
  // cancel hone pe downloading hatke download cancel aa jaaiyega h2 main
  h2.textContent = "download cancel...";
  // aur progress bar ka width 0% pe aa jaaiyega
  progress.style.width = `0%`;
  // percent bhi 0% percent pe aa jaaiyega
  percentage.textContent = `0%`;
  // jaise cancel pe click hoga waise ki cancel hatt jaaiyega remove function se
  cancel.remove();
  // ab cancel hua hai toh download now aana chahiye toh hum download now ka display initial kar denge
  downloadbtn.style.display = "initial";
});

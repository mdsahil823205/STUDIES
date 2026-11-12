let prm = new Promise((resolve, reject) => {
    console.log("prm.........")
  setTimeout(() => {
    resolve();
  }, 2000);
});
console.log(prm);
prm.then(() => {
  console.log("sahi hai");
});
prm.catch(() => {
  console.log("galat hai ");
});

const prm1 = new Promise(function (resolve, reject) {
     console.log("prm1111111.........")
  setTimeout(() => {
    resolve();
  }, 3000);
});
prm1.then(function(){
    console.log("sahi hai ")
})
prm1.catch(()=>{
    console.log("galat hai ")
})


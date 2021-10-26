var myPromise = new Promise((Resolve,Reject)=> {
    var x = 50;
    var y = 10;
    if (x%y == 0) {
      Resolve("divisibel by");
    } else {
      Reject("Not divisibel by");
    }
});
myPromise.then((result)=>{
    console.log(result)
})
.catch((err) => {
    console.error(err)
})

var myPromise = new Promise((Resolve,Reject)=> {
    var readlineSync=require("readline-sync");
    var x=readlineSync.questionInt("Enter the number")
    var y=readlineSync.questionInt("Enter the number")
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
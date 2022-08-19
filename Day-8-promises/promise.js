// let res = new Promise((resolve,reject)=>{
//   let a = 10;
//  if (a===10){
//   resolve("promise resolved")
// ;}
//   else{
//     reject("promise rejected");
//   }
// });
// console.log(res);


  let promise = new Promise((resolve, reject) => {
      let a = 10;
      if(a===10){
      resolve("Hii Mintu Here");
    }
    else{
          reject("promise rejected");
       }
  });
  console.log(promise);
  // let newpromise = new Promise(function(resolve, reject) {
  //   resolve("done");
  
  //   reject(new Error("…")); // ignored
  //   setTimeout(() => resolve("…")); // ignored
  // });

  // console.log(newpromise);

  
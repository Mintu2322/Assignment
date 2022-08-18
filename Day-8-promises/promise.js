let myPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
         resolve("Hello Mintu"); 
        }, 3000);
  });
  console.log(myPromise);


  let promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => 
    reject(new Error("This is mintu nagar")
    ), 1000);
  });
  console.log(promise);

  let newpromise = new Promise(function(resolve, reject) {
    resolve("done");
  
    reject(new Error("…")); // ignored
    setTimeout(() => resolve("…")); // ignored
  });

  console.log(newpromise);

  

const p = new Promise((resolve,reject) => {
    // resolve(result);
   setTimeout(()=>{
    // resolve(1)
    reject(new Error('message'));
   }, 2000);
   
})


// we use then method fo succesfull opation.
p.then(result => console.log('result', result));
//if there is wrong we use.
p.catch(err => console.log('Error', err.message));
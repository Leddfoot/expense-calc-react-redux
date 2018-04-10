const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
  //   resolve({
  //     name: 'vader',
  //     age: 34
  // })
  reject('something went wrong');
}, 1500);
});

console.log('bfore');

promise.then ((data) => {
  console.log(data);
}).catch((error) => {
  console.log('error', error);
});

console.log('after');

// Promise.all() is a method that takes an iterable of elements (usually Promises) as an input, and returns a single Promise that resolves to an array of the results of the input promises. This returned promise will resolve when all of the input's promises have resolved, or if the input iterable contains no promises. It rejects immediately upon any of the input promises rejecting or non-promises throwing an error, and will reject with this first rejection message / error.

// Resolved example.
const p0 = Promise.resolve(3);
const p1 = 42;
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 100);
});

// await p2 = 'foo'

await promiseAll([p0, p1, p2]); // [3, 42, 'foo']

// Rejection example.
const p0 = Promise.resolve(30);
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('An error occurred!');
  }, 100);
});

try {
  await promiseAll([p0, p1]);
} catch (err) {
  console.log(err); // 'An error occurred!'
}

// useEffect(() => {
//     const fetchApi = async() => {
//         const response = await fetch(url);
//         const data = response.json();
//         setState(data);
//     }
//     fetchApi();
// }, [])

const promiseAll = (arr) => {
    return new Promise((resolve, reject) => {
        let res = [];
        let count = 0;
        // loop thru the arr
        for (let i = 0; i < arr.length; i++) {
            arr[i].then(data => { // 3
                res[i] = data;
                count++;
                if (count === arr.length) {
                    resolve(res);
                }
                // check if all the values are resolved and in the res array
                // resolve(res);
            })
            // .then()
            // .then()
            .catch (error => {
                reject(error);
            })
        }
        
        return res;
    });
}
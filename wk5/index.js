const myPromiseFunction = (number) => {
    const myPromise = new Promise((resolve, reject) => {
        if (number > 0) {
            resolve("This is a positive number");
        }
        else {
            reject("Try to enter a positive number");
        }
    })

    return myPromise;
}

const promiseObject = myPromiseFunction(-1);
promiseObject.then((result) => {
    console.log(result);
})
.catch((result) => {
    console.log(`Error says: ${result}`)
})
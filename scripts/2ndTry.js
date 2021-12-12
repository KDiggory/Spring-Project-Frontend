"use strict";
const thePromise = new Promise((resolve, reject) => {
    const rand = Math.random();

    console.log("Start of promise");
    setTimeout(() => {
        if (rand > 0.5) {
            resolve("Hurrah!");
        } else {
            reject("Sad face!");
        }
    }, 5_000);

    console.log("End of promise");
});

const onSuccess = res => console.log("Success:", res);
const onFailure = err => console.error("Failure:", err);

thePromise.then(onSuccess).catch(onFailure);

// add listeners to buttons
const buttons = document.querySelectorAll(".button");
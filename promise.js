var promise = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    if (success) {
        resolve("Data fetched successfully!");
    } else {
        reject("Failed to fetch data.");
    }
});
promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});

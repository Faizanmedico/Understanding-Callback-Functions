// Sultan Ahmed   Understanding Callback Functions
function performAsyncTask(callback) {
    setTimeout(() => {
        const result = "Task completed successfully!";
        callback(result);
    }, 1000);
}
function handleCallback(result) {
    console.log("Callback received:", result);
}
// Utilizing the callback
performAsyncTask(handleCallback);
export {};

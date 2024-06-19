// Sultan Ahmed   Understanding Callback Functions

type CallbackFunction = (result: string) => void;


function performAsyncTask(callback: CallbackFunction) {
    setTimeout(() => {
        const result = "Task completed successfully!";
        callback(result);
    }, 1000);
}
function handleCallback(result: string) {
    console.log("Callback received:", result);
}
// Utilizing the callback
performAsyncTask(handleCallback);

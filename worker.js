// worker.js
// Background timer ticker to prevent throttling in main thread
self.onmessage = function (e) {
    if (e.data === 'start') {
        runTimer();
    }
};

function runTimer() {
    setInterval(() => {
        postMessage('tick');
    }, 50); // Tick every 50ms
}

runTimer();

function task1(callback) {
    console.log("Async Task 1 started");
    setTimeout(() => {
        console.log("Async Task 1 completed");
        callback(null, 'Result from Task 1');
    }, 1000);
}

function task2() {
    console.log("Async Task 2 started");
    setTimeout(() => {
        console.log("Async Task 2 completed");
        callback(null, 'Result from Task 2');
    }, 1000);
}

task1(task2);

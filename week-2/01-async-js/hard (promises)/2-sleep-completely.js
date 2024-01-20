/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  const startTime = Date.now();
  return new Promise((resolve) => {
    function checkTime() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;

      if (elapsedTime >= milliseconds) {
        resolve();
      } else {
        // Continue checking time recursively
        setImmediate(checkTime);
      }
    }

    // Start the initial check
    checkTime();
  });
}

module.exports = sleep;

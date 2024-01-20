function timer(timeInSeconds) {
  let seconds = timeInSeconds;

  function updateTimer() {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);

    let days = Math.floor(seconds / 86400);
    let hours = Math.floor((seconds % 86400) / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let sec = seconds % 60;

    process.stdout.write(
      `${String(days).padStart(2, "0")}:${String(hours).padStart(
        2,
        "0"
      )}:${String(minutes).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
    );

    if (seconds >= 0) {
      setTimeout(updateTimer, 1000);
    }

    seconds--;
  }

  updateTimer();
}

timer(86410);

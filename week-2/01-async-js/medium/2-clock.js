function getTime() {
  let hours = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();
  const getAmPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const time = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}:${String(getAmPm)}`;
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(time);
}

setInterval(getTime, 1000);

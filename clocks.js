// Get the clock elements
const tokyoClock = document.getElementById('tokyo-clock');
const londonClock = document.getElementById('london-clock');
const newYorkClock = document.getElementById('new-york-clock');

// Set the clock hands
function setClockHands(clock, hours, minutes, seconds) {
  const hourHand = clock.querySelector('.hour-hand');
  const minuteHand = clock.querySelector('.minute-hand');
  const secondHand = clock.querySelector('.second-hand');

  hourHand.style.transform = `rotate(${hours * 30}deg)`;
  minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
  secondHand.style.transform = `rotate(${seconds * 6}deg)`;
}

// Update the clock every second
setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  setClockHands(tokyoClock, hours, minutes, seconds);
  setClockHands(londonClock, hours, minutes, seconds);
  setClockHands(newYorkClock, hours, minutes, seconds);
}, 1000);
